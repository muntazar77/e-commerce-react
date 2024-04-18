


const Products =(data)=>{
// eslint-disable-next-line array-callback-return
 console.log("allProducts",data);
const productsList =allProducts.map((item)=>(
    <div class="col-12 col-md-4 mb-4">
    <div class="card h-100">
        <a href="shop-single.html">
            <img src="assets/img/feature_prod_03.jpg" class="card-img-top" alt="d" />
        </a>
        <div class="card-body">
            <ul class="list-unstyled d-flex justify-content-between">
                <li>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                </li>
                <li class="text-muted text-right">$ {item.price}</li>
            </ul>
            <a href="shop-single.html" class="h2 text-decoration-none text-dark">Summer Addides Shoes</a>
            <p class="card-text">
                Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
            </p>
            <p class="text-muted">Reviews (74)</p>
        </div>
    </div>
</div>
));
// console.log("productsList",productsList);
    return(
        <>
    
                    {/* <!-- Start Featured Product --> */}
    <section class="bg-light">
        <div class="container py-5">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Featured Product</h1>
                    <p>
                        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
            </div>
            <div class="row">
            {productsList}
               

            </div>
        </div>
    </section>
    {/* <!-- End Featured Product --> */}

        </>
    )
}

export default Products;