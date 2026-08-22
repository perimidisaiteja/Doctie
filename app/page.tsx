"use client";

import { useState } from "react";

const quickActions = [
  { icon: "🩺", title: "AI Health Chat", text: "Ask a health question" },
  { icon: "📅", title: "Book Appointment", text: "Find a doctor nearby" },
  { icon: "💊", title: "Medicine Info", text: "Understand your medicine" },
  { icon: "🏥", title: "Find Hospitals", text: "Explore nearby care" },
];

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">
          <div className="brandMark">D</div>
          <div>
            <strong>Doctie</strong>
            <span>AI Healthcare</span>
          </div>
        </div>
        <nav>
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <button className="login">Sign in</button>
        </nav>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <div className="pill">✦ Your everyday AI health companion</div>
          <h1>Healthcare help,<br /><span>when you need it.</span></h1>
          <p>Get clear health information, find nearby care, understand medicines, and prepare for your next doctor visit — all in one place.</p>
          <div className="heroButtons">
            <button className="primary" onClick={() => document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" })}>Talk to Doctie <span>→</span></button>
            <button className="secondary">Find a hospital</button>
          </div>
          <div className="trust"><span>●</span> Designed to assist — not replace — medical professionals</div>
        </div>

        <div className="assistantCard" id="chat">
          <div className="cardHeader">
            <div className="assistantAvatar">✦</div>
            <div><strong>Doctie AI</strong><small>Online • Ready to help</small></div>
            <span className="dots">•••</span>
          </div>
          <div className="chatArea">
            <div className="botBubble">Hi! I&apos;m Doctie. 👋<br />Tell me what&apos;s bothering you, and I&apos;ll help you understand your next best step.</div>
            <div className="suggestions">
              <button>🤒 I have a fever</button>
              <button>💊 What is this medicine?</button>
              <button>🧴 Skin problem</button>
            </div>
          </div>
          <form className="chatInput" onSubmit={(e) => { e.preventDefault(); setMessage(""); }}>
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe your symptoms..." />
            <button aria-label="Send">↑</button>
          </form>
        </div>
      </section>

      <section className="section" id="services">
        <div className="sectionIntro"><span>DOCTIE FOR YOU</span><h2>One place for everyday healthcare.</h2><p>Simple tools that help you make better-informed healthcare decisions.</p></div>
        <div className="actionsGrid">
          {quickActions.map((item) => <button className="actionCard" key={item.title}><div className="actionIcon">{item.icon}</div><div><strong>{item.title}</strong><p>{item.text}</p></div><span>→</span></button>)}
        </div>
      </section>

      <section className="emergency" id="how">
        <div><span className="emergencyTag">EMERGENCY</span><h2>Need urgent help?</h2><p>For life-threatening emergencies, contact your local emergency service or go to the nearest emergency department. Doctie is not an emergency service.</p></div>
        <button>Emergency help →</button>
      </section>

      <footer><strong>Doctie</strong><span>AI-powered healthcare, built for people.</span><small>© 2026 Doctie</small></footer>
    </main>
  );
}
