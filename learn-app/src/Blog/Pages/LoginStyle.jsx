import styled,{css} from "styled-components"
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url("https://i.imgur.com/eUmK64G.jpg");
  background-size: cover;
  height: 500px;
`;

const FormContainer = styled.div`
  background:#e1e8e8  ;
  margin: 50px;
  margin-top:100px;
  height: 300px;
  width: 250px;
  padding:10px 30px 30px 30px;
  border-radius: 10px;
  justify: center;
  text-align:center;
`;



const Input = styled.input`
  margin: 3px 20px 20px 20px;
  padding: 10px;
  border: solid violet 3px;
  border-radius: 50px;
  font-weight: bold;

  ${(props) =>
    props.submit &&
    css`
      // margin-left:100px;
      width: 200px;
      background: #2f7ce0;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 16px;
      :hover {
        background: #0069f2;
      }
    `}
`;







 export {
  Container, FormContainer, Input
}