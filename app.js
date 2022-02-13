function getItems(product, isIncreasing, price) {
    const productItems = document.getElementById(product + "-items");
    if (isIncreasing == true) {
        productItems.value = parseInt(productItems.value) + 1;
    }
    else if (productItems.value > 0 && isIncreasing == false) {
        productItems.value = parseInt(productItems.value) - 1;
    }
    const phoneTotal = document.getElementById(product + "-total");
    phoneTotal.innerText = productItems.value * price;
    priceCalculator();
}

function getTotalItems(product) {
    const totalItems = document.getElementById(product + "-items");
    const totalItemsText = totalItems.value;
    const totalItemsValue = parseInt(totalItemsText);
    return totalItemsValue;
}

function priceCalculator() {
    const phoneTotalPrice = getTotalItems("phone") * 1219;
    const caseTotalPrice = getTotalItems("case") * 59;
    const subTotalCall = document.getElementById("sub-total");
    const tax = document.getElementById("tax");
    const total = document.getElementById("total");

    subTotalCall.innerText = phoneTotalPrice + caseTotalPrice;
    tax.innerText = (subTotalCall.innerText * (10 / 100)).toFixed("2");
    total.innerText = parseFloat(subTotalCall.innerText) + parseFloat(tax.innerText);

}
document.getElementById("phone-increase").addEventListener("click", function () {
    const totalProductItems = getItems("phone", true, 1219);
});
document.getElementById("phone-decrease").addEventListener("click", function () {
    getItems("phone", false, 1219);
});
document.getElementById("case-increase").addEventListener("click", function () {
    const totalProductItems = getItems("case", true, 59);
});
document.getElementById("case-decrease").addEventListener("click", function () {
    getItems("case", false, 59);
});