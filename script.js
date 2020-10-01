console.log("hi");
$("#projects").hide();
let runlol = false;

function godown() {
    if (!runlol) {
        runlol = true;
        $("#projects").show();
        disableScrolling()
        $('#projects').velocity({
            'margin-top': '20vh'
        }, 300);
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

function disableScrolling() {
    disableBodyScroll(window);

}

function enableScrolling() {
    enableBodyScroll(window);
}

function downbutt() {
    disableScrolling()
    runlol = true;
    $("#projects").show();
    $('#projects').velocity({
        'margin-top': '20vh'
    }, 100);
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
if (/Mobi/.test(navigator.userAgent)) {
    $("#projects").show();
    $('#projects').velocity({
        'margin-top': '20vh'
    }, 500);

}
//slide down title
$('#main').velocity({
    'margin-top': '40vh'
}, 300);

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
    ["#396afc", "#2948ff"],
    ["#673AB7", "#512DA8"],
    ["#4776E6", "#8E54E9"],
    ["#DA22FF", "#9733EE"]
];
//images curated by me (yes i could get random ones but it wouldn't look as nice :))
let randimages = [
    `url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`,
    `url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`,
    `url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`,
    `url("https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80")`,
    `url("https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");`,
    `url("https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")`,
    `url("https://images.unsplash.com/photo-1500993855538-c6a99f437aa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`,
    `url("https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`,
    `url("https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80");`,
    `url("https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80");`,
    `url("https://images.unsplash.com/photo-1417577097439-425fb7dec05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80")`,
    `url("https://images.unsplash.com/photo-1531160492875-2a09eb0cd73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")`,

]

//grab a random gradient
function rand(items) {
    return items[~~(items.length * Math.random())];
}
let randcolor = rand(randomthemes);
let randimage = rand(randimages)
document.documentElement.style.setProperty("--left", randcolor[0]);
document.documentElement.style.setProperty("--right", randcolor[1]);
console.log(randimage)
//removed - tbh the image changer looked too inconsistent on reload, just changing the gradient is fine
//document.documentElement.style.setProperty("--image", randimage);;
function opentrack() {
    console.log("opening track")
    window.open(currenttrackurl, '_blank')
}
let currenttrackurl = "https://spotify.com"
let lastsongname = ""
let paused = false
function fetchSpotify() {
    //grab spotify currently playing data and update description - there is probably a way better way to do this than long polling but I couldn't find one
    fetch("https://api.carcraftz.dev/spotifycp").then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
        if (json) {
            if (json["is_playing"]) {
                let songname = json.item.name
                if (songname != lastsongname || paused) {
                  paused = false
                    lastsongname = songname
                    let artist = json.item.artists[0].name
                    let cover = json.item.album.images[0].url
                    console.log(cover)
                    document.getElementById("nowplaying").innerHTML = `<i class="fab fa-spotify"></i>&nbsp` + songname + " | " + artist + `&nbsp&nbsp&nbsp<img id = "trackimg" src = "${cover}">`
                    currenttrackurl = json.item["external_urls"].spotify
                }
            } else {
                document.getElementById("nowplaying").innerHTML = ``
                currenttrackurl = ""
                paused = true
            }
        } else {
            document.getElementById("nowplaying").innerHTML = ``
            currenttrackurl = ""

        }
    })
}
setTimeout(fetchSpotify,100)
setInterval(fetchSpotify, 1000)
