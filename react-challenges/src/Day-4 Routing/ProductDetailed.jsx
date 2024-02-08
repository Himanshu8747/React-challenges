import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetailed = ({fakeData}) => {
   
  const {id} =  useParams(); 

  if (!fakeData || fakeData.length === 0) {
    return <div>Loading...</div>;
  }

  const product = fakeData.find((data) => data.id.toString() === id);

  return (
    <div className="productDetail-container">
      <img src={product.image} alt={product.title} className="productDetail-image" />
      <div className="productDetail-details">
        <h2 className="productDetail-title">{product.title}</h2>
        <p className="productDetail-description">{product.description}</p>
        <p className="productDetail-price">Price: ₹{product.price.toFixed(2)}</p>
        <p className="productDetail-category">Category: {product.category}</p>
        <div className="productDetail-rating">
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailed