import * as React from "react"

import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const skills = [
  {
    name: "Developpement Web",
    description: "Creation de sites web responsives, adaptatifs et fonctionnels.",
  },
  {
    name: "Design UI/UX",
    description: "Conception d'interfaces utilisateur attrayantes et intuitives.",
  },
  {
    name: "Application Web",
    description: "Développement d'applications web dynamiques et interactives.",
  },
]

function SkillsComponents() {
  return (
    <div className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card className="max-w-xs mx-auto bg-gray-900 shadow-lg  sm:max-w-md md:max-w-xs lg:max-w-lg">
                  <CardContent className="flex flex-col justify-center text-center space-y-2">
                    <CardTitle className="text-2xl font-bold text-gray-300">{skill.name}</CardTitle>
                    <CardDescription className="text-md text-gray-200">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
          <CarouselPrevious style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translateY(-20%)",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "50%",
            cursor: "pointer",
          }} className="prev-btn" />
          <CarouselNext style={{
            position: "absolute",
            top: "50%",
            right: "30%",
            transform: "translateY(-20%)",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "50%",
            cursor: "pointer",
          }} className="next-btn" />
      </Carousel>
    </div>
  )
}

export default SkillsComponents
