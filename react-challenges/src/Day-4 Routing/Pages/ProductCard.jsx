import './ProductCard.css';
import { Link } from 'react-router-dom';
const ProductCard = ({data}) => {
  return (
    <div className="product">
        <img height="140px" width="140px" src={data.image}/>
        <h3>{data.title}</h3>
        <span>₹-{data.price} /-</span>
        <Link to={`/product/${data.id}`}>View Detailed Prodcut</Link>
    </div>
  )
}

export default ProductCard