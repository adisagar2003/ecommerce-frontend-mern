import { BsStarFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/features/cart/cartSlice";

function ProductCard({foodType, foodName, rating, owner, ownerColor, price, orignalPrice, image, sticker}) {
    const dispatch = useDispatch();
    return (
    <div className="product-card">
        {sticker && <div className="product-sticker">{sticker}</div>}
        <img src={image} />
        <div className="product-content">
            <div className="food-type">
                {foodType}
            </div>
            <div className="food-name">
                {foodName}
            </div>
            <div className="product-rating">
                <span><BsStarFill color="teal" /></span>
                <span>{rating}</span>
            </div>
            <div className="product-owner">
                By <span >{owner}</span>
            </div>
        </div>
        <div className="product-flex-price">
            <div className="product-price">
                <span>${price}</span>
                <span className="crossed-text">${orignalPrice}</span>
            </div>
            <button onClick={()=>dispatch(increment({foodType, foodName, rating, owner, ownerColor, price, orignalPrice, image, sticker}))} className="card-button">
                <span><CiShoppingCart  /></span>
                <span>Add</span>
            </button>
        </div>
    </div>
  )
}

export default ProductCard