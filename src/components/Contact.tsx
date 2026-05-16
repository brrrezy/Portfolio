"use client";

import React, { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Send, MapPin, Mail, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      // Note: In a production environment, these should be environment variables
      // NEXT_PUBLIC_EMAILJS_SERVICE_ID, etc.
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_default"; 
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_default";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_default";

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: personalInfo.name,
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const err = await response.text();
        throw new Error(err || "Failed to send message");
      }
    } catch (err: any) {
      console.error("Email Error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="contact-grid">
      {/* Left: Info */}
      <div className="contact-info-col">
        <h3 className="sub-header">
          <div><span>D</span>ON&apos;T BE SHY !</div>
        </h3>
        <div className="contact-info-list">
          <ContactItem icon={<MapPin size={16} />} label="Location" value={personalInfo.location} />
          <ContactItem icon={<Mail size={16} />} label="Email" value={personalInfo.email} />
          <ContactItem icon={<Phone size={16} />} label="Phone" value={personalInfo.phone} />
        </div>
      </div>

      {/* Right: Form */}
      <div className="contact-form-col">
        <h3 className="sub-header">
          <div><span>M</span>ESSAGE ME</div>
        </h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="form-input" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="form-input" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <textarea 
            placeholder="Your Message" 
            rows={5} 
            className="form-input" 
            style={{ resize: 'none' }} 
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          
          <button 
            type="submit" 
            className={`form-submit ${status}`}
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? (
              <><Loader2 size={13} className="animate-spin" /> Sending...</>
            ) : status === "success" ? (
              <><CheckCircle2 size={13} /> Message Sent!</>
            ) : status === "error" ? (
              <><AlertCircle size={13} /> Error</>
            ) : (
              <><Send size={13} /> Send Message</>
            )}
          </button>

          {status === "error" && (
            <p className="form-error-msg">{errorMessage}</p>
          )}
        </form>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
        }
        .form-submit {
          transition: all 0.3s ease;
        }
        .form-submit.success {
          background: #00c853 !important;
          color: white !important;
        }
        .form-submit.error {
          background: #ff1744 !important;
          color: white !important;
        }
        .form-error-msg {
          font-size: 12px;
          color: #ff1744;
          margin-top: 5px;
          font-family: var(--font-body);
        }
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{
        width: '40px', height: '40px',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(15,15,15,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#FFD600',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#666', fontWeight: 700 }}>{label}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: '#ccc' }}>{value}</p>
      </div>
    </div>
  );
}
