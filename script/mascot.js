let btnSend4 = document.querySelector(".btn4");
let message4 = document.querySelector("#message4");
let text7 = document.querySelector("#text7");
let text8 = document.querySelector("#text8");

btnSend4.addEventListener("click", (event) => {
  event.preventDefault();

  setTimeout(() => {
    btnSend4.style.display = "block";
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
    img16.style.display = "none";
    img17.style.display = "none";
    img18.style.display = "none";

    message.style.display = "none";
    message1.style.display = "none";
    message2.style.display = "none";
    message3.style.display = "none";
    message5.style.display = "none";

    text.style.display = "none";
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
    text6.style.display = "none";
    text9.style.display = "none";
    text10.style.display = "none";

    img13.style.display = "inline-block";
    img14.style.display = "inline-block";
    img15.style.display = "inline-block";
    message4.style.display = "inline-block";
    text7.style.display = "inline-block";
    text8.style.display = "inline-block";

    message4.innerText = "Mascot Logos";
    text7.innerText =
      "Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson.";
    text8.innerText =
      "A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC's Colonel and PUB's cute Water Wally.";

    let thirteenImg = "assets/logos/koolaidLogo.png";
    let fourteenImg = "assets/logos/kfcLogo.png";
    let fifteenImg = "assets/logos/wallyLogo.png";
    img13.setAttribute("src", "assets/logos/koolaidLogo.png");
    img14.setAttribute("src", "assets/logos/kfcLogo.png");
    img15.setAttribute("src", "assets/logos/wallyLogo.png");
    img13.append(thirteenImg);
    img14.append(fourteenImg);
    img15.append(fifteenImg);
  }, 500);
});
