# Frontend Project

## Overview

This project is a React frontend application built using a feature-based architecture with a strong emphasis on separation of concerns.

The architecture aims to provide:

- Consistent structure across the codebase
- Clear ownership of logic
- High maintainability and scalability
- Easy onboarding for new developers

---

## Core Principles

- Feature-driven development
- One responsibility per file
- Explicit conventions over personal preferences
- UI is not business logic
- Tooling should enforce rules whenever possible

---

## Coding Standards & Conventions

### File Naming

- React Components must use PascalCase  
  UserCard.tsx  
  LoginForm.tsx

- Custom Hooks must start with `use`  
  useAuth.ts  
  useDebounce.ts

- Use Cases / Business Logic must use `.usecase.ts`  
  login.usecase.ts  
  fetchDashboardStats.usecase.ts

- Other files use camelCase  
  authService.ts  
  tokenStorage.ts

---

### One File, One Responsibility

- Each file must have a single, clear purpose
- Do not mix UI, business logic, and data access in one file

---

### Import Rules

- Use absolute imports

  import { Button } from '@/shared/ui/Button'

- Dependency direction:
  domain → data → ui

- UI must not depend directly on data implementations

---

### React Component Rules

- Function components only
- No API calls inside components
- No business logic inside UI
- Data flows through props

---

### State Management

- Global state is reserved for:
  - authentication
  - user session
  - app-wide configuration
- Prefer local state whenever possible

---

### Styling Rules

- Use a single styling strategy consistently
- Avoid inline styles except for small dynamic values
- Do not hardcode colors or spacing values

---

## Folder Structure

src/
├── app/
│ ├── providers/
│ ├── router/
│ └── store/
│
├── features/
│ ├── auth/
│ │ ├── domain/
│ │ ├── data/
│ │ ├── ui/
│ │
│ ├── dashboard/
│ │ ├── domain/
│ │ ├── data/
│ │ ├── ui/
│
├── shared/
│ ├── ui/
│ ├── hooks/
│ ├── utils/
│ ├── types/
│ └── constants/
│
├── lib/
│ ├── http/
│ ├── storage/
│ └── config/
│
├── assets/
│ ├── icons/
│ └── images/
│
├── styles/

---

## Folder Responsibilities

### app/

Application-level configuration.

- providers: global providers (theme, auth, query, etc.)
- router: routing configuration
- store: global state setup

---

### features/

Self-contained feature modules.

Each feature contains:

- domain: business rules and use cases
- data: API calls, repositories, mappers
- ui: pages, components, feature-specific hooks

Rules:

- Features must not import from other features
- Shared logic must live in shared/

---

### shared/

Reusable code across the application.

- ui: shared UI components
- hooks: reusable hooks
- utils: helper functions
- types: global TypeScript types
- constants: global constants

---

### lib/

Abstractions for external services.

- http: HTTP client setup
- storage: browser storage utilities
- config: environment configuration

---

### assets/

Static files such as icons and images.

---

### styles/

Global styling resources:

- resets
- variables
- themes
- base typography

---

## Prohibited Patterns

- API calls inside UI components
- Business logic in UI layer
- Cross-feature imports
- Unclear file naming or mixed responsibilities

---

## Final Goal

The codebase should be easy to read, easy to test, easy to extend, and difficult to accidentally break.
