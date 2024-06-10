const paymentMethods = document.querySelector('.payment-methods');
const paymentButton = document.querySelector('.payment-button');

const boxRaydium = document.querySelector('.raydium-box');
const boxJupiter = document.querySelector('.jupiter-box');
const boxBonkBot = document.querySelector('.bonkbot-box');
const boxContract = document.querySelector('.contract-box');

const buttonRaydium = document.querySelector('.raydium-button');
const buttonJupiter = document.querySelector('.jupiter-button');
const buttonBonkBot = document.querySelector('.bonkbot-button');
const buttonContract = document.querySelector('.contract-button');

paymentButton.addEventListener("click", function () {
    resetPaymentMethodMargins();
});

function resetPaymentMethodMargins() {
    paymentMethods.style.marginRight = '40vw';
    paymentMethods.style.marginLeft = '5vw';
}

function toggleOpacity(elementToShow, buttonActive) {
    [boxRaydium, boxJupiter, boxBonkBot, boxContract].forEach(element => {
        element.style.display = 'none';
    });

    [buttonRaydium, buttonJupiter, buttonBonkBot, buttonContract].forEach(button => {
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
    });

    if (elementToShow.style.display === 'none') {
        elementToShow.style.display = 'block';
    }

    buttonActive.style.backgroundColor = 'white';
    buttonActive.style.color = 'black';
}

document.querySelectorAll(".copy-address").forEach(copyAddressContainer => {
    const inputField = copyAddressContainer.querySelector(".copy-address-input");
    const copyButton = copyAddressContainer.querySelector(".copy-address-button");
  
    inputField.addEventListener("focus", () => inputField.select());
  
    copyButton.addEventListener("click", () => {
      const text = inputField.value;
  
      inputField.select();
      navigator.clipboard.writeText(text);
  
      inputField.value = "Copied!";
      setTimeout(() => inputField.value = text, 2000);
    });
  });

buttonRaydium.addEventListener('click', () => {
    toggleOpacity(boxRaydium, buttonRaydium);
    resetPaymentMethodMargins();
});

buttonBonkBot.addEventListener('click', () => {
    toggleOpacity(boxBonkBot, buttonBonkBot);
    resetPaymentMethodMargins();
});

buttonJupiter.addEventListener('click', () => {
    toggleOpacity(boxJupiter, buttonJupiter);
    resetPaymentMethodMargins();
});

buttonContract.addEventListener('click', () => {
    toggleOpacity(boxContract, buttonContract);
    resetPaymentMethodMargins();
});