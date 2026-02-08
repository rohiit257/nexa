'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface WaitlistDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistDialog({ isOpen, onClose }: WaitlistDialogProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL
      
      if (!webhookUrl) {
        console.error('N8N webhook URL is not configured')
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting to webhook:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-black/90 border border-zinc-700/50 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-[0_0_50px_rgba(255,255,255,0.1)] mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Join the Waitlist
            </h2>
            <p className="text-white/60 text-xs sm:text-sm">
              Be the first to know when we launch
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-zinc-500/50 focus:ring-2 focus:ring-zinc-500/20 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-2.5 sm:py-3 bg-white text-zinc-900 font-semibold text-sm sm:text-base rounded-lg hover:bg-zinc-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm text-center">
                ✓ Successfully joined the waitlist!
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm text-center">
                ✗ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
