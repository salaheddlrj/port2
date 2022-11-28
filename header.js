function toggleHotdog(x) {

    x.classList.toggle("change");
    var navigation = document.getElementById("navigation");
    if (x.classList.contains("change")) {
        navigation.style.display = "block";
        // document.body.style.overflowX = "hidden";
    } else
        navigation.style.display = "none";
}


var elt = document.querySelectorAll('#menu li a.link');

elt.forEach(a => {
    a.addEventListener('click', function handleClick(event) {
        console.log('item is clicked', event);
        document.getElementById("navigation").style.display = "none"
        document.getElementById("hotdog").classList.remove("change");
    });
});

document.body.addEventListener("click", function(e) {
    if (e.target.id != "hotdog" && e.target.id != "navigation" && !e.target.classList.contains("bar")) {
        document.getElementById("navigation").style.display = "none";
        document.getElementById("hotdog").classList.remove("change");
    }
})