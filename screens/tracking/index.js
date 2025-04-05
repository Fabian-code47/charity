const expandButton = document.querySelector(".tracking-item-expand");
const expandImg = document.querySelector(".tracking-item-expand-img");
const expandContent = document.querySelector(".tracking-item-content");

const toggleExpand = (e) => {
  if (expandImg.classList.contains("expand")) {
    expandImg.src = "../../images/carret-down.png";
    expandImg.classList.remove("expand");
    expandContent.classList.remove("content-expand");
  } else {
    expandImg.src = "../../images/carret-up.png";
    expandImg.classList.add("expand");
    expandContent.classList.add("content-expand");
  }
};

expandButton.addEventListener("click", toggleExpand);
