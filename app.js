const headerContent = {
    title: "Welcome to DinTech Limited",
    description:
        "We design and develop high-performance, modern websites tailored to our clients business needs."
};

const cardsContent = [
    {
        img: "./images/seo.png",
        alt: "seo",
        title: "SEO Services",
        description:
            "Comprehensive SEO strategies to improve your online visibility."
    },
    {
        img: "./images/technology.png",
        alt: "technology",
        title: "Technology Solutions",
        description:
            "Innovative tech solutions to streamline your business processes."
    },
    {
        img: "./images/web-design.png",
        alt: "web-design",
        title: "Web Design",
        description:
            "Creative and responsive web design services to enhance user experience."
    }
];

const footerContent = "© 2026 DinTech Limited";

const header = document.createElement("header");

const h1 = document.createElement("h1");
h1.textContent = headerContent.title;

const headerParagraph = document.createElement("p");
headerParagraph.textContent = headerContent.description;

header.appendChild(h1);
header.appendChild(headerParagraph);

document.body.appendChild(header);

const main = document.createElement("main");
const section = document.createElement("section");

const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards");

cardsContent.forEach(card => {
    const article = document.createElement("article");
    article.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = card.img;
    img.alt = card.alt;

    const title = document.createElement("h3");
    title.textContent = card.title;

    const description = document.createElement("p");
    description.textContent = card.description;

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(description);

    cardsContainer.appendChild(article);
});

section.appendChild(cardsContainer);
main.appendChild(section);

document.body.appendChild(main);

const footer = document.createElement("footer");
const footerParagraph = document.createElement("p");

footerParagraph.textContent = footerContent;

footer.appendChild(footerParagraph);

document.body.appendChild(footer);