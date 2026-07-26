<img height="320" alt="TypeScript Course for Beginner" src="https://github.com/user-attachments/assets/156d3695-1d21-4b07-b298-3e8b04e22108" />

# TypeScript Course for Beginner

> A beginner-friendly, GitHub-ready TypeScript course updated for **TypeScript 7.0**, with practical examples, modern project structure, strict typing, React/API/AI workflow preparation, and free-to-use learning content.

![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue)
![Level](https://img.shields.io/badge/Level-Beginner%20to%20Intermediate-green)
![Focus](https://img.shields.io/badge/Focus-Frontend%20%7C%20React%20%7C%20API%20%7C%20AI-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Course Version](https://img.shields.io/badge/Course-v2.0.0--ts7.0-purple)

---

## Repository Version

| Field | Value |
|---|---|
| Course Name | `TypeScript Course for Beginner` |
| Course Version | `v2.0.0-ts7.0-2026.07.26` |
| Recommended TypeScript | `TypeScript 7.0+` |
| Compatibility Track | `TypeScript 6.0+ / 7.0+` |
| Runtime | `Node.js LTS` |
| License | `MIT License` |
| Status | `Updated for TypeScript 7.0` |

---

## TypeScript 7.0 Update

TypeScript 7.0 is a major modernization of the TypeScript toolchain. This course updates the original beginner content to align with modern TypeScript learning and project usage.

### What changed in this course

- Added **TypeScript 7.0** as the recommended compiler version.
- Added a modern `tsconfig.json` baseline.
- Added strict typing habits from the beginning.
- Updated the learning path for frontend, React, API, dashboard, and AI workflow use cases.
- Added practical standards for GitHub portfolio and team coding practice.
- Updated the license model to **MIT License**, allowing free use, modification, and distribution under the license terms.

### Important ecosystem note

TypeScript 7.0 is suitable for learning and many projects. Some tools that deeply embed the TypeScript compiler API may still need a TypeScript 6.x compatibility path until their ecosystem fully supports TypeScript 7.x.

---

## Installation

Install dependencies:

```bash
npm install
```

Check TypeScript version:

```bash
npx tsc --version
```

Run type checking:

```bash
npm run check
```

Build the project:

```bash
npm run build
```

Run the starter example after build:

```bash
npm start
```

---

## Recommended Tools

| Tool | Purpose |
|---|---|
| Node.js LTS | JavaScript runtime and package management |
| TypeScript 7.0+ | Type checking and compilation |
| Visual Studio Code | Code editor with TypeScript support |
| Vite | Modern frontend project tooling |
| React | Component-based UI development |
| Fetch API | API integration practice |
| Git + GitHub | Version control and portfolio publishing |

---

## Course Objectives

By the end of this course, learners should be able to:

- explain what TypeScript is and why it matters;
- set up a TypeScript 7.0 project;
- configure `tsconfig.json` for strict learning practice;
- use basic types correctly;
- write typed functions with clear inputs and outputs;
- design data models with `interface` and `type`;
- use unions, optionals, narrowing, and typed arrays;
- organize code with modules and clean folder structure;
- call APIs with typed responses;
- build simple React components with TypeScript;
- design typed request/response objects for AI workflows;
- publish a clean GitHub portfolio repository.

---

## Suggested Audience

This course is suitable for:

- beginner developers;
- JavaScript learners moving into TypeScript;
- frontend learners preparing for React;
- students building a GitHub portfolio;
- trainers creating coding lessons;
- teams creating beginner-friendly coding standards.

---

## Prerequisites

Before starting, learners should understand:

- basic JavaScript syntax;
- variables and functions;
- arrays and objects;
- basic terminal usage;
- basic Git/GitHub concepts.

---

## Recommended Project Structure

```text
typescript-course-for-beginner/
├── README.md
├── REFERENCE.md
├── LICENSE
├── package.json
├── tsconfig.json
└── src/
    └── intro.ts
```

For larger learning projects, extend the structure as follows:

```text
src/
├── components/
├── services/
├── types/
├── utils/
└── main.ts
```

---

## Course Structure

| Module | Topic | Focus | Practice |
|---:|---|---|---|
| 1 | TypeScript 7.0 Introduction | Why TypeScript, setup, compiler, strict mode | Hello TypeScript |
| 2 | Variables and Basic Types | `string`, `number`, `boolean`, array, object | User profile |
| 3 | Functions and Return Types | typed parameters, return values, default values | Payroll / score functions |
| 4 | Objects, Interfaces, and Type Aliases | reusable data models | Employee / course models |
| 5 | Union, Optional, and Narrowing | safe flexible input | Search flow |
| 6 | Arrays and Data Processing | `map`, `filter`, `find`, readonly patterns | Typed lists |
| 7 | Modules and Project Structure | `import`, `export`, file separation | Utility module |
| 8 | Async and API Integration | `fetch`, `async/await`, typed response | Public API call |
| 9 | React with TypeScript | props, state, component typing | UserCard component |
| 10 | Forms and Event Handling | form typing, loading/error state | Search UI |
| 11 | AI-ready TypeScript | typed prompt/request/response design | Mock AI summary |
| 12 | Mini Capstone | combine all modules | Starter dashboard |

---

# Module 1: TypeScript 7.0 Introduction 🚀

## Learning Goal

Learners should understand that **TypeScript is JavaScript with type syntax**. TypeScript helps developers catch mistakes earlier, improve editor suggestions, and make code easier to maintain.

## Key Concepts

- TypeScript as a typed superset of JavaScript
- TypeScript 7.0 project setup
- `tsc` compiler
- `.ts` files
- strict typing habit

## Example

```ts
const courseName: string = "TypeScript Course for Beginner"
const courseVersion: string = "v2.0.0-ts7.0-2026.07.26"
const totalHours: number = 24

function getCourseIntro(name: string, version: string, hours: number): string {
  return `${name} (${version}) has ${hours} learning hours.`
}

console.log(getCourseIntro(courseName, courseVersion, totalHours))
```

## Practice

Create `src/intro.ts` and define:

- your name;
- your role;
- your target learning hours;
- one function that returns a typed introduction message.

---

# Module 2: Variables and Basic Types 🧩

## Learning Goal

Learners should be able to declare basic types clearly and use them in real code.

## Key Concepts

- `string`
- `number`
- `boolean`
- typed arrays
- typed objects

## Example

```ts
const fullName: string = "Phumin"
const age: number = 17
const isStudent: boolean = true
const skills: string[] = ["TypeScript", "React", "API"]

type Profile = {
  name: string
  age: number
  active: boolean
  skills: string[]
}

const profile: Profile = {
  name: fullName,
  age,
  active: isStudent,
  skills,
}

console.log(profile)
```

## Practice

Build a typed object called `employeeProfile` with:

- `id`
- `name`
- `department`
- `isActive`
- `skills`

---

# Module 3: Functions and Return Types ⚙️

## Learning Goal

Learners should be able to type function inputs and outputs correctly.

## Key Concepts

- typed parameters
- return type
- default values
- arrow functions
- readable utility functions

## Example 1: Simple function

```ts
function addScore(scoreA: number, scoreB: number): number {
  return scoreA + scoreB
}

console.log(addScore(40, 35))
```

## Example 2: Arrow function

```ts
const calculateOvertimePay = (hours: number, rate: number): number => {
  return hours * rate
}

console.log(calculateOvertimePay(2, 150))
```

## Example 3: Default parameter

```ts
function formatSalary(amount: number, currency: string = "THB"): string {
  return `${amount.toLocaleString()} ${currency}`
}

console.log(formatSalary(18000))
```

## Practice

Create three typed functions:

- `calculateTotalScore()`
- `calculateOvertimePay()`
- `formatCurrency()`

---

# Module 4: Objects, Interfaces, and Type Aliases 🧱

## Learning Goal

Learners should be able to model real data with reusable structures.

## Key Concepts

- `interface`
- `type`
- reusable object shapes
- nested object types
- literal union types

## Example 1: Interface

```ts
interface Employee {
  id: number
  name: string
  department: string
  isActive: boolean
}

const employee: Employee = {
  id: 101,
  name: "Phumin",
  department: "HR",
  isActive: true,
}
```

## Example 2: Type alias

```ts
type CourseLevel = "beginner" | "intermediate" | "advanced"

type Course = {
  title: string
  level: CourseLevel
  version: string
}

const course: Course = {
  title: "TypeScript Basics",
  level: "beginner",
  version: "v2.0.0-ts7.0-2026.07.26",
}
```

## Practice

Create reusable types for:

- `Student`
- `Course`
- `Lesson`
- `Enrollment`

---

# Module 5: Union Types, Optional Properties, and Narrowing 🔍

## Learning Goal

Learners should be able to work with flexible input safely.

## Key Concepts

- union type
- optional property
- narrowing
- `typeof`
- safe branching

## Example 1: Union type

```ts
type SearchInput = string | number

function searchUser(input: SearchInput): string {
  if (typeof input === "string") {
    return `Search by keyword: ${input}`
  }

  return `Search by user id: ${input}`
}

console.log(searchUser("john"))
console.log(searchUser(101))
```

## Example 2: Optional property

```ts
interface Product {
  id: number
  name: string
  description?: string
}

const keyboard: Product = {
  id: 1,
  name: "Keyboard",
}

const mouse: Product = {
  id: 2,
  name: "Mouse",
  description: "Wireless mouse",
}
```

## Practice

Create a `findCourse()` function that accepts either:

- a numeric course ID; or
- a text keyword.

---

# Module 6: Arrays and Typed Data Processing 📚

## Learning Goal

Learners should be able to store and transform multiple records safely.

## Key Concepts

- typed arrays
- array of objects
- `map()`
- `filter()`
- `find()`
- `readonly` learning habit

## Example

```ts
interface Task {
  id: number
  title: string
  done: boolean
}

const tasks: readonly Task[] = [
  { id: 1, title: "Learn types", done: true },
  { id: 2, title: "Build component", done: false },
  { id: 3, title: "Call API", done: false },
]

const pendingTasks: Task[] = tasks.filter((task) => !task.done)
const taskTitles: string[] = tasks.map((task) => task.title)
const apiTask: Task | undefined = tasks.find((task) => task.title.includes("API"))

console.log(pendingTasks)
console.log(taskTitles)
console.log(apiTask)
```

## Practice

Create a typed list of courses and produce:

- all course titles;
- beginner-level courses only;
- the first course that contains `API` in the title.

---

# Module 7: Modules and Project Structure 🗂️

## Learning Goal

Learners should be able to split code into files and reuse logic properly.

## Key Concepts

- `export`
- `import`
- reusable utilities
- clean project organization
- domain folders

## Example 1: `src/utils/math.ts`

```ts
export function add(a: number, b: number): number {
  return a + b
}
```

## Example 2: `src/main.ts`

```ts
import { add } from "./utils/math"

console.log(add(10, 5))
```

## Practice

Create these files:

```text
src/
├── utils/math.ts
├── types/course.ts
└── main.ts
```

---

# Module 8: Async and API Integration 🌐

## Learning Goal

Learners should be able to call APIs and type the response data clearly.

## Key Concepts

- `async`
- `await`
- `Promise<T>`
- typed API response
- error handling

## Example

```ts
interface UserApiResponse {
  id: number
  name: string
  email: string
}

async function getUser(userId: number): Promise<UserApiResponse> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  const data = (await response.json()) as UserApiResponse
  return data
}

getUser(1)
  .then((user) => console.log(user))
  .catch((error: unknown) => console.error(error))
```

## Practice

Create a typed function called `getPost()` that returns:

- `id`
- `title`
- `body`
- `userId`

---

# Module 9: React with TypeScript ⚛️

## Learning Goal

Learners should understand how TypeScript improves React component safety.

## Key Concepts

- props typing
- component return value
- state typing
- reusable UI models

## Example: `UserCard.tsx`

```tsx
type UserCardProps = {
  name: string
  role: string
  active?: boolean
}

export function UserCard({ name, role, active = true }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Status: {active ? "Active" : "Inactive"}</p>
    </article>
  )
}
```

## Practice

Create a `CourseCard` component with typed props:

- `title`
- `level`
- `durationHours`
- `published`

---

# Module 10: Forms and Event Handling 📝

## Learning Goal

Learners should be able to type form events and state in React.

## Key Concepts

- `useState<string>`
- `React.FormEvent<HTMLFormElement>`
- input handling
- loading state
- error state

## Example

```tsx
import { useState } from "react"

export function SearchBox() {
  const [query, setQuery] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      console.log(`Searching for: ${query}`)
    } catch {
      setError("Search failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <button type="submit" disabled={loading}>Search</button>
      {error && <p>{error}</p>}
    </form>
  )
}
```

## Practice

Create a form for adding a course title and course level.

---

# Module 11: AI-ready TypeScript 🤖

## Learning Goal

Learners should be able to design typed request/response structures for AI workflows.

## Key Concepts

- request model
- response model
- status model
- error model
- typed mock service

## Example

```ts
type SummaryTone = "formal" | "friendly" | "technical"

interface SummaryRequest {
  text: string
  tone: SummaryTone
  maxWords: number
}

interface SummaryResponse {
  success: boolean
  summary: string
  model?: string
  error?: string
}

function createMockSummary(request: SummaryRequest): SummaryResponse {
  if (request.text.trim().length === 0) {
    return {
      success: false,
      summary: "",
      error: "Text is required",
    }
  }

  return {
    success: true,
    summary: `Summary (${request.tone}, max ${request.maxWords} words): ${request.text}`,
    model: "mock-ai-service",
  }
}
```

## Practice

Design types for an AI lesson assistant:

- `LessonPromptRequest`
- `LessonPromptResponse`
- `PromptTone`
- `PromptStatus`

---

# Module 12: Mini Capstone Dashboard 📊

## Learning Goal

Learners should combine TypeScript basics into a small dashboard-style project.

## Capstone Features

Build a **TypeScript Starter Dashboard** with:

- typed course list;
- typed task list;
- API service module;
- search/filter function;
- loading and error states;
- mock AI insight function;
- README documentation.

## Suggested Types

```ts
type CourseLevel = "beginner" | "intermediate" | "advanced"

interface DashboardCourse {
  id: number
  title: string
  level: CourseLevel
  durationHours: number
  completed: boolean
}

interface DashboardInsight {
  totalCourses: number
  completedCourses: number
  pendingCourses: number
  recommendation: string
}
```

## Suggested Output

```text
TypeScript Starter Dashboard
- Total courses: 12
- Completed: 4
- Pending: 8
- AI insight: Focus on API and React modules next.
```

---

## Team Coding Standard

Recommended beginner standard:

- Use `strict` mode.
- Prefer clear `interface` or `type` names.
- Avoid `any` unless there is a clear reason.
- Use `unknown` for uncertain error values.
- Keep functions small and typed.
- Keep API response types separate from UI component props.
- Document examples with short inline comments.
- Keep GitHub commits clear and readable.

---

## Learning Roadmap

| Week | Focus | Output |
|---:|---|---|
| 1 | TypeScript setup and basic types | `intro.ts`, typed profile |
| 2 | Functions, objects, interfaces | typed utility functions |
| 3 | Arrays, unions, modules | small typed data processor |
| 4 | Async, API, React | typed API call and component |
| 5 | AI workflow and capstone | starter dashboard |

---

## GitHub Portfolio Guidance

A clean TypeScript learning repo should show:

- clear `README.md`;
- version and reference file;
- license file;
- runnable examples;
- strict `tsconfig.json`;
- short commit messages;
- practical examples that explain why TypeScript matters.

---

## References

- [Announcing TypeScript 7.0 - Microsoft TypeScript Blog](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [GitHub Docs: Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

---

## License

This project is released under the **MIT License**.

The content is free to use, copy, modify, and distribute under the license terms. See [`LICENSE`](./LICENSE) for details.

---

## Final Summary

This repository is now positioned as a modern **TypeScript 7.0 beginner course** that can be reused for:

- self-learning;
- teaching and training;
- GitHub portfolio development;
- team onboarding;
- frontend / React / API / AI workflow preparation.
