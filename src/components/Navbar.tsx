import { Link } from 'react-router-dom';
import styled from 'styled-components'

// styled components

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(235, 15, 15, 0.1);
  z-index: 1000;
`;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 1.5rem;
//   font-weight: bold;

//   img {
//     width: 20px;
//     height: auto;
//     margin-right: 10px;
//   }

//   a {
//     color: white;
//     text-decoration: none;
//   }
// `;

const GlitchText = styled.span`
  position: relative;
  display: inline-block;
  font-family: "Press Start 2P", cursive;
  color: #4CCAE1;
  text-shadow: 0px 0px 5px rgba(100, 108, 255, 0.8);

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    animation: glitch-animation 1.5s infinite;
  }

  &::before {
    color: #9F99C2;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  }

  &::after {
    color: #4CCAE1;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
    animation-name: glitch-animation-reverse;
  }

  @keyframes glitch-animation {
    0% { transform: translate(0); }
    20% { transform: translate(-3px, -3px); }
    40% { transform: translate(3px, 3px); }
    60% { transform: translate(-3px, 3px); }
    80% { transform: translate(3px, -3px); }
    100% { transform: translate(0); }
  }

  @keyframes glitch-animation-reverse {
    0% { transform: translate(0); }
    20% { transform: translate(3px, -3px); }
    40% { transform: translate(-3px, 3px); }
    60% { transform: translate(3px, 3px); }
    80% { transform: translate(-3px, -3px); }
    100% { transform: translate(0); }
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;

  li {
    a {
      color: white;
      text-decoration: none;
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;


const LeftNav = styled.div``;
const RightNav = styled.div``;

const Navbar: React.FC = () => {
    return (
        <Container>
            <LeftNav>
                <NavList>
                    <li>
                        <Link to="/">
                            <GlitchText data-text="Matthew McGarry">Matthew McGarry</GlitchText>
                        </Link>
                    </li>
                </NavList>
            </LeftNav>
            <RightNav>
                <NavList>
                    <li>
                        <Link to="/about">
                            <GlitchText data-text="About Me">About Me</GlitchText>
                        </Link>
                    </li>
                </NavList>
            </RightNav>
        </Container>
    );
};

export default Navbar;