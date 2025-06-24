"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Lock } from "lucide-react"

interface ModuleCardProps {
  module: {
    id: string
    name: string
    price: number
    currency: "USD"
    type: "one-time" | "monthly"
    description: string
    features: string[]
    isPurchased: boolean
  }
  status: "purchased" | "locked" | "available"
  onPurchase: () => void
  onAccess: () => void
}

export function ModuleCard({ module, status, onPurchase, onAccess }: ModuleCardProps) {
  return (
    <Card className={`relative ${status === "purchased" ? "ring-2 ring-green-500" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{module.name}</CardTitle>
          {status === "purchased" && <CheckCircle className="w-6 h-6 text-green-600" />}
          {status === "locked" && <Lock className="w-6 h-6 text-gray-400" />}
        </div>
        <div className="text-2xl font-bold">
          ${module.price}
          {module.type === "monthly" && <span className="text-sm font-normal text-gray-600">/ay</span>}
        </div>
        <p className="text-sm text-gray-600">{module.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {module.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {status === "purchased" ? (
          <Button className="w-full" onClick={onAccess}>
            Modülü Kullan
          </Button>
        ) : (
          <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={onPurchase}>
            Satın Al
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
