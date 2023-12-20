import React, { useContext } from 'react' 
import './category.css'
import { StoreContext } from '../context/storeContext'
import Items from '../elements/items/items'

const Category = (props) => {
    const {products} = useContext(StoreContext)
    return (
        <div className='store-category'>
            <img src={props.banner} alt="" className='img-banner'/>
            <div className="store-category-index">
                <p>
                    <span>1-12 товаров</span> из 12
                </p>
            </div>
            <div className="store-category-products">
                {products.map((item,i)=>{
                    if (props.category===item.category) {
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else {
                        return null;
                    }
                })}
            </div>


            
        </div>
    )
}

export default Category