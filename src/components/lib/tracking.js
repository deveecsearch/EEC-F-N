// Page view tracking -> EEC CMS backend (POST /api/analytics/tracking)
// The backend cannot read our cookies cross-domain, so visitor/session IDs
// are kept in web storage and sent in the body (only with consent).

const API_BASE = process.env.NEXT_PUBLIC_HUB_API_URL;
const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID;

const VISITOR_KEY = "eec_visitor_id";
const SESSION_KEY = "eec_session_id";
const SESSION_LAST_KEY = "eec_session_last";
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;

// Must match src/components/CookieConsent.js
const CONSENT_KEY = "cookie_consent";
const CONSENT_ACCEPT = "accepted";

// Skip a repeat of the same path within this window (React StrictMode double effect)
const DEDUPE_MS = 1000;
let lastSent = { path: null, at: 0 };

function uuid() {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {}
  // Fallback for non-secure contexts (e.g. http on LAN IP)
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function storageGet(storage, key) {
  try {
    return window[storage].getItem(key);
  } catch {
    return null;
  }
}

function storageSet(storage, key, value) {
  try {
    window[storage].setItem(key, value);
  } catch {}
}

export function hasTrackingConsent() {
  return storageGet("localStorage", CONSENT_KEY) === CONSENT_ACCEPT;
}

function getVisitorId() {
  let id = storageGet("localStorage", VISITOR_KEY);
  if (!id) {
    id = "v_" + uuid();
    storageSet("localStorage", VISITOR_KEY, id);
  }
  return id;
}

function getSessionId() {
  const now = Date.now();
  let id = storageGet("sessionStorage", SESSION_KEY);
  const last = Number(storageGet("sessionStorage", SESSION_LAST_KEY)) || 0;

  if (!id || now - last > SESSION_TIMEOUT_MS) {
    id = uuid();
    storageSet("sessionStorage", SESSION_KEY, id);
  }
  storageSet("sessionStorage", SESSION_LAST_KEY, String(now));
  return id;
}

export function trackPageView(metadata = {}) {
  try {
    if (typeof window === "undefined" || !API_BASE || !COMPANY_ID) return;

    const path = window.location.pathname;
    const now = Date.now();
    if (lastSent.path === path && now - lastSent.at < DEDUPE_MS) return;
    lastSent = { path, at: now };

    const consent = hasTrackingConsent();
    const body = {
      companyId: COMPANY_ID,
      path,
      pageTitle: document.title,
      fullUrl: window.location.href,
      referrer: document.referrer,
      eventType: "PAGE_VIEW",
      hasConsent: consent,
      metadata,
    };

    if (consent) {
      body.sessionId = getSessionId();
      body.visitorId = getVisitorId();
      body.screen = `${window.screen.width}x${window.screen.height}`;
    }

    // Fire-and-forget. No credentials: the API uses Access-Control-Allow-Origin: *
    fetch(`${API_BASE}/api/analytics/tracking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    })
      .then((res) => {
        if (!res.ok) console.warn("[tracking] failed:", res.status);
      })
      .catch((err) => console.warn("[tracking] error:", err));
  } catch (err) {
    console.warn("[tracking] error:", err);
  }
}
