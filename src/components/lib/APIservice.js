const API_BASE = process.env.NEXT_PUBLIC_HUB_API_URL;
const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID;

export async function getCompanyInfo() {
  const res = await fetch(`${API_BASE}/api/company/info?id=${COMPANY_ID}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getCompanyPages() {
  const res = await fetch(`${API_BASE}/api/company/pages?id=${COMPANY_ID}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getCompanySections() {
  const res = await fetch(`${API_BASE}/api/company/sections`, {
    cache: "no-store",
  });
  return res.json();
}
