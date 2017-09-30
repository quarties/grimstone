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
        minBid = 100, // minimum value of auto bid
        maxBid = 500, // maximum value of auto bid
        currentBid,
        bidTime,
        minTime = 5000, // minimum time for auto bid in miliseconds
        maxTime = 15000, // maximum time for auto bid in miliseconds
        maxAutoBid = 2000, // maximum value for auto bid
        autoBidSound = 'autoBid.mp3',
        playerBidSound = 'playerBid.mp3';

    bidElement.html(startBid);

    function autoBid () {
        currentBid = bidElement.html();
        currentBid = parseInt(currentBid);
        if (currentBid < maxAutoBid) {
            bidTime = getRandomInt(minTime, maxTime);
            setTimeout(function () {
                bid = getRandomInt(minBid, maxBid);
                bid += currentBid;
                bidElement.html(bid);
                $.playSound(autoBidSound);
                autoBid();
            }, bidTime);
        }
    }

    autoBid();


})