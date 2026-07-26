# 🚀 TypeScript Course for Beginner

## หลักสูตร TypeScript 7 ระดับพื้นฐาน–ระดับกลาง สำหรับผู้เริ่มต้น

> เอกสารหลักสูตรฉบับปรับปรุงใหม่สำหรับ repository `PhuminDecOKnoi/TypeScript-for-Beginner` ใช้เป็น GitHub course outline, teaching notes, workshop guide, onboarding material และเอกสารอ้างอิงภายในทีมได้

![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-blue)
![React](https://img.shields.io/badge/React-19.2.8-61dafb)
![Vite](https://img.shields.io/badge/Vite-8.1.5-646cff)
![Level](https://img.shields.io/badge/Level-Beginner%20to%20Intermediate-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📌 Document Version

| Field | Value |
|---|---|
| Course Title | `TypeScript Course for Beginner` |
| Course Version | `v2.1.0-ts7.0-beginner-2026.07.26` |
| Documentation Reference | `v2.1.0-ref-2026.07.26` |
| TypeScript | `7.0.2` |
| React / React DOM | `19.2.8` |
| Vite | `8.1.5` |
| React Plugin | `@vitejs/plugin-react 6.0.3` |
| Runtime Validation | `Zod 4.4.3` |
| Testing | `Vitest 4.1.10 / React Testing Library 16.3.2` |
| Runtime | `Node.js 22+` |
| License | `MIT License` |
| Naming Standard | `lowercase-kebab-case` for files, folders and package names |

---

## 📖 ภาพรวมหลักสูตร

หลักสูตรนี้ออกแบบให้ผู้เริ่มต้นเรียน TypeScript ผ่านสถานการณ์จริง ไม่แยก syntax ออกจากการพัฒนาโปรแกรม ผู้เรียนจะเริ่มจากชนิดข้อมูล ฟังก์ชัน object model และ modules ก่อนต่อยอดไปสู่ React, API, runtime validation และ AI workflow

แนวทางสำคัญของหลักสูตร:

1. เรียนจากตัวอย่างสั้นและใช้งานได้จริง
2. ใช้ strict typing ตั้งแต่เริ่มต้น
3. อธิบายโค้ดด้วย inline comments ที่มีประโยชน์
4. แยก UI, service, types และ workflow อย่างเป็นระบบ
5. ใช้ GitHub-ready structure เพื่อฝึกมาตรฐานทีมพัฒนา
6. ตรวจคุณภาพด้วย type check, lint, test และ build

---

## 🎯 ผลลัพธ์การเรียนรู้

เมื่อจบหลักสูตร ผู้เรียนควรสามารถ:

- เข้าใจบทบาทของ TypeScript 7 และ type system
- ใช้ primitive types, arrays, tuples และ object types
- เขียน typed functions และ generic functions
- ออกแบบ `type`, `interface`, class และ reusable models
- ใช้ union, optional properties, narrowing และ discriminated union
- จัดโครงสร้างไฟล์ด้วย ES modules
- เขียน async functions และ typed API client
- ตรวจข้อมูลภายนอกด้วย Zod ก่อนใช้งาน
- สร้าง React function component พร้อม typed props, state, event และ ref
- ออกแบบ typed AI request/response และ workflow state
- ใช้ Vite, ESLint, Prettier, Vitest และ GitHub Actions
- จัดทำ README, CHANGELOG และ REFERENCE สำหรับงานจริง

---

## 👥 กลุ่มเป้าหมาย

- ผู้เรียน JavaScript ที่ต้องการเริ่ม TypeScript อย่างเป็นระบบ
- นักพัฒนา Frontend ระดับเริ่มต้น
- ผู้ที่ต้องการต่อยอดไป React, API และ AI application
- Trainer, Mentor และ Tech Lead ที่ต้องการสื่อการสอนพร้อมใช้
- ทีมที่ต้องการมาตรฐาน onboarding และ coding practice ร่วมกัน

---

## ✅ Prerequisites

ผู้เรียนควรมีพื้นฐานดังนี้:

- JavaScript variables, functions, arrays และ objects
- HTML และ CSS เบื้องต้น
- Terminal หรือ command line เบื้องต้น
- npm และ Git พื้นฐาน

---

## 🛠️ Current Stable Toolchain

| Category | Package | Version |
|---|---|---:|
| Language | `typescript` | `7.0.2` |
| UI | `react` | `19.2.8` |
| DOM renderer | `react-dom` | `19.2.8` |
| Build tool | `vite` | `8.1.5` |
| React build plugin | `@vitejs/plugin-react` | `6.0.3` |
| Runtime validation | `zod` | `4.4.3` |
| Lint | `eslint` | `10.7.0` |
| TypeScript lint | `typescript-eslint` | `8.65.0` |
| Formatter | `prettier` | `3.9.6` |
| Test runner | `vitest` | `4.1.10` |
| React testing | `@testing-library/react` | `16.3.2` |

> TypeScript 7 ใช้ native compiler architecture ที่มุ่งเพิ่มประสิทธิภาพการตรวจชนิดข้อมูลและ build workflow อย่างมาก อย่างไรก็ตาม เครื่องมือที่ฝัง TypeScript compiler API โดยตรงอาจต้องตรวจ compatibility เพิ่มเติม

---

## ⚙️ การติดตั้งและใช้งาน

```bash
npm install
npx tsc --version
npm run check
npm run build
npm start
```

สำหรับ React + Vite project:

```bash
npm run dev
npm run lint
npm test
npm run build
```

---

# 🧱 Course Structure

| Module | Topic | Main Output |
|---:|---|---|
| 1 | TypeScript 7 Foundation | project setup and first typed program |
| 2 | Variables and Basic Types | typed profile object |
| 3 | Functions and Generics | reusable typed functions |
| 4 | Objects, Interfaces and Classes | domain models |
| 5 | Union, Optional and Narrowing | safe workflow state |
| 6 | Arrays and Data Processing | typed collections |
| 7 | Modules and Project Structure | team-ready source layout |
| 8 | Async, API and Validation | typed API client with Zod |
| 9 | React 19 with TypeScript | typed component |
| 10 | Forms, Events and Refs | typed interactive form |
| 11 | AI-ready TypeScript | typed AI workflow |
| 12 | Mini Capstone | TypeScript starter dashboard |

---

# Module 1 — TypeScript 7 Foundation 🚀

## Learning Goal

เข้าใจว่า TypeScript คือ JavaScript ที่เพิ่ม type syntax และ compiler checks เพื่อช่วยตรวจข้อผิดพลาดก่อน runtime

## Key Concepts

- `.ts` และ `.tsx`
- type inference
- explicit annotations
- `tsc`
- strict mode
- `package.json` และ `tsconfig.json`

## Example

```ts
const courseName = "TypeScript Course for Beginner" // infer เป็น string
const totalHours: number = 24 // explicit number annotation

function getCourseIntro(name: string, hours: number): string {
  return `${name} has ${hours} learning hours.`
}

console.log(getCourseIntro(courseName, totalHours))
```

## Practice

สร้าง `src/intro.ts` ที่มีชื่อผู้เรียน บทบาท ชั่วโมงเรียน และฟังก์ชันแสดงข้อมูลแนะนำตัว

---

# Module 2 — Variables and Basic Types 🧩

## Key Concepts

- `string`, `number`, `boolean`
- arrays and tuples
- object types
- `unknown` instead of unsafe `any`
- readonly data

## Example

```ts
const fullName: string = "Phumin"
const studyHours: number = 12
const isActive: boolean = true
const skills: readonly string[] = ["TypeScript", "React", "API"]

const profile: {
  name: string
  hours: number
  active: boolean
} = {
  name: fullName,
  hours: studyHours,
  active: isActive,
}

console.log(profile, skills)
```

---

# Module 3 — Functions and Generics ⚙️

## Key Concepts

- typed parameters
- return types
- optional and default parameters
- arrow functions
- generic functions

## Example

```ts
function formatSalary(amount: number, currency = "THB"): string {
  return `${amount.toLocaleString("th-TH")} ${currency}`
}

function firstItem<T>(items: readonly T[]): T | undefined {
  return items[0]
}

console.log(formatSalary(18_000))
console.log(firstItem(["TypeScript", "React", "API"]))
```

---

# Module 4 — Objects, Interfaces and Classes 🧱

## Key Concepts

- `interface`
- `type`
- nested objects
- class for domain behavior
- constructor parameter properties

## Example

```ts
interface EmployeeProfile {
  id: number
  name: string
  department: string
  isActive: boolean
}

class Employee {
  constructor(
    public readonly id: number,
    public name: string,
    public department: string,
  ) {}

  describe(): string {
    return `${this.name} works in ${this.department}.`
  }
}

const employeeData: EmployeeProfile = {
  id: 101,
  name: "Phumin",
  department: "HR",
  isActive: true,
}

const employee = new Employee(employeeData.id, employeeData.name, employeeData.department)
console.log(employee.describe())
```

---

# Module 5 — Union, Optional and Narrowing 🔍

## Key Concepts

- union types
- optional properties
- `typeof` and `in`
- discriminated union
- exhaustive checks

## Example

```ts
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string }

function getStatusMessage<T>(state: RequestState<T>): string {
  switch (state.status) {
    case "idle":
      return "Ready"
    case "loading":
      return "Loading"
    case "success":
      return "Success"
    case "error":
      return state.message
  }
}
```

---

# Module 6 — Arrays and Typed Data Processing 📚

## Key Concepts

- typed arrays
- `map`, `filter`, `find`, `reduce`
- immutable transformations
- preserving type information

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

const pendingTasks = tasks.filter((task) => !task.done)
const taskTitles = tasks.map((task) => task.title)

console.log(pendingTasks, taskTitles)
```

---

# Module 7 — Modules and Project Structure 🗂️

## Recommended Structure

```text
src/
├── components/
├── services/
├── types/
├── utils/
├── workflows/
└── main.ts
```

## Naming Standard

- package, folder และ docs: `lowercase-kebab-case`
- variables/functions: `camelCase`
- types/interfaces/classes/components: `PascalCase`
- constants: `UPPER_SNAKE_CASE` เมื่อเป็นค่าคงที่จริง

## Example

```ts
// src/utils/math.ts
export function add(a: number, b: number): number {
  return a + b
}

// src/main.ts
import { add } from "./utils/math.js"

console.log(add(10, 5))
```

---

# Module 8 — Async, API and Runtime Validation 🌐

## Key Concepts

- `async` / `await`
- `Promise<T>`
- typed API response
- runtime validation
- error-safe service functions

## Example

```ts
import { z } from "zod"

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.email(),
})

type User = z.infer<typeof UserSchema>

export async function getUser(id: number): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return UserSchema.parse(await response.json())
}
```

---

# Module 9 — React 19 with TypeScript ⚛️

## Key Concepts

- function components
- typed props
- `useState<T>()`
- `ReactNode`
- component composition

## Example

```tsx
interface UserCardProps {
  name: string
  role: string
  children?: React.ReactNode
}

export function UserCard({ name, role, children }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      {children}
    </article>
  )
}
```

> Class components ควรเรียนเพื่ออ่าน legacy code และทำความเข้าใจ error boundary แต่แนวทางหลักของ React ปัจจุบันคือ function components และ hooks

---

# Module 10 — Forms, Events and Refs 📝

## Key Concepts

- `React.ChangeEvent`
- `React.FormEvent`
- `useRef<HTMLInputElement>()`
- controlled inputs
- loading and error state

## Example

```tsx
import { useRef, useState } from "react"

export function SearchBox() {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    console.log(`Searching for: ${query}`)
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}
```

---

# Module 11 — AI-ready TypeScript 🤖

## Key Concepts

- typed prompt request
- structured response
- provider interface
- workflow state
- validation at external boundaries

## Example

```ts
interface AiPromptRequest {
  prompt: string
  tone: "formal" | "friendly"
}

interface AiPromptResponse {
  id: string
  output: string
  model: string
}

interface AiProvider {
  generate(request: AiPromptRequest): Promise<AiPromptResponse>
}

export async function runAiWorkflow(
  provider: AiProvider,
  request: AiPromptRequest,
): Promise<AiPromptResponse> {
  return provider.generate(request)
}
```

---

# Module 12 — Mini Capstone: TypeScript Starter Dashboard 🏁

## Required Features

- React 19 UI
- typed props and state
- API service layer
- Zod runtime validation
- search/filter function
- loading/success/error state
- mock AI insight workflow
- unit test for one component or service
- GitHub-ready README and changelog

## Expected Structure

```text
src/
├── components/
│   ├── dashboard-card.tsx
│   └── search-box.tsx
├── services/
│   └── api-client.ts
├── workflows/
│   └── ai-workflow.ts
├── app.tsx
└── main.tsx
```

---

## 🧪 Quality Commands

```bash
npm run format:check
npm run check
npm run lint
npm test
npm run build
```

ก่อน merge เข้า `main` ควรให้ทุกคำสั่งผ่าน และควร commit `package-lock.json` หลัง `npm install` สำเร็จเพื่อควบคุม dependency versions

---

## 📚 Learning Path

| Phase | Focus |
|---|---|
| Week 1 | Modules 1–3: TypeScript foundation and functions |
| Week 2 | Modules 4–6: models, unions and collections |
| Week 3 | Modules 7–8: modules, API and validation |
| Week 4 | Modules 9–10: React components and forms |
| Week 5 | Modules 11–12: AI workflow and capstone |

---

## 📏 Documentation and Coding Rules

- ใช้ explicit return type สำหรับ public functions
- หลีกเลี่ยง `any`; ใช้ `unknown` และ narrowing
- แยก external transport data ออกจาก domain model
- ตรวจข้อมูลภายนอกก่อนใช้งาน
- ใช้ lowercase kebab-case สำหรับไฟล์และโฟลเดอร์
- อัปเดต README, CHANGELOG และ REFERENCE พร้อมกันเมื่อเปลี่ยน version
- ใช้ Conventional Commits เช่น `feat:`, `fix:`, `docs:`, `test:`, `chore:`

---

## 📜 License

เอกสารและโค้ดตัวอย่างใน repository นี้เผยแพร่ภายใต้ **MIT License** สามารถใช้ คัดลอก แก้ไข และแจกจ่ายได้ตามเงื่อนไขในไฟล์ `LICENSE`

---

## 🧾 Maintenance Log

| Version | Date | Description |
|---|---|---|
| `v1.0.0` | `2026-04-19` | Initial beginner course document |
| `v2.0.0-ts7.0-2026.07.26` | `2026-07-26` | Updated course baseline for TypeScript 7 and MIT License |
| `v2.1.0-ts7.0-beginner-2026.07.26` | `2026-07-26` | Updated full beginner curriculum for TypeScript 7.0.2, React 19.2.8, Vite 8.1.5, API validation, AI workflow, testing and GitHub engineering practice |

---

## ✅ Final Summary

หลักสูตรฉบับนี้เป็นแนวทางเรียน TypeScript จากพื้นฐานไปสู่การพัฒนา application สมัยใหม่ โดยเชื่อม **TypeScript 7 + React 19 + API + runtime validation + AI workflow + testing + GitHub practice** ไว้ในเส้นทางเดียวกัน เหมาะสำหรับการเรียนด้วยตนเอง การอบรมภายใน และการสร้าง GitHub portfolio ที่มีมาตรฐานครับ
