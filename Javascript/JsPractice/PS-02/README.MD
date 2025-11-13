# 🧠 File Input Change Event Demo

A small JavaScript demo showing why you **can’t upload the same file twice**  
unless you reset the input value using `fileinp.value = ""`.

---

## ⚙️ What happens

When you upload a file, remove it, and try uploading the **same file again**,  
the browser doesn’t fire the `change` event — because technically, the file input’s value hasn’t changed.

### ❌ Wrong behavior
No `change` event → same file doesn’t upload again.

### ✅ Correct behavior
Resetting the input fixes it:
```js
fileinp.value = "";
