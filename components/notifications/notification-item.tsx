"use client"

import { Card, CardContent } from "@/components/ui/card"

interface NotificationItemProps {
  notification: {
    id: string
    type: "job" | "education" | "network" | "system"
    title: string
    message: string
    timestamp: string
    read: boolean
  }
  onClick?: () => void
}

export function NotificationItem({ notification, onClick }: NotificationItemProps) {
  const typeColors = {
    job: "bg-blue-500",
    education: "bg-green-500",
    network: "bg-purple-500",
    system: "bg-gray-500",
  }

  return (
    <Card
      className={`cursor-pointer hover:shadow-md transition-shadow ${notification.read ? "opacity-60" : ""}`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className={`w-2 h-2 rounded-full mt-2 ${typeColors[notification.type]}`}></div>
          <div className="flex-1">
            <h3 className="font-medium">{notification.title}</h3>
            <p className="text-sm text-gray-600">{notification.message}</p>
            <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
          </div>
          {!notification.read && <div className="w-2 h-2 bg-teal-600 rounded-full"></div>}
        </div>
      </CardContent>
    </Card>
  )
}
