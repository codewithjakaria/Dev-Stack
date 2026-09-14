# Dev Stack Builder

Dev Stack Builder is a responsive web application where users can explore popular development technologies and build their own development stack. Users can add technologies to their stack, remove them, and manage their selected items easily.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON

## Features

- Technology data is loaded from a JSON file.
- Users can add technologies to their stack and remove individual items.
- Duplicate technologies are prevented with toast notifications.
- A loading spinner is shown while technology data is loading.
- The website is responsive for mobile, tablet, and desktop screens.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that looks like HTML inside JavaScript or TypeScript. It is used in React to describe what the user interface should look like in an easy way.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data that belongs to a component and can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook stores changing data in a React component. In this project, I used it to store the selected technologies and loading status.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs code after the component is shown on the screen. I used it to fetch technology data from the JSON file when the page loads.

### 5. Why does every item in a .map() list need a unique key prop?

A unique `key` helps React identify each item in a list. It helps React update the correct item efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. In this project, I show the message “Your stack is empty” only when no technology has been added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component sends data to a child component through props. A child can send something back by calling a function that the parent passed as a prop.

## Links

- GitHub Repository Link: Add your GitHub repository link here
- Live Site Link: Add your Netlify or Vercel live site link here
