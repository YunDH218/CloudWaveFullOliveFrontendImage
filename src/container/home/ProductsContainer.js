import {styled} from "styled-components";
import product_logo from "../../resource/image/oliveyoung_product_txt.svg"
import axios from "axios";
import {useState, useEffect} from "react";
import api from "../../resource/string/api.json";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios({
      method: "get",
      url: api.base_url + "/products",
      responseType: "json"
    }).then(res => {
      setItems(res.data);
    })
  }, []);
  
  return (
    <ProductsContainerBox>
      <img src={product_logo} alt="PRODUCT"/>
      <StyledGrid>
        {
          items.map((item, key) => <Item key={key} onClick={e=>{
            sessionStorage.getItem("olive_auth_tokens") && axios({
              method: "post",
              url: api.base_url + '/carts/add',
              headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem("olive_auth_tokens"))?.accessToken
              },
              params: {
                productId: key+1
              }
            }).then(res=>console.log(res));
          }}>
            {item.img && <img className="img" src={item.img} alt="product_image"/>}
            <div className="name">{item.name}</div>
            <div className="price">{item.price}$</div>
          </Item>)
        }
      </StyledGrid>
    </ProductsContainerBox>
  );
};

export default ProductsContainer;

const ProductsContainerBox = styled.div``;

const StyledGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 150px);
  gap: 50px;
`;
const Item = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 1px #A4D232;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, .25);
  transition: .3s;
  &:hover {
    background: rgba(164, 210, 50, .3);
  }
  .img {
    height: 100px;
  }
  .name {
    font-weight: 700;
    text-shadow: 1px 1px 1px rgba(242, 130, 128, 0.2);
    color: #F28280;
  }
  .price {
    font-weight: 600;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    color: #A4D232;
  }
`;