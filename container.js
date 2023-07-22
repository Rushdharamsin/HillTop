const toTop = document.querySelector(".to-top")
window.addEventListener("scroll", () => {
    console.log("scroll", window);
    if (window.pageXOffset > 100) {

        toTop.ClassList.add("active");
    } else {
        console.log(toTop.classList.contains("active"));
        if (toTop.classList.contains("active")) {
            toTop.ClassList.remove("active");
        }
    }
})