window.addEventListener("load", function(){

    var detailSection = document.querySelector(".detail");

    var modal = detailSection.querySelector(".detail-modal");
    var img = detailSection.querySelector(".detail-img");
    var modalImg = detailSection.querySelector(".modal-img");
    var closeIcon = detailSection.querySelector(".icon-close");

    img.onclick = function(){
        modal.style.display = 'block';
        modalImg.src = "../../images/member/stuff/chick.jpg";
    };

    closeIcon.onclick = function(){
        event.stopPropagation();
        modal.style.display = 'none';
    }
});