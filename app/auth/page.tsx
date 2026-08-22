'use client'

import { FormEvent, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [role, setRole] = useState<'patient' | 'hospital'>('patient')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name, role } },
      })
      setMessage(error ? error.message : 'Account created. Check your email if confirmation is enabled.')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      setMessage(error ? error.message : 'Signed in successfully.')
    }

    setLoading(false)
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="brand">Doctie</div>
        <h1>{mode === 'login' ? 'Welcome back' : 'Create your Doctie account'}</h1>
        <p className="muted">Healthcare assistance, appointments and hospital access in one place.</p>

        <div className="tabs">
          <button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Login</button>
          <button className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Sign up</button>
        </div>

        <form onSubmit={submit}>
          {mode === 'signup' && (
            <>
              <label>Full name<input value={name} onChange={(e) => setName(e.target.value)} required /></label>
              <label>Account type
                <select value={role} onChange={(e) => setRole(e.target.value as 'patient' | 'hospital')}>
                  <option value="patient">Patient</option>
                  <option value="hospital">Hospital</option>
                </select>
              </label>
            </>
          )}
          <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
          <label>Password<input type="password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
          <button className="primary" disabled={loading}>{loading ? 'Please wait…' : mode === 'login' ? 'Login' : 'Create account'}</button>
        </form>

        {message && <p className="status">{message}</p>}
        <p className="safety">Doctie provides health information and support; it does not replace a qualified medical professional.</p>
      </section>
    </main>
  )
}
