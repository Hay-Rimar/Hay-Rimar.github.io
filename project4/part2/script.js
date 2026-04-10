const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Data objects

const images = [
    { filename: "pic1.jpg", alt: "Human eye closeup" },
    { filename: "pic2.jpg", alt: "Rock with a wave in it" },
    { filename: "pic3.jpg", alt: "Purple and white flowers" },
    { filename: "pic4.jpg", alt: "Wall from pharaoh's tomb" },
    { filename: "pic5.jpg", alt: "Moth on a leaf" },
];

// constant with the baseURL
const baseUrl = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// for loop through images
for (const image of images) {
    // new element
    const newImage = document.createElement("img");
    // set source and alt text
    newImage.src = `${baseUrl}${image.filename}`;
    newImage.alt = image.alt;
    // focusable via the keyword
    newImage.tabIndex = "0";
    // Append image of thumbBar
    thumbBar.appendChild(newImage);
    // Show image at full size when thumb clicked
    newImage.addEventListener("click", updateDisplayedImage);
    // Show image at full size when enter key is pressed
    newImage.addEventListener("keydown", (enter) => {
        if (enter.code === "Enter") {
            updateDisplayedImage(enter);
        }
    });
}

// updateDisplayedImage function
function updateDisplayedImage(enter) {
    displayedImage.src = enter.target.src;
    displayedImage.alt = enter.target.alt;
}

// Darken and lighten button

// Click event
btn.addEventListener("click", () => {
    if (btn.classList.contains("dark")) {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    } else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    }

    // Toggle class for next press of button
    btn.classList.toggle("dark");
});