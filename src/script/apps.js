const main=()=>{
    const productList = document.getElementById('root')
    const searchForm = document.getElementById('searchBar')
    let productData = [];
    
    const loadData = async () => {
        try {
            const url = await fetch('https://api.escuelajs.co/api/v1/products');
            productData = await url.json();
            loadproduct(productData);
        } catch (err) {
            console.log(err)
        }
    }
    
    const loadproduct = (product) => {
        const output = product.map((el) => {
            return `
            <div class='box'>
            <div class='img-box'>
                <image-product class='image' src=${el.images[1]}></image-product>
            </div>
            <div class='bottom'>
                <p>${el.title}<p>
                <h2>${el.price}.000</h2>
                <button><i class="cart fa-solid fa-cart-shopping"></i>Tambah Keranjang</button>
            </div>
        </div>
            `
        }).join('')
        productList.innerHTML = output;
    }
    
    searchForm.addEventListener('keyup', (e) => {
        const value = e.target.value.toLowerCase();
        const input = productData.filter((product) => {
            return (
                product.title.toLowerCase().includes(value)
            )
        })
        loadproduct(input)
    })
    
    
    loadData()
}


export default main

    
