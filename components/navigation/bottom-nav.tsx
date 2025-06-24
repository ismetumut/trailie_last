"use client"

import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Users, Bell } from "lucide-react"

interface BottomNavProps {
  currentScreen: string
  onNavigate: (screen: string) => void
  notificationCount?: number
}

export function BottomNav({ currentScreen, onNavigate, notificationCount = 0 }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Ana Sayfa" },
    { id: "job-board", icon: Briefcase, label: "İş İlanları" },
    { id: "notifications", icon: Bell, label: "Bildirimler", badge: notificationCount },
    { id: "networking", icon: Users, label: "Ağ" },
    { id: "profile", icon: User, label: "Profil" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id

          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 relative ${
                isActive ? "text-teal-600" : "text-gray-600"
              }`}
              onClick={() => onNavigate(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
