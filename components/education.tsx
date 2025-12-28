import { Card } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    school: "University of Massachusetts Amherst",
    degree: "Master's of Science in Computer Science",
    period: "Feb 2024 – Dec 2025",
    gpa: "4.0/4.0",
    courses: [
      "Reinforcement Learning",
      "Advanced Algorithms",
      "Advanced NLP",
      "Neural Networks",
      "Data Science",
      "System Defense and Test",
      "Computer Networks and Security",
      "Advanced Database Systems",
      "Machine Learning",
      "Software Engineering",
    ],
  },
  {
    school: "Vellore Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    period: "Jul 2019 – May 2023",
    gpa: "9.20/10.0",
    courses: [
      "Algorithm Analysis",
      "Data Structures",
      "OOPS",
      "Internet of Things",
      "Discrete Math",
      "Statistics and Probability",
      "Compiler Design",
      "Computer Architecture",
      "Machine Learning",
    ],
  },
]

export function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{edu.school}</h3>
                  <p className="text-lg text-primary">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <div className="flex items-center gap-2 mt-1 md:justify-end">
                    <Award className="h-4 w-4 text-primary" />
                    <p className="font-semibold">GPA: {edu.gpa}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2 text-muted-foreground">Relevant Coursework:</p>
                <p className="text-sm leading-relaxed">{edu.courses.join(", ")}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
