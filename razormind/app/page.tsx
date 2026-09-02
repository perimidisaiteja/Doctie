"use client";

import { useState } from 'react';

const opportunities = [
  { icon: '🔥', title: 'Gaming bundle opportunity', detail: '67% of mouse buyers also buy a mousepad.', value: '₹42,600', action: 'Launch bundle' },
  { icon: '💰', title: 'High-intent upsell', detail: '23 customers are likely to add a keyboard.', value: '₹18,200', action: 'Create upsell' },
  { icon: '⚠️', title: 'Cart abandonment', detail: '₹31,400 potential revenue is sitting in abandoned carts.', value: '₹31,400', action: 'Recover carts' },
];

const products = [
  { name: 'HyperSpeed Gaming Mouse', price: 1499, category: 'Gaming' },
  { name: 'Pro RGB Mechanical Keyboard', price: 2299, category: 'Gaming' },
  { name: 'UltraGrip Mousepad', price: 399, category: 'Accessories' },
];

export default function Home() {
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState('');
  const [revenue, setRevenue] = useState(73400);
  const [selected, setSelected] = useState<string | null>(null);

  function runAgent() {
    setRunning(true);
    setSelected(null);
    setTimeout(() => setRunning(false), 1800);
  }

  function launch(action: string) {
    setSelected(action);
    setRevenue((v) => v + (action.includes('bundle') ? 3299 : 1899));
  }

  return (
    <main>
      <header className="topbar">
        <div className="brand"><div className="logo">R</div><div><b>RazorMind</b><span>AI Revenue Autopilot</span></div></div>
        <nav><a href="#overview">Overview</a><a href="#opportunities">Opportunities</a><a href="#agent">AI Agent</a><button className="merchant">TechKart ▾</button></nav>
      </header>

      <section className="hero" id="overview">
        <div className="hero-copy">
          <div className="eyebrow">✦ AUTONOMOUS COMMERCE INTELLIGENCE</div>
          <h1>Your AI employee for <em>revenue growth.</em></h1>
          <p>RazorMind finds revenue leaks, chooses the best growth action, turns it into a transaction with Razorpay, and measures the result.</p>
          <div className="hero-actions"><button className="primary" onClick={runAgent}>{running ? 'Analyzing your business…' : '✦ Grow My Revenue'}</button><button className="ghost" onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}>View opportunities ↓</button></div>
          <div className="proof"><span>●</span> Detect → Decide → Act → Transact → Measure</div>
        </div>
        <div className="agent-card" id="agent">
          <div className="agent-top"><div className="agent-icon">✦</div><div><b>RazorMind Agent</b><small>{running ? 'Analyzing merchant data…' : 'Online • Ready to grow revenue'}</small></div><span className="live">LIVE</span></div>
          <div className="terminal">
            <div><i>01</i> Analyzing 412 orders <strong>✓</strong></div>
            <div><i>02</i> Finding customer patterns <strong>✓</strong></div>
            <div><i>03</i> Scoring revenue opportunities <strong>✓</strong></div>
            <div><i>04</i> Selecting highest-impact action <strong>{running ? '…' : '✓'}</strong></div>
          </div>
          <div className="agent-result"><span>AI-generated revenue</span><b>₹{revenue.toLocaleString('en-IN')}</b><small>↑ 31.4% this month</small></div>
        </div>
      </section>

      <section className="metrics">
        <Metric label="Total Revenue" value="₹4,82,300" change="+18.4%" />
        <Metric label="AI Revenue" value={`₹${revenue.toLocaleString('en-IN')}`} change="+31.4%" />
        <Metric label="Orders" value="412" change="+12.1%" />
        <Metric label="Conversion" value="5.8%" change="+0.9%" />
      </section>

      <section className="section" id="opportunities">
        <div className="section-head"><div><div className="eyebrow">AI REVENUE OPPORTUNITIES</div><h2>What should we do next?</h2></div><span className="count">3 opportunities found</span></div>
        <div className="opportunity-grid">{opportunities.map((o) => <article className="opportunity" key={o.title}><div className="opp-icon">{o.icon}</div><div className="opp-body"><h3>{o.title}</h3><p>{o.detail}</p><div className="potential">Potential <b>{o.value}</b></div><button onClick={() => launch(o.action)}>{selected === o.action ? '✓ Launched' : o.action} <span>→</span></button></div></article>)}</div>
      </section>

      <section className="commerce section">
        <div className="section-head"><div><div className="eyebrow">AGENTIC COMMERCE</div><h2>From conversation to payment.</h2></div></div>
        <div className="flow"><Flow n="01" title="Understand" text="Customer intent" /><div>→</div><Flow n="02" title="Recommend" text="Best product" /><div>→</div><Flow n="03" title="Upsell" text="Smart bundle" /><div>→</div><Flow n="04" title="Transact" text="Razorpay" /><div>→</div><Flow n="05" title="Measure" text="Revenue impact" /></div>
        <div className="chat-demo"><div className="chat-head"><span className="agent-icon small">✦</span><b>RazorMind Shopping Agent</b><span>Customer session</span></div><div className="messages"><div className="customer">I need a gaming setup under ₹5,000</div><div className="ai">I found a strong setup at <b>₹4,197</b>. Adding the UltraGrip Mousepad gives you the complete setup. <button onClick={() => setMessage('Checkout created — Razorpay Test Mode ready.')}>Add bundle ₹4,197 →</button></div>{message && <div className="success">✓ {message}</div>}</div></div>
      </section>

      <section className="section catalog"><div className="section-head"><div><div className="eyebrow">MERCHANT CATALOG</div><h2>Products the agent can sell.</h2></div><span className="count">{products.length} products</span></div><div className="products">{products.map((p) => <div className="product" key={p.name}><div className="product-art">◈</div><div><span>{p.category}</span><h3>{p.name}</h3><b>₹{p.price.toLocaleString('en-IN')}</b></div></div>)}</div></section>

      <footer><b>RazorMind AI</b><span>Built for agentic commerce • Razorpay Buildathon 2026</span><small>Test Mode demo — no real money movement</small></footer>
    </main>
  );
}

function Metric({ label, value, change }: { label: string; value: string; change: string }) { return <div className="metric"><span>{label}</span><b>{value}</b><small>↑ {change}</small></div>; }
function Flow({ n, title, text }: { n: string; title: string; text: string }) { return <div className="flow-item"><span>{n}</span><b>{title}</b><small>{text}</small></div>; }
