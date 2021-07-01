let btnSend2 = document.querySelector(".btn2");
let message2 = document.querySelector("#message2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");

btnSend2.addEventListener("click", (event) => {
  event.preventDefault();

  setTimeout(() => {
    btnSend2.style.display = "block";
    img.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none";
    img10.style.display = "none";
    img11.style.display = "none";
    img12.style.display = "none";
    img13.style.display = "none";
    img14.style.display = "none";
    img15.style.display = "none";
    img16.style.display = "none";
    img17.style.display = "none";
    img18.style.display = "none";

    message.style.display = "none";
    message1.style.display = "none";
    message3.style.display = "none";
    message4.style.display = "none";
    message5.style.display = "none";

    text.style.display = "none";
    text1.style.display = "none";
    text2.style.display = "none";
    text5.style.display = "none";
    text6.style.display = "none";
    text7.style.display = "none";
    text8.style.display = "none";
    text9.style.display = "none";
    text10.style.display = "none";

    img7.style.display = "inline-block";
    img8.style.display = "inline-block";
    img9.style.display = "inline-block";
    message2.style.display = "inline-block";
    text3.style.display = "inline-block";
    text4.style.display = "inline-block";

    message2.innerText = "Pictorial Mark Logo";
    text3.innerText =
      "A pictorial mark (sometimes called brand mark or logo symbol) is an icon-or graphic-based logo. It's probably the image that comes to mind when you think 'logo': the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.";
    text4.innerText =
      "A true brand mark in only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.";

    let sevenImg = "assets/logos/appleLogo.png";
    let eightImg = "assets/logos/twitterLogo.png";
    let nineImg = "assets/logos/targetLogo.png";
    img7.setAttribute("src", "assets/logos/appleLogo.png");
    img8.setAttribute("src", "assets/logos/twitterLogo.png");
    img9.setAttribute("src", "assets/logos/targetLogo.png");
    img7.append(sevenImg);
    img8.append(eightImg);
    img9.append(nineImg);
  }, 500);
});
