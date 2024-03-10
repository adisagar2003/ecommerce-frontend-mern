import "./Navbar.css";
import SearchIcon from "../../assets/icons/search.svg";
import PersonIcon from "../../assets/icons/person.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import CartIcon from "../../assets/icons/cart.svg";
import NavbarLogo from "../../assets/icons/navbar-logo.png";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { api_url } from "../../api/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {

  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [searchedContentData, setSearchedContentData] = useState([]);
  // get cart items 
  const cartItems = useSelector(state=> state.items);
  // fetch relevant items when searching for content
  function changeSearchContent(e) {
    setSearchContent(e.target.value);
    if (e.target.value.length == 1) {
        axios.get(`${api_url}/product/search/${e.target.value}`).then((res)=> {
            setSearchedContentData(res.data.data);
        });
    }
    if (e.target.value.length == 0 ) {
        setSearchedContentData([]);
    }  
  }

  return (
    <div className="navbar">
        <div className='wrapper'>
            <div className='navbar-main'>         
                <div className="navbar-logo" onClick={()=>navigate('/')}>
                    <img src={NavbarLogo} />
                </div>
                <div className="navbar-search">
                    <input type="text" onChange={changeSearchContent} placeholder='Search for items...' />
                    <button><img src={SearchIcon} /></button>
                    <div className={`navbar-search-results ${searchContent.length > 0 && "active"}`}>
                        {searchedContentData.length == 0 ? 
                        <ClipLoader margin={"auto"} />:
                        <div className="navbar-searched-data">
                            {searchedContentData.map((elem) => {
                                return (
                                <div>
                                    <span>{elem.foodName}<br /></span>
                                </div>)
                            })}
                        </div>}
                    </div>
                </div>
                
                <div className="navbar-icons">
                    <div>
                        <span><img src={PersonIcon} /></span>
                        <span>Account</span>
                    </div>
                    <div>
                        <span><img src={HeartIcon} /></span>
                        <span>Wishlist</span>
                    </div>
                    <div onClick={() => navigate('/cart')}>
                        <span><img src={CartIcon} /></span>
                        <span>Cart {cartItems}</span>
                    </div>
                </div>
                <a onClick={() => navigate('/cart')} className="navbar-responsive-button" style={{"color": 'black'}}><span>Cart {cartItems}</span></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar