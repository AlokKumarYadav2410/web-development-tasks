## 🧩 1. Lexical Scoping (recap)

**Lexical scoping** means that:

* A variable’s scope is determined by **where it is defined** in your code.
* Functions can access variables from their **outer (parent) scopes** — based on where they are *written*, not where they are *called*.

Example:

```js
function outer() {
  let count = 5;
  function inner() {
    console.log(count); // Accesses outer variable
  }
  inner();
}
outer();
```

✅ Here, `inner()` has access to `count` because of **lexical scope** — it’s defined *inside* `outer()`.

---

## 🔒 2. Closures

A **closure** happens when:

* A function **remembers** and **can access** variables from its **lexical scope**, **even after** that outer function has finished executing.

In other words:

> A closure is a function bundled together with references to its surrounding state.

Example:

```js
function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = makeCounter(); // makeCounter() returns the inner function

counter(); // 1
counter(); // 2
counter(); // 3
```

🧠 **Explanation:**

* The inner function forms a **closure** over `count`.
* Even though `makeCounter()` has *finished running*, the returned function still *remembers* `count` because of **lexical scoping**.
* That’s why the variable persists between calls.

---

## ⚖️ Lexical Scoping vs Closures — The Difference

| Concept             | What it is                                                                                                                               | When it happens                                                                | Example idea                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| **Lexical Scoping** | The rule that determines which variables a function can access, based on where it’s defined.                                             | Always — part of how JS works.                                                 | A function inside another can "see" outer variables. |
| **Closure**         | The *result* of lexical scoping when an inner function continues to access variables from its outer scope even after that scope is gone. | When a function “escapes” its original scope (e.g. returned or passed around). | A counter function that remembers its state.         |

In short:

> **Lexical scoping is the rule.**
> **Closure is what happens when that rule persists beyond the function’s lifetime.**

---

### 🧠 Quick Analogy

Think of **lexical scoping** as **a rulebook**:

> "Functions can see variables where they were born."

And **closures** as **a memory**:

> "Even after the parent scope is gone, I still remember my variables from birth."

---

## 🔍 Pehle dono examples dekhte hain:

### 🧩 Example 1

```js
host(); // ❌ Error

var host = function() {
  console.log("This will cause an error because 'host' is not hoisted.");
};
```

### 🧩 Example 2

```js
host; // ✅ No error

var host = function() {
  console.log("This will cause an error because 'host' is not hoisted.");
};
```

Ab dekhte hain, pehle wale mein **error** kyu aaya aur doosre mein **nahi** 👇

---

## 🧠 Step 1: Samjho “hoisting” ka matlab

JavaScript mein **variable declarations** (`var`, `let`, `const`) aur **function declarations** dono “hoist” hote hain —
matlab JS pehle unke naam ko “top” pe le jaata hai, par unke **values assign nahi hoti** turant.

### 🔸 For `var`:

* **Declaration** hoist hoti hai.
* **Initialization** (value assign karna) **baad mein** hoti hai.
* Default value = `undefined`.

---

## 🧠 Step 2: Function *expression* vs Function *declaration*

```js
// Function declaration (fully hoisted)
function greet() {
  console.log("Hello!");
}

// Function expression (variable hoisted, function nahi)
var sayHi = function() {
  console.log("Hi!");
};
```

🧩 Difference:

* `greet()` ko **kahin bhi** call kar sakte ho (before or after definition) ✅
* `sayHi()` ko **sirf uske baad** call kar sakte ho ❌

Kyunki `var sayHi` hoist hota hai as `undefined`.

---

## ⚙️ Ab tumhare code pe apply karte hain:

### Example 1:

```js
host(); // ❌ host is not a function

var host = function() {
  console.log("This will cause an error because 'host' is not hoisted.");
};
```

Behind the scenes JS isko aise treat karta hai:

```js
var host;  // declaration hoist ho gayi, value abhi undefined hai

host();    // ❌ Trying to call undefined as a function -> TypeError

host = function() {
  console.log("This will cause an error because 'host' is not hoisted.");
};
```

🧠 So — jab `host()` call hota hai, us time `host` ki value `undefined` hai.
`undefined()` call karne se **TypeError** aata hai.

---

### Example 2:

```js
host; // ✅ Just accessing variable, no error

var host = function() {
  console.log("This will cause an error because 'host' is not hoisted.");
};
```

Yahan behind the scenes:

```js
var host; // host = undefined (hoisted)

host;     // sirf access kiya, call nahi kiya -> koi error nahi
host = function() { ... };
```

🧠 Access karna allowed hai — `undefined` milta hai, par call nahi kar rahe,
isliye **error nahi aata**.

---

## ✅ Summary (Hinglish mein)

| Case | Code      | Kya Ho Raha Hai                                        | Result      |
| ---- | --------- | ------------------------------------------------------ | ----------- |
| 1    | `host();` | `host` hoisted as `undefined`, call kar rahe ho        | ❌ TypeError |
| 2    | `host;`   | `host` hoisted as `undefined`, sirf access kar rahe ho | ✅ No error  |

---

### 💡 Extra Tip:

Agar tum chahte ho ki function ko call karne se pehle hi kaam kare, to use **function declaration** likho:

```js
hoisted(); // ✅ Works

function hoisted() {
  console.log("This works because it's a function declaration!");
}
```
