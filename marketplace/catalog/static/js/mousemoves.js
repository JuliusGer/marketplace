var logout_el = document.getElementById('logout');
var new_item_el = document.getElementById('new_item');

function alerting_logout(event) {
    logout_el.style.color = 'red';
}

function new_item_color(color) {
    alert('Никаких тебе новых элементов!');
};

if (logout_el) {
    logout_el.addEventListener('mouseover', alerting_logout);
}

if (new_item_el) {
    new_item_el.addEventListener('mouseover', new_item_color)
}

