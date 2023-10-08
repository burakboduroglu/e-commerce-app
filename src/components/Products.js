
import {EcommerceCard} from "./Card";

function Products({products}){
    return(
        <div className="flex flex-wrap justify-center items-center gap-3">
            {
                products.map((product) => (
                    <EcommerceCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default Products;

