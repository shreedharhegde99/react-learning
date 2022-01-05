import styled from "styled-components"


const ProductContainer = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
  padding: 10px 25px;
  border: solid pink 1px;
  border-radius: 8px;
  font-size: 18px;
  color: #525252;
  text-align: center;
  background: #d0e8ae;
  overflow-y: scroll;
`;
const Banner = styled.div`
  height: 80px;
  width: 80px;
  // border: solid black 2px;
  margin: 10px 25px;
  padding: 2px;
  justify-content: center;
`;
const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
};


const ProductBanner = styled.img`
 height:75px;
 width:75px;
 padding:2px 3px;
 border-radius:10px; 

`
export { ProductContainer, Banner, style, ProductBanner };
