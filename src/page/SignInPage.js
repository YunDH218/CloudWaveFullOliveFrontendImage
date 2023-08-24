import ContentBox from "../component/ContentBox";
import logo from "../resource/image/oliveyoung_logo.svg";
import signin_logo from "../resource/image/oliveyoung_signin_txt.svg"
import {styled} from "styled-components";
import {Button} from "@mui/material";
import StyledButtonGroup from "../component/StyledButtonGroup";
import LabeledInput from "../component/LabledInput";
import {useState} from "react";
import account_list from "../resource/string/account-list.json";

const SignInPage = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (account_list?.filter(account => account.email === authData.email)?.length) {
        sessionStorage.setItem("olive_auth_tokens", '{"accessToken":"example","refreshToken":"example"}');
        window.location.href = "/";
    } else {
      setError("invalid Data!");
    }
  };
  const handleIDChange = e => {
    setAuthData({
      ...authData,
      email: e.target.value
    })
    setError("");
  }
  const handlePWChange = e => {
    setAuthData({
      ...authData,
      password: e.target.value
    })
    setError("");
  }
    
  return (
    <ContentBox>
      <a href="/"><img src={logo} alt="OLIVEYOUNG"/></a>
      <SignInBox>
        <img src={signin_logo} alt="SIGN IN" height="30px"/>
        <form onSubmit={handleSubmit}>
          <LabeledInput>
            <p className="label">Email</p>
            <input type="text" onChange={handleIDChange} required/>
          </LabeledInput>
          <LabeledInput>
            <p className="label">PW</p>
            <input type="password" onChange={handlePWChange} required/>
          </LabeledInput>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <StyledButtonGroup>
            <Button type="submit" name="submit">
              Sign In
            </Button>
          </StyledButtonGroup>
        </form>
        <StyledButtonGroup>
          Have you no account yet?
          <Button href="/join">
            Join
          </Button>
        </StyledButtonGroup>
      </SignInBox>
    </ContentBox>
  );
}

export default SignInPage;

const SignInBox = styled(ContentBox)`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ErrorMessage = styled.p`
  color: #F28280;
`;