import styled from "styled-components";
import type { Project } from "../types/Project";

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
  width: 100%;
  padding: 4em;
  max-width: 320px;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 12px;
  color: #0077cc;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
    project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => (
    <Card>
        <Image src={project.imageUrl} alt={project.title} />
        <Content>
            <Title>{project.title}</Title>
            <Description>{project.description}</Description>
            <LinkButton href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
            </LinkButton>
        </Content>
    </Card>
);