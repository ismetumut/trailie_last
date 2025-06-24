"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"

interface JobCardProps {
  job: {
    id: string
    title: string
    company: string
    location: string
    salary: string
    match: number
    description: string
    requirements: string[]
    posted: string
  }
  onApply: () => void
}

export function JobCard({ job, onApply }: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {job.location}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {job.posted}
              </span>
            </div>
          </div>
          <div className="text-right space-y-2">
            <Badge className="bg-green-100 text-green-800">{job.match}% Match</Badge>
            <p className="text-sm font-medium">{job.salary}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.requirements.map((req, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {req}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-2">
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={onApply}>
            Apply Now
          </Button>
          <Button variant="outline">Save Job</Button>
        </div>
      </CardContent>
    </Card>
  )
}
