# Day 12 and 13

Learning about React Router, Nested Routes, and Protected Routes.

## Lifting State Up

When a child component needs to update the state of a parent component, we use a pattern called "lifting state up."

---

## 1️⃣ What’s happening in your FIRST example (recommended way)

### App (Parent)

```jsx
const [theme, setTheme] = useState('dark');

const changeTheme = (newTheme) => {
  setTheme(newTheme);
};

<Form changeTheme={changeTheme} />
```

### Form (Child)

```jsx
const Form = ({ changeTheme }) => {
  const [newTheme, setNewTheme] = useState('');

  const changeCurrentTheme = (e) => {
    e.preventDefault();
    changeTheme(newTheme);
    setNewTheme('');
  };
};
```

### 🔑 What’s the concept here?

* **State lives in the parent** (`theme`)
* **Child does NOT own the state**
* Parent gives the child a **function**
* Child **requests** the parent to update its state

📌 This is called **“lifting state up”**
📌 Data flow remains **one-way** (Parent → Child)

✅ This is **clean**, **safe**, and **React’s recommended pattern**

---

## 2️⃣ What’s happening in your SECOND example (works, but not ideal)

### App

```jsx
<Form theme={theme} changeTheme={changeTheme} setTheme={setTheme} />
```

### Form

```jsx
const Form = ({ setTheme }) => {
  const changeCurrentTheme = (e) => {
    e.preventDefault();
    setTheme(newTheme);
  };
};
```

### 🔑 What changed?

* You passed **`setTheme` directly** to the child
* The child now **directly mutates parent state**

This works because:

```js
setTheme === useState updater function
```

But…

### ❌ Why this is NOT recommended

* Child now knows **how parent manages state**
* Tighter coupling
* Harder to debug & maintain in large apps
* Any child can change parent state **without control**

Think of it like:

> The child has access to the **parent’s remote control**, instead of asking politely 😅

---

## 3️⃣ So which one should I use?

### ✅ Best practice

```jsx
<Form changeTheme={changeTheme} />
```

Why?

* Parent stays in control
* Child stays reusable
* Clear separation of responsibilities

### ❌ Avoid (unless very small app)

```jsx
<Form setTheme={setTheme} />
```

---

## 4️⃣ Why this concept is IMPORTANT for Context API 🧠

Context API is basically:

> **Global Parent State**

### Example mental model

```txt
Context Provider (Parent)
   ↓
Component A
   ↓
Component B
   ↓
Component C
```

If you don’t understand:

* Parent owns state
* Children **consume** state
* Children **request changes**

👉 You’ll misuse Context.

---

## 5️⃣ Correct way with Context API (same pattern!)

```jsx
// ThemeContext.js
export const ThemeContext = createContext();
```

```jsx
<ThemeContext.Provider value={{ theme, changeTheme }}>
  <App />
</ThemeContext.Provider>
```

```jsx
const { theme, changeTheme } = useContext(ThemeContext);
```

📌 Notice:

* We pass **functions**, not `setState`
* Context consumers **don’t directly mutate state**
* Same rule as Parent → Child props

---

## 6️⃣ Key takeaway (very important)

| Concept           | Meaning                                        |
| ----------------- | ---------------------------------------------- |
| State ownership   | State belongs to the component that defines it |
| One-way data flow | Parent → Child                                 |
| Child → Parent    | Via **functions**, not direct setters          |
| Context API       | Global version of parent props                 |

---

## 7️⃣ Simple rule to remember 🔥

> " Pass **data down**, pass **functions up** "

---

