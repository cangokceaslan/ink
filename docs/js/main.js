const rotation = ["lightSpeedInLeft", "lightSpeedInRight"];
[...links].map((link, counter) => {
    let inkElement = document.createElement("div");

    inkElement.setAttribute('class', 'ink animate__animated animate__' + rotation[(counter % rotation.length)]);
    inkElement.setAttribute('style', 'animation-delay: ' + counter * 0.5 + 's;')
    let a = document.createElement('a');
    a.setAttribute('class', 'link');
    a.href = link.href;
    a.innerText = link.title;
    a.target = "__blank";
    inkElement.appendChild(a);
    document.getElementById("links").appendChild(inkElement);
})

function profileInfoFiller(data = {
    profileImage: "https://www.cangokceaslan.com/images/cangokceaslan-long.webp",
    name: 'Can Gökçeaslan',
    description: ''
}) {
    const profileElement = document.getElementById("profile-info");
    const oldProfileImg = profileElement.getElementsByTagName("img")[0];
    profileElement.removeChild(oldProfileImg);
    const img = document.createElement("img");
    img.setAttribute("class", "profile-image animate__animated animate__rotateIn");
    img.src = data.profileImage;
    profileElement.prepend(img);
    const name = data.name;
    //const description = data.description.replace(/<br>/ig, "");
    const description = "Udemy  /  Youtube  /  Upwork";
    const nameElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    nameElement.setAttribute("class", "name");
    descriptionElement.setAttribute("class", "description");
    nameElement.innerHTML = name.trim();
    descriptionElement.innerText = description;
    const oldNameElement = document.getElementById("name");
    const oldDescriptionElement = document.getElementById("description");
    profileElement.removeChild(oldNameElement);
    profileElement.removeChild(oldDescriptionElement);
    profileElement.appendChild(nameElement);
    profileElement.appendChild(descriptionElement);
    /* [...document.getElementsByTagName("br")].forEach((item, index) => {
        item.remove();
    }) */

}
function reqListener() {
    let profileData = JSON.parse(this.responseText);
    let user = profileData.graphql.user;
    const profileImage = user.profile_pic_url_hd;
    const name = user.full_name;
    const description = user.biography;

    return profileInfoFiller({
        profileImage,
        name,
        description
    })
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.instagram.com/cangokceaslan/?__a=1");
oReq.send();
document.getElementById("bottom-contacter").onclick = function () {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfYpUqwa-3RgN5Foh5vfHJZvKcTG9fhQekWpkp8uI_Hk49ZDQ/viewform", "__blank");
}