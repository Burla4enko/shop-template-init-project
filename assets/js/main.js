let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('.page-content');
let cartPrice = 0;
let cartCounter = 0;

let clickAddToCartBtn = (event) => {
    let target = event.target;

    if (target.classList.contains('item-actions__cart')) {

        cartCounterLabel.innerHTML = ++cartCounter;
        if (cartCounter === 1) cartCounterLabel.style.display = 'block';

        let restoreObject = target.innerHTML;

        target.innerHTML = (() => {
            let tempPrice = target.parentElement.previousElementSibling.innerHTML;

            cartPrice += +tempPrice.replace(/^\$(\d+)\s\D+(\d+).*$/gu, '$1.$2');             
            
            return 'Added ' + cartPrice.toFixed(2) + ' $';
        })();
        
        buttonsContainer.removeEventListener('click', clickAddToCartBtn);

        setTimeout((elem, restore) => {
            elem.innerHTML = restore;
            buttonsContainer.addEventListener('click', clickAddToCartBtn);
        }, 2000, target, restoreObject);
    }
};

buttonsContainer.addEventListener('click', clickAddToCartBtn);
