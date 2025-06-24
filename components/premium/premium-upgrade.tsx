"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, CheckCircle } from "lucide-react"

interface PremiumUpgradeProps {
  onUpgrade: () => void
}

export function PremiumUpgrade({ onUpgrade }: PremiumUpgradeProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Crown className="w-16 h-16 text-amber-600 mx-auto" />
        <h1 className="text-2xl font-bold">Premium'a Yükseltin</h1>
        <p className="text-gray-600">Gelişmiş özelliklerle kariyer yolculuğunuzu hızlandırın</p>
      </div>

      <Card>
        <CardContent className="p-8 text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Premium Avantajları</h3>
            <ul className="text-left space-y-3 max-w-md mx-auto">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Detaylı uzmanlık analizi</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Kişiselleştirilmiş kariyer önerileri</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Gelişmiş simülasyon senaryoları</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Öncelikli iş eşleştirme</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">AI destekli mülakat hazırlığı</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-amber-800">₺99/ay</div>
            <div className="text-sm text-amber-600">İlk ay ücretsiz</div>
          </div>

          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" onClick={onUpgrade}>
            Premium'a Başla
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
