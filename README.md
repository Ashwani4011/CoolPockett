# CoolPockett Account Opening Wizard

## Overview

This project is a 4-step mobile-first account opening wizard built for a fictional fintech app called **CoolPockett**.

The goal of this project was to create a functional onboarding flow with step navigation, conditional rendering, and centralized state management using React. The focus was on implementing the core logic and dynamic behavior between steps rather than heavy UI polish.

---

## Tech Stack

- React (Functional Components + Hooks)
- React Router DOM
- Context API (Global state management)
- React Icons
- Tailwind CSS

---

## Features Implemented

### 4-Step Wizard Flow

- Next / Back navigation between steps
- Conditional rendering based on user selections
- Centralized state using Context API
- Shared form data across all steps without prop drilling

> Note: Form data currently resets on page refresh. LocalStorage persistence is not implemented yet.

---

## Step Breakdown

### Step 1 — Account Basics

Fields:
- Full Name
- Email
- Phone
- Country
- Password

Widget implemented:
- Password show/hide toggle

Pending:
- Password strength indicator

---

### Step 2 — Account Setup

- Account Type (Individual / Business)
- Product Goal (Spend / Save / Invest)
- Touch-friendly selectable card UI

Pending:
- Progress indicator
- Monthly volume low-to-high indicator

---

### Step 3 — Conditional Details

This step dynamically changes based on:

**Account Type**
- Individual → DOB, Address, ID details
- Business → Legal name, Registration country, Role

**Country (from Step 1)**
- US → State + SSN last 4
- IN → PAN
- Other → National ID

Pending:
- File upload widget with selected filename preview

---

### Step 4 — Review & Submit

- Summary of all entered data
- Account preview based on selected options
- Confirmation state after submission

---

## State Management

Context API is used to:

- Store form data
- Manage step navigation
- Dynamically update UI across components

This avoids excessive prop drilling and keeps the application state centralized.

---

## Validation

- Basic step-level validation implemented
- Navigation blocked if required fields are empty

Pending improvements:
- Stronger password validation
- More detailed field-level validation

---

## Future Improvements

If continued further, the following improvements would be added:

- Password strength indicator
- File upload preview widget
- Progress indicator
- Monthly volume indicator
- LocalStorage persistence for resume-after-reload
- Improved validation logic
- Reusable custom validation hook

---

## Trade-offs

- Focused more on core functionality and conditional logic.
- Used Context API instead of external state libraries for simplicity.
- Some UI widgets were left pending due to time constraints.

---

## Deployment

- GitHub: https://github.com/Ashwani4011/CoolPockett
- Live Demo: https://cool-pockett-ivory.vercel.app/
