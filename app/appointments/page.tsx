"use client";

import { useState } from "react";

const doctors = [
  { name: "Dr. Priya Sharma", specialty: "General Medicine", hospital: "CityCare Hospital", time: "10:30 AM" },
  { name: "Dr. Arjun Reddy", specialty: "Dermatology", hospital: "Apollo Care Centre", time: "12:00 PM" },
  { name: "Dr. Ananya Rao", specialty: "Pediatrics", hospital: "Sunrise Hospital", time: "4:30 PM" },
];

export default function AppointmentsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="brandMark">D</div><div><strong>Doctie</strong><span>AI Healthcare</span></div>
        </a>
        <nav><a href="/">Home</a><a href="/dashboard">Dashboard</a><a href="/auth">Account</a></nav>
      </header>

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="sectionIntro">
          <span>DOCTIE CARE</span>
          <h2>Book an appointment</h2>
          <p>Choose a doctor and request a convenient appointment. A real booking will require hospital confirmation.</p>
        </div>

        <div className="actionsGrid">
          {doctors.map((doctor) => (
            <article className="actionCard" key={doctor.name} style={{ cursor: "default" }}>
              <div className="actionIcon">🩺</div>
              <div style={{ flex: 1 }}>
                <strong>{doctor.name}</strong>
                <p>{doctor.specialty} · {doctor.hospital}</p>
                <p><b>Next slot:</b> {doctor.time}</p>
              </div>
              <button className="primary" onClick={() => setSelected(doctor.name)} style={{ padding: "10px 14px" }}>Request</button>
            </article>
          ))}
        </div>

        {selected && (
          <div className="appointment" style={{ marginTop: 24 }}>
            <div className="doctorAvatar">✓</div>
            <div className="appointmentMain"><strong>Appointment request started</strong><span>{selected}</span></div>
            <div className="appointmentTime"><strong>Pending</strong><span>Hospital confirmation</span></div>
          </div>
        )}

        <div className="emergency" style={{ marginTop: 40 }}>
          <div><span className="emergencyTag">IMPORTANT</span><h2>Need urgent help?</h2><p>For life-threatening emergencies, contact your local emergency service or go to the nearest emergency department. Doctie is not an emergency service.</p></div>
        </div>
      </section>
    </main>
  );
}
