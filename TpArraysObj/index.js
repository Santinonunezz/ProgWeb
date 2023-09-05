const items = [
  {
    id: 1,
    title: "Manzana",
    imageSrc:
      "https://www.infobae.com/new-resizer/VtHPxDPuf8-QPPviiyGIYmabGxI=/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/X6QCUFGWPJFPRPKV6DXS6DSSHY",
    description: "muy ricas",
  },
  {
    id: 2,
    title: "Sandia",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnzVnEIy1XRhvkgZ2m2E4i3nN-ekH046YzQ&usqp=CAU",
    description: "sandia cuadrada",
  },
  {
    id: 3,
    title: "Durazno",
    imageSrc:
      "https://www.infobae.com/new-resizer/HHkDcO6_NVm5UUmUScwllLPiQww=/768x432/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ME6HTIGEFBAJHMT6GI4WANQO3A",
    description: "muy rico tmb.",
  },
  {
    id: 4,
    title: "Uva",
    imageSrc:
      "https://nutricionyfarmacia.com/blog/wp-content/uploads/2022/09/Uvas.jpg",
    description: "que gran conjunto de frutas",
  },
  {
    id: 5,
    title: "Bananas",
    imageSrc:
      "https://www.semana.com/resizer/u-INT9wLmacPmolDokrINVUW5QA=/1920x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/LQYEQRID3REUJGNBB23BW2C3FY.jpg",
    description: "bananas",
  },
  {
    id: 6,
    title: "Kiwi",
    imageSrc:
      "https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/14.jpg",
    description: "no me gusta",
  },
];

function generateItemsHTML() {
  const itemsContainer = document.querySelector(".carteles ul");

  items.forEach((item) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");

    h2.textContent = item.title;
    img.src = item.imageSrc;
    img.alt = item.title;
    h3.textContent = item.description;

    button.appendChild(h2);
    button.appendChild(img);
    button.appendChild(h3);

    li.appendChild(button);
    itemsContainer.appendChild(li);
  });
}

function onload() {
  generateItemsHTML();
}
