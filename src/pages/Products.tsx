import { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import './Products.css';
import { CartContext } from '../store/state';


interface Product {
  id: number;
  product_name: string;
  product_price: number;
  image_url: string;
}
const ImageGallery = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart,setCart]=useState<Product[]>([]);
  const [message,setMessage]=useState<boolean>(false);
  const { setCartCount } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://127.0.0.1:8000/products');
        setProducts(response.data);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleClick = (product: Product) =>{
    let isPresent=false;
    cart.forEach((clickedProduct)=>{
      if (product.id===clickedProduct.id){
        isPresent=true
      }
    })
    if (isPresent){
      setMessage(true)
      setTimeout(()=>{
        setMessage(false)
      },1000);
      return;
    }
    let newCart= [...cart, product];
    setCart(newCart)
    setCartCount(count=>count+1);
    console.log("cart.............",cart)
  }



  return (
    <div className="container4">
      {products.map((product) => (
      <div className="card" style={{width:'18rem'}} key={product.id} >
        <img src={product.image_url} alt={product.product_name} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{product.product_name}</h5>
          <p className="card-text ">Price: ${product.product_price}</p>
          <a href="#" className="btn btn-primary" onClick={() => handleClick(product)}>Add to Cart</a>
          {message && (
              <span className="message">{`${product.product_name} added to cart`}</span>
          )}
        </div>
        
      </div>
       ))}
    </div>

  );
};

export default ImageGallery;
