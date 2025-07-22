import styled from "styled-components";
import { ProjectCard } from "../components/ProjectCard";
import type { Project } from "../types/Project";

const Wrapper = styled.div`
  padding: 4rem 2rem;
  background: transparent;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const sampleProjects: Project[] = [
    {
        id: "1",
        title: "Snippet",
        description: "This App evaluates code snippets using the Open AI API, then writes them to a database and displays them in a social media style feed. The front end is created with React.js and styled-components, and the backend is created with MongoDB and GraphQL. App is deployed at: https://snippet-vzjo.onrender.com/",
        imageUrl: "https://github.com/KeelerZoroth/Snippet/raw/main/Snippet_Screenshot.png",
        link: "https://github.com/KeelerZoroth/Snippet?tab=readme-ov-file",
    },
    {
        id: "2",
        title: "Color my World",
        description: "This app takes user input as a hexcode and generates an 8 color palette based around it. App is deployed through Github pages: https://mmcgarry13.github.io/Color-My-World/.",
        imageUrl: "https://github.com/mmcgarry13/Color-My-World/raw/main/assets/image.png",
        link: "https://github.com/mmcgarry13/Color-My-World",
    },
    {
        id: "3",
        title: "README-Generator",
        description: "A terminal application that takes input and generates a README.md file for your project.",
        imageUrl: "https://w0.peakpx.com/wallpaper/562/317/HD-wallpaper-beautiful-be-more-chill.jpg",
        link: "https://github.com/mmcgarry13/README-Generator",
    },
];

const HomePage: React.FC = () => (
    <Wrapper>
        <Title>My Projects</Title>
        <Grid>
            {sampleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </Grid>
    </Wrapper>
);

export default HomePage;