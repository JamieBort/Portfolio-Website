import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPython, SiMongodb, SiPostgresql, SiRedux } from "react-icons/si";

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  // background: orange; // TODO: Remove.
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

// Modified
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  justify-content: center;
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  // max-width: 1900px; // TODO: Remove.
  margin-top: ${theme.spacing.xl};
  // background: red; // TODO: Remove.

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
  }
`;

// // Original
// const SkillsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   gap: ${theme.spacing.lg};
//   width: 100%;
//   max-width: 1200px;
//   margin-top: ${theme.spacing.xl};

//   @media (min-width: ${theme.breakpoints.md}) {
//     grid-template-columns: repeat(3, 1fr);
//     gap: ${theme.spacing.xl};
//   }
// `;

// Modified
const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  display: flex;
  flex-direction: column;
  // width: 100%;
  // max-width: 30%;
  // min-width: 370px;
  // flex: 1 1 100%;
  // flex: 1 1 280px; /* allow items to shrink/grow, with a min width of 280px */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    // background: green; // TODO: Remove.
    //   flex: 1 1 calc(33.333% - ${theme.spacing.xl});
    //   max-width: calc(33.333% - ${theme.spacing.xl});
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    // background: blue; // TODO: Remove.
    // flex: 1 1 calc(25% - ${theme.spacing.xl});
    max-width: calc(35% - ${theme.spacing.xl});
    // max-width: 350px;
  }
`;

// // Original
// const SkillCategory = styled(motion.div)`
//   background: ${theme.colors.glass.background};
//   backdrop-filter: blur(8px);
//   border-radius: 20px;
//   padding: ${theme.spacing.lg};
//   transition: all ${theme.transitions.default};
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   max-width: 400px;
//   margin: 0 auto;
//   width: 100%;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
//   }
// `;

const CategoryTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${theme.spacing.md};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: ${theme.colors.accent};
  }
`;

// Modified (working on this one)
const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  // flex: 1;
  width: 100%;
  // background: lightyellow; // TODO: Remove.
`;

// // Original
// const SkillsList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: ${theme.spacing.md};
//   flex: 1;
//   width: 100%;
// `;

// Modified (working on this one)
const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.75rem, 2vw, 0.8rem);
  padding: ${theme.spacing.md};
  border-radius: 12px;
  transition: all ${theme.transitions.default};
  background: ${theme.colors.glass.card};
  // background: lightgreen; // TODO: Remove.
  // max-height: 64.141px;
  max-height: 40px;
  // max-height: 50%;
  // max-width: auto;
  // max-width: 90px;
  // max-width: 40%;
  // max-width: 50%;
  // max-width: 80%;
  // max-width: 100%;

  svg {
    // background: blue; // TODO: Remove.
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: ${theme.colors.accent};
    transition: all ${theme.transitions.default};
  }

  &:hover {
    background: ${theme.colors.gradient.glass};
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

    svg {
      transform: scale(1.1) rotate(5deg);
      color: ${theme.colors.light};
    }
  }
`;

// // Original
// const SkillItem = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   gap: ${theme.spacing.sm};
//   font-size: clamp(0.9rem, 2vw, 1.1rem);
//   padding: ${theme.spacing.md};
//   border-radius: 12px;
//   transition: all ${theme.transitions.default};
//   background: ${theme.colors.glass.card};

//   svg {
//     font-size: clamp(1.1rem, 2vw, 1.5rem);
//     color: ${theme.colors.accent};
//     transition: all ${theme.transitions.default};
//   }

//   &:hover {
//     background: ${theme.colors.gradient.glass};
//     transform: translateX(5px);
//     box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

//     svg {
//       transform: scale(1.1) rotate(5deg);
//       color: ${theme.colors.light};
//     }
//   }
// `;

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Redux", icon: <SiRedux /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <SiPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "DevOps",
    icon: <FaDocker />,
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "CI/CD", icon: <FaDatabase /> },
    ],
  },
  {
    title: "dummy_skill1",
    icon: <FaNodeJs />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "dummy_skill2",
    icon: <FaDocker />,
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "CI/CD", icon: <FaDatabase /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
];

const Skills = () => {
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

  return (
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} role="heading" aria-level={2}>
        Skills & Expertise
      </SectionTitle>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} variants={itemVariants} role="listitem" aria-labelledby={`category-title-${index}`}>
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>
              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} variants={itemVariants} role="listitem">
                    <span aria-hidden="true">{skill.icon}</span>
                    <span>{skill.name}</span>
                    <span className="sr-only">{`${skill.name} - ${category.title} skill`}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;
