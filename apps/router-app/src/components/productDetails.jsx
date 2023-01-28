import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

  const handleSave = () => {
    // Navigate to /products
  };

const ProductDetails = (props) => {

  let parms = useParams();
  console.log(parms, props);
  
  return(      
    <div>
        <h1>Product Details - {parms.id}</h1>
        <button onClick={handleSave}>Save</button>
      </div>);
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
