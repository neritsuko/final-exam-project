import React, {useContext} from 'react' 
import { StoreContext } from '../context/storeContext'
import { useParams } from 'react-router-dom';
import SingleProduct from '../elements/singleProduct/singleProduct';

const Product = () => {
    const {products}= useContext(StoreContext);
    const {productId} = useParams();
    const product = products.find((e)=> e.id === Number(productId))

    return (
        <div>
            <SingleProduct product={product}/>
        </div>
    )
}

export default Product