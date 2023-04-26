const xhr = new XMLHttpRequest();
xhr.open("GET", "./objeto.txt", true);
xhr.onload = (e) => {
if (xhr.readyState === 4) {
if (xhr.status === 200) {
console.log(xhr.responseText);
let objeto = document.querySelector("#objeto");
objeto.innerHTML = xhr.responseText;



} else {
console.error(xhr.statusText);
}
}
};
xhr.onerror = (e) => {
console.error(xhr.statusText);
};
xhr.send(null);