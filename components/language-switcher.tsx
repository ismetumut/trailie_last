"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  currentLanguage: 'tr' | 'en'
  onLanguageChange: (language: 'tr' | 'en') => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currentLanguage === 'tr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('tr')}
        className="text-xs"
      >
        TR
      </Button>
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="text-xs"
      >
        EN
      </Button>
    </div>
  )
} 