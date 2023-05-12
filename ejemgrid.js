let NombreProducto="Automoviles de lujo";
let Precio="$ 999.99";
let Descripcion="Lorem ipsum dolor sit amet consectetur";
let Foto1="/imagenes grid/campbell-3ZUsNJhi_Ik-unsplash.jpg";
let Foto2="/imagenes grid/joey-banks-YApiWyp0lqo-unsplash.jpg";
let Foto3="/imagenes grid/peter-broomfield-m3m-lnR90uM-unsplash.jpg";
let Foto4="/imagenes grid/stefan-rodriguez-2AovfzYV3rc-unsplash.jpg";

const ficha=`<section class="container">
<div class="Descripcion">
    <h2>${NombreProducto}</h2>
    <h3>${Precio}</h3>
    <p>${Descripcion}</p>
</div>
<div class="Fotos">
    <figure class="Foto-1"><img src="${Foto1}" alt="Fotografia 1"></figure>
    <figure class="Foto-2"><img src="${Foto2}" alt="Fotografia 2"></figure>
    <figure class="Foto-3"><img src="${Foto3}" alt="Fotografia 3"></figure>
    <figure class="Foto-4"><img src="${Foto4}" alt="Fotografia 4"></figure>
</div>
<div class="pieproducto">
    <div class="Estado">
        <i class='bx bx-star bx-sm'></i>
        <i class='bx bx-star bx-sm'></i>
        <i class='bx bx-star bx-sm'></i>
        <i class='bx bx-star bx-sm'></i>
        <i class='bx bx-star bx-sm'></i>
    </div>
    <div class="Social">
        <i class='bx bx-share-alt bx-md'></i>
    </div>
    <div class="Carro">
        <i class='bx bx-cart-add bx-md'></i>
    </div>
</div>
</section>`

/*function verficha(){
    const f1= document.getElementById("contenido");
    f1.innerHTML=ficha;
}

verficha();*/

function dibujarficha(){
    const f1=document.getElementById("contenido");
    let newElement = document.createElement('span');
    newElement.innerHTML=ficha;
    f1.appendChild(newElement);
}

for(i=1; i<=6; ++i){
    dibujarficha();
}