let btnSend = document.querySelector(".btn");
let message = document.querySelector("#message");
let text = document.querySelector("#text");
let text1 = document.querySelector("#text2");
let img = document.querySelector("#img");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");

img.style.display = "none";
img2.style.display = "none";
img3.style.display = "none";
img4.style.display = "none";
img5.style.display = "none";
img6.style.display = "none";
img7.style.display = "none";
img8.style.display = "none";
img9.style.display = "none";
message1.style.display = "none";
message2.style.display = "none";
text2.style.display = "none";
text3.style.display = "none";
text4.style.display = "none";

btnSend.addEventListener("click", (event) => {
  event.preventDefault();

  setTimeout(() => {
    btnSend.style.display = "block";

    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none";
    img7.style.display = "none";
    img8.style.display = "none";
    img9.style.display = "none";
    message1.style.display = "none";
    message2.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";

    img.style.display = "inline-block";
    img2.style.display = "inline-block";
    img3.style.display = "inline-block";
    message.style.display = "inline-block";
    text.style.display = "inline-block";
    text1.style.display = "inline-block";
    message.innerText = "Lettermark Logo";
    text.innerText =
      "A Monogram or lettermark is a typography-based logo that's comprised of a few letters, usually a company's intials. The lettermark is all about simplicity.";
    text1.innerText =
      "By utilizing just a few letters lettermark logos are effective at streaming any company brand if they have a long name.";
    let firstImg = "assets/logos/hboLogo.png";
    let secImg = "assets/logos/ibmLogo.png";
    let thirdImg = "assets/logos/nasaLogo.png";
    img.setAttribute("src", "assets/logos/hboLogo.png");
    img2.setAttribute("src", "assets/logos/ibmLogo.png");
    img3.setAttribute("src", "assets/logos/nasaLogo.png");
    img.append(firstImg);
    img2.append(secImg);
    img3.append(thirdImg);
  }, 500);
});