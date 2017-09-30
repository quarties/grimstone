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
        minBid = 100,
        maxBid = 500,
        currentBid,
        bidTime,
        minTime = 5000,
        maxTime = 15000,
        maxTotalBid = 2000,
        autoBidSound = 'autoBid.mp3',
        playerBidSound = 'playerBid.mp3';

    bidElement.html(startBid);

    function autoBid () {
        currentBid = bidElement.html();
        currentBid = parseInt(currentBid);
        if (currentBid < maxTotalBid) {
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