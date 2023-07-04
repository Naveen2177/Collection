import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Bnner from './layout/Bnner';
import Catagory from './layout/Catagory';
import Latest from './layout/LatestProduct';
import Product from './layout/Product';
import Shop from './layout/Shop';
import Collection from './layout/Collection';
import Offer from './layout/Offer';
import Shipping from './layout/Shipping';
import Img from './layout/Img';
import Footer from './layout/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Bnner/>
   <Catagory/>
   <Latest/>
   <Product/>
   <Shop/>
   <Collection/>
   <Offer/>
   <Shipping/>
   <Img/>
   <Footer/>
   </>
  );
}

export default App;
