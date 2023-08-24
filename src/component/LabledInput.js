import {styled} from "styled-components";

const LabeledInput = styled.div`
  width: 150px;
  display: flex;
  justify-content: right;
  align-items: center;
  .label {
    color: #A4D232;
    font-weight: 700;
    margin-right: 10px;
  }
  input {
    color: #A4D232;
    height: 20px;
    border: solid 1px #A4D232;
    border-radius: 5px;
    outline: none;
  }
  .error {
    color: #F28280;
  }
`;

export default LabeledInput;