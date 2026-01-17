let head = document.getElementById("mouse");

function changeText() {
    head.innerHTML = "All power is within you.you can do anything and everything.";
}
head.addEventListener("mouseover",changeText);

function notChange() {
    head.innerHTML = "Welcome";
}
head.addEventListener("mouseout",notChange);

// document.getElementById("mouse")
//→ Selects the heading (make sure your HTML has:
//<h1 id="mouse">Welcome</h1>)
//changeText()
//→ Runs when mouse comes over → changes text
//notChange()
//→ Runs when mouse leaves → changes back
//addEventListener("mouseover", changeText);
//→ Attaches the event
//addEventListener("mouseout", notChange);
//→ Attaches the event