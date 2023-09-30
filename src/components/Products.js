
import {EcommerceCard} from "./Card";

function Products({products}){
    return(
        <div className="grid lg:grid-cols-2 space-x-2 p-5 grid-cols-1">
            {
                products.map((product) => (
                    <EcommerceCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default Products;

