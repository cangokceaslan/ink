const profileInformation = {
    profilePhoto: "https://ink.cangokceaslan.com/assets/images/can.jpg?cache_delete=" + Date.now().toString(),
    //profilePhoto: "https://drive.google.com/thumbnail?id=1YyuPtO27XaYHqIYDdt4IXL2TNwiuKlB-",
    fullName: "Can Gökçeaslan",
    description: "Udemy / Youtube / Upwork"
};
const links = [

    /*{
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfYpUqwa-3RgN5Foh5vfHJZvKcTG9fhQekWpkp8uI_Hk49ZDQ/viewform",
        title: "Mesaj Gönder"
    },*/
    {
        href: "https://www.cangokceaslan.com",
        title: "Websitem"
    },
    {
        href: "https://www.udemy.com/user/cangokceaslan",
        title: "Udemy"
    },
    {
        href: "https://www.facebook.com/cangokceaslan",
        title: "Facebook"
    },
    {
        href: "https://www.twitter.com/cangokceaslan",
        title: "Twitter"
    },
    {
        href: "https://www.instagram.com/cangokceaslan",
        title: "Instagram"
    },
    {
        href: "https://www.github.com/cangokceaslan",
        title: "GitHub"
    },
    {
        href: "https://www.youtube.com/cangokceaslan?sub_confirmation=1",
        title: "Youtube"
    },
    {
        href: "https://www.linkedin.com/in/cangokceaslan",
        title: "Linkedin"
    },
    {
        href: "https://www.instagram.com/kodlanio",
        title: "Kodlanio"
    }

]
const animationTypes = [
    "zoomIn",
    "zoomInDown",
    "zoomInLeft",
    "zoomInRight",
    "zoomInUp",
    "jackInTheBox",
    "rollIn",
    "flipInX",
    "flipInY",
    "fadeInDownBig",
    "fadeInLeftBig",
    "fadeInRightBig",
    "fadeInUpBig",
    "fadeInTopLeft",
    "fadeInTopRight",
    "fadeInBottomLeft",
    "fadeInBottomRight",
    "bounceInDown",
    "bounceInLeft",
    "bounceInRight",
    "bounceInUp",
    "lightSpeedInLeft",
    "lightSpeedInRight",
    "fadeInLeft",
    "fadeInRight",
    "fadeInDown",
    "fadeInUp"
];
const imagedEmbeds = [
    "https://ink.cangokceaslan.com/assets/images/background.jpg?cache_delete=" + Date.now().toString()
    //"https://cutewallpaper.org/21/black-1920x1080-wallpaper/Dark-Desktop-Backgrounds-1920x1080-,-Best-Background-Images-.jpg"
    //"https://149351115.v2.pressablecdn.com/wp-content/uploads/2018/01/BrutalLifeCycleJavascript.png",
    //"https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-computer-code-technology-advertising-image_165748.jpg"
    //"https://i.pinimg.com/originals/0d/ba/57/0dba57a96d995f5b92d6294245ead3eb.jpg",
    //"https://www.kolpaper.com/wp-content/uploads/2020/04/Wallpaper-Earth-2.jpg",
    //"https://www.itl.cat/pngfile/big/44-448645_red-space-1920x1080-hd-wallpaper-red-space-desktop.jpg"

]
const videoEmbeds = [
    "https://www.youtube.com/embed/ls9yJTphLxg"
    //"https://www.youtube.com/embed/lRTtMcx6rSM",
    //"https://www.youtube.com/embed/tGx-EMuruq8",
];
const pageProps = {
    //background: ["video", "image"][window.innerWidth > 1000 ? Math.floor(Math.random() * 2) : 1],
    background: "image",
    videoEmbed: [...videoEmbeds][Math.floor(Math.random() * videoEmbeds.length)],
    imageEmbed: [...imagedEmbeds][Math.floor(Math.random() * imagedEmbeds.length)]
}
console.log(pageProps)
