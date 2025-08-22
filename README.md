# TS_Handson

Welcome to **TS_Handson**!  
This repository provides practical TypeScript examples focused on simple types and their real-world usage. All examples are located in the `TypeScript_SimpleTypes` directory.

---

## Directory Structure

```
TS_Handson/
│
├── TypeScript_SimpleTypes/
│   ├── TypeAssignment.ts
│   ├── TypeScriptArrays.ts
│   ├── TypeScriptObjectTypes.ts
│   ├── TypeScriptSpecialTypes.ts
│   └── TypeScriptTuples.ts
└── README.md
```

---

## File Descriptions

### [`TypeAssignment.ts`](TypeScript_SimpleTypes/TypeAssignment.ts)

- **Purpose:** Demonstrates how to assign values to variables using TypeScript's basic types.
- **Topics Covered:**
  - Explicit and implicit typing
  - Assigning `number`, `string`, and `boolean` types

### [`TypeScriptArrays.ts`](TypeScript_SimpleTypes/TypeScriptArrays.ts)

- **Purpose:** Shows how to work with arrays in TypeScript.
- **Topics Covered:**
  - Declaring arrays of specific types
  - Readonly arrays
  - Arrays with mixed types

### [`TypeScriptObjectTypes.ts`](TypeScript_SimpleTypes/TypeScriptObjectTypes.ts)

- **Purpose:** Explains how to define and use object types.
- **Topics Covered:**
  - Object property typing
  - Optional properties
  - Accessing and modifying object properties

### [`TypeScriptSpecialTypes.ts`](TypeScript_SimpleTypes/TypeScriptSpecialTypes.ts)

- **Purpose:** Introduces special types in TypeScript.
- **Topics Covered:**
  - The `any` type and its risks
  - The `unknown` type and safe usage patterns

### [`TypeScriptTuples.ts`](TypeScript_SimpleTypes/TypeScriptTuples.ts)

- **Purpose:** Provides examples of using tuples.
- **Topics Covered:**
  - Tuple declaration and access
  - Readonly tuples
  - Type-safe element access

---

## Getting Started

To run the examples in this repository:

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Compile TypeScript files:**

   ```sh
   npx tsc
   ```

3. **Run an example file:**
   ```sh
   node TypeScript_SimpleTypes/TypeAssignment.js
   ```

## 🧹 Linting & Formatting
🔎 Check lint issues npx eslint . --ext .ts
🛠️ Auto-fix lint issues npx eslint . --ext .ts --fix
🎨 Format with Prettier npx prettier --write .

## 📏 ESLint & Prettier
- ESLint catches errors and enforces rules such as:
- Missing await in Playwright actions (playwright/missing-playwright-await)
- Unused variables (@typescript-eslint/no-unused-vars)
- Forgotten promises (@typescript-eslint/no-floating-promises)
- Prettier enforces consistent formatting (quotes, semicolons, indentation, etc.)
- Integration: ESLint is configured to run Prettier as a rule (prettier/prettier).