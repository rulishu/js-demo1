var div1 = document.createElement("div");

document.body.appendChild(div1);


var dragging = false;
var lastX;
var lastY;

// document.body.onclick = function (e) {
//     console.log(e.clientX,
//         e.clientY)
//     div1.style.top = e.clientY + "px";
//     div1.style.left = e.clientX + "px";
// }

document.body.onmousedown = function (e) {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
}

document.body.onmousemove = function (e) {
    if (dragging ){
        // div1.style.top = e.clientY + "px";
        // div1.style.left = e.clientX + "px";

        var top = parseInt(div1.style.top) || 0;
        var left = parseInt(div1.style.left) || 0;

        var deltaX = e.clientX - lastX;
        var deltaY = e.clientY - lastY;

        div1.style.top = top + deltaY + "px";
        div1.style.left = left + deltaX + "px";

        lastX = e.clientX;
        lastY = e.clientY;
    }
 }

    document.body.onmouseup = function () {
        dragging = false
    }
