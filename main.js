
const products = [
    { nombre: "Refrigerador pequeño", descripcion: "$500" },
    { nombre: "Laptop", descripcion: "$800" },
    { nombre: "Refrigerador grande", descripcion: "$2,000" },
    { nombre: "Estufa", descripcion: "$55" },
    { nombre: "Estufa con horno", descripcion: "$150" },
    { nombre: "Licuadora pequeña", descripcion: "$40" },
    { nombre: "Licuadora grande", descripcion: "$75" },
    { nombre: "oferta--Licuadora", descripcion: "o-Oferta $25" },
    { nombre: "Horno", descripcion: "$350" },
    { nombre: "Horno", descripcion: "o--Oferta $150" },
    { nombre: "Cama Capri", descripcion: "$285" },
    { nombre: "Oferta--Cama", descripcion: "o--Oferta $100" },
    { nombre: "Oferta--Platos", descripcion: "o--Oferta $15" },
    { nombre: "Cuchillos", descripcion: "$8" },
    { nombre: "Cuchillo de cierra", descripcion: "$3" },
    { nombre: "Pelador", descripcion: "$4" },
    { nombre: "Cucharas y Tenedores", descripcion: "$17" }
    
    
];
    
    
function sortProducts(products) {
    return products.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
}
    
function searchProducts(products, searchName) {
    return products.filter((product) =>
        product.nombre.toLowerCase().includes(searchName.toLowerCase()));
}
    
function showAllProducts(products) {
    const divProduct = document.getElementById("productsContainer");
    divProduct.innerHTML = "";
    
    products.forEach(product => {
        const divP = document.createElement("div");
        divP.classList.add("product");
        divP.innerHTML = `<h3>${product.nombre}</h3> <p> ${product.descripcion} </p>`;
        divProduct.appendChild(divP);
    });
    
    document.getElementById("search").addEventListener("input", function () {
const nameSearched = this.value; //document.getElementById("search")
const filterProducts = searchProducts(products, nameSearched);
showAllProducts(filterProducts);
    });
    
    
    
}
function showSortProducts(){
    const sortProductsList = sortProducts(products);
    showAllProducts(sortProductsList);
}
showAllProducts(products);
    