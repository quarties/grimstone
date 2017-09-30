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
        autoBidValue = 0,
        minBid = 100, // minimum value of auto bid
        maxBid = 500, // maximum value of auto bid
        playerBidValue = 0,
        currentBid,
        prevBid,
        bidTime,
        minTime = 5000, // minimum time for auto bid in miliseconds
        maxTime = 15000, // maximum time for auto bid in miliseconds
        maxAutoBid = 2000, // maximum value for auto bid
        autoBidSound = 'autoBid.mp3',
        playerBidSound = 'playerBid.mp3',
        enableSounds = 1,
        enableAutoBid = 1;

    bidElement.html(startBid);

    function autoBid () {
        bidTime = getRandomInt(minTime, maxTime);
        setTimeout(function () {
            currentBid = parseInt(bidElement.html());
            if (currentBid < maxAutoBid) {
                autoBidValue = getRandomInt(minBid, maxBid);
                bidElement.html(currentBid + autoBidValue);
                if (enableSounds === 1) $.playSound(autoBidSound);
                autoBid();
            }
        }, bidTime);
    }

    function playerBid(keyCode) {
        currentBid = parseInt(bidElement.html());
        playerBidValue = Math.pow(10,(keyCode - 47));
        bidElement.html(currentBid + playerBidValue);
        if (enableSounds === 1) $.playSound(playerBidSound);
    }

    function revertBid (bid) {
        currentBid = parseInt(bidElement.html());
        prevBid = currentBid - bid;
        bidElement.html(revertBid);
    }

    $(document).keyup(function (e) {
        if (e.keyCode > 48 && e.keyCode < 58) {
            playerBid(e.keyCode);
        } else if (e.keyCode === 48) {
            playerBid(58);
        } else if (e.keyCode === 88) {
            revertBid(playerBidValue);
        } else if (e.keyCode === 65) {
            revertBid(autoBidValue);
        }
    });

    if(enableAutoBid === 1) autoBid();

});