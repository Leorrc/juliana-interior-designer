import styled from "styled-components";

export const Container = styled.div`
  .top-to-btm{
  position: relative;
  transition: 0.3s;
}
.icon-position{
  position: fixed;
  bottom: 1rem;
  right: 0.5rem;
  z-index: 20;

  @media (min-width: 768px) {
    right: 1rem;
  }
}
.icon-style{
  background-color: #525154;
  border: 2px solid #D2D1CC;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  color: #D2D1CC;
  cursor: pointer;
  transition: all .5s ease-in-out;
}
.icon-style:hover{
  background: #D2D1CC;
  color: #525154;
  border: 2px solid #525154;
}
`;
