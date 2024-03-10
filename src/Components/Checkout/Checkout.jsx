import { useEffect, useState } from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import axios from "axios";
import { api_url } from "../../api/api";
import Stripe from "react-stripe-checkout";
import ConfettiComponent from "../Confetti/ConfettiComponent";
function Checkout() {
  const items = useSelector(state=>state.cart);
  const [totalCost, setTotalCost] = useState(0);
  const [openPayment, setOpenPayment] = useState(false);
  // calculate total cost from cart items. 
  function calculateTotalCost() {
    console.log(items);
    setTotalCost(items.reduce((a,v) => a = a+v.price, 0));
  }
  const handleToken = (totalAmount, token) => {
    try {
      console.log({
        token: token.id,
        amount: totalCost,
        email: token.email
        });
        axios.post(`${api_url}/stripe/pay`, {
            token: token.id,
            amount: parseInt(totalCost),
            email: token.email
        }).then((result)=> {
          console.log(result);
          setOpenPayment(true);
        });
    } catch (error) {
        console.log(error.message);
    }
  }
  const tokenHandler = (token) => {
    handleToken(100 ,token);
  }
  // calculate total cost initially
  useEffect(()=> {
    calculateTotalCost();
  }, [])
  
  return (
    <section className="checkout-section">
        <div className="wrapper">
            <div className="checkout-container">
                <div className='checkout-summary'>
                    <h1>Summary</h1>
                    {openPayment && <ConfettiComponent />}
                    
                    <div>
                        {items.map((elem, i)=>{
                            return (<CheckoutProduct key={i} image={elem.image} title={elem.foodName} owner={elem.owner} price={elem.price} />)
                        })}
                    </div>
                    <div className="checkout-total-charges">
                        <div>
                            Total Charges 
                        </div>
                        <span>
                            $ {totalCost.toFixed(2)}
                        </span>
                        <br />
                        <div><Stripe stripeKey="pk_test_51N3jlPABf1taX6vPh9mWdIoNydqngYpzmspCWrOHhFwDIZlVZNIoUwkB5PeiRro5tOSjjHYGS99cZYZfwc3MBVLP00hFHlGeOB" token={tokenHandler} /></div>  
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout