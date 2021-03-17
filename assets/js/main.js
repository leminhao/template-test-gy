// Slide

let slideIndex = 1;
showSlider(slideIndex);

function plusSlider(n) {
  showSlider(slideIndex += n);
}

function currentSlider(n) {
  showSlider(slideIndex = n);
}

function showSlider(n) {
  let i;
  let slider = document.getElementsByClassName("container-ads");
  let dots = document.getElementsByClassName("dot");
  if (n > slider.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slider[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  
}


//Back-top
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-top").style.display = "flex";
    } else {

        document.getElementById("back-top").style.display = "none";
    }
}
//gán sự kiện click cho button
document.getElementById('back-top').addEventListener("click", function(){
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

})