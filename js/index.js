async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const productsArray = products.map(elemento => Object.entries(elemento))
    console.log(productsArray[8][4])
    console.log(productsArray[8][4].length)
    console.log(productsArray)
    const productsSliced = productsArray.slice(0,1)
    console.log(products)
    products.forEach(element => {
        function generarNumeroAleatorio() {
            const min = 9;
            const max = 13;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        //const randData = (min, max) => Math.floor(Math.random()*(max - min + 1) + min);
        //const randIndex = randData(1, productsSliced.length)
        for(i = 2; i < 4; i++){
            console.log(productsArray[i])
        if(element.category == "electronics" && element.id >= generarNumeroAleatorio()  && element.id <= generarNumeroAleatorio() ){
                const box = document.createRange().createContextualFragment(`
                    
                    <div class="box box-${i}">
                        <img src="${element.image}" alt="">
                        <h3>${element.title}</h3>
                    </div>
                    
                    `)
                    const project_row = document.querySelector('.project-row');
                    project_row.append(box)
            }
        }
    });
}

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fecha');
    const hora = document.getElementById('hora');
    const mensaje = document.getElementById('mensaje');
    const arr = [nombre, email, fecha, hora, mensaje];
    const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false; 
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         fecha.value = "";
         hora.value = "";
         mensaje.value = "";
         return true;
}

const emailValido = (email) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
.test(email.value)
}


getData()