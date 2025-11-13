// ---------------- WRONG EXAMPLE ----------------
let fileinp1 = document.querySelector("#fileinp1");
let upload1 = document.querySelector("#upload1");
let remove1 = document.querySelector("#remove1");
let img1 = document.querySelector("#img1");
let log1 = document.querySelector("#log1");
let file1 = null;

upload1.addEventListener("click", () => fileinp1.click());
fileinp1.addEventListener("change", e => {
    file1 = e.target.files[0];
    if (file1) {
        log1.textContent = `File Selected: ${file1.name}`;
        img1.src = URL.createObjectURL(file1);
        img1.style.display = "block";
    }
});
remove1.addEventListener("click", () => {
    if (file1) {
        log1.textContent = `❌ File removed (but fileinp1.value still = "${fileinp1.value}")`;
        img1.style.display = "none";
        file1 = null;
        // ⚠️ No reset here → same file won't re-upload
    }
});

// ---------------- CORRECT EXAMPLE ----------------
let fileinp2 = document.querySelector("#fileinp2");
let upload2 = document.querySelector("#upload2");
let remove2 = document.querySelector("#remove2");
let img2 = document.querySelector("#img2");
let log2 = document.querySelector("#log2");
let file2 = null;

upload2.addEventListener("click", () => fileinp2.click());
fileinp2.addEventListener("change", e => {
    file2 = e.target.files[0];
    if (file2) {
        log2.textContent = `File Selected: ${file2.name}`;
        img2.src = URL.createObjectURL(file2);
        img2.style.display = "block";
    }
});
remove2.addEventListener("click", () => {
    if (file2) {
        log2.textContent = `✅ File removed and input reset (value cleared)`;
        img2.style.display = "none";
        file2 = null;

        // CORRECT FIX
        fileinp2.value = "";
    }
});