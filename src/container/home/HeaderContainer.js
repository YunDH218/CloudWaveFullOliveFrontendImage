import {styled} from "styled-components";
import logo from "../../resource/image/oliveyoung_logo.svg";
import {Button} from "@mui/material";
import StyledButtonGroup from "../../component/StyledButtonGroup";

const HeaderContainer = () => {
  return (
    <HeaderContainerBox>
      <a href="/"><img src={logo} alt="OLIVEYOUNG"/></a>
      <h2>Modified</h2>
      {
        sessionStorage.getItem("olive_auth_tokens") ?
          <StyledButtonGroup>
            <Button onClick={e=> {
              sessionStorage.removeItem("olive_auth_tokens");
              window.location.reload();
            }}>Logout</Button>
          </StyledButtonGroup>
          :
          <StyledButtonGroup>
            <Button href="/signin">Login</Button>
            <Button href="/join">Join</Button>
          </StyledButtonGroup>
      }
    </HeaderContainerBox>
  );
};

export default HeaderContainer;

const HeaderContainerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;