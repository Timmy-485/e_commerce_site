let storage = localStorage.getItem(0);

// Parse JSON string to object
let storageValue = JSON.parse(storage);

let storageQuantity = storageValue.quantity;
let storageImage = storageValue.image;
let storageSize = storageValue.size;
let storageColor = storageValue.color;

// console.log(storageQuantity)
// console.log(storageImage)
// console.log(storageSize)



document.getElementById("subTotal").innerHTML = storageQuantity*148.00;
document.getElementById("checkoutImg").src = storageImage;
document.getElementById("color").innerHTML = storageColor;
document.getElementById("quantity").innerHTML = storageQuantity;
document.getElementById("size").innerHTML = storageSize;

document.getElementById("cartTotal").innerHTML = storageQuantity*148
document.getElementById("totalCost").innerHTML = storageQuantity*148.00;
document.getElementById("discount").innerHTML = "0%";


let updateQuantity = () => {
    let val = document.getElementById("numberField").value
    storageQuantity = val;


    document.getElementById("quantity").innerHTML = storageQuantity;

    let cartTotal = val*148.00;
    document.getElementById("cartTotal").innerHTML = cartTotal;
    document.getElementById("subTotal").innerHTML = cartTotal
}


let deleteAll = () => {
    let delID = document.getElementById("delMe");
    delID.remove();
    localStorage.clear()
    document.getElementById("subTotal").innerHTML = 0;
    document.getElementById("discount").innerHTML = "0%"
    document.getElementById("totalCost").innerHTML = 0
}




let applyDiscount = () => {
    let coupon = document.getElementById("coupon").value
    console.log(coupon)
    if(coupon.length < 5){
        alert("Invalid COupon");
    }
    else{
        document.getElementById("discount").innerHTML = "50%";
        
        document.getElementById("totalCost").innerHTML = 0.5* parseFloat(document.getElementById("subTotal").innerText);
        console.log(document.getElementById("subTotal").innerHTML)
    }

}