import {styled} from "styled-components";
import HeaderContainer from "../container/home/HeaderContainer";
import ProductsContainer from "../container/home/ProductsContainer";
import ContentBox from "../component/ContentBox";
import CartContainer from "../container/home/CartContainer";

const HomePage = () => {
  return (
    <HomePageBox>
      <ContentBox>
        <HeaderContainer />
      </ContentBox>
      <ContentBox>
        <ProductsContainer />
      </ContentBox>
      {
        sessionStorage.getItem("olive_auth_tokens") && <CartContainer />
      }
    </HomePageBox>
  );
}
export default HomePage;

const HomePageBox = styled.div``;