import styled from "styled-components";

const Form = styled.form`
  margin-top: 1rem;
  background-color: #282c34;
  color: white;
  display: grid;
  justify-content: center;
  align-content: start;
`;

const Input = styled.textarea`
  color: black;
  width: 400px;
  padding: 0.3rem;
  border-radius: 3px;
  border: 1px solid #a2a2a2;
  display: block;
  margin: 0.5rem 0.1rem 0.1rem;
`;

const Label = styled.label`
  text-align: center;
  background-color: #282c34;
  color: white;
`;

const Button = styled.button`
  color: black;
  background: #e3e3e3;
  font-size: 2rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;
  border: 2px solid #a2a2a2;


  &:hover {
    background-color: black;
    border: 2px solid #a2a2a2;
    color: #e3e3e3;
`;

export { Form, Button, Input, Label };
