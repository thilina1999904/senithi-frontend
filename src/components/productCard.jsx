import "./productCard.css";

export default function ProductCard(props) {
   console.log(props)
   
   return (
   
    <div className="product-card">
      <div className="image-container">
        <img src="/1.jpg" alt="Saree" className="product-image" />
      </div>
      <div className="product-details">
        <span className="product-name">{props.name}</span>
        <span className="product-price">LKR {props.price}</span>
        <button className="view-btn">View Details</button>
      </div>
    </div>
  );
}