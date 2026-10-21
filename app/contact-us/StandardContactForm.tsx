"use client";

import { useEffect, useState, type FormEvent } from "react";

type Props = { endpoint?: string; encoding?: "json" | "form" };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };

const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const countryCodes = [
  ["US", "+1"], ["CA", "+1"], ["ID", "+62"], ["PH", "+63"], ["GB", "+44"],
  ["AU", "+61"], ["NZ", "+64"], ["SG", "+65"], ["IN", "+91"], ["AE", "+971"],
  ["MX", "+52"], ["BR", "+55"], ["ZA", "+27"], ["DE", "+49"], ["FR", "+33"],
];

export default function StandardContactForm({ endpoint = "/api/submit-lead", encoding = "json" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = `${countryCode} ${String(data.get("phoneLocal") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") || ""), businessEmail: String(data.get("email") || ""), phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("positions") || ""), positionsToFill: String(data.get("positions") || ""),
      referral: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), message: String(data.get("message") || ""),
      source: "contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request = encoding === "form"
        ? { method: "POST", body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      if (!response.ok) throw new Error("Lead endpoint rejected the request");
      try { (window as TrackerWindow).acrTracker?.trackLead?.(payload); } catch {}
      window.location.assign("/thank-you");
    } catch {
      try {
        const tracker = (window as TrackerWindow).acrTracker?.trackLead;
        if (tracker) {
          tracker(payload);
          window.location.assign("/thank-you");
          return;
        }
      } catch {}
      setError("We could not submit your request. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <h2>Tell us about the staffing work lane you need covered.</h2>
      <form action={endpoint} method="post" onSubmit={submit} id="contactPageForm">
        <input className="sa-hp" name="website_url" type="hidden" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" />
        <div className="sa-grid">
          <label>First Name *<input name="firstName" required autoComplete="given-name" /></label>
          <label>Last Name *<input name="lastName" required autoComplete="family-name" /></label>
        </div>
        <label>Business Email *<input name="email" type="email" required autoComplete="email" /><small>Not Accepting Personal Email</small></label>
        <label>Phone Number *<span className="sa-phone"><select aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([flag, code], i) => <option value={code} key={`${code}-${i}`}>{flag} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number" /></span></label>
        <div className="sa-grid">
          <label>Company Name *<input name="companyName" required autoComplete="organization" /></label>
          <label>Website / URL<input name="website" placeholder="example.com" autoComplete="url" /></label>
        </div>
        <div className="sa-grid">
          <label>Company Size *<select name="companySize" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
          <label>How Many Positions to Fill *<select name="positions" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
        <label>How Did You Hear About Us? *<select name="referral" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
        {referral === "Other" ? <label>Please Specify *<input name="referralSpecify" required /></label> : null}
        <label>Message<textarea name="message" rows={4} /></label>
        {error ? <p className="sa-error" role="alert">{error}</p> : null}
        <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Book a Free Consultation"}</button>
      </form>
      <style jsx>{`
        .sa-form-card{width:100%;margin:0 auto;background:#f8f4e9;border:1px solid #d6c6a8;border-radius:2px;padding:18px 22px 20px;box-shadow:10px 10px 0 rgba(0,0,0,.18);color:#243730;text-align:left}
        h2{margin:0 0 12px;color:#102c26;font-size:20px;line-height:1.2;font-weight:900;letter-spacing:-.02em;max-width:620px}
        form{display:flex;flex-direction:column;gap:9px}.sa-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        label{display:flex;flex-direction:column;gap:3px;font-size:12px;line-height:1.2;font-weight:800;color:#344b43}
        input,select,textarea{box-sizing:border-box;width:100%;border:1px solid #9eac9f;border-radius:0;background:#fff;color:#17251f;font:inherit;font-size:14px;padding:8px 10px;outline:none;min-height:38px}
        input:focus,select:focus,textarea:focus{border-color:#ef6c35;box-shadow:0 0 0 3px rgba(239,108,53,.2)}
        small{margin-top:0;color:#6b776f;font-size:10px;font-weight:500}.sa-phone{display:grid;grid-template-columns:112px 1fr;border:1px solid #9eac9f;border-radius:0;overflow:hidden}.sa-phone:focus-within{border-color:#ef6c35;box-shadow:0 0 0 3px rgba(239,108,53,.2)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #c8d0c9;padding-right:4px}.sa-phone input{min-width:0}
        textarea{resize:vertical;min-height:48px;max-height:90px}button{width:100%;border:0;border-radius:0;background:#ef6c35;color:#17251f;padding:11px 18px;font-size:16px;font-weight:900;cursor:pointer;box-shadow:4px 4px 0 #173e34}
        button:hover{background:#f6c64a}button:disabled{cursor:wait;opacity:.65}.sa-error{margin:0;color:#9a2518;font-size:12px}.sa-hp{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}
        @media(max-width:700px){.sa-form-card{padding:20px 16px}h2{font-size:20px}.sa-grid{grid-template-columns:1fr;gap:9px}.sa-phone{grid-template-columns:105px 1fr}button{font-size:16px}}
      `}</style>
    </div>
  );
}
