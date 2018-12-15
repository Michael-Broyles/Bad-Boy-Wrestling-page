//---------------------------- ITEM LIST OBJECT / JSON -----------------------------------//
var items = {
item_1: { id: 1011, name: 'T-shirt', description: 'Cotton', price: 10.99 },
item_2: { id: 1022, name: 'T-shirt', description: 'Cotton', price: 16.99 },
item_3: { id: 1033, name: 'T-shirt', description: 'Egyptian Cotton', price: 17.99 },
item_4: { id: 1044, name: 'T-shirt', description: 'Egyptian Cotton', price: 18.99 },
item_5: { id: 1055, name: 'T-shirt', description: 'Silk', price: 19.99 }
};

window.onload = function setPrice(){
	var item_1_prc = document.getElementById('item_1_price');
	var item_2_prc = document.getElementById('item_2_price');
	var item_3_prc = document.getElementById('item_3_price');
	
	item_1_prc.innerHTML = items.item_1.price;
	item_2_prc.innerHTML = items.item_2.price;
	item_3_prc.innerHTML = items.item_3.price;
}


var item_1_qty = document.getElementById('item_1_quantity');
var item_2_qty = document.getElementById('item_2_quantity');
var item_3_qty = document.getElementById('item_3_quantity');

//----------------------------------------- FUNCTION FOR ITEM ONE CALCULATION AND DISPLAY ------------------------------//


//------------------------------- this needs something to round off 'total' to valid cents format ---------------------//
item_1_qty.onchange = function item1Cal(){
	var item_1_qty = document.getElementById('item_1_quantity');
	var item_1_prc = document.getElementById('item_1_price');
	var total = item_1_qty.value * items.item_1.price;
	item_1_prc.innerHTML = '$' + total;
}

item_2_qty.onchange = function item2Cal(){
	var item_2_qty = document.getElementById('item_2_quantity');
	var item_2_prc = document.getElementById('item_2_price');
	var total = item_2_qty.value * items.item_2.price;
	item_2_prc.innerHTML = '$' + total;
}

item_3_qty.onchange = function item3Cal(){
	var item_3_qty = document.getElementById('item_3_quantity');
	var item_3_prc = document.getElementById('item_3_price');
	var total = item_3_qty.value * items.item_3.price;
	item_3_prc.innerHTML = '$' + total;
}

//------------------------------ ADD TO CART BUTTONS -----------------------------------------------//

var item_1_button = document.getElementById('item_1_add_cart');
var item_2_button = document.getElementById('item_2_add_cart');
var item_3_button = document.getElementById('item_3_add_cart');

//------------------------------ ADD TO CART FUNCTION ----------------------------------------------//

item_1_button.onclick = function addToCart(){
	alert(item_1_qty.value + ' ' + items.item_1.name + 's $' + (items.item_1.price * item_1_qty.value));
}




var cart = [];





















