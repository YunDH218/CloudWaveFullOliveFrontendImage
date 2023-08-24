import {styled} from "styled-components";
import cart_logo from "../../resource/image/oliveyoung_cart_txt.svg"
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {Refresh} from "@mui/icons-material";
import StyledButtonGroup from "../../component/StyledButtonGroup";
import axios from "axios";
import api from "../../resource/string/api.json"

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(()=>{
    setRefresh(false)
    axios({
      method: "get",
      url: api.base_url + '/carts',
      responseType: 'json',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem("olive_auth_tokens"))?.accessToken
      }
    }).then(res=>setCartItems(res.data))
  }, [refresh]);
  return (
    <CartContainerBox>
      <img src={cart_logo} alt="CART"/>
      {
        cartItems?.map((item, key) =>
            <CartItem key={key} src={item.img} alt={item.name} />)
      }
      <StyledButtonGroup style={{flexDirection: "column"}}>
        <Button onClick={e=>setRefresh(true)}><Refresh /></Button>
      </StyledButtonGroup>
    </CartContainerBox>
  );
}

export default CartContainer;

const CartContainerBox = styled.div`
  position: fixed;
  top: 165px;
  right: calc(50vw - 720px);
  width: 150px;
  min-height: 100px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overflow-x: hidden;
  &> {
  
  }
`;

const CartItem = styled.img`
  width: 90px;
  margin-top: 15px;
`;