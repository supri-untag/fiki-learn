const main=()=>{
    const productList = document.getElementById('root')
    const searchForm = document.getElementById('searchBar')
    let productData = [];
    
    const loadData = async () => {
        try {
            const url = await fetch('https://fakestoreapi.com/products');
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
                <image-product class='image'src=${el.image}>
                </image-product>
            </div>
            <div class='product bottom'>
                <p>${el.title}<p>
                <h3> $ ${el.price}</h3>
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

    
