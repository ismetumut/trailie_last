"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Zap, Star, Crown } from "lucide-react"

interface PackageCardProps {
  package: {
    id: string
    name: string
    price: number
    currency: "USD"
    description: string
    features: string[]
    highlighted?: boolean
    popular?: boolean
  }
  isCurrentPackage: boolean
  onSelect: () => void
}

export function PackageCard({ package: pkg, isCurrentPackage, onSelect }: PackageCardProps) {
  const getIcon = () => {
    switch (pkg.id) {
      case "free":
        return <Shield className="w-8 h-8 text-gray-600" />
      case "core":
        return <Zap className="w-8 h-8 text-blue-600" />
      case "pro":
        return <Star className="w-8 h-8 text-purple-600" />
      case "premium":
        return <Crown className="w-8 h-8 text-amber-600" />
      default:
        return <Shield className="w-8 h-8 text-gray-600" />
    }
  }

  const getButtonColor = () => {
    switch (pkg.id) {
      case "core":
        return "bg-blue-600 hover:bg-blue-700"
      case "pro":
        return "bg-purple-600 hover:bg-purple-700"
      case "premium":
        return "bg-amber-600 hover:bg-amber-700"
      default:
        return "bg-gray-600 hover:bg-gray-700"
    }
  }

  return (
    <Card
      className={`relative ${pkg.highlighted ? "ring-2 ring-amber-500 scale-105" : ""} ${
        isCurrentPackage ? "ring-2 ring-green-500" : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-600 text-white">En Popüler</Badge>
        </div>
      )}
      {pkg.highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-amber-600 text-white">Önerilen</Badge>
        </div>
      )}

      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">{getIcon()}</div>
        <CardTitle className="text-xl">{pkg.name}</CardTitle>
        <div className="text-3xl font-bold">{pkg.price === 0 ? "Ücretsiz" : `$${pkg.price}`}</div>
        <p className="text-sm text-gray-600">{pkg.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {isCurrentPackage ? (
          <Button className="w-full" disabled>
            <CheckCircle className="w-4 h-4 mr-2" />
            Mevcut Paket
          </Button>
        ) : pkg.id === "free" ? (
          <Button variant="outline" className="w-full" disabled>
            Ücretsiz Paket
          </Button>
        ) : (
          <Button className={`w-full ${getButtonColor()}`} onClick={onSelect}>
            Paketi Seç
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
