"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface ScenarioDisplayProps {
  day: number
  scenario: string
  options: string[]
  competency: string
  difficulty: "easy" | "medium" | "hard"
  selectedAnswer?: string
  score: number
  totalDays: number
  onAnswer: (answerIndex: number) => void
  onNext: () => void
}

export function ScenarioDisplay({
  day,
  scenario,
  options,
  competency,
  difficulty,
  selectedAnswer,
  score,
  totalDays,
  onAnswer,
  onNext,
}: ScenarioDisplayProps) {
  const difficultyColors = {
    easy: "border-green-200 text-green-800",
    medium: "border-yellow-200 text-yellow-800",
    hard: "border-red-200 text-red-800",
  }

  const difficultyLabels = {
    easy: "Kolay",
    medium: "Orta",
    hard: "Zor",
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg border">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
            {day}. Gün
          </Badge>
          <div className="text-sm text-gray-600">
            Skor: {score}/{day - 1}
          </div>
        </div>
        <Progress value={(day / totalDays) * 100} className="mb-4" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Senaryo Değerlendirmesi</CardTitle>
          <div className="flex space-x-2">
            <Badge className="bg-blue-100 text-blue-800">{competency}</Badge>
            <Badge variant="outline" className={difficultyColors[difficulty]}>
              {difficultyLabels[difficulty]}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 leading-relaxed">{scenario}</p>

          <div className="space-y-3">
            {options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index.toString() ? "default" : "outline"}
                className={`w-full h-auto p-4 text-left justify-start ${
                  selectedAnswer === index.toString() ? "bg-teal-600 hover:bg-teal-700" : ""
                }`}
                onClick={() => onAnswer(index)}
              >
                <span className="text-sm">{option}</span>
              </Button>
            ))}
          </div>

          {selectedAnswer && (
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" onClick={onNext}>
              Sonraki Güne Geç
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
