const courseName: string = "TypeScript Course for Beginner"
const courseVersion: string = "v2.0.0-ts7.0-2026.07.26"
const recommendedTypeScript: string = "TypeScript 7.0+"
const totalHours: number = 24

type CourseLevel = "beginner" | "intermediate" | "advanced"

interface CourseProfile {
  name: string
  version: string
  level: CourseLevel
  recommendedTypeScript: string
  totalHours: number
  focusAreas: string[]
}

const courseProfile: CourseProfile = {
  name: courseName,
  version: courseVersion,
  level: "beginner",
  recommendedTypeScript,
  totalHours,
  focusAreas: ["Frontend", "React", "API", "AI Workflow", "GitHub Portfolio"],
}

function getCourseIntro(profile: CourseProfile): string {
  return `${profile.name} ${profile.version} uses ${profile.recommendedTypeScript} and covers ${profile.focusAreas.join(", ")}.`
}

console.log(getCourseIntro(courseProfile))
