let btnSend3 = document.querySelector(".btn3");
let message3 = document.querySelector("#message3");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");

btnSend3.addEventListener("click", (event) => {
  event.preventDefault();

  setTimeout(() => {
    btnSend3.style.display = "block";
    img.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none";
    img7.style.display = "none";
    img8.style.display = "none";
    img9.style.display = "none";
    img13.style.display = "none";
    img14.style.display = "none";
    img15.style.display = "none";
    img16.style.display = "none";
    img17.style.display = "none";
    img18.style.display = "none";

    message.style.display = "none";
    message1.style.display = "none";
    message2.style.display = "none";
    message4.style.display = "none";
    message5.style.display = "none";

    text.style.display = "none";
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text7.style.display = "none";
    text8.style.display = "none";
    text9.style.display = "none";
    text10.style.display = "none";

    img10.style.display = "inline-block";
    img11.style.display = "inline-block";
    img12.style.display = "inline-block";
    message3.style.display = "inline-block";
    text5.style.display = "inline-block";
    text6.style.display = "inline-block";

    message3.innerText = "Abstract Mark Logos";
    text5.innerText =
      "An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image--like an apple or a bird--it's an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divide circle and the strip-y Adidas flower.";
    text6.innerText =
      "Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.";

    let tenImg = "assets/logos/bpLogo.png";
    let elevenImg = "assets/logos/pepsiLogo.png";
    let twelveImg = "assets/logos/adidasLogo.png";
    img10.setAttribute("src", "assets/logos/bpLogo.png");
    img11.setAttribute("src", "assets/logos/pepsiLogo.png");
    img12.setAttribute("src", "assets/logos/adidasLogo.png");
    img10.append(tenImg);
    img11.append(elevenImg);
    img12.append(twelveImg);
  }, 500);
});
