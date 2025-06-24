"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface PersonalityQuestionProps {
  question: string
  options: string[]
  currentStep: number
  totalSteps: number
  selectedAnswer?: string
  onAnswer: (answer: string) => void
  onNext: () => void
  onPrevious?: () => void
}

export function PersonalityQuestion({
  question,
  options,
  currentStep,
  totalSteps,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
}: PersonalityQuestionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg border">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">
            Soru {currentStep} / {totalSteps}
          </span>
          <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} />
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold">{question}</h2>

          <div className="space-y-3">
            {options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === option ? "default" : "outline"}
                className={`w-full h-auto p-4 text-left justify-start ${
                  selectedAnswer === option ? "bg-teal-600 hover:bg-teal-700" : ""
                }`}
                onClick={() => onAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </div>

          {selectedAnswer && (
            <div className="flex space-x-4">
              {onPrevious && currentStep > 1 && (
                <Button variant="outline" onClick={onPrevious}>
                  Önceki
                </Button>
              )}
              <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white" onClick={onNext}>
                {currentStep < totalSteps ? "Devam" : "Tamamla"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
