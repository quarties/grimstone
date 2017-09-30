var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
    vid.pause();
// to capture IE10
    vidFade();
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {

    var bidElement = $('#bid'),
        startBid = 100,
        bid,
        currentBid,
        bidTime,
        maxBid = 2000;

    bidElement.html(startBid);

    function autoBid () {
        currentBid = bidElement.html();
        currentBid = parseInt(currentBid);
        if (currentBid < maxBid) {
            bidTime = getRandomInt(5000, 15000);
            setTimeout(function () {
                bid = getRandomInt(100, 500);
                bid += currentBid;
                bidElement.html(bid);
                autoBid();
            }, bidTime);
        }
    }

    autoBid();


})