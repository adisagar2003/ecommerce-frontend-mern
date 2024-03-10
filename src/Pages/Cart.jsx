import Checkout from "../Components/Checkout/Checkout"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Navbar from "../Components/Navbar/Navbar"

function Cart() {
  return (
    <div>
        <Header />
        <Navbar />
        <Checkout />
        <Footer />
    </div>
  )
}

export default Cart