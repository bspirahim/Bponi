// useProductData.js
import { useState, useEffect } from 'react';

const useProductData = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch your JSON data here
    const fetchData = async () => {
      try {
        const response = await fetch('/product.json'); // Replace with your API endpoint or JSON file path
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it will run once when the component mounts

  return productData;
};

export default useProductData;
