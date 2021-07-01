let btnSend1 = document.querySelector(".btn1");
let message1 = document.querySelector("#message1");
let text2 = document.querySelector("#text2");

btnSend1.addEventListener("click", (event) => {
  event.preventDefault();

  setTimeout(() => {
    btnSend1.style.display = "block";

    img.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img7.style.display = "none";
    img8.style.display = "none";
    img9.style.display = "none";

    message.style.display = "none";
    message2.style.display = "none";
    message3.style.display = "none";
    message4.style.display = "none";
    message5.style.display = "none";

    text.style.display = "none";
    text1.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
    text6.style.display = "none";
    text7.style.display = "none";
    text8.style.display = "none";
    text9.style.display = "none";
    text10.style.display = "none";

    img4.style.display = "inline-block";
    img5.style.display = "inline-block";
    img6.style.display = "inline-block";
    message1.style.display = "inline-block";
    text2.style.display = "inline-block";

    message1.innerText = "Wordmark Logo";
    text2.innerText =
      "Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business' name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google's logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.";

    let fourthImg = "assets/logos/visaLogo.png";
    let fiveImg = "assets/logos/cocaLogo.png";
    let sixImg = "assets/logos/googleLogo.png";
    img4.setAttribute("src", "assets/logos/visaLogo.png");
    img5.setAttribute("src", "assets/logos/cocaLogo.png");
    img6.setAttribute("src", "assets/logos/googleLogo.png");
    img4.append(fourthImg);
    img5.append(fiveImg);
    img6.append(sixImg);
  }, 500);
});
