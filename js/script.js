var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

let image1 = document.getElementById('slide1');
let image2 = document.getElementById('slide2');
let image3 = document.getElementById('slide3');
let image4 = document.getElementById('slide4');

let selectWhite = () => {
    document.getElementById('colorName').innerHTML = "White";
    image1.src = "images/white1.jpg"
    image2.src = "images/white2.jpg"
    image3.src = "images/white3.jpg"
    image4.src = "images/white4.jpg"
    let presentImg = document.getElementById("slide1").src;
    document.getElementById("smallImg").src = presentImg;
}
let selectBlack = () => {
    document.getElementById('colorName').innerHTML = "Black"
    image1.src = "images/black1.jpg"
    image2.src = "images/black2.jpg"
    image3.src = "images/black3.jpg"
    image4.src = "images/black4.jpg"
    let presentImg = document.getElementById("slide1").src;
    document.getElementById("smallImg").src = presentImg;
}

let quantityVal = parseInt(document.getElementById('quantity').value);
let add = () => {
    if (quantityVal < 10) {
        quantityVal += 1;
        document.getElementById("quantity").value = quantityVal;
    }
}

let subtract = () => {
    if (quantityVal > 1) {
        quantityVal -= 1;
        document.getElementById("quantity").value = quantityVal;
    }
}




let addToCart = () => {
    document.getElementById("mySidepanel").style.width = "20rem";
    let newquantityVal = parseInt(document.getElementById('quantity').value);
    document.getElementById("quantitySelected").innerHTML = newquantityVal;
    let subTotal = newquantityVal * 148.00;
    document.getElementById("subTotal").innerHTML = subTotal;

    let sizeOption = document.getElementById("sizeOptions").value;
    console.log(sizeOption)
    document.getElementById("sizeSelected").innerHTML = sizeOption;
}

let closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
}