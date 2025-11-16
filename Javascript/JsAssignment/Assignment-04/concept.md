## 🧩 Pehle samjho: `Object.freeze()` aur `Object.seal()` kya karte hain?

### 🔹 `Object.freeze(obj)`

* **Completely lock** kar deta hai object ko.
* Tum **na new property add kar sakte ho**, **na existing property change** kar sakte ho, **na delete** kar sakte ho.
* Object **read-only** ho jaata hai.
* Lekin - **nested objects** (jaise `user.address.city`) **freeze nahi hote** automatically (freeze shallow hota hai).

**Sochne ka tareeka:**

> “Freeze” = pura object rock solid, kuch change/add/delete nahi.

---

### 🔹 `Object.seal(obj)`

* Thoda **lenient** hota hai.
* Tum **new property add nahi kar sakte**, **delete bhi nahi kar sakte**,
  lekin **existing properties ko modify** kar sakte ho.
* Ye bhi **shallow** hota hai (nested objects unaffected rehte hain).

**Sochne ka tareeka:**

> “Seal” = object ka shape lock ho gaya, par andar ke values badal sakte ho.

---

## 🧠 Approach - kaise test karna hai

1. **Ek object banao** - jaise tumne `user` banaya hai (perfect example).

2. **Pehle `Object.freeze(user)` karo**

   * Ab try karo:

     * `user.name = "XYZ"` (change nhi hoga)
     * `user.newKey = "test"` (add nahi hoga)
     * `delete user.name` (delete nahi hoga)

   * Console me dekhna - changes reflect nahi honge (strict mode me error bhi aa sakta hai).

   * **Phir test karo nested object par:**

     ```js
     user.address.city.name = "Mumbai";
     ```

     Ye actually **change ho jaayega!** (kyunki freeze shallow hai)

3. **Dusra test - `Object.seal(user)`**

   * Object seal hone ke baad:

     * `user.name = "XYZ"` → **allowed** (change hoga)
     * `user.newKey = "test"` → **not allowed** (add nahi hoga)
     * `delete user.name` → **not allowed**
   * Phir check karo nested objects par - unpe koi restriction nahi lagegi.

---

## 🧪 Summary Table

| Operation               | `Object.freeze()` | `Object.seal()` |
| ----------------------- | ----------------- | --------------- |
| Add property            | ❌ Not allowed     | ❌ Not allowed   |
| Delete property         | ❌ Not allowed     | ❌ Not allowed   |
| Modify existing         | ❌ Not allowed     | ✅ Allowed       |
| Affects nested objects? | ❌ No (shallow)    | ❌ No (shallow)  |

---

Example Code:

```js
let user = {
    name : 'Subastral',
    address : {
        city : {
            name : 'Delhi',
            pincode : 110086
        }
    }
}

console.log(user?.address?.city?.name)

// “Freeze” = pura object rock solid, kuch change/add/delete nahi. Object read-only ho jaata hai.
Object.freeze(user); 
user.name = 'Dev'; // This modification will be ignored
user.newKey = 'newValue'; // This addition will be ignored
delete user.address; // This deletion will be ignored
delete user.address.city; // This deletion will be done because address is not frozen
user.address.newCity = {name:'Mumbai', pincode: 1209120}; // This addition will be done 
console.log(user)
console.log(`Trying to modify user.name: ${user.name}`);


// “Seal” = object ke structure ko lock kar deta hai — koi new key add/delete nahi kar sakte. Par existing keys ko modify kar sakte hain.
Object.seal(user);
user.name = 'Dev'; // This modification will be successful
user.newKey = 'newValue'; // This addition will be ignored due to Object.seal
delete user.address; // This deletion will be ignored due to Object.seal
console.log(user);
console.log(`After sealing, modified user.name: ${user.name}`);
```
---

## ❓ Common Confusion Explained

### 🔹 Pehle concept yaad karo:

`Object.freeze()` aur `Object.seal()` **sirf shallow (surface level)** effect karte hain.
Matlab:

* **Sirf first-level keys** lock/secure hoti hain.
* **Nested objects andar ke andar still normal rehte hain** (unpe koi lock nahi lagta).

---

### 🔍 Tu jo likh raha hai:

```js
delete user.address.city; // This deletion will be done because address is not frozen
```

➡️ **Bilkul sahi** - ye chalega,
kyunki humne `user` ko freeze kiya hai, **`user.address` ko nahi.**

---

### 🔹 Ab ye line:

| Affects nested objects? | ❌ No (shallow) | ❌ No (shallow) |

⚠️ Yeh **galat nahi hai**, bas **thoda misleading lag sakti hai**.

Iska matlab ye tha:

> Freeze/seal **nested objects ko affect nahi karte** (i.e. unpe koi lock nahi lagta).

To “❌ No (shallow)” ka matlab hai:

> “Freeze/seal *sirf surface tak* kaam karta hai — andar ke nested objects unaffected rehte hain.”

---

### 🔹 Samjho ek aur angle se:

* “❌ No” → matlab **nahi**, ye *nested objects ko lock nahi karta*.
* Par iska result hai: **nested objects me changes possible hain**.

So technically:

> ❌ No (shallow) ✅ means: nested objects **not frozen/sealed**, so they **can still change**.

---

### ✅ Summary:

| Feature           | Affects nested objects? | Real-world effect               |
| ----------------- | ----------------------- | ------------------------------- |
| `Object.freeze()` | ❌ No (shallow)          | Nested objects still modifiable |
| `Object.seal()`   | ❌ No (shallow)          | Nested objects still modifiable |

---

