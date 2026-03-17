"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    // Check if user has already set preferences
    const stored = localStorage.getItem("cookie-preferences")
    if (!stored) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    } else {
      setPreferences(JSON.parse(stored))
    }
  }, [])

  // Listen for custom event to reopen preferences
  useEffect(() => {
    const handleOpenPreferences = () => {
      setShowDetails(true)
      setIsVisible(true)
    }
    
    window.addEventListener("open-cookie-preferences", handleOpenPreferences)
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences)
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-preferences", JSON.stringify(prefs))
    setPreferences(prefs)
    setIsVisible(false)
    setShowDetails(false)
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    })
  }

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    })
  }

  const saveCustom = () => {
    savePreferences(preferences)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      <div className="bg-background border border-foreground/10 shadow-xl max-w-2xl w-full pointer-events-auto">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="font-display text-lg text-foreground">Cookie Preferences</h2>
            <button
              onClick={() => setIsVisible(false)}
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
            You can choose which cookies you allow below.
          </p>

          {showDetails ? (
            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between py-3 border-t border-foreground/10">
                <div className="pr-4">
                  <h3 className="text-sm font-medium text-foreground">Necessary</h3>
                  <p className="text-xs text-foreground/50 mt-1">
                    Essential for the website to function. Cannot be disabled.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1 h-4 w-4 accent-foreground"
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between py-3 border-t border-foreground/10">
                <div className="pr-4">
                  <h3 className="text-sm font-medium text-foreground">Analytics</h3>
                  <p className="text-xs text-foreground/50 mt-1">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 h-4 w-4 accent-foreground cursor-pointer"
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between py-3 border-t border-foreground/10">
                <div className="pr-4">
                  <h3 className="text-sm font-medium text-foreground">Marketing</h3>
                  <p className="text-xs text-foreground/50 mt-1">
                    Used to deliver relevant advertisements and track campaign performance.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 h-4 w-4 accent-foreground cursor-pointer"
                />
              </div>
            </div>
          ) : null}

          <div className="flex flex-col sm:flex-row gap-3">
            {showDetails ? (
              <>
                <button
                  onClick={saveCustom}
                  className="flex-1 px-4 py-2.5 bg-foreground text-background text-sm transition-opacity hover:opacity-80"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 px-4 py-2.5 border border-foreground/20 text-foreground text-sm transition-colors hover:border-foreground/40"
                >
                  Back
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2.5 bg-foreground text-background text-sm transition-opacity hover:opacity-80"
                >
                  Accept All
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 px-4 py-2.5 border border-foreground/20 text-foreground text-sm transition-colors hover:border-foreground/40"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 px-4 py-2.5 border border-foreground/20 text-foreground text-sm transition-colors hover:border-foreground/40"
                >
                  Customize
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
