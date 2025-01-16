updateCart();

$('.newsletter-form').on('submit', () => alert("Thank you for subscribing!"));
$('.add-to-cart-button').on('click', (event) => {
        let str = $(event.target).siblings('h4').text()
        updateCart(str)
        alert("Item added to the cart.");
});
$('#view-cart').on('click', () => $('#cart-dialog')[0].show());
$('#clear-cart').on('click', () => {if($('#cart-list').children().length > 0 ) {
    updateCart(undefined, true);
    alert('Cart cleared.');
    $('#cart-list').empty();
} else {
    alert('No items to clear.');
}});
$('#process-order').on('click', () => {if($('#cart-list').children().length > 0 ) {
    updateCart(undefined, true);
    alert('Thank you for your purchase!');
    $('#cart-list').empty();
} else {
    alert('Cart is empty.');
}});
$('#cart-close').on('click', () => $('#cart-dialog')[0].close());
$('.contact-form').on('submit', () => {
    let formInfo = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        feedback: $('#feedback').val(),
        customOrder: $("#custom-order").is(":checked") ? "true" : "false",
    };

    localStorage.setItem($('#name').val(), JSON.stringify(formInfo));

    console.log(localStorage.getItem('Rolland'));
    alert('Thank you for your message.');
});


function updateCart(itemName, emptyCart = false) {
sessionStorage.setItem('cart', JSON.stringify([]));
let cart = JSON.parse(sessionStorage.getItem('cart'));
$('#cart-list').empty();

if(emptyCart == true) {
    cart = [];
    sessionStorage.setItem('cart', JSON.stringify(cart));
} else if(itemName != undefined) {
    cart.push(itemName);
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

if(cart.length > 0) {
    cart.forEach(element => {
        $('#cart-list').append(`<li>${element}</li>`);
    });
}}
