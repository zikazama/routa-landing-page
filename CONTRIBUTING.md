# Contributing Guide

## Purpose

This document defines how to contribute to the project while maintaining architectural consistency and code quality.

---

## General Rules

- Follow all conventions defined in README.md
- Consistency is more important than personal preference
- If a pattern already exists, reuse it

---

## Creating a New Feature

1. Create a new folder under src/features
2. Split the feature into:
   - domain
   - data
   - ui
3. Ensure the feature is fully self-contained

---

## Domain Layer Rules

- Contains business rules and use cases
- Must not depend on UI or framework-specific code
- Use cases must:
  - use the .usecase.ts suffix
  - be deterministic and testable

---

## Data Layer Rules

- Handles:
  - API communication
  - data mapping
  - persistence
- Do not expose raw API responses to the UI layer

---

## UI Layer Rules

- UI components must:
  - be presentational
  - avoid business logic
  - avoid direct API calls
- UI consumes data via hooks or props

---

## Shared Code Guidelines

Before adding code to shared/, ensure that:

- it is used by more than one feature
- it is generic and feature-agnostic

---

## Commit Guidelines

- Keep commits small and focused
- Write clear, descriptive commit messages
- Avoid mixing unrelated changes

---

## Code Review Expectations

Pull requests may be rejected if they:

- violate architectural boundaries
- break naming conventions
- introduce unnecessary complexity
- duplicate existing logic

---

## Final Note

These rules exist to protect the codebase.
If something feels restrictive, it is probably working as intended.
