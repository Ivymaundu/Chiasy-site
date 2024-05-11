import { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'

interface Product {
  id: number;
  product_name: string;
  product_price: number;
  image_url: string;
}
const ImageGallery = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://127.0.0.1:8000/products');
        setProducts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image_url} alt={product.product_name}/>
          <div className="product-details">
            <h3>{product.product_name}</h3>
            <p>Price: ${product.product_price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
