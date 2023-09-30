
import {EcommerceCard} from "./Card";

function Products({products}){
    return(
        <div className="grid grid-cols-3 gap-4">
            {
                products.map((product) => (
                    <EcommerceCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default Products;

