function openFeatures() {
    let allElems = document.querySelectorAll(".elem");
    let fullElemPage = document.querySelectorAll(".fullElem");
    let fullElemPageBackBtns = document.querySelectorAll(".fullElem .back");

    allElems.forEach((elem) => {
        elem.addEventListener("click", () => {
            fullElemPage[elem.id].style.display = "block";
        });
    })

    fullElemPageBackBtns.forEach((back) => {
        back.addEventListener('click', (e) => {
            fullElemPage[back.id].style.display = "none";
        })
    })
}

openFeatures();