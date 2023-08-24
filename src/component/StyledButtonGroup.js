import {styled} from "styled-components";

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  a, Button {
    width: 100px;
    color: white;
    border: solid white 1px;
    border-radius: .5em;
    background: #A4D232;
    font-weight: 600;
    padding: 5px 10px;
    margin: 10px;
    &:hover {
      background: white;
      color: #A4D232;
      border: solid #A4D232 1px;
    }
  }
`;

export default StyledButtonGroup;