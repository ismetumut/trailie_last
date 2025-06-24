"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface PackageComparisonProps {
  packages: Array<{
    id: string
    name: string
    price: number
  }>
}

export function PackageComparison({ packages }: PackageComparisonProps) {
  const features = [
    { name: "Kişilik Envanteri", free: true, core: true, pro: true, premium: true },
    { name: "Uzmanlık Envanteri", free: false, core: true, pro: true, premium: true },
    { name: "Rol Simülasyonu", free: false, core: true, pro: true, premium: true },
    { name: "AI CV Hazırlama", free: false, core: "Temel", pro: "Sınırsız", premium: "Sınırsız" },
    { name: "İlan Eşleme", free: false, core: "1 ay", pro: "3 ay", premium: "Sınırsız" },
    { name: "Mülakat Simülasyonu", free: false, core: false, pro: true, premium: true },
    { name: "Gelişmiş Analitik", free: false, core: false, pro: true, premium: true },
    { name: "Birebir Koçluk", free: false, core: false, pro: false, premium: "1 saat" },
    { name: "Özel İçerik", free: false, core: false, pro: false, premium: true },
    { name: "VIP Destek", free: false, core: false, pro: false, premium: true },
  ]

  const renderFeatureCell = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
    } else if (value === false) {
      return <span className="text-gray-400 mx-auto">-</span>
    } else {
      return <span className="text-sm text-center">{value}</span>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Paket Karşılaştırması</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Özellik</th>
                <th className="text-center p-2">Free</th>
                <th className="text-center p-2">Core</th>
                <th className="text-center p-2">Pro</th>
                <th className="text-center p-2">Premium</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 font-medium">{feature.name}</td>
                  <td className="text-center p-2">{renderFeatureCell(feature.free)}</td>
                  <td className="text-center p-2">{renderFeatureCell(feature.core)}</td>
                  <td className="text-center p-2">{renderFeatureCell(feature.pro)}</td>
                  <td className="text-center p-2">{renderFeatureCell(feature.premium)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
