import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Software Engineer & ML / AI Engineer</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">Jyothirmai Puram</h1>
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
              I am a dedicated software developer with a strong interest in collaborating on projects involving machine learning and reinforcement learning.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#contact">
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:jpuram@umass.edu">jpuram@umass.edu</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-8 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Currently</p>
                <p>Graduated from MS in Computer Science @ UMass Amherst</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Previously</p>
                <p>Software Engineer @ Kinaxis</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Location</p>
                <p>Boston, MA</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Jyothirmai Puram"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
