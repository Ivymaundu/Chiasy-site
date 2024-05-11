import React from 'react';
import axios from 'axios';

interface PurchaseButtonProps {
  productId: number;
  onPurchaseSuccess: () => void;
}

const PurchaseButton: React.FC<PurchaseButtonProps> = ({ productId, onPurchaseSuccess }) => {
  const handlePurchase = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/purchase/${productId}`);
      // If the purchase is successful, invoke the callback function
      if (response.data && response.data.message === "Purchase successful") {
        onPurchaseSuccess();
      }
    } catch (error) {
      console.error('Error purchasing product:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <button onClick={handlePurchase}>Purchase</button>
  );
};

export default PurchaseButton;
