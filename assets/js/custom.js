let menu = document.getElementsByClassName('navbar-toggler')[0];
let nav = document.getElementById('nav');
let viewPortHeight = window.innerHeight;
let content = document.getElementsByClassName('content');
let pTog = document.getElementById('prd-focus');
let prd = document.getElementById('products');

// for (i = 0; i < content.length; i++) {
//     i == 0 ? content[i].setAttribute('style', 'min-height: ' + (viewPortHeight - nav.offsetHeight) + 'px;') : content[i].setAttribute('style', 'min-height: ' + (viewPortHeight) + 'px;');
// }

function changeIcon() {
    if (!menu.classList.contains('collapsed')) {
        menu.classList.add("close");
    } else {
        menu.classList.remove("close");
    }
}

function scrollToProduct() {
    prs.scrollToView();
}

function setMail() {
    let nname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('value').value;
    console.log(nname);
    str = "mailto:info@jimpo.in?subject=" + nname + " - " + email + " - " + phone + "&body=" + message;
    console.log(str);
    res = encodeURI(str);
    console.log(res);
    window.location.href = str;
}

function setWmessage() {
    let nname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('value').value;
    console.log(nname);
    str = "https://wa.me/+91 9605834663/?text=Name : "+nname+"%0aEmail : "+email+"%0aPhone : "+phone+"%0a%0a"+message;
    console.log(str);
    res = encodeURI(str);
    console.log(res);
    window.location.href = str;
}

try {
    document.getElementById('mailTo').addEventListener('click', setMail);
    document.getElementById('wText').addEventListener('click', setWmessage);
} catch (e) {

}

pTog.addEventListener('click', scrollToProduct)
menu.addEventListener('click', changeIcon);

