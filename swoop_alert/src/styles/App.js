import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  color: white;
  height: 100vh;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Header = styled.header`
  color: white;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 3rem;

  padding: 0.8rem 1rem;
  border-radius: 3px;
`;

export { AppWrapper, Button, Header };
