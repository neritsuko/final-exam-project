import React, { useContext } from 'react' 
import './singleProduct.css'
import { StoreContext } from '../../context/storeContext';

const SingleProduct = (props) => {
    const {product} = props;
    const {addToCart} = useContext(StoreContext);
    return (
        <div className='singleProduct'>
            <div className="singleProduct-left">    
                <div className="singleProduct-img">
                    <img src={product.image} alt="" className='singleProduct-main-img'/>
                </div>
            </div>
            <div className="singleProduct-right">
                <h1 class="fw-bold">{product.name}</h1>
                <div className="singleProduct-right-prices">
                    <div className="singleProduct-right-prices-old">{product.old_price}₸</div>
                    <div className="singleProduct-right-prices-new">{product.new_price}₸</div>
                </div>
                <div className="singleProduct-right-description">
                    <p class="fw-bold">Описание:</p>
                    {product.description}
                    </div>
                <button class="fw-bold" onClick={()=>{addToCart(product.id)}}>Добавить в корзину</button>
            </div>
        </div>
    )
}

export default SingleProduct