import { FaAppleAlt, FaCarrot, FaInfinity } from "react-icons/fa";
import { GiRoastChicken } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaAppleAlt />
        <h4>Fruits</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaCarrot />
        <h4>Vegetables</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiRoastChicken />
        <h4>Meat</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <FaInfinity />
        <h4>Others</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin 2rem 0rem;

`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-graident(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
export default Category;
