/* global chrome */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Handle the message
  if (request.action === "getProductData") {
    const productTitle = document.getElementById("productTitle").innerText;
    const productPrice =
      parseInt(document.querySelector(".a-price-whole").innerText) +
      0.01 * parseInt(document.querySelector(".a-price-fraction").innerText);
    const productImg = document.getElementById("landingImage").src;

    sendResponse({ productTitle, productPrice, productImg });
  }
});
