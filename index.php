<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Grimstone Cartel</title>
    <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="style.css">
    <style>
        article, aside, details, figcaption, figure, footer, header,
        hgroup, menu, nav, section { display: block; }
    </style>
</head>
<body>
<video id="bgvid" playsinline autoplay muted loop>
    <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
    <source src="bg.webm" type="video/webm">
    <source src="bg.mp4" type="video/mp4">
</video>
<div id="polina">
    <h2>Current bid</h2>
    <h1>$<span id="bid"></span></h1>
</div>
<script src="jquery.js"></script>
<script src="jquery.playSound.js"></script>
<script src="script.js"></script>
</body>
</html>