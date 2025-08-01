import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import myImage01 from "../../assets/portfolio_website.png";
// import myImage02 from "../../assets/personal_dashboard.png";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  isEnglish: boolean;
}

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* optional: center items horizontally */
  gap: ${theme.spacing.lg}; /* for spacing between items */
  width: 100%;
  margin-top: ${theme.spacing.lg};
  align-items: stretch;

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

// TODO: Determine if I want this to be "const ProjectCard = styled(motion.div)`"
// or if I want it to be "const ProjectCard = styled.div`"
// See the https://github.com/JamieBort/Portfolio-Website/issues/53 Issue
const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  display: flex;
  flex-direction: column;
  max-width: 350px;

  flex: 1 1 280px; /* allow items to shrink/grow, with a min width of 280px. When the width is below 280px, the number of cards in the row diminishes by one and the last card moves down to the next row. */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

// TODO: Populate the project descriptions from the repo, rather than hardcoded below or hardcoded in the .json files in the `/frontend/public/locales/` directory.
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "This is where I share a bit about myself, showcase what I've been working on, and share where you can find me online. It is build with a React, Vite and TypeScript front end. I am re-writing the Node Express backend.",
    image: myImage01,
    techStack: ["React", "Node.js"],
    githubUrl: "https://github.com/JamieBort/Portfolio-Website",
    liveUrl: "https://jamiebort.com/",
  },
  // {
  //   id: 2,
  //   title: "Personal Dashboard",
  //   description:
  //     "A website for displaying and analyzing important daily data. Such as blood glucose numbers and upcoming events. Using Svelt TypeScript front end and Java backend. Which database is yet to be seen. It will use authentication.",
  //   image: myImage02,
  //   techStack: ["Next.js", "TypeScript", "Tailwind"],
  //   githubUrl: "https://github.com/JamieBort/Personal-Dashboard",
  //   liveUrl: "https://jamiebort.github.io/Personal-Dashboard/",
  // },
  // {
  //   id: 3,
  //   title: "Project Placeholder 1",
  //   description:
  //     "This is where I share a bit about myself, showcase what I've been working on, and share where you can find me online. It is build with a React, Vite and TypeScript front end. I am re-writing the Node Express backend. build with a React, Vite and TypeScript front end. I am re-writing the Node Express backend",
  //   image: myImage01,
  //   techStack: ["React", "Node.js", "Lodash", "GitHub", "Node"],
  //   githubUrl: "https://github.com/JamieBort/dummy_project01",
  //   liveUrl: "https://jamiebort.github.io/dummy_project01/",
  // },
  // {
  //   id: 4,
  //   title: "Project Placeholder 2",
  //   description: "A website for displaying and analyzing important daily data. Such as blood glucose numbers and upcoming events. Using Svelt . It will use authentication.",
  //   image: myImage02,
  //   techStack: ["Next.js", "TypeScript", "Tailwind"],
  //   githubUrl: "https://github.com/JamieBort/dummy_project02",
  //   liveUrl: "https://jamiebort.github.io/dummy_project02/",
  // },
  // {
  //   id: 5,
  //   title: "Project Placeholder 3",
  //   description:
  //     "This is where I share a bit about myself, showcase what I've build with a React, Vite and TypeScript front end. I am re-writing the Node Express backend build with a React, Vite and TypeScript front end. I am re-writing the Node Express backend.",
  //   image: myImage01,
  //   techStack: ["React", "Node.js", " Java", "TypeScript", "SQL", "AWS", "Lodash", "GitHub", "Node"],
  //   githubUrl: "https://github.com/JamieBort/dummy_project03",
  //   liveUrl: "https://jamiebort.github.io/dummy_project03/",
  // },
];

const Projects = ({ isEnglish }: ProjectsProps) => {
  console.log(isEnglish); // TODO: delete this line.
  const { t } = useTranslation();
  const titleRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (!titleRefs.current.length) return;

    // Reset heights
    titleRefs.current.forEach((el) => {
      if (el) el.style.height = "auto";
    });

    const rows: Record<number, HTMLHeadingElement[]> = {};

    titleRefs.current.forEach((el) => {
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (!rows[top]) {
        rows[top] = [];
      }
      rows[top].push(el);
    });

    Object.values(rows).forEach((rowEls) => {
      const maxHeight = Math.max(...rowEls.map((el) => el.offsetHeight));
      rowEls.forEach((el) => (el.style.height = `${maxHeight}px`));
    });
  });

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} role="heading" aria-level={2}>
          {t("projects.title")}
        </SectionTitle>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ProjectContainer role="list">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} variants={itemVariants} role="listitem" aria-labelledby={`project-title-${project.id}`}>
                <ProjectImage imageUrl={project.image} role="img" aria-label={`Screenshot of ${project.title}`} />
                <ProjectContent>
                  <ProjectTitle
                    id={`project-title-${project.id}`}
                    // ref={(el) => (titleRefs.current[index] = el)}
                    ref={(el) => {
                      titleRefs.current[index] = el;
                    }}
                  >
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">
                        {tech}
                      </TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`}>
                      <FaGithub aria-hidden="true" />
                      <span className="sr-only">GitHub repository</span>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live site`}>
                      <FaExternalLinkAlt aria-hidden="true" />
                      <span className="sr-only">Live site</span>
                    </a>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectContainer>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
