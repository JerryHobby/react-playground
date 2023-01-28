import React, { Component } from 'react';
import { useParams, useMatch } from 'react-router-dom';

const handleSave = () => {
  // Navigate to /products
};

const ProductDetails = () => {
  let params = useParams();
  // let match = useMatch();
  console.log(params);
  //  console.log(match);

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
