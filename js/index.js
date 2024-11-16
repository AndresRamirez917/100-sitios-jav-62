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
        for(i = 0; i < 3; i++){
        if(element.category == "electronics" && element.id >= generarNumeroAleatorio()  && element.id <= generarNumeroAleatorio() ){
                const box = document.createRange().createContextualFragment(`
                    
                    <div class="box box-${i}">
                        <img src="${element.image}" alt="">
                        <h3>Honeycomb</h3>
                    </div>
                    
                    `)
                    const project_row = document.querySelector('.project-row');
                    project_row.append(box)
            }
        }
    });
}

getData()