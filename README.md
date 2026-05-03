# TypeScript Course for Beginner

> Beginner-friendly TypeScript course outline with simple explanations, practical code examples, and inline comments.

![TypeScript](https://img.shields.io/badge/TypeScript-Beginner-blue)
![Level](https://img.shields.io/badge/Level-Basic%20to%20Intermediate-green)
![Focus](https://img.shields.io/badge/Focus-React%20%7C%20API%20%7C%20AI-orange)

---

## Overview

This course is designed for beginners who want to learn **TypeScript** in a practical, structured, and easy-to-follow way.  
The content starts from the basics and gradually moves toward real development scenarios such as **React components**, **API calls**, and **AI-ready data structures**.

The teaching style focuses on:

- simple explanations
- short and clear examples
- **inline comments in code**
- practical structure that can be reused for teaching, SOPs, or team onboarding

---

## Course Objectives

By the end of this course, learners should be able to:

- understand what TypeScript is and why it matters
- use basic types correctly
- write functions with typed parameters and return values
- design objects with `interface` and `type`
- use arrays, unions, optionals, and narrowing
- split code into modules
- build simple UI with **React + TypeScript**
- call external APIs with typed responses
- design simple typed structures for **AI workflows**

---

## Suggested Audience

This course is suitable for:

- beginner developers
- JavaScript learners moving into TypeScript
- frontend learners who want to continue into React
- internal teams building coding standards or training materials
- instructors who need GitHub-ready teaching content

---

## Prerequisites

Before starting, learners should have a basic understanding of:

- JavaScript syntax
- variables and functions
- arrays and objects
- basic terminal or command line usage

---

## Recommended Tools

- **Node.js**
- **TypeScript**
- **Visual Studio Code**
- **Vite**
- **React**
- **Fetch API**

---

## Course Structure

| Module | Topic | Focus | Practice |
|---|---|---|---|
| 1 | Introduction to TypeScript | Why TypeScript, setup, compile | Hello TypeScript |
| 2 | Basic Types | string, number, boolean, array, object | User profile |
| 3 | Functions | typed parameters and return values | Payroll / score functions |
| 4 | Interfaces and Type Aliases | structured data models | Employee / course models |
| 5 | Union and Optional Types | flexible input handling | Search flow |
| 6 | Arrays and Data Processing | map, filter, find | Typed lists |
| 7 | Modules and File Structure | import / export | Split project files |
| 8 | Async and API | fetch, async/await, response typing | Public API call |
| 9 | React with TypeScript | props, state, JSX typing | UserCard component |
| 10 | Forms and Event Handling | input, submit, loading/error state | Search UI |
| 11 | Intro to AI-ready TypeScript | typed request/response design | Mock AI summary |
| 12 | Mini Capstone | combine all modules | Starter dashboard |

---

# Module 1: Introduction to TypeScript 🚀

## Learning Goal

Learners should understand that **TypeScript is JavaScript with type syntax added on top**.  
This helps developers catch mistakes earlier, improve editor suggestions, and make code easier to maintain.

## Key Concepts

- What TypeScript is
- Why TypeScript is useful
- `tsc` compiler
- `.ts` file
- first typed variable

## Example

```ts
// This variable must always be a string
const courseName: string = "TypeScript for Beginner"

// This variable must always be a number
const totalHours: number = 24

// This function takes a string and a number
// It returns a string
function getCourseIntro(name: string, hours: number): string {
  return `${name} has ${hours} hours.`
}

console.log(getCourseIntro(courseName, totalHours))
```

## Explanation

In this example, TypeScript checks the data type before the code is used.  
If someone tries to assign a wrong type, the editor and compiler can warn immediately.

## Practice

Create a file named `intro.ts` and define:

- your name
- your role
- your study hours
- one function to print an introduction

---

# Module 2: Variables and Basic Types 🧩

## Learning Goal

Learners should be able to declare basic types clearly and use them in real code.

## Key Concepts

- `string`
- `number`
- `boolean`
- `array`
- typed object

## Example

```ts
// A user's basic profile information
const fullName: string = "Phumin"
const age: number = 17
const isStudent: boolean = true

// An array of skills, and every item must be a string
const skills: string[] = ["TypeScript", "React", "API"]

// A typed object with fixed property types
const profile: {
  name: string
  age: number
  active: boolean
} = {
  name: fullName,
  age: age,
  active: isStudent,
}

console.log(profile)
```

## Explanation

This module builds the foundation.  
When beginners understand the basic types well, later topics such as interfaces, React props, and API responses become much easier.

## Practice

Build a typed object called `employeeProfile` with:

- `id`
- `name`
- `department`
- `isActive`

---

# Module 3: Functions and Return Types ⚙️

## Learning Goal

Learners should be able to type function inputs and outputs correctly.

## Key Concepts

- typed parameters
- return type
- default values
- arrow functions

## Example 1: Simple function

```ts
// This function accepts two numbers
// It returns a number
function addScore(scoreA: number, scoreB: number): number {
  return scoreA + scoreB
}

console.log(addScore(40, 35))
```

## Example 2: Arrow function

```ts
// This arrow function calculates overtime pay
// hours = overtime hours
// rate = pay per hour
const calculateOT = (hours: number, rate: number): number => {
  return hours * rate
}

console.log(calculateOT(2, 150))
```

## Example 3: Default parameter

```ts
// If no currency is provided, "THB" will be used by default
function formatSalary(amount: number, currency: string = "THB"): string {
  return `${amount} ${currency}`
}

console.log(formatSalary(18000))
```

## Explanation

Typing functions helps learners think clearly about:

- what must go in
- what comes out
- what data is allowed

This habit is very important when working with APIs, reusable utilities, and components.

---

# Module 4: Objects, Interfaces, and Type Aliases 🧱

## Learning Goal

Learners should be able to model real data with reusable structures.

## Key Concepts

- `interface`
- `type`
- reusable shape
- nested object

## Example 1: Interface

```ts
// Employee defines the exact structure required
interface Employee {
  id: number
  name: string
  department: string
  isActive: boolean
}

// This object must follow the Employee structure
const employee: Employee = {
  id: 101,
  name: "Phumin",
  department: "HR",
  isActive: true,
}
```

## Example 2: Type alias

```ts
// A reusable type for course level
type CourseLevel = "beginner" | "intermediate" | "advanced"

// A course object uses the custom type
const course: {
  title: string
  level: CourseLevel
} = {
  title: "TypeScript Basics",
  level: "beginner",
}
```

## Example 3: Nested object

```ts
interface UserAccount {
  username: string
  contact: {
    email: string
    phone: string
  }
}

const account: UserAccount = {
  username: "phumin.dev",
  contact: {
    email: "hello@example.com",
    phone: "000-000-0000",
  },
}
```

## Explanation

This module is where the course becomes more professional.  
Instead of typing the same object shape repeatedly, learners begin to define clear reusable models.

---

# Module 5: Union Types, Optional Properties, and Narrowing 🔍

## Learning Goal

Learners should be able to work with flexible input safely.

## Key Concepts

- union type
- optional property
- narrowing
- `typeof`

## Example 1: Union type

```ts
// SearchInput can be either a string or a number
// This allows the function to support two search styles
 type SearchInput = string | number

function searchUser(input: SearchInput): string {
  // Narrowing: check the real type before using it
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
  description?: string // This field is optional
}

const itemA: Product = {
  id: 1,
  name: "Keyboard",
}

const itemB: Product = {
  id: 2,
  name: "Mouse",
  description: "Wireless mouse",
}
```

## Explanation

Union and optional types make code more realistic.  
Real projects rarely receive only one perfect input format.

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

## Example

```ts
interface Task {
  id: number
  title: string
  done: boolean
}

const tasks: Task[] = [
  { id: 1, title: "Learn types", done: true },
  { id: 2, title: "Build component", done: false },
  { id: 3, title: "Call API", done: false },
]

// Filter only unfinished tasks
const pendingTasks: Task[] = tasks.filter((task) => !task.done)

// Create a new array with only task titles
const taskTitles: string[] = tasks.map((task) => task.title)

console.log(pendingTasks)
console.log(taskTitles)
```

## Explanation

This module is excellent for introducing real developer thinking:

- keep structure clean
- process lists safely
- transform data without losing type information

---

# Module 7: Modules and Project Structure 🗂️

## Learning Goal

Learners should be able to split code into files and reuse logic properly.

## Key Concepts

- `export`
- `import`
- reusable utilities
- cleaner project organization

## Example 1: `utils/math.ts`

```ts
// Export a reusable function from this file
export function add(a: number, b: number): number {
  return a + b
}
```

## Example 2: `app.ts`

```ts
// Import the add function from another file
import { add } from "./utils/math"

console.log(add(10, 5))
```

## Explanation

This is an important transition from beginner code to team-friendly code.  
Once learners understand modules, they can organize types, services, utilities, and UI components much better.

## Suggested Folder Structure

```bash
src/
├── components/
├── services/
├── types/
├── utils/
└── main.ts
```

---

# Module 8: Async Basics and API Calls 🌐

## Learning Goal

Learners should be able to fetch data from APIs and apply types to the result.

## Key Concepts

- `Promise`
- `async/await`
- `fetch`
- response typing
- `try/catch`

## Example

```ts
// Define the expected API response structure
interface UserApi {
  id: number
  name: string
  email: string
}

async function getUser(): Promise<UserApi> {
  // Send a request to the API
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

  // Convert the response into JSON
  // Then tell TypeScript the expected shape
  const data: UserApi = await response.json()

  return data
}

async function run(): Promise<void> {
  try {
    const user = await getUser()
    console.log(user.name)
    console.log(user.email)
  } catch (error) {
    console.error("Failed to fetch user data")
  }
}

run()
```

## Explanation

This module connects TypeScript to real-world work.  
It prepares learners for frontend apps, dashboards, admin tools, and later AI integrations.

---

# Module 9: React + TypeScript Basics ⚛️

## Learning Goal

Learners should be able to create simple typed React components.

## Key Concepts

- component props
- JSX with TypeScript
- typed state
- reusable UI

## Example

```tsx
// Define the props structure for the component
 type UserCardProps = {
  name: string
  role: string
}

// The component must receive props matching UserCardProps
export function UserCard({ name, role }: UserCardProps) {
  return (
    <div>
      {/* Display user name */}
      <h2>{name}</h2>

      {/* Display user role */}
      <p>{role}</p>
    </div>
  )
}
```

## Explanation

This module should remain simple for beginners.  
The goal is not to overload them with advanced React patterns, but to help them connect types with UI components.

---

# Module 10: Forms, Events, and API UI 🧾

## Learning Goal

Learners should be able to create a simple typed input form and handle user actions.

## Key Concepts

- event typing
- controlled input
- submit handling
- loading state
- error state

## Example

```tsx
import { useState } from "react"

export function SearchBox() {
  // query stores what the user types in the input
  const [query, setQuery] = useState<string>("")

  // loading tells the UI whether a request is in progress
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page reload
    event.preventDefault()

    setLoading(true)

    try {
      // Simulate async work
      console.log(`Searching for: ${query}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
      />

      <button type="submit">Search</button>

      {loading && <p>Loading...</p>}
    </form>
  )
}
```

## Explanation

This module prepares learners for typical frontend tasks:

- handling text input
- managing UI state
- connecting forms to API requests

---

# Module 11: Intro to AI-ready TypeScript 🤖

## Learning Goal

Learners should understand how typed request/response structures can prepare code for AI integrations.

## Key Concepts

- typed request payload
- typed response shape
- status control
- safe structure design

## Example

```ts
// A typed request sent to an AI-like function
 type SummaryRequest = {
  text: string
  tone: "formal" | "friendly"
}

// A typed response returned from the AI-like function
 type SummaryResponse = {
  success: boolean
  summary: string
}

function createMockSummary(data: SummaryRequest): SummaryResponse {
  return {
    success: true,
    summary: `Summary (${data.tone}): ${data.text}`,
  }
}

const result = createMockSummary({
  text: "TypeScript helps make code safer.",
  tone: "formal",
})

console.log(result.summary)
```

## Explanation

This module should stay beginner-friendly.  
It is not about advanced AI engineering yet.  
It is about teaching learners to structure data clearly so future AI work becomes easier.

---

# Module 12: Mini Capstone Project 🏁

## Project Name

**TypeScript Starter Dashboard**

## Goal

Combine all the previous modules into one small project.

## Suggested Features

- typed data model
- fetch API data
- display data in React components
- search/filter records
- loading and error state
- mock AI insight panel

## Suggested Output

A beginner portfolio project that shows:

- TypeScript basics
- React component structure
- API integration
- simple typed architecture

---

## Teaching Method Recommendation

To make this course easier to teach and easier to learn:

1. show the output first
2. explain the code step by step
3. keep examples short
4. use **inline comments** generously
5. add one mini practice activity at the end of each module
6. add a checkpoint exercise every 3 modules

---

## Suggested Repository Structure

```bash
typescript-course-beginner/
├── README.md
├── examples/
│   ├── module-01-intro.ts
│   ├── module-02-basic-types.ts
│   ├── module-03-functions.ts
│   ├── module-04-interfaces.ts
│   ├── module-05-union-optional.ts
│   ├── module-06-arrays.ts
│   ├── module-07-modules/
│   ├── module-08-api.ts
│   ├── module-09-react/
│   ├── module-10-form/
│   └── module-11-ai-ready.ts
└── capstone/
```

---

## Example Progression Path

A recommended learning path for beginners:

- **Week 1:** Modules 1–3
- **Week 2:** Modules 4–6
- **Week 3:** Modules 7–8
- **Week 4:** Modules 9–10
- **Week 5:** Modules 11–12

---

## Final Summary

This beginner TypeScript course is designed to be:

- practical
- teachable
- GitHub-ready
- easy to extend into React, API, and AI topics

It is suitable for personal study, internal developer training, or structured teaching materials.

---

## References (APA 7)

Microsoft. (n.d.). *The TypeScript handbook*. TypeScript Documentation. https://www.typescriptlang.org/docs/handbook/intro.html

Microsoft. (n.d.). *TypeScript documentation*. https://www.typescriptlang.org/docs/handbook/

Microsoft. (n.d.). *TypeScript for the new programmer*. TypeScript Documentation. https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

Microsoft. (n.d.). *React*. TypeScript Documentation. https://www.typescriptlang.org/docs/handbook/react.html

Microsoft. (n.d.). *Modules*. TypeScript Documentation. https://www.typescriptlang.org/docs/handbook/2/modules.html

Mozilla. (n.d.). *Using the Fetch API*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Mozilla. (n.d.). *Fetch API*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

React. (2025, February 14). *Sunsetting Create React App*. React Blog. https://react.dev/blog/2025/02/14/sunsetting-create-react-app

React. (n.d.). *Build a React app from scratch*. React Documentation. https://react.dev/learn/build-a-react-app-from-scratch

Vite. (n.d.). *Getting started*. Vite Documentation. https://vite.dev/guide/

---

## License

This content can be adapted for educational, internal training, and documentation use.
