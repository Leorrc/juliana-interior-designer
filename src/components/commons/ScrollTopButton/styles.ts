import styled from "styled-components";

export const Container = styled.div`
  .top-to-btm{
  position: relative;
  transition: 0.3s;
}
.icon-position{
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 20;
}

.icon-style{
  background-color: #525154;
  border: 2px solid #D2D1CC;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: #D2D1CC;
  cursor: pointer;
  transition: all .5s ease-in-out;
}

.icon-style:hover{
  animation: none;
  background: #D2D1CC;
  color: #525154;
  border: 2px solid #525154;
}

`;

