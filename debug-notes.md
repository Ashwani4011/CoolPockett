# Debug Notes

## 1. Password Show/Hide Toggle Issue

One issue I faced was while creating the password show/hide toggle button inside the input field.

Initially, the button positioning was not correct. It was either going outside the input field or overlapping the text. I also forgot to add proper right padding to the input, so the text and the button were clashing.

After debugging, I fixed it by:
- Wrapping the input inside a `relative` container
- Using `absolute` positioning for the button
- Adding extra right padding (`pr-*`) to the input
- Dynamically switching the input `type` between `"password"` and `"text"`

This helped me better understand positioning and controlled components in React.

---

## 2. Monthly Volume Indicator

I struggled while trying to think about how to implement the low-to-high monthly volume indicator.

The main issue was not the UI itself, but deciding:
- How to structure the state
- How to visually represent the selection
- How to dynamically update styles based on selection

Due to time constraints and some confusion in approach, I did not complete this widget.

---

## 3. Password Strength Indicator (Not Implemented)

I wanted to implement a password strength indicator, but I found the logic slightly tricky.

I was unsure how to:
- Score the password strength properly
- Handle conditions like uppercase, lowercase, numbers, special characters
- Visually represent strength levels (weak / medium / strong)

Instead of implementing a half-baked solution, I decided to leave it pending and plan to build it properly later using regex-based validation.

---

## 4. File Upload Preview Widget (Not Implemented)

I also did not complete the file upload widget that shows the selected filename dynamically.

The main challenge was:
- Managing file input state correctly
- Extracting and displaying the selected file name
- Styling it cleanly within the form layout

This is something I plan to improve.

---

## What I Learned

- Proper positioning in CSS (relative + absolute) is very important for building input-based widgets.
- State management becomes much easier when everything is centralized in Context API.
- Planning the logic before building UI saves time.
- Conditional rendering in React is powerful but can become messy if not structured properly.
- It’s better to leave a feature incomplete than to ship something broken or poorly implemented.

Overall, this project helped me improve my understanding of multi-step forms, conditional rendering, and centralized state management.
