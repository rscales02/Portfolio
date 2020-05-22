import styled from "styled-components";

const Wrap = styled.div`
  display: block;
  border: 5px solid black;
  width: 50%;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  min-width: 250px;
  max-width: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.div`
  padding-left: 26px;
  padding-top: 30px;
  font-size: 24px;
  line-height: 33px;
`;

const Label = styled.label`
  /* display: block; */
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  padding-top: 17px;
  margin-left: 26px;
`;

const Input = styled.input`
  display: block;
  /* margin: 0 auto; */
  font-family: inherit;
  width: 95%;
  border-radius: 5px;

  @media only screen and (min-width: 1024px) {
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: 95%;
  height: 150px;
  border-radius: 10px;
`;

const Submit = styled.input`
  width: 25%;
  align-self: flex-end;
  margin-right: 4%;
  margin-top: 10px;
`;

const SendMessage = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  align-content: center;
  text-align: center;
`;

export { Form, Label, Input, FormLabel, TextArea, Wrap, Submit, SendMessage };
