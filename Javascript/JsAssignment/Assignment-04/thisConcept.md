## 🔹 1. `this` ka matlab

`this` ka matlab hai: **jo object function ko call kar raha hai, usko point karo.**
Par JavaScript me **yeh depend karta hai function ke type par**.

---

## 🔹 2. Normal Function as Object Method

* Agar function **normal function** hai aur object ke andar method ki tarah define kiya gaya hai:

  * `this` **us object ko refer karega**.

Example socho:

```js
let user = {
  name: "Subastral",
  greet: function() {
    console.log("Normal Function → this:", this);
    console.log("Hello " + this.name);
  }
};

user.greet();
```

**Output:**

```
Normal Function → this: {name: "Subastral", greet: ƒ}
Hello Subastral
```

✅ Yaha `this` → `user` object ko point kar raha hai, isliye `this.name` kaam kar raha hai.

---

## 🔹 3. Arrow Function as Object Method

* Agar function **arrow function** hai:

  * Arrow function ka **apna `this` nahi hota**.
  * Ye **apne surrounding scope ka `this` use karta hai**.

```js
let user = {
  name: "Subastral",
  greet: () => {
    console.log("Arrow Function → this:", this);
    console.log("Hello " + this.name);
  }
};

user.greet();
```

**Output:**

```
Arrow Function → this: {}  (ya window / undefined in strict mode)
Hello undefined
```

⚠️ Yaha `this` → **user object ko point nahi kar raha**.

* Kyunki arrow function me `this` **lexical scope se aata hai**, matlab jo surrounding context hai (yahaan global scope), wahi `this` ban gaya.

---

## 🔹 4. Summary

| Function Type   | `this` kya point karta hai       | Example                                   |
| --------------- | -------------------------------- | ----------------------------------------- |
| Normal Function | Object jisne method call kiya    | user.greet() → `user` object              |
| Arrow Function  | Surrounding scope (lexical this) | user.greet() → global/window ya undefined |

💡 **Tip:**

* Object ke methods me **hamesha normal function use karo** agar `this` object ko point kare.
* Arrow function ka use **nested function ke andar** kar sakte ho, taaki `this` outer method ka hi use ho jaye.


Excellent topic 👏 — this is one of the most important and tricky differences between **normal functions** and **arrow functions** in JavaScript, especially when they’re used **as object methods**.

Let’s go step-by-step 👇

---

## 🧠 Concept: The `this` Keyword

`this` refers to **the object that is calling the function** — but the way it’s bound depends on the type of function.

### 🔹 1. **Normal Function (method)**

* `this` is **dynamic** — it refers to **the object** that calls the function.
* So inside an object method, `this` points to **that object itself**.

### 🔹 2. **Arrow Function (method)**

* Arrow functions **do not have their own `this`**.
* Instead, they **inherit `this` from their surrounding (lexical) scope**.
* So when you use an arrow function as an object method, `this` will **not refer to the object**, but to the **outer scope (e.g. `window` in browser, or `undefined` in strict mode)**.

---

## 💻 Approach to Test This Difference

You can do this step-by-step:

1. **Create an object** with two methods:

   * One using a normal function syntax.
   * One using an arrow function.

2. Inside each method, `console.log(this)` to see what it points to.

3. Call both methods and compare the outputs.

---

### 🧩 Example structure (for your own testing)

```js
let user = {
  name: 'Subastral',
  
  normalFn: function() {
    console.log("Normal Function → this:", this);
  },
  
  arrowFn: () => {
    console.log("Arrow Function → this:", this);
  }
};

user.normalFn(); // this → user object
user.arrowFn();  // this → outer scope (not user)
```

---

### 🧭 Expected Behavior

| Function Type   | `this` Value                             | Explanation                                                                |
| --------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| Normal function | `user` object                            | `this` refers to the caller (the object)                                   |
| Arrow function  | `window` (or `undefined` in strict mode) | Arrow functions don’t bind their own `this`; they capture from outer scope |

---


