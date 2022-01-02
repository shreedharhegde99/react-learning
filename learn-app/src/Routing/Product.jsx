import React from "react";

const style =
{
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "20px",
};

const Product = (props) => {
  const { match, data } = props;
  const { params } = match;
  const { id } = params;
  const item = data.filter((product) => {
    if (product.id === id) {
      return product;
    }
  });
  const [index] = item
  // console.log(index)
  return (
    <>
      <div>Product Page</div>
      <div style={style}>{index.name}</div>
      <div style={{marginLeft:"150px"}}><img style={{height:"250px",width:"250px",borderRadius:"50px"}}  src={index.src} alt="product" /></div>
    </>
  );
};
export default Product;
