import "./CheckoutProduct.css";

function CheckoutProduct(props) {
  return (
    <div className='checkout-product'>
        <img src={props.image} />
        <div>
            <span>{props.title.length > 20 ? `${props.title.slice(0,21)}...`: props.title}</span>
            <p>{props.owner}</p>
        </div>
        <p className="checkout-price">${props.price}</p>
    </div>
  )
}

export default CheckoutProduct