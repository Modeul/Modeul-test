var modal = document.querySelector(".detail-modal");
var img = document.querySelector(".detail-img");
var modalImg = document.querySelector(".modal-img");
var closeIcon = document.querySelector(".icon-close");

img.addEventListener("click", e => {
    modal.style.display = "block";
    modalImg.src = "../../images/member/stuff/chick.jpg";
});

closeIcon.addEventListener("click", e => {
        modal.style.display = "none";
        console.log(modal.style.display);
});

