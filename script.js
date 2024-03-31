const totalPrice = document.querySelector('.totalPrice');
const price1Input = document.querySelector('.showPrice1');
const price2Input = document.querySelector('.showPrice2');
const price3Input = document.querySelector('.showPrice3');
const button = document.querySelector('.getDiscount');

let isBtnWasClicked = false;
const getDiscount = () => {
  if (isBtnWasClicked) {
    alert('Вы уже применили скидку!')
    return
  }
  const showPrice1 = Number(price1Input.textContent);
  price1Input.textContent = showPrice1 * 0.8;

  const showPrice2 = Number(price2Input.textContent);
  price2Input.textContent = showPrice2 * 0.8;

  const showPrice3 = Number(price3Input.textContent);
  price3Input.textContent = showPrice3 * 0.8;

  const getTotalPrice = Number(totalPrice.textContent);
  totalPrice.textContent = getTotalPrice * 0.8;

  isBtnWasClicked = true;
}