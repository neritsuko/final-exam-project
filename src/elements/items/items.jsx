import React from 'react' 
import './items.css'
import { Link } from 'react-router-dom';
const Items = (props) => {
    return (
        <div className='items'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt='' className='image'/></Link>
            <p>{props.name}</p>
            <div className="items-prices">
                <div className="items-new-price">
                    {props.new_price}₸

                </div>
                <div className="items-old-price">
                    {props.old_price}₸
                    
                </div>
            </div>
    
        </div>
    )
}

export default Items
