"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface QuestionPracticeProps {
  question: string
  category: string
  tips: string[]
}

export function QuestionPractice({ question, category, tips }: QuestionPracticeProps) {
  const [answer, setAnswer] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = () => {
    setShowFeedback(true)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{question}</CardTitle>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="min-h-32"
        />

        <Button onClick={handleSubmit} className="bg-teal-600 hover:bg-teal-700" disabled={!answer.trim()}>
          Get AI Feedback
        </Button>

        {showFeedback && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">AI Feedback</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              {tips.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
