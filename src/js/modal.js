
const images = document.getElementById('sertificates');
console.log(images.children)

images.childNodes.forEach((el) => {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(el.dataset.name)
        document.querySelector('#exampleModalFullscreen').classList.remove('hidden');
        let elem = document.createElement("img");
        // elem.setAttribute("height", "400");
        elem.setAttribute("width", "700");
        elem.setAttribute("src", `../img/sertificates/${el.dataset.name}.jpg`);
        document.getElementById('modal-content').appendChild(elem)

    })
});

document.querySelector('#exampleModalFullscreen').addEventListener('click', (e) => {

    document.querySelector('#exampleModalFullscreen').classList.add('hidden');
     document.getElementById('modal-content').innerHTML = '';
});
