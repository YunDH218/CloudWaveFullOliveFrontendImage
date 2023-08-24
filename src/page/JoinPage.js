import ContentBox from "../component/ContentBox";
import logo from "../resource/image/oliveyoung_logo.svg";
import join_logo from "../resource/image/oliveyoung_join_txt.svg"
import {styled} from "styled-components";
import {Button} from "@mui/material";
import StyledButtonGroup from "../component/StyledButtonGroup";
import LabeledInput from "../component/LabledInput";
import {useState} from "react";
import api from "../resource/string/api.json";
import axios from "axios";
const JoinPage = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: api.base_url + "/register",
      data: {
        "email": authData.email,
        "password": authData.password
      },
      responseType: "json"
    }).then(res=>{
      console.log(res);
      window.location.href = "/signin";
    });
    console.log(authData);
  };
  const handleIDChange = e => {
    setAuthData({
      ...authData,
      email: e.target.value
    })
  }
  const handlePWChange = e => {
    setAuthData({
      ...authData,
      password: e.target.value
    })
  }
  return (
    <ContentBox>
      <a href="/"><img src={logo} alt="OLIVEYOUNG"/></a>
      <JoinBox>
        <img src={join_logo} alt="JOIN" height="30px"/>
        <form onSubmit={handleSubmit}>
          <LabeledInput>
            <p className="label">Email</p>
            <input type="text" onChange={handleIDChange} required/>
          </LabeledInput>
          <LabeledInput>
            <p className="label">PW</p>
            <input type="password" onChange={handlePWChange} required/>
          </LabeledInput>
          <StyledButtonGroup>
            <Button type="submit">
              Join Us!
            </Button>
          </StyledButtonGroup>
        </form>
      </JoinBox>
    </ContentBox>
  );
}

export default JoinPage;

const JoinBox = styled(ContentBox)`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;