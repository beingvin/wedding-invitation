import { useState, useEffect, useRef } from "react";
import qrBg from './assets/upi-qr.jpeg'; 
const GOLD = "#C5A15A";
const DARK_GOLD = "#A47B2D";
const IVORY = "#F8F3EB";
const CREAM = "#F3ECE2";
const CARD_BG = "#FFFDF8";
const SAGE = "#9CA58B";
const OLIVE = "#6F7C67";
const TEXT_PRIMARY = "#4E453C";
const TEXT_MUTED = "#B8B2A9";
const CHAMP = "#E6D3B1";

// Botanical SVG corner ornament
function FloralCorner({ flip = false, size = 180, style = {} }) {
  const t = flip ? `scale(-1,1) translate(-${size},0)` : "";
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" style={{ display: "block", ...style }}>
      <g transform={t}>
        {/* Large cream rose */}
        <ellipse cx="38" cy="38" rx="28" ry="24" fill="#F6F2EC" opacity="0.92" />
        <ellipse cx="38" cy="38" rx="20" ry="16" fill="#EDE8DF" opacity="0.85" />
        <ellipse cx="38" cy="38" rx="12" ry="9" fill="#E0D9CE" opacity="0.9" />
        <ellipse cx="38" cy="40" rx="6" ry="5" fill={CHAMP} opacity="0.7" />
        {/* Petals */}
        <ellipse cx="14" cy="30" rx="11" ry="7" fill="#F6F2EC" opacity="0.75" transform="rotate(-20,14,30)" />
        <ellipse cx="20" cy="12" rx="10" ry="7" fill="#F6F2EC" opacity="0.7" transform="rotate(20,20,12)" />
        <ellipse cx="58" cy="16" rx="9" ry="6" fill="#F0EBE1" opacity="0.7" transform="rotate(-15,58,16)" />
        <ellipse cx="62" cy="44" rx="10" ry="6" fill="#EDE8DF" opacity="0.65" transform="rotate(30,62,44)" />
        {/* Small white flowers */}
        <circle cx="85" cy="22" r="10" fill="#F9F6F0" opacity="0.8" />
        <circle cx="85" cy="22" r="6" fill="#F2EDE4" opacity="0.85" />
        <circle cx="85" cy="22" r="3" fill={CHAMP} opacity="0.7" />
        <circle cx="110" cy="45" r="8" fill="#F9F6F0" opacity="0.75" />
        <circle cx="110" cy="45" r="4.5" fill="#EDE8DF" opacity="0.8" />
        <circle cx="110" cy="45" r="2.5" fill={CHAMP} opacity="0.65" />
        {/* Tiny bud */}
        <ellipse cx="140" cy="28" rx="6" ry="8" fill="#F2EDE4" opacity="0.7" />
        <ellipse cx="140" cy="28" rx="3.5" ry="5" fill={CHAMP} opacity="0.65" />
        {/* Gold stems */}
        <path d="M38,60 Q60,90 90,130 Q110,155 130,172" stroke={GOLD} strokeWidth="1.2" fill="none" opacity="0.55" />
        <path d="M60,38 Q90,60 120,90 Q148,118 168,145" stroke={GOLD} strokeWidth="1" fill="none" opacity="0.45" />
        <path d="M85,22 Q100,50 115,80" stroke={GOLD} strokeWidth="0.9" fill="none" opacity="0.4" />
        {/* Sage leaves */}
        <ellipse cx="70" cy="72" rx="14" ry="7" fill={SAGE} opacity="0.55" transform="rotate(35,70,72)" />
        <ellipse cx="95" cy="100" rx="16" ry="7" fill={OLIVE} opacity="0.5" transform="rotate(45,95,100)" />
        <ellipse cx="118" cy="118" rx="14" ry="6" fill={SAGE} opacity="0.48" transform="rotate(40,118,118)" />
        <ellipse cx="55" cy="95" rx="12" ry="5" fill={OLIVE} opacity="0.45" transform="rotate(55,55,95)" />
        <ellipse cx="138" cy="95" rx="12" ry="5" fill={SAGE} opacity="0.42" transform="rotate(25,138,95)" />
        {/* Olive branch */}
        <path d="M45,110 Q80,140 140,165" stroke={OLIVE} strokeWidth="1.2" fill="none" opacity="0.45" />
        <ellipse cx="68" cy="127" rx="8" ry="4" fill={OLIVE} opacity="0.4" transform="rotate(38,68,127)" />
        <ellipse cx="100" cy="148" rx="9" ry="4" fill={OLIVE} opacity="0.4" transform="rotate(42,100,148)" />
        {/* Gold sparkles */}
        <circle cx="130" cy="60" r="1.5" fill={GOLD} opacity="0.6" />
        <circle cx="155" cy="85" r="1" fill={GOLD} opacity="0.5" />
        <circle cx="72" cy="50" r="1.2" fill={GOLD} opacity="0.55" />
        <circle cx="160" cy="110" r="1" fill={GOLD} opacity="0.4" />
      </g>
    </svg>
  );
}

function GoldDivider({ style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", ...style }}>
      <div style={{ width: 60, height: 0.5, background: `linear-gradient(to right, transparent, ${GOLD})` }} />
      <svg width="18" height="18" viewBox="0 0 18 18">
        <path d="M9 1 L10.5 7 L16 7 L11.5 10.5 L13 16 L9 13 L5 16 L6.5 10.5 L2 7 L7.5 7 Z" fill={GOLD} opacity="0.85" />
      </svg>
      <div style={{ width: 60, height: 0.5, background: `linear-gradient(to left, transparent, ${GOLD})` }} />
    </div>
  );
}

function CountdownBox({ value, label }) {
  return (
    <div style={{
      background: CARD_BG,
      border: `1px solid ${GOLD}`,
      borderRadius: 16,
      padding: "24px 20px 18px",
      minWidth: 80,
      textAlign: "center",
      boxShadow: `0 2px 20px rgba(197,161,90,0.10)`,
      position: "relative",
    }}>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 38, fontWeight: 400, color: GOLD, letterSpacing: 2, lineHeight: 1 }}>{String(value).padStart(2, "0")}</div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 12, color: TEXT_MUTED, marginTop: 8, letterSpacing: 3, textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

function useCountdown(target) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const update = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
}

// Envelope opening animation
function EnvelopeScreen({ onOpen }) {
  const [phase, setPhase] = useState("idle"); // idle → cracking → open
  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("cracking");
    setTimeout(() => setPhase("open"), 900);
    setTimeout(() => onOpen(), 1800);
  };
  return (
    <div onClick={handleClick} style={{
      position: "fixed", inset: 0, background: IVORY,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      cursor: "pointer", zIndex: 100,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
    }}>
      {/* Envelope SVG */}
      <div style={{
        position: "relative",
        transform: phase === "open" ? "translateY(-120px) scale(1.08)" : "translateY(0) scale(1)",
        opacity: phase === "open" ? 0 : 1,
        transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <svg width="320" height="220" viewBox="0 0 320 220">
          {/* Envelope body */}
          <rect x="10" y="80" width="300" height="130" rx="8" fill={CREAM} stroke={GOLD} strokeWidth="1.2" />
          {/* Envelope flap */}
          <path d="M10,80 L160,160 L310,80" fill={CHAMP} stroke={GOLD} strokeWidth="1.2" />
          {/* Left triangle */}
          <path d="M10,80 L10,210 L130,145Z" fill="#EDE7DA" opacity="0.8" />
          {/* Right triangle */}
          <path d="M310,80 L310,210 L190,145Z" fill="#EDE7DA" opacity="0.8" />
          {/* Wax seal */}
          <circle cx="160" cy="155" r={phase === "cracking" ? 0 : 22} fill={GOLD} style={{ transition: "r 0.5s ease" }} />
          <circle cx="160" cy="155" r={phase === "cracking" ? 0 : 16} fill={DARK_GOLD} style={{ transition: "r 0.5s ease 0.1s" }} />
          <text x="160" y="161" textAnchor="middle" fill={IVORY} fontSize="13" fontFamily="'Cinzel', serif" fontWeight="700" style={{ transition: "opacity 0.3s", opacity: phase === "cracking" ? 0 : 1 }}>RV</text>
          {/* Monogram R & V letters */}
          <text x="80" y="180" textAnchor="middle" fill={GOLD} fontSize="11" fontFamily="'Cormorant Garamond', serif" opacity="0.4" fontStyle="italic">Ramling</text>
          <text x="240" y="180" textAnchor="middle" fill={GOLD} fontSize="11" fontFamily="'Cormorant Garamond', serif" opacity="0.4" fontStyle="italic">Veda</text>
        </svg>
      </div>
      <div style={{ marginTop: 28, textAlign: "center" }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: 4, color: GOLD, textTransform: "uppercase", marginBottom: 8 }}>
          {phase === "idle" ? "Click to Open" : phase === "cracking" ? "Opening…" : ""}
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: TEXT_MUTED, letterSpacing: 1 }}>
          Tap the seal to reveal your invitation
        </div>
      </div>
      {/* Floating petals */}
      <FloatingPetals />
    </div>
  );
}

function FloatingPetals() {
  const petals = Array.from({ length: 8 }, (_, i) => ({
    id: i, x: 5 + i * 12, delay: i * 1.2, dur: 6 + i * 0.7, size: 6 + (i % 3) * 3,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {petals.map(p => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.x}%`, top: "-20px",
          width: p.size, height: p.size * 1.4,
          borderRadius: "50% 50% 50% 0",
          background: `rgba(197,161,90,0.15)`,
          animation: `petalFall ${p.dur}s ${p.delay}s infinite linear`,
        }} />
      ))}
      <style>{`@keyframes petalFall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0} 10%{opacity:1} 90%{opacity:0.3} 100%{transform:translateY(100vh) rotate(360deg);opacity:0} }`}</style>
    </div>
  );
}

// Loading monogram
function LoadingScreen({ onDone }) {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1800);
    const t2 = setTimeout(() => onDone(), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <div style={{
      position: "fixed", inset: 0, background: IVORY, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200,
      opacity: fade ? 0 : 1, transition: "opacity 0.6s ease", pointerEvents: fade ? "none" : "all",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Cinzel', serif", fontSize: 72, color: GOLD, letterSpacing: 12,
          animation: "goldPulse 1.5s ease-in-out infinite alternate",
          textShadow: `0 0 30px rgba(197,161,90,0.3)`,
        }}>RV</div>
        <div style={{ width: 80, height: 1, background: GOLD, margin: "16px auto 12px", opacity: 0.6 }} />
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: TEXT_MUTED, letterSpacing: 4, textTransform: "uppercase" }}>Est. 2026</div>
      </div>
      <style>{`@keyframes goldPulse { from{opacity:0.6;transform:scale(0.96)} to{opacity:1;transform:scale(1.02)} }`}</style>
    </div>
  );
}

const events = [
  { title: "Engagement Ceremony", date: "7 July 2026", time: "07:30 PM", venue: "Shri Shivabasav Kalyan Mantap", icon: "📜", desc: "A grand evening celebration of exchanging rings, reciting vows, exchanging gifts" },
  { title: "Haldi Ceremony", date: "8 July 2026", time: "07:00 AM", venue: "Shri Shivabasav Kalyan Mantap", icon: "🌼", desc: "A joyous turmeric ritual bringing blessings for the couple" },
  { title: "Vidhi Mandap Ceremony", date: "8 July 2026", time: "08:49 AM", venue: "Shri Shivabasav Kalyan Mantap", icon: "🐚", desc: "Sacred vows exchanged in the presence of family and God" },
  { title: "Wedding Ceremony", date: "8 July 2026", time: "12:31 PM", venue: "Shri Shivabasav Kalyan Mantap", icon: "💍", desc: "Sacred union as couple partake in traditional rituals, exchange vows, and seek blessings for their new beginning" },

];

const loveStory = [
  { year: "2019", title: "First Meeting", desc: "Two souls met by fate at a college cultural fest, exchanging glances across a crowded room." },
  { year: "2021", title: "Growing Together", desc: "Shared dreams, late-night conversations, and the quiet certainty that this was something rare." },
  { year: "2023", title: "The Proposal", desc: "Beneath a canopy of stars and marigolds, Ramling asked the question that changed everything." },
  { year: "2026", title: "Forever Begins", desc: "A lifetime together, written in vows, sealed with love, witnessed by all who matter." },
];

export default function WeddingInvitation() {
  const [phase, setPhase] = useState("loading"); // loading → envelope → main
  const [rsvpForm, setRsvpForm] = useState({ name: "", attending: "yes", guests: "1", note: "" });
  const [rsvpSent, setRsvpSent] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(null);
  const countdown = useCountdown("2026-07-08T09:00:00");

  const paperBg = {
    background: IVORY,
    backgroundImage: `
      radial-gradient(ellipse at 10% 10%, rgba(197,161,90,0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 90%, rgba(197,161,90,0.04) 0%, transparent 50%),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")
    `,
  };

  const handleRsvp = (e) => {
    e.preventDefault();
    setRsvpSent(true);
  };

  if (phase === "loading") return <LoadingScreen onDone={() => setPhase("envelope")} />;
  if (phase === "envelope") return <EnvelopeScreen onOpen={() => setPhase("main")} />;

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif", color: TEXT_PRIMARY, ...paperBg, minHeight: "100vh", overflowX: "hidden" }}>
      {/* Google Fonts */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" />

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "80px 24px", textAlign: "center", overflow: "hidden" }}>
        {/* Corner florals */}
        <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}><FloralCorner size={220} /></div>
        <div style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }}><FloralCorner size={220} flip /></div>
        <div style={{ position: "absolute", bottom: 0, left: 0, pointerEvents: "none" }}><FloralCorner size={180} style={{ transform: "scaleY(-1)" }} /></div>
        <div style={{ position: "absolute", bottom: 0, right: 0, pointerEvents: "none" }}><FloralCorner size={180} flip style={{ transform: "scaleY(-1)" }} /></div>

        {/* Border frame */}
        <div style={{ position: "absolute", inset: 16, border: `1px solid rgba(197,161,90,0.35)`, borderRadius: 4, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 20, border: `0.5px solid rgba(197,161,90,0.2)`, borderRadius: 2, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 640 }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 6, color: GOLD, textTransform: "uppercase", marginBottom: 24, opacity: 0.85, animation: "fadeSlideUp 1s ease 0.3s both" }}>
            Together with their families
          </div>

          <div style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(56px, 12vw, 96px)", background: `linear-gradient(135deg, ${GOLD} 0%, ${DARK_GOLD} 40%, ${GOLD} 70%, #E8C97A 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 0, animation: "fadeSlideUp 1s ease 0.5s both" }}>
            Ramling
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, margin: "0px 0", animation: "fadeSlideUp 1s ease 0.6s both" }}>
            <div style={{ flex: 1, height: 0.5, background: `linear-gradient(to right, transparent, ${GOLD})`, maxWidth: 100 }} />
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill={GOLD} /></svg>
            <div style={{ flex: 1, height: 0.5, background: `linear-gradient(to left, transparent, ${GOLD})`, maxWidth: 100 }} />
          </div>

          <div style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(5px, 12vw, 96px)", background: `linear-gradient(135deg, ${GOLD} 0%, ${DARK_GOLD} 40%, ${GOLD} 70%, #E8C97A 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 0, animation: "fadeSlideUp 1s ease 0.7s both" }}>
            Veda
          </div>

          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: TEXT_MUTED, letterSpacing: 2, marginBottom: 32, fontStyle: "italic", animation: "fadeSlideUp 1s ease 0.8s both" }}>
            Invite you to celebrate their wedding
          </div>

          <GoldDivider style={{ marginBottom: 28, animation: "fadeSlideUp 1s ease 0.9s both" }} />

          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(18px, 4vw, 26px)", letterSpacing: 6, color: TEXT_PRIMARY, marginBottom: 8, animation: "fadeSlideUp 1s ease 1s both" }}>
            8 JULY 2026 <br/> <span style={{fontSize: "clamp(8px, 2vw, 18px)"}}>at 12:31pm</span>
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: TEXT_MUTED, letterSpacing: 3, marginBottom: 40, animation: "fadeSlideUp 1s ease 1.1s both" }}>
            Shri Shivabasav Kalyan Mantap, Near Inchal Cross, Bailhongal
          </div>

          <a href="#rsvp" style={{ display: "inline-block", padding: "16px 44px", border: `1.5px solid ${GOLD}`, borderRadius: 999, fontFamily: "'Cinzel', serif", fontSize: 12, letterSpacing: 4, color: GOLD, textDecoration: "none", textTransform: "uppercase", transition: "all 0.4s ease", animation: "fadeSlideUp 1s ease 1.2s both" }}
            onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = IVORY; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}>
            RSVP Now
          </a>
        </div>

        <FloatingPetals />
      </section>

      {/* QUOTE */}
      <section style={{ padding: "80px 24px", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 4vw, 32px)", fontStyle: "italic", color: TEXT_PRIMARY, lineHeight: 1.7, marginBottom: 20 }}>
            "Two souls with but a single thought,<br />two hearts that beat as one."
          </div>
          <GoldDivider />
        </FadeIn>
      </section>

      {/* COUPLE */}
      <section style={{ padding: "60px 24px", maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 6, color: GOLD, textTransform: "uppercase", textAlign: "center", marginBottom: 48 }}>The Couple</div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {[
            { name: "Ramling", role: "The Groom", desc: "A soul of quiet strength and gentle kindness, Ramling carries warmth in every step he takes. His laughter fills rooms, and his devotion fills hearts.", parents: "Son of Mr. & Mrs. Murgod" },
            { name: "Veda", role: "The Bride", desc: "Radiant, graceful, and deeply compassionate — Veda brings light wherever she goes. Her love is a melody that transforms every ordinary moment into poetry.", parents: "Daughter of Mr. & Mrs. Nippanikar" },
          ].map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.2}>
              <div style={{ background: CARD_BG, border: `1px solid rgba(197,161,90,0.3)`, borderRadius: 24, padding: "40px 32px", textAlign: "center", boxShadow: "0 4px 40px rgba(197,161,90,0.08)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, opacity: 0.5 }}><FloralCorner size={90} /></div>
                <div style={{ position: "absolute", top: 0, right: 0, opacity: 0.5 }}><FloralCorner size={90} flip /></div>
                {/* Portrait circle */}
                <div style={{ width: 100, height: 100, borderRadius: "50%", border: `2px solid ${GOLD}`, margin: "0 auto 20px", background: `linear-gradient(135deg, ${CHAMP}, ${CREAM})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, fontFamily: "'Great Vibes', cursive", color: GOLD, position: "relative", zIndex: 1 }}>
                  {p.name[0]}
                </div>
                <div style={{ fontFamily: "'Great Vibes', cursive", fontSize: 38, color: DARK_GOLD, marginBottom: 4, position: "relative", zIndex: 1 }}>{p.name}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 4, color: GOLD, textTransform: "uppercase", marginBottom: 16, opacity: 0.8 }}>{p.role}</div>
                <div style={{ fontSize: 15, color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 16, fontStyle: "italic" }}>{p.desc}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, color: TEXT_PRIMARY, opacity: 0.7, letterSpacing: 1 }}>{p.parents}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>


      {/* EVENTS */}
      <section style={{ padding: "60px 24px", maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 6, color: GOLD, textTransform: "uppercase", textAlign: "center", marginBottom: 48 }}>Wedding Events</div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          {events.map((ev, i) => (
            <FadeIn key={ev.title} delay={i * 0.12}>
              <div style={{ background: CARD_BG, border: `1px solid rgba(197,161,90,0.3)`, borderRadius: 20, padding: "32px 24px", textAlign: "center", boxShadow: "0 2px 24px rgba(197,161,90,0.07)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, opacity: 0.4 }}><FloralCorner size={60} /></div>
                <div style={{ position: "absolute", top: 0, right: 0, opacity: 0.4 }}><FloralCorner size={60} flip /></div>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{ev.icon}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: 2, color: TEXT_PRIMARY, marginBottom: 8, fontWeight: 600 }}>{ev.title}</div>
                <div style={{ width: 32, height: 0.5, background: GOLD, margin: "8px auto 12px", opacity: 0.7 }} />
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: GOLD, letterSpacing: 1, marginBottom: 4 }}>{ev.date}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 2, color: TEXT_MUTED, marginBottom: 12, textTransform: "uppercase" }}>{ev.time}</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, lineHeight: 1.6, fontStyle: "italic", marginBottom: 10 }}>{ev.desc}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 1, color: TEXT_PRIMARY, opacity: 0.7, textTransform: "uppercase" }}>{ev.venue}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* COUNTDOWN */}
      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 6, color: GOLD, textTransform: "uppercase", marginBottom: 32 }}>Counting Down to Forever</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            <CountdownBox value={countdown.days} label="Days" />
            <CountdownBox value={countdown.hours} label="Hours" />
            <CountdownBox value={countdown.minutes} label="Minutes" />
            <CountdownBox value={countdown.seconds} label="Seconds" />
          </div>
        </FadeIn>
      </section>

      {/* VENUE */}
      <section style={{ padding: "60px 24px", maxWidth: 700, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 6, color: GOLD, textTransform: "uppercase", textAlign: "center", marginBottom: 40 }}>Venue</div>
          <div style={{ background: CARD_BG, border: `1px solid rgba(197,161,90,0.3)`, borderRadius: 24, padding: "40px 32px", boxShadow: "0 4px 40px rgba(197,161,90,0.08)", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, opacity: 0.5 }}><FloralCorner size={80} /></div>
            <div style={{ position: "absolute", top: 0, right: 0, opacity: 0.5 }}><FloralCorner size={80} flip /></div>
            {/* Map illustration */}
            <div style={{ background: `linear-gradient(135deg, ${CREAM}, #EEE8DA)`, borderRadius: 16, height: 160, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, border: `1px solid rgba(197,161,90,0.2)`, position: "relative", overflow: "hidden" }}>
              <svg width="100%" height="160" viewBox="0 0 400 160">
                {/* Decorative map-like lines */}
                <path d="M40,80 Q120,40 200,80 Q280,120 360,80" stroke={GOLD} strokeWidth="0.8" fill="none" opacity="0.3" />
                <path d="M40,100 Q120,60 200,100 Q280,140 360,100" stroke={SAGE} strokeWidth="0.8" fill="none" opacity="0.3" />
                <circle cx="200" cy="80" r="18" fill={GOLD} opacity="0.15" />
                <circle cx="200" cy="80" r="10" fill={GOLD} opacity="0.2" />
                <circle cx="200" cy="80" r="5" fill={GOLD} opacity="0.7" />
                <path d="M200,75 L200,40" stroke={GOLD} strokeWidth="1.5" opacity="0.7" />
                <path d="M196,74 L200,62 L204,74Z" fill={GOLD} opacity="0.7" />
                <text x="200" y="110" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="10" fill={TEXT_PRIMARY} opacity="0.6" letterSpacing="2">BAILHONGAL, KARNATAKA</text>
              </svg>
            </div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: 18, letterSpacing: 3, color: TEXT_PRIMARY, marginBottom: 8 }}>Shri Shivabasav Kalyan Mantap, Near Inchal Cross</div>
            <div style={{ fontSize: 14, color: TEXT_MUTED, marginBottom: 8 }}> Bailhongal , Karnataka, India</div>

            <a href="https://maps.app.goo.gl/G262bSFhEvYNgBgP9" target="_blank" rel="noreferrer" style={{ display: "inline-block", padding: "14px 36px", border: `1.5px solid ${GOLD}`, borderRadius: 999, fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 3, color: GOLD, textDecoration: "none", textTransform: "uppercase", transition: "all 0.35s" }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = IVORY; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}>
              Get Directions
            </a>
          </div>
        </FadeIn>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "60px 24px", maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 6, color: GOLD, textTransform: "uppercase", textAlign: "center", marginBottom: 40 }}>Gallery</div>
          <div style={{ columns: 3, gap: 16, columnFill: "balance" }}>
            {[
              { h: 200, label: "Engagement" },
              { h: 160, label: "Pre-Wedding" },
              { h: 220, label: "Together" },
              { h: 180, label: "Candid" },
              { h: 200, label: "Moments" },
              { h: 160, label: "Love" },
            ].map((item, i) => (
              <div key={i} onClick={() => setGalleryOpen(i)} style={{ breakInside: "avoid", marginBottom: 16, borderRadius: 12, overflow: "hidden", cursor: "pointer", position: "relative", transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                <div style={{ height: item.h, background: `linear-gradient(${135 + i * 20}deg, ${CREAM}, ${CHAMP}, ${CREAM})`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid rgba(197,161,90,0.2)` }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 24, marginBottom: 8, opacity: 0.5 }}>📷</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: TEXT_MUTED, fontStyle: "italic" }}>{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* RSVP */}
      <section id="rsvp" style={{ padding: "60px 24px", maxWidth: 600, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 6, color: GOLD, textTransform: "uppercase", textAlign: "center", marginBottom: 40 }}>RSVP</div>
          <div style={{ background: CARD_BG, border: `1px solid rgba(197,161,90,0.3)`, borderRadius: 24, padding: "40px 32px", boxShadow: "0 4px 40px rgba(197,161,90,0.08)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, opacity: 0.45 }}><FloralCorner size={80} /></div>
            <div style={{ position: "absolute", top: 0, right: 0, opacity: 0.45 }}><FloralCorner size={80} flip /></div>
            {rsvpSent ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>💌</div>
                <div style={{ fontFamily: "'Great Vibes', cursive", fontSize: 36, color: GOLD, marginBottom: 12 }}>Thank You</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: TEXT_MUTED, fontStyle: "italic" }}>Your response has been received with love. We look forward to celebrating with you.</div>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 3, color: TEXT_PRIMARY, opacity: 0.7, display: "block", marginBottom: 8, textTransform: "uppercase" }}>Full Name</label>
                  <input value={rsvpForm.name} onChange={e => setRsvpForm({ ...rsvpForm, name: e.target.value })} placeholder="Your full name" style={{ width: "100%", padding: "14px 18px", border: `1px solid rgba(197,161,90,0.4)`, borderRadius: 12, background: IVORY, fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: TEXT_PRIMARY, outline: "none", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 3, color: TEXT_PRIMARY, opacity: 0.7, display: "block", marginBottom: 8, textTransform: "uppercase" }}>Will you attend?</label>
                  <div style={{ display: "flex", gap: 12 }}>
                    {["yes", "no"].map(v => (
                      <button key={v} onClick={() => setRsvpForm({ ...rsvpForm, attending: v })} style={{ flex: 1, padding: "12px", border: `1px solid ${rsvpForm.attending === v ? GOLD : "rgba(197,161,90,0.3)"}`, borderRadius: 12, background: rsvpForm.attending === v ? GOLD : "transparent", color: rsvpForm.attending === v ? IVORY : TEXT_MUTED, fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s" }}>
                        {v === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 3, color: TEXT_PRIMARY, opacity: 0.7, display: "block", marginBottom: 8, textTransform: "uppercase" }}>Number of Guests</label>
                  <select value={rsvpForm.guests} onChange={e => setRsvpForm({ ...rsvpForm, guests: e.target.value })} style={{ width: "100%", padding: "14px 18px", border: `1px solid rgba(197,161,90,0.4)`, borderRadius: 12, background: IVORY, fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: TEXT_PRIMARY, outline: "none" }}>
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 3, color: TEXT_PRIMARY, opacity: 0.7, display: "block", marginBottom: 8, textTransform: "uppercase" }}>A Message for the Couple</label>
                  <textarea value={rsvpForm.note} onChange={e => setRsvpForm({ ...rsvpForm, note: e.target.value })} rows={3} placeholder="Your warm wishes…" style={{ width: "100%", padding: "14px 18px", border: `1px solid rgba(197,161,90,0.4)`, borderRadius: 12, background: IVORY, fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: TEXT_PRIMARY, outline: "none", resize: "none", boxSizing: "border-box" }} />
                </div>
                <button onClick={handleRsvp} style={{ width: "100%", padding: "16px", border: `1.5px solid ${GOLD}`, borderRadius: 999, background: "transparent", fontFamily: "'Cinzel', serif", fontSize: 12, letterSpacing: 4, color: GOLD, textTransform: "uppercase", cursor: "pointer", transition: "all 0.35s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = IVORY; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}>
                  Send Response
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </section>

      {/* GIFT */}
      <section style={{ padding: "60px 24px", maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 6, color: GOLD, textTransform: "uppercase", marginBottom: 24 }}>Blessings & Gifts</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: TEXT_MUTED, fontStyle: "italic", marginBottom: 32, lineHeight: 1.8 }}>
            Your presence is our most cherished gift. Should you wish to bless us further, you may do so below.
          </div>
          <div style={{ background: CARD_BG, border: `1px solid rgba(197,161,90,0.3)`, borderRadius: 20, padding: "32px", display: "inline-block", boxShadow: "0 2px 20px rgba(197,161,90,0.07)" }}>
            {/* QR placeholder */}
            <div style={{ width: 120, height: 120, margin: "0 auto 16px", background: `url(${qrBg}) center/cover`, border: `2px solid rgba(197,161,90,0.4)`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: 9, letterSpacing: 2, color: GOLD, textAlign: "center" }}>UPI<br />QR</div>
            </div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 2, color: TEXT_MUTED }}>9011732439@yescred</div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "60px 24px 40px", textAlign: "center", borderTop: `1px solid rgba(197,161,90,0.2)` }}>
        <FadeIn>
          <div style={{ fontFamily: "'Great Vibes', cursive", fontSize: 52, background: `linear-gradient(135deg, ${GOLD}, ${DARK_GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 16 }}>
            We can't wait to celebrate with you! <br/> <span style={{ fontFamily: "'Cinzel', serif", fontSize: 20, letterSpacing: 4, color: GOLD, textTransform: "uppercase" }}>Ramling & Veda</span>
          </div>
          <GoldDivider style={{ marginBottom: 20 }} />
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: TEXT_MUTED, fontStyle: "italic", marginBottom: 24 }}>
            8 July 2026 · Bailhongal, Karnataka
          </div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 4, color: GOLD, textTransform: "uppercase", opacity: 0.7 }}>
            With love & gratitude
          </div>
        </FadeIn>
      </footer>

      {/* Gallery Lightbox */}
      {galleryOpen !== null && (
        <div onClick={() => setGalleryOpen(null)} style={{ position: "fixed", inset: 0, background: "rgba(78,69,60,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, cursor: "pointer" }}>
          <div style={{ background: CARD_BG, borderRadius: 20, padding: 40, border: `1px solid rgba(197,161,90,0.4)`, maxWidth: 400, width: "90%", textAlign: "center" }}>
            <div style={{ height: 280, background: `linear-gradient(135deg, ${CREAM}, ${CHAMP})`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 36, opacity: 0.5 }}>📷</div>
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: TEXT_MUTED, fontStyle: "italic" }}>Click anywhere to close</div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        * { box-sizing: border-box; }
        ::selection { background: rgba(197,161,90,0.2); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${IVORY}; }
        ::-webkit-scrollbar-thumb { background: rgba(197,161,90,0.4); border-radius: 3px; }
        input:focus, textarea:focus, select:focus { border-color: ${GOLD} !important; box-shadow: 0 0 0 3px rgba(197,161,90,0.12); }
      `}</style>
    </div>
  );
}
