
import {EcommerceCard} from "./Card";

function Products({products}){
    return(
        <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 sm:flex-wrap">
            {
                products.map((product) => (
                    <EcommerceCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default Products;

