function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
const embedComplete = "?version=3&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=''&start=" + (15).toString() + "&end=" + (276).toString();
let runtime0 = (function () {
    if (pageProps.background === "video") {
        document.getElementById("background-video-frame").src = (pageProps.videoEmbed + embedComplete).toString();
    } else if (pageProps.background === "image") {
        let element = document.getElementById("video-background");
        element.parentNode.removeChild(element);
        document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('" + pageProps.imageEmbed + "')";
    }
})()
let runtime1 = (() => {
    document.getElementById("profilePhoto").src = profileInformation.profilePhoto;
    document.getElementById("fullName").innerText = profileInformation.fullName;
    document.getElementById("description").innerText = profileInformation.description;
})();
//const animate = shuffle(animationTypes);
const animate = animationTypes;
//animate[(counter % animate.length)];
[...links].map((link, counter) => {
    let inkElement = document.createElement("div");

    inkElement.setAttribute('class', 'ink animate__animated animate__' + animate[0]);
    inkElement.setAttribute('style', 'animation-delay: ' + counter * 0.1 + 's;')
    let a = document.createElement('a');
    a.setAttribute('class', 'link');
    a.href = link.href;
    a.innerText = link.title;
    a.target = "__blank";
    inkElement.appendChild(a);
    let icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-arrow-right farArrow");
    inkElement.appendChild(icon);
    document.getElementById("links").appendChild(inkElement);
})
document.getElementById("bottom-contacter").onclick = function () {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfYpUqwa-3RgN5Foh5vfHJZvKcTG9fhQekWpkp8uI_Hk49ZDQ/viewform", "__blank");
}