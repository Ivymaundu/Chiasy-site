import { useState } from "react";
import axios from "axios";

interface Product {
    product_name: string;
    product_price: number;
    product_quantity: number;
}

export default function Products() {


    const [product_name, setProductName] = useState("");
    const [product_price, setProductPrice] = useState(0);
    const [product_quantity, setProductQuantity] = useState(0);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    const handleUpload = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(); 

        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post("http://127.0.0.1:8000/uploadfile", formData);
            console.log('File uploaded successfully:', response.data);
            return response.data.fileUrl;
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    };



    const handleCreateProduct = () => {
        const newProduct: Product = {
            product_name: product_name,
            product_price: product_price,
            product_quantity: product_quantity,

        };
        axios.post<Product>('http://127.0.0.1:8000/products', newProduct)
            .then(response => {
                console.log('Product created successfully:', response.data);
            })
            .catch(error => {
                console.error('Error creating product:', error);
            });
    };

    return (
        <form onSubmit={handleCreateProduct} >
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product name</label>
                <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={product_name}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Price</label>
                <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    value={product_price}
                    onChange={(e) => setProductPrice(parseFloat(e.target.value))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="productQuantity" className="form-label">Stock quantity</label>
                <input
                    type="number"
                    className="form-control"
                    id="productQuantity"
                    value={product_quantity}
                    onChange={(e) => setProductQuantity(parseInt(e.target.value))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Select Image</label>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleFileChange}
                />
            </div>

            <button className="btn btn-primary" type="submit" onClick={handleUpload}>Create Product</button>
        </form>
    )
}