'use client';

import { useState } from "react";
import { Phone, Mail, Facebook, MessageCircle, X } from "lucide-react";

export default function FloatingChat() {
    const [open, setOpen] = useState(false);
    const toggleChat = () => setOpen(!open);

    const contact = {
        people: [
            {
                name: "คุณณัชชา",
                phone: "098-285-8746",
                email: "natcha.p2558.nn@gmail.com",
            },
            {
                name: "Frank Berghaeuser",
                phone: "089-488-5798",
                email: "f.berghaeuser@gmail.com",
            },
        ],
        facebook: "https://www.facebook.com/profile.php?id=61562620145591#"
    };

    const ICON_COLOR = "#faac1c"; // น้ำเงิน

    return (
        <>
            {/* ปุ่มแชท */}
            <button
                onClick={toggleChat}
                className="fixed bottom-5 right-5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-50 transition-colors"
            >
                {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
            </button>

            {/* แชทบ็อก */}
            {open && (
                <div className="fixed bottom-28 right-5 w-80 h-auto bg-white border border-gray-300 rounded-lg shadow-lg z-40 p-6 flex flex-col transform transition-all duration-300">
                    <h4 className="font-bold text-lg mb-2 text-black-500">Contact Us</h4>
                    <div className="flex flex-col gap-2">
                        {/* เบอร์ทั้งหมด */}
                        {contact.people.map((person, idx) => (
                            <p key={`phone-${idx}`} className="flex items-center gap-2 text-[#3b82f6] hover:text-blue-600">
                                <a href={`tel:${person.phone}`} className="flex items-center gap-2">
                                    <Phone className="w-5 h-5" color={ICON_COLOR} />
                                    <span>{person.phone}</span>
                                </a>
                            </p>

                        ))}

                        {/* อีเมลทั้งหมด */}
                        {contact.people.map((person, idx) => (
                            <p
                                key={`email-${idx}`}
                                className="flex items-center gap-2 text-[#3b82f6] hover:text-blue-600"
                            >
                                <a href={`mailto:${person.email}`} className="flex items-center gap-2">
                                    <Mail className="w-5 h-5" color={ICON_COLOR} />
                                    <span>{person.email}</span>
                                </a>
                            </p>

                        ))}
                        {/* Facebook */}
                        <p className="flex items-center gap-2 text-[#3b82f6] hover:text-blue-600">
                            <a
                                href={contact.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Facebook className="w-5 h-5" color={ICON_COLOR} />
                                <span>F&amp;N Techno co.,ltd.</span>
                            </a>
                        </p>
                    </div>
                </div>

            )}
        </>
    );
}
