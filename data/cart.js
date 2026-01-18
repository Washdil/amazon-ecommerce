export const cart = [];

export function addToCart(productId) {
  let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`,
    );

    if (matchingItem) {
      matchingItem.quantity += Number(quantitySelector.value);
    } else {
      cart.push({
        productId: productId,
        quantity: Number(quantitySelector.value),
      });
    }
}

