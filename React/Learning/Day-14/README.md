# React useContext Hook

In this lesson, we will learn about the `useContext` hook in React, which allows us to share state and data across multiple components without having to pass props down manually at every level.

## What is useContext?
The `useContext` hook is a built-in React hook that enables functional components to access context values. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## Creating a Context
To create a context, we use the `createContext` function from React. This function returns a context object that we can use to provide and consume values.
```jsx
import React, { createContext } from 'react';   
const MyContext = createContext(defaultValue);
```
## Providing Context Values
To provide context values to components, we use the `Provider` component that comes with the context object. The `Provider` component accepts a `value` prop, which is the data we want to share with the components that consume the context.
```jsx
<MyContext.Provider value={sharedValue}>
  <ChildComponent />
</MyContext.Provider>
```

## Consuming Context Values
To consume context values in a functional component, we use the `useContext` hook. We pass the context object to the `useContext` hook, and it returns the current context value.
```jsx
import React, { useContext } from 'react';
const value = useContext(MyContext);
```
## Example
Let's look at an example of how to use the `useContext` hook in a React application
```jsx
import React, { createContext, useContext } from 'react';
const UserContext = createContext();
const Navbar = (props) => {
  const user = useContext(UserContext);
  return (
    <div>
      Navbar - {user.name}
    </div>
  );
};
const App = () => {
    const user = { name: 'John Doe' };
    return (
        <UserContext.Provider value={user}>
            <Navbar />
        </UserContext.Provider>
    );
};
export default App;
```
In this example, we create a `UserContext` to share user information across components. The `Navbar` component consumes the context using the `useContext` hook and displays the user's name.

## Conclusion
The `useContext` hook is a powerful tool in React that allows us to share state and data across multiple components without prop drilling. By using context, we can simplify our component structure and make
our code more maintainable.
it easier to manage shared state.
## Exercises
1. Create a context for theme (light/dark) and use it to change the background color of a component.
2. Create a context for user authentication status and use it to conditionally render components based on whether the user is logged in or not.
3. Create a context for language preference and use it to display text in different languages based on the selected language.   
## Further Reading
- [React Context API](https://reactjs.org/docs/context.html)
- [Using the useContext Hook](https://reactjs.org/docs/hooks-reference.html#usecontext) 
<!-- ## Solution to Exercises
You can find the solutions to the exercises in the `solutions` folder in this repository. Each exercise has its own subfolder with the corresponding code implementation. -->

