//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const isIntersecting = (entry) => {
  return entry.isIntersecting; //true en la pantalla o false si no esta
};

const loadImage = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;
  //load image
  imagen.src = url;

  //unobserve the image
  obsever.unobserve(container);
};

const obsever = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
  obsever.observe(imagen);
};
