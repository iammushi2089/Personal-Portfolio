import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import './ContactModal.css'
import facebookIcon from './assets/facebook.png'
import phoneWhiteIcon from './assets/phone-white.png'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string
const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string

interface FormState {
  user_name: string
  user_email: string
  user_phone: string
  message: string
}

const INITIAL_FORM: FormState = {
  user_name: '',
  user_email: '',
  user_phone: '',
  message: '',
}

export default function ContactModal() {
  const [open, setOpen]       = useState(false)
  const [form, setForm]       = useState<FormState>(INITIAL_FORM)
  const [captcha, setCaptcha] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus]   = useState<'idle' | 'success' | 'error'>('idle')
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleOpen = () => {
    setOpen(true)
    setStatus('idle')
  }

  const handleClose = () => {
    if (sending) return
    setOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captcha) {
      setStatus('error')
      return
    }
    setSending(true)
    setStatus('idle')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name:  form.user_name,
          user_email: form.user_email,
          user_phone: form.user_phone,
          message:    form.message,
          'g-recaptcha-response': captcha,
        },
        PUBLIC_KEY,
      )
      setStatus('success')
      setForm(INITIAL_FORM)
      setCaptcha(null)
      recaptchaRef.current?.reset()
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* ── Floating trigger button ─────────────────────── */}
      <button
        className="cm-fab"
        onClick={handleOpen}
        aria-label="Open contact form"
      >
        <svg className="cm-fab__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>Message me</span>
      </button>

      {/* ── Modal overlay ───────────────────────────────── */}
      {open && (
        <div
          className={`cm-overlay ${open ? 'cm-overlay--show' : ''}`}
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {/* ── Modal panel ─────────────────────────────────── */}
      <div
        className={`cm-panel ${open ? 'cm-panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
      >
        {/* Header */}
        <div className="cm-panel__header">
          <div>
            <p className="cm-label">CONTACT FORM</p>
            <h2 className="cm-heading">
              LET'S<br />
              WORK<span className="cm-heading--accent">TOGETHER</span>
            </h2>
            <p className="cm-subtext">
              Whether you have a question, an opportunity, or simply want to say hello, I'd love to hear from you.
            </p>
          </div>
          <button
            className="cm-close"
            onClick={handleClose}
            aria-label="Close contact form"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="cm-form" onSubmit={handleSubmit} noValidate>
          <input
            className="cm-input"
            type="text"
            name="user_name"
            placeholder="Full Name"
            value={form.user_name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
          <input
            className="cm-input"
            type="email"
            name="user_email"
            placeholder="Email Address"
            value={form.user_email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <input
            className="cm-input"
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            value={form.user_phone}
            onChange={handleChange}
            autoComplete="tel"
          />
          <textarea
            className="cm-input cm-textarea"
            name="message"
            placeholder="Tell me more..."
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
          />

          {/* reCAPTCHA */}
          <div className="cm-recaptcha-wrap">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
              onChange={token => setCaptcha(token)}
              onExpired={() => setCaptcha(null)}
              theme="dark"
            />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <p className="cm-status cm-status--success">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && !captcha && (
            <p className="cm-status cm-status--error">
              ✕ Please complete the reCAPTCHA first.
            </p>
          )}
          {status === 'error' && captcha && (
            <p className="cm-status cm-status--error">
              ✕ Something went wrong. Please try again.
            </p>
          )}

          <button
            className="cm-submit"
            type="submit"
            disabled={sending}
          >
            {sending ? 'SENDING…' : 'SEND MESSAGE'}
          </button>
        </form>

        {/* Footer contact info */}
        <div className="cm-footer">
          <p className="cm-footer__label">Or reach me directly at:</p>
          <ul className="cm-footer__list">
            <li>
              <a href="tel:09454982950" className="cm-footer__link">
                <span className="cm-footer__icon">
                  <img src={phoneWhiteIcon} alt="Phone" className="cm-footer__img-icon" />
                </span>
                <span>09454982950</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/iammushi2089"
                target="_blank"
                rel="noopener noreferrer"
                className="cm-footer__link"
              >
                <span className="cm-footer__icon">
                  <img src={facebookIcon} alt="Facebook" className="cm-footer__img-icon" />
                </span>
                <span>John Rey Samson</span>
              </a>
            </li>
            <li>
              <a href="mailto:samsonjohnrey@gmail.com" className="cm-footer__link">
                <span className="cm-footer__icon">✉</span>
                <span>samsonjohnrey@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
