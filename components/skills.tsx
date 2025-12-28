import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Shield } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "Python", "React.js", "JavaScript", "HTML/CSS", "UNIX", "JSON"],
  },
  {
    title: "Frameworks & Databases",
    icon: Database,
    skills: ["RESTful APIs", "Kafka", "Splunk", "Npm", "PyTorch", "MySQL", "PostgreSQL", "Oracle DB", "sqlite3"],
  },
  {
    title: "CI/CD, Testing & Cloud",
    icon: Cloud,
    skills: ["Jenkins", "Git", "JIRA", "Confluence", "Agile", "Postman", "AWS", "Docker"],
  },
  {
    title: "Cybersecurity Tools",
    icon: Shield,
    skills: ["Kali Linux", "Netcat", "Nmap", "Metasploit", "Nessus", "ARP poisoning", "DNS spoofing", "Ettercap"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
