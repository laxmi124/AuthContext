import React,{useContext} from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';

const NavbarWrapper = styled.div`
height:100px;
border:1px solid black;
margin:auto;
display:flex;
flex-direction:row-reverse;
padding:2vh;
background-color:black;
color:white;
`;
const Button = styled.button`
height:50px;
width:fit-content;
background-color:#cecece;
align-items:center;
margin:3vh;
`

export const Navbar = () => {
  let {isAuth,logOut} = useContext(AuthContext);

  return (
    // <div>Navbar</div>
    <NavbarWrapper>
      <Button onClick={logOut}>{isAuth?'LOG OUT':'LOG IN'}</Button>
    </NavbarWrapper>
  )
}
export default Navbar;