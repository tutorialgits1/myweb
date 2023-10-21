var elements = document.getElementsByClassName("column");
var currentVideos = null;

var oneVideos = [
    "videos/BLEACH TYBW [AMV] -ROYALTY.mp4.mp4",

];
var twoVideo = [
    "videos/videoplayback.mp4",
];
var threeVideo = [
    "videos/Black Clover「AMV」- Courtesy Call _ Yami vs Dente.mp4.mp4",
];
var fourVideo = [
    "videos/Black Clover「AMV」Eye Of The Storm _ Captains vs Captains.mp4.mp4",
];
var fiveVideo = [
    "videos/Satoru Gojo │ Jujutsu Kaisen「 AMV 」 -   Centuries.mp4.mp4",
];
var sixVideo = [
    "videos/Naruto vs Sasuke - AMV - overkill (courtesy call).mp4.mp4",
];



function changeVideos(videos) {
    currentVideos = videos;
    updateVideoGrid();
}

function updateVideoGrid() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "";
        for (var j = 0; j < currentVideos.length; j++) {
            var video = document.createElement("video");
            video.src = currentVideos[j];
            video.style.width = "100%";
            video.controls = true;
            elements[i].appendChild(video);
        }
    }
}

changeVideos(oneVideos);