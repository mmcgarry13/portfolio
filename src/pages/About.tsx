import styled from "styled-components";
import picOfMe from "../assets/me (2).jpg";

const Wrapper = styled.div` 
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  background: transparent;
  min-height: 100vh;
`

const Main = styled.div`
  padding: 4rem 2rem;
  background: #fff;
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
  color: #206042;
  margin: 150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;


const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutMe = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SelfPic = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AboutPage: React.FC = () => (
    <Wrapper>
        <Main>
            <Title>About Me</Title>
            <AboutMe>
                Hello! My name is Matthew McGarry. I am a web developer currently living in
                Cleveland, Ohio. In my free time I like bike riding, concerts, and playing
                games such as Dota 2, MTG Arena, and Dota 2.
            </AboutMe>
            <ImageContainer>
                <SelfPic src={picOfMe} alt="Matthew in Taiwan" />
            </ImageContainer>
        </Main>
    </Wrapper>
);

export default AboutPage;