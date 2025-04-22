const content = document.getElementById('content');
import aboutPhoto from "../about.jpg";

export default function loadAbout(){
    content.textContent = "";
    content.className = "about-content";

    const joinha = document.createElement("img");
    joinha.src = aboutPhoto;

    content.appendChild(joinha);

    const description = document.createElement('p');
    description.innerHTML = "And that's all, folks! Give it a like!";

    content.appendChild(description);
};