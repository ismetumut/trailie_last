"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, CheckCircle } from "lucide-react"

interface SubscriptionOverviewProps {
  userProfile: {
    purchasedModules: string[]
    subscriptions: string[]
  }
  pricingModules: Array<{
    id: string
    name: string
    price: number
    type: "one-time" | "monthly"
  }>
}

export function SubscriptionOverview({ userProfile, pricingModules }: SubscriptionOverviewProps) {
  const purchasedModules = pricingModules.filter((module) => userProfile.purchasedModules.includes(module.id))
  const activeSubscriptions = pricingModules.filter((module) => userProfile.subscriptions.includes(module.id))

  const totalSpent = purchasedModules.reduce((sum, module) => sum + module.price, 0)
  const monthlySpend = activeSubscriptions.reduce((sum, module) => sum + module.price, 0)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">${totalSpent}</div>
            <div className="text-sm text-gray-600">Toplam Harcama</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">${monthlySpend}/ay</div>
            <div className="text-sm text-gray-600">Aylık Abonelik</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{purchasedModules.length + activeSubscriptions.length}</div>
            <div className="text-sm text-gray-600">Aktif Modül</div>
          </CardContent>
        </Card>
      </div>

      {purchasedModules.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Satın Alınan Modüller</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {purchasedModules.map((module) => (
                <div key={module.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{module.name}</span>
                  <Badge className="bg-green-100 text-green-800">${module.price}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeSubscriptions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Aktif Abonelikler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {activeSubscriptions.map((module) => (
                <div key={module.id} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">{module.name}</span>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-blue-100 text-blue-800">${module.price}/ay</Badge>
                    <Button size="sm" variant="outline">
                      İptal Et
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
