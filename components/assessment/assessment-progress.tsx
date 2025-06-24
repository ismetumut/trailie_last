"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface AssessmentProgressProps {
  currentStep: number
  totalSteps: number
  assessmentType: "personality" | "expertise"
  isPaid?: boolean
}

export function AssessmentProgress({
  currentStep,
  totalSteps,
  assessmentType,
  isPaid = false,
}: AssessmentProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            Soru {currentStep} / {totalSteps}
          </span>
          {isPaid ? (
            <Badge className="bg-amber-100 text-amber-800">Premium</Badge>
          ) : (
            <Badge className="bg-green-100 text-green-800">Ücretsiz</Badge>
          )}
        </div>
        <span className="text-sm text-gray-600">{Math.round(progressPercentage)}%</span>
      </div>
      <Progress value={progressPercentage} />
      <div className="text-center text-xs text-gray-500 mt-2">
        {assessmentType === "personality" ? "Kişilik Analizi" : "Uzmanlık Değerlendirmesi"}
      </div>
    </div>
  )
}
