var img = document.querySelector("#lens img");
var range = document.querySelector("input[type=range]");
var types = {
    blur: true,
    contrast: false
};
var type = window.location.hash.slice(1);

if (!window.location.hash) {
    window.location.hash = "blur";
}

range.addEventListener("change", function() {
    img.style.WebkitFilter = getValue(type, this.value);
}, false);

window.addEventListener("orientationchange", function() {
  console.log(window.orientation);
}, false);

window.addEventListener("hashchange", function() {
    type = window.location.hash.slice(1);
}, false);

function getValue(type, val) {
    var measurement = types[type] ? "px" : "";
    var val = type + "(" + val + measurement + ")";
    return val;
}