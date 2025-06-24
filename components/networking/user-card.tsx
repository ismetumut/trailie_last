"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { UserPlus } from "lucide-react"

interface UserCardProps {
  user: {
    id: string
    name: string
    profession: string
    experience: string
    location: string
    interests: string[]
    avatar: string
  }
  onConnect: () => void
}

export function UserCard({ user, onConnect }: UserCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-teal-600 text-white">{user.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.profession}</p>
            <p className="text-sm text-gray-500">
              {user.experience} • {user.location}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.interests.map((interest, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={onConnect}>
            <UserPlus className="w-4 h-4 mr-1" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
