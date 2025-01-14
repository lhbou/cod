const OUT_OF_STOCK = ["PROYECTOR-HD"];
const skuSpan = document.querySelector('span[data-sku]');
if (OUT_OF_STOCK.includes(skuSpan.getAttribute('data-sku'))) {
    document.getElementById("codForm").style.display = "none";
    document.getElementById("buyNow").style.display = "none";
    document.querySelectorAll(".buyNow").forEach(element => {
        element.style.display = "none";
    });
}
