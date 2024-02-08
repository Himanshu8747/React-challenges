
import ProductCard from "./ProductCard";
import './ProductCard.css';

const Home = ({fakeData}) => {

  return (
    <div>
      <h2>Ecommerce Products</h2>
      <div className="product-container">
        {fakeData.map((data)=><ProductCard key={data.id} data={data}/>)}
      </div>
    </div>
  )
}

export default Home