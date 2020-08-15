console.log("hi");
$("#projects").hide();
let runlol = false;
function godown() {
  if (!runlol) {
    runlol = true;
    $("#projects").show();
    disableScrolling()
     $('#projects').animate({'margin-top': '20vh'}, 300);
    setTimeout(scroll => {
      window.scrollTo({
        top: $("#projects").offset().top,
        left: 0,
        behavior: "smooth"
      });
      enableScrolling()
    }, 300);
  }
}
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

function disableScrolling(){
disableBodyScroll(window);

}

function enableScrolling(){
enableBodyScroll(window);
}
function downbutt() {
  disableScrolling()
    runlol = true;
    $("#projects").show();
     $('#projects').animate({'margin-top': '20vh'}, 100);
    setTimeout(scroll => {
      window.scrollTo({
        top: $("#projects").offset().top,
        left: 0,
        behavior: "smooth"
      });
      enableScrolling()
    }, 100);
  
}
//show projects on scroll
window.addEventListener("wheel", event => godown());

//show projects automatically on mobile
if(/Mobi/.test(navigator.userAgent)){
    $("#projects").show();
       $('#projects').animate({'margin-top': '20vh'}, 500);

}
//ye i could have just gotten a random gradient from uigradients but some of them suck so i just handpicked a few good ones
let randomthemes = [
  ["#ff8008", "#ffc837"],
  ["#4A00E0", "#8E2DE2"],
  ["#FF512F", "#F09819"],
  ["#FF5F6D", "#FFC371"],
  ["#FF416C", "#FF4B2B"],
  ["#ee0979", "#ff6a00"],
  ["#ec008c", "#fc6767"],
  ["#f857a6", "#ff5858"],
  ["#00c3ff", "#ffff1c"],
  ["#e1eec3", "#f05053"],
  ["#a8ff78", "#78ffd6"],
  ["#B3FFAB", "#12FFF7"],
  ["#AAFFA9", "#11FFBD"],
  ["#5433FF", "#20BDFF"],
  ["#00c6ff", "#0072ff"],
  ["#4e54c8", "#8f94fb"],
  ["#396afc","#2948ff"],
  ["#673AB7","#512DA8"],
  ["#4776E6","#8E54E9"],
  ["#DA22FF","#9733EE"]
];

//grab a random gradient
function rand(items) {
  return items[~~(items.length * Math.random())];
}
let randcolor = rand(randomthemes);
document.documentElement.style.setProperty("--left", randcolor[0]);
document.documentElement.style.setProperty("--right", randcolor[1]);
