const toTop = Document.querySelector(".to-top")
window.addEventListener("scroll", () => {
    if (window.pageXOffset > 100) {
        toTop.ClassList.add("active");
    } else {
        toTop.ClassList.remove("active");
    }
})