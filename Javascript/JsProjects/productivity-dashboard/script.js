let allElems = document.querySelectorAll(".elem");
let allFullElems = document.querySelectorAll(".fullElem");
let allFullElemsBackBtns = document.querySelectorAll(".fullElem .back");

allElems.forEach((elem) => {
    elem.addEventListener("click", () => {
        allFullElems[elem.id].style.display = "block";
    });
})

allFullElemsBackBtns.forEach((back) => {
    back.addEventListener('click', (e) => {
        allFullElems[back.id].style.display = "none";
    })
})