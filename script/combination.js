let btnSend5 = document.querySelector(".btn5");
let message5 = document.querySelector("#message5");
let text9 = document.querySelector("#text9");
let text10 = document.querySelector("#text10");


btnSend5.addEventListener("click", (event) => {
  event.preventDefault();

  setTimeout(() => {
    btnSend5.style.display = "block";
    img.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none";
    img7.style.display = "none";
    img8.style.display = "none";
    img9.style.display = "none";
    img10.style.display = "none";
    img11.style.display = "none";
    img12.style.display = "none";
    img13.style.display = "none";
    img14.style.display = "none";
    img15.style.display = "none";

    message.style.display = "none";
    message1.style.display = "none";
    message2.style.display = "none";
    message3.style.display = "none";
    message4.style.display = "none";

    text.style.display = "none";
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
    text6.style.display = "none";
    text7.style.display = "none";
    text8.style.display = "none";

    img16.style.display = "inline-block";
    img17.style.display = "inline-block";
    img18.style.display = "inline-block";
    message5.style.display = "inline-block";
    text9.style.display = "inline-block";
    text10.style.display = "inline-block";

    message5.innerText = "Combination Logos";
    text9.innerText =
      "A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image.";
    text10.innerText =
      "Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.";

    let sixteenImg = "assets/logos/doritosLogo.png";
    let seventeenImg = "assets/logos/burgerkingLogo.png";
    let eighteenImg = "assets/logos/lacosteLogo.png";
    img16.setAttribute("src", "assets/logos/doritosLogo.png");
    img17.setAttribute("src", "assets/logos/burgerkingLogo.png");
    img18.setAttribute("src", "assets/logos/lacosteLogo.png");
    img16.append(sixteenImg);
    img17.append(seventeenImg);
    img18.append(eighteenImg);
  }, 500);
});
