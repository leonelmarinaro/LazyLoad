import { registerImage } from "./lazy";

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log(num);
};

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.dataset.src = `https://randomfox.ca/images/${random(1, 122)}.jpg`;
  //   imagen.src = `https://randomfox.ca/images/22.jpg`;

  container.appendChild(imagen);

  return container;
};

// const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector("button");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};
addButton.addEventListener("click", addImage);
