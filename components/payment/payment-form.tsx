"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, CreditCard } from "lucide-react"

interface PaymentFormProps {
  module: {
    id: string
    name: string
    price: number
    currency: "USD"
    type: "one-time" | "monthly"
    description: string
    features: string[]
  }
  onPayment: () => void
  onCancel: () => void
}

export function PaymentForm({ module, onPayment, onCancel }: PaymentFormProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <CreditCard className="w-12 h-12 text-green-600 mx-auto" />
        <h1 className="text-2xl font-bold">Ödeme</h1>
        <p className="text-gray-600">Güvenli ödeme ile modülü satın alın</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sipariş Özeti</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{module.name}</span>
              <span className="text-xl font-bold">
                ${module.price}
                {module.type === "monthly" && "/ay"}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{module.description}</p>
            <ul className="space-y-1">
              {module.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <Input placeholder="Kart numarası (1234 5678 9012 3456)" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="MM/YY" />
              <Input placeholder="CVV" />
            </div>
            <Input placeholder="Kart sahibinin adı" />
            <Input placeholder="E-posta adresi" type="email" />
          </div>

          <div className="bg-blue-50 p-3 rounded-lg text-sm">
            <p className="text-blue-800">🔒 Ödemeniz SSL ile korunmaktadır. Kart bilgileriniz güvende.</p>
          </div>

          <div className="flex space-x-3">
            <Button variant="outline" onClick={onCancel} className="flex-1">
              İptal
            </Button>
            <Button onClick={onPayment} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              ${module.price}
              {module.type === "monthly" && "/ay"} Öde
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
