import React from "react";
import styled from "styled-components";
import history from "../history";


function signOutHandler(){
console.log('Sign out handler fired')
localStorage.clear('accessToken');
localStorage.clear('expiresAt');
history.push("/");
window.location.reload();

}


const SignOutButton = styled.div`
font-size: 2rem;
position: absolute;
top: 10%;
right: 7%;
color: black;
cursor: pointer;
border-radius: 10px;
width: 9rem;
text-align: center;
background-color: white;
@media (max-width: 1000px) {
  right: 4%;
}
@media (max-width: 768px) {
  right: 5%;
}
@media (max-width: 580px) {
  right: 7%;
}
@media (max-width: 390px) {
  top: 12%;
  right: 11%;
}
// &:hover {
//   color: #ff7518;
// }
`;



const SignOut = props => {
  return <SignOutButton onClick={signOutHandler}>Sign Out</SignOutButton>;
};

export default SignOut;
