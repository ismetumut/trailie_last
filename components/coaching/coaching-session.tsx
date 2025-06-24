"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Calendar, Clock, User } from "lucide-react"

interface CoachingSessionProps {
  sessionsLeft: number
  onBookSession: () => void
  onBuyAdditional: () => void
}

export function CoachingSession({ sessionsLeft, onBookSession, onBuyAdditional }: CoachingSessionProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Video className="w-5 h-5 text-amber-600" />
            <span>Koçluk Seanslarınız</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Kalan Seans</span>
              <span className="text-2xl font-bold text-amber-600">{sessionsLeft}</span>
            </div>
            <p className="text-sm text-gray-600">Premium paketinizle 1 saatlik koçluk seansı hakkınız bulunmaktadır.</p>
          </div>

          {sessionsLeft > 0 ? (
            <div className="space-y-3">
              <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={onBookSession}>
                <Calendar className="w-4 h-4 mr-2" />
                Koçluk Seansı Rezerve Et
              </Button>
              <div className="text-center text-sm text-gray-600">
                <Clock className="w-4 h-4 inline mr-1" />
                Ortalama yanıt süresi: 24 saat
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <p className="text-gray-600">Koçluk seansınızı kullandınız.</p>
              <Button variant="outline" onClick={onBuyAdditional}>
                Ek Seans Satın Al ($29.99)
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Koçluk Konuları</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Kariyer hedefleri belirleme",
              "CV ve LinkedIn profili optimizasyonu",
              "Mülakat teknikleri",
              "Maaş müzakeresi stratejileri",
              "Kişisel marka oluşturma",
              "İş-yaşam dengesi",
              "Liderlik becerileri",
              "Networking stratejileri",
            ].map((topic, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-sm">{topic}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Uzman Koçlarımız</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Dr. Ayşe Demir",
                title: "Kariyer Koçu",
                experience: "15+ yıl deneyim",
                specialty: "Teknoloji",
              },
              {
                name: "Mehmet Özkan",
                title: "İK Uzmanı",
                experience: "12+ yıl deneyim",
                specialty: "Finans",
              },
              {
                name: "Zeynep Kaya",
                title: "Liderlik Koçu",
                experience: "10+ yıl deneyim",
                specialty: "Pazarlama",
              },
            ].map((coach, index) => (
              <div key={index} className="text-center space-y-2 p-3 border rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mx-auto flex items-center justify-center">
                  <User className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="font-semibold">{coach.name}</h4>
                <p className="text-sm text-gray-600">{coach.title}</p>
                <p className="text-xs text-gray-500">{coach.experience}</p>
                <Badge variant="outline" className="text-xs">
                  {coach.specialty}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
