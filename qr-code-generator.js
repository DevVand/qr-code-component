
//function to transform rgb to hex
const rgb2hex = (rgb) => `${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

const qr_code_container_bg_color = rgb2hex(window.getComputedStyle(document.getElementById('qr_code_container') ,null).getPropertyValue('background-color'))
const text_color = 'fff';

let url = "https://www.linkedin.com/in/vanderlei-catione-junior/";
let api = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&bgcolor=${qr_code_container_bg_color.toUpperCase()}&color=${text_color}&data=`;


//Set First QR Code
let img = document.createElement("img");
img.src = api+url;
document.getElementById('qr_code').appendChild(img);

//Set placeholder
document.getElementById("url").placeholder = url;


function getQRCode() {
    document.getElementById('qr_code').classList.add('remove');
    document.getElementById('loader').classList.remove('remove');
    setTimeout(function(){
        document.getElementById('loader').classList.add('remove');
        document.getElementById('qr_code').classList.remove('remove');
    }, 1000)
    document.querySelector('#qr_code > img').src = api + document.getElementById("url").value
}

function checkURL(){

    if(document.getElementById("url").checkValidity())
        document.querySelector(".submit-button").classList.remove("disabled");
    else
        document.querySelector(".submit-button").classList.add("disabled");
    
}



document.querySelector("#qr_code > img").onload = function () {

    setTimeout(function(){
        document.getElementById('loader').classList.add('remove');
        document.getElementById('qr_code').classList.remove('remove');
    }, 1000)

};
