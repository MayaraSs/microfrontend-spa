import styled from "styled-components";

const Header = styled.div`
  box-sizing: border-box;
  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  background-color: #ffffff;
  z-index: 10;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: right;
  height: 60px;
  position: absolute;
  top: 0;

  ul {
    display: flex;
    align-self: center;
  }

  a {
    list-style-type: none;
    font-sixe: 16px;
    font-family: sans-serif;
    color: #6b6b6b;
    padding-left: 20px;
    text-decoration: none;
    padding: 5px;
    margin-right: 40px;
  }
  a:hover {
    text-decoration: underline;
    background-color: #e8fee5;
    border-radius: 5px;
    display: flex;
  }
`;
export default Header;
