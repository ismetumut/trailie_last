"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface ScenarioCardProps {
  day: number
  scenario: string
  options: string[]
  competency: string
  onAnswer: (answerIndex: number) => void
  selectedAnswer?: number
  progress: number
}

export function ScenarioCard({
  day,
  scenario,
  options,
  competency,
  onAnswer,
  selectedAnswer,
  progress,
}: ScenarioCardProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg border">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
            Day {day} of 100
          </Badge>
          <div className="text-sm text-gray-600">Progress: {Math.round(progress)}%</div>
        </div>
        <Progress value={progress} className="mb-4" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Workplace Scenario</CardTitle>
          <Badge className="w-fit bg-blue-100 text-blue-800">{competency}</Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 leading-relaxed">{scenario}</p>

          <div className="space-y-3">
            {options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className={`w-full h-auto p-4 text-left justify-start ${
                  selectedAnswer === index ? "bg-teal-600 hover:bg-teal-700" : ""
                }`}
                onClick={() => onAnswer(index)}
              >
                <span className="text-sm">{option}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
