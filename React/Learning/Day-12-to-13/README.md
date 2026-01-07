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

## **Let's Understand WHY passing a function is better than passing the state setter directly.**

## 1️⃣ “Function se bhi change ho raha hai, state se bhi” - TRUE ✅

You are 100% right:

```js
changeTheme(newTheme)   // calls setTheme inside parent
```

and

```js
setTheme(newTheme)      // directly updates parent state
```

👉 **Both ultimately call `setTheme`**
👉 **Both update the state**
👉 **Both re-render the UI**

So the confusion is valid.

---

## 2️⃣ Then WHY is passing a function better? 🤔

The difference is **NOT what changes**
The difference is **WHO IS IN CONTROL**

---

## 3️⃣ Think in terms of “ownership” 🧠

### Parent owns the state

```js
const [theme, setTheme] = useState('dark');
```

Ownership means:

* Parent decides **when**
* Parent decides **how**
* Parent decides **what values are allowed**

---

## 4️⃣ Case 1: Passing a FUNCTION (good design)

```jsx
<Form changeTheme={changeTheme} />
```

```js
const changeTheme = (newTheme) => {
  setTheme(newTheme);
};
```

### What the child knows:

> “If I want to change theme, I call `changeTheme()`”

### What the child does NOT know:

* How state is stored
* Whether it’s `useState`, Redux, Context, API call
* Any validation logic

📌 Child just **requests** a change
📌 Parent **decides** what happens

Example:

```js
const changeTheme = (newTheme) => {
  if (newTheme === '') return;
  if (newTheme.length > 10) return;
  setTheme(newTheme.toUpperCase());
};
```

✨ Child code does NOT change at all

---

## 5️⃣ Case 2: Passing `setTheme` (bad design)

```jsx
<Form setTheme={setTheme} />
```

```js
setTheme(newTheme);
```

### What the child now knows:

❌ Parent uses `useState`
❌ Parent allows ANY value
❌ Child can break logic

Example problem:

```js
setTheme(null);
setTheme({});
setTheme(123);
```

Now your parent state is corrupted 💥

📌 Child is no longer “requesting”
📌 Child is **commanding**

---

## 6️⃣ Real-life analogy (important)

### ❌ Passing `setTheme`

> Giving your house keys to a stranger
> They can enter anytime, do anything.

### ✅ Passing `changeTheme`

> Doorbell
> They ask → you decide whether to open.

---

## 7️⃣ “But child anyway changes the state…”

Yes - but **indirectly**.

React is all about **controlled side effects**.

> Indirect control = safe
> Direct control = fragile

---

## 8️⃣ Why seniors are strict about this 😅

In real apps:

* Theme logic becomes complex
* You add:

  * validation
  * API sync
  * localStorage
  * analytics
  * permissions

Example:

```js
const changeTheme = (newTheme) => {
  logEvent("THEME_CHANGED");
  localStorage.setItem("theme", newTheme);
  setTheme(newTheme);
};
```

If child used `setTheme` directly → you’d have to update **every child**

🚫 Nightmare
✅ Centralized control

---

## 9️⃣ How this connects to Context API (very important)

Context is basically:

```js
<Form changeTheme={changeTheme} />
```

but **globally**

If you expose:

```js
value={{ theme, setTheme }}
```

❌ Every component can break your state

If you expose:

```js
value={{ theme, changeTheme }}
```

✅ Safe, scalable, professional

---

## 🔥 Final one-line answer (remember this)

> **Passing a function is better because it gives CONTROL to the parent, not POWER to the child.**

---

## **Understanding Data Flow, State Ownership, and When to Use `useContext`**

Below I’ll explain:

1. **Mental model (how workflow actually goes)**
2. **Common patterns you should master before `useContext`**
3. **3 clear real-world examples**
4. **When `useContext` becomes necessary**

No code dumping without logic — focus on *why* things work.

---

## 1️⃣ Core Mental Model (MOST IMPORTANT)

Think of React like this:

> 🔹 **State lives at the highest component that needs it**

> 🔹 **Data flows DOWN (props)**

> 🔹 **Events flow UP (functions)**

### Visual flow

```
App (state)
 ↓ props
Parent
 ↓ props
Child
 ↑ function call
Parent
 ↑ function call
App
```

❗ React does **NOT** allow:

* Child directly changing parent state
* Sibling talking directly to sibling

Everything goes through the **closest common parent**.

---

## 2️⃣ Patterns You MUST Know Before `useContext`

### Pattern 1: **Child → Parent (you already know this)**

You did this perfectly.

**Use when**:

* Child triggers a change
* Parent owns the data

Example:

* Counter buttons
* Form input changes
* Toggle switches

---

### Pattern 2: **Sibling Communication**

❗ Siblings can’t talk directly.

#### ❌ Wrong mental model

```
ChildA → ChildB ❌
```

#### ✅ Correct

```
ChildA → Parent → ChildB
```

---

### 🔹 Example: Two siblings

#### Parent

```js
const Parent = () => {
  const [message, setMessage] = useState('');

  return (
    <>
      <Sender setMessage={setMessage} />
      <Receiver message={message} />
    </>
  );
};
```

#### Sender (Child A)

```js
const Sender = ({ setMessage }) => {
  return (
    <button onClick={() => setMessage("Hello from sibling!")}>
      Send
    </button>
  );
};
```

#### Receiver (Child B)

```js
const Receiver = ({ message }) => {
  return <p>{message}</p>;
};
```

📌 **Logic**:

* Sender triggers event
* Parent updates state
* Receiver re-renders

---

### Pattern 3: **Controlled Components (Forms)**

You’re already close with `Form`.

#### Core rule:

> Input value should come from state, not from DOM

```js
const Form = ({ changeTheme }) => {
  const [input, setInput] = useState('');

  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={() => changeTheme(input)}
    />
  );
};
```

📌 **Why this matters**:

* Validation
* Auto reset
* Conditional UI
* Sync data across components

---

## 3️⃣ Real-World Workflow Examples

### 🛒 Example 1: Add to Cart

```
App (cart state)
 ↓
ProductList
 ↓
Product
```

#### Product

```js
<button onClick={() => addToCart(product)} />
```

#### App

```js
const addToCart = (item) => {
  setCart(prev => [...prev, item]);
};
```

📌 **Logic**:

* Button click → event
* App updates cart
* Cart UI updates everywhere

---

### 🔐 Example 2: Login Status

```
App (isLoggedIn)
 ↓
Navbar
 ↓
LoginButton
```

#### LoginButton

```js
onClick={() => setIsLoggedIn(true)}
```

#### Navbar

```js
{isLoggedIn ? <Logout /> : <Login />}
```

📌 **Logic**:

* Single source of truth
* UI reacts automatically

---

### 🔔 Example 3: Global Modal (YOUR CASE)

You already built this pattern:

```
App (modal, message)
 ↓
Parent
 ↓
Child
```

📌 **Key takeaway**:

> Modal logic lives at the top, triggers can come from anywhere

This is EXACTLY the pain `useContext` solves later.

---

## 4️⃣ Why NOT `useContext` yet?

### ❌ Beginners misuse it for:

* Avoiding props
* Laziness
* “Cleaner” code (but breaks logic clarity)

### ✅ You should feel this pain first:

```js
App → A → B → C → D → Button
```

Passing:

```js
isOpen
setIsOpen
message
setMessage
```

When this feels **annoying**, **then** you are ready for `useContext`.

---

## 5️⃣ Golden Rules to Remember

🟢 **State**

* Lift it up
* Keep it minimal
* One owner only

🟢 **Props**

* Downward only
* Read-only

🟢 **Functions**

* Used to modify parent state
* Passed just like data

🟢 **Re-render**

* State change = re-render
* No manual DOM updates

---

## 🔥 You’re on the right track

Honestly, your current code shows:

* Clear understanding of data flow
* Correct separation of concerns
* No anti-patterns

### Next learning path (in order):

1. ✅ Props & lifting state
2. 🔜 Prop drilling pain
3. 🔜 `useContext`
4. 🔜 Custom hooks
5. 🔜 State management (Redux/Zustand)

If you want, next I can:

* Refactor your exact app **without** `useContext`
* Show a **bad vs good** example
* Draw a mental diagram for a complex app

Just tell me 👌
