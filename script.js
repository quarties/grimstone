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
        startBid = 1000,
        autoBidValue = 0, // don't change it
        minAutoBid = 1000, // minimum value of auto bid
        maxAutoBid = 50000, // maximum value of auto bid
        playerBidValue = 0, // don't change it
        currentBid,
        prevBid,
        bidTime,
        minTime = 5000, // minimum time for auto bid in miliseconds
        maxTime = 15000, // maximum time for auto bid in miliseconds
        limitAutoBid = 1000000, // limit for auto bid
        autoBidSound = 'autoBid.mp3',
        playerBidSound = 'playerBid.mp3',
        enableSounds = 1,
        enableAutoBid = 1;

    bidElement.html(numberWithSpaces(startBid));

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function getCurrentBid() {
        currentBid = bidElement.html();
        currentBid = currentBid.replace(/\s/g,'');
        return parseInt(currentBid);
    }

    function addBid(bid) {
        bidElement.html(numberWithSpaces(getCurrentBid() + bid));
    }

    function autoBid () {
        bidTime = getRandomInt(minTime, maxTime);
        setTimeout(function () {
            if (getCurrentBid() < limitAutoBid) {
                autoBidValue = getRandomInt(minAutoBid, maxAutoBid);
                addBid(autoBidValue);
                if (enableSounds === 1) $.playSound(autoBidSound);
                autoBid();
            }
        }, bidTime);
    }

    function playerBid(keyCode) {
        playerBidValue = Math.pow(10,(keyCode - 47));
        addBid(playerBidValue);
        if (enableSounds === 1) $.playSound(playerBidSound);
    }

    function revertBid (bid) {
        prevBid = getCurrentBid() - bid;
        bidElement.html(numberWithSpaces(prevBid));
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