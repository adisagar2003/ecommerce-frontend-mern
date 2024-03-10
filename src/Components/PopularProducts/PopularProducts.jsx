import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./PopularProducts.css";
import axios from "axios";
import { api_url } from "../../api/api";
import ClipLoader from "react-spinners/ClipLoader";


function Products(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  // fetch products from API 
  useEffect(()=>{
    axios.get(`${api_url}/product/10`).then((res)=>{
        setFetchedProducts(res.data.data);
    });
  },[]);
  
  return (
    <section className="popular-products">
        <div className="wrapper">
            <div className="pp-main">
                <div className="pp-navbar">
                    <h3>{props.heading}</h3>
                    <div className="pp-nav-items">
                        {props?.navlinks?.map((elem, i) =>{
                            return (<a  key={i} className={activeIndex == i && "active-link"} onClick={()=>setActiveIndex(i)}>{elem}</a>)
                        })}
                    </div>
                </div>
                <div className="pp-grid-items">
                        {fetchedProducts.length > 0 ? fetchedProducts.map((elem, i)=>{
                        return (<ProductCard 
                                    image={elem.image} 
                                    ownerColor={elem.ownerColor} 
                                    foodName={elem.foodName} 
                                    foodType={elem.foodType} 
                                    rating={elem.rating} 
                                    owner={elem.owner} 
                                    price={elem.price} 
                                    orignalPrice={elem.orignalPrice} />)}
                                    )
                                    : 
                                    <div>
                                        <ClipLoader
                                            color={"orange"}
                                            loading={true}
                                            cssOverride={override}
                                            size={150}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    </div>}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products