import React, { Component } from 'react';
import { useParams, useMatch, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  //const match = useMatch();

  console.log(params);

  const handleSave = () => {
    console.log('SAVING');
    // Navigate to /products
    navigate('/products', 'replace');
  };

  return (
    <div>
      <h1>Product Details - {params.id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

// class ProductDetails extends Component {

//   render() {
// handleSave = () => {
//   // Navigate to /products
// };
//     return (
//       <div>
//         <h1>Product Details - {ProductID()}</h1>
//         <button onClick={this.handleSave}>Save</button>
//       </div>
//     );
//   }
// }

export default ProductDetails;
