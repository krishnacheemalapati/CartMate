/* global chrome */
import React from 'react'

function Button({ text }) {
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getProductData" }, (response) => {
        const productTitle = response.productTitle;
        const productPrice = response.productPrice;
        const productImg = response.productImg;
        console.log(productTitle, productPrice, productImg)
      });
    });
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button