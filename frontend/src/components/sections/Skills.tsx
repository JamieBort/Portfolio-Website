import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
// import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiTypescript, SiJavascript, SiPython, SiMongodb, SiPostgresql, SiRedux } from "react-icons/si";
import { SiTypescript, SiJavascript, SiPython, SiSpringboot } from "react-icons/si";
import { useTranslation } from "react-i18next";

interface SkillsProps {
  isEnglish: boolean;
}

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

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  display: flex;
  flex-direction: column;
  max-width: 400px; // TODO: Modify "max-width:" such that the card(s) on the last row, the same cards that do not make up a full row, are the same width as the cards in the rows that are full. Refer to "flex: 1 1 calc();" in below. FWIW, previously it was 400px. See the https://github.com/JamieBort/Portfolio-Website/issues/52 Issue.
  flex: 1 1 280px; /* allow items to shrink/grow, with a min width of 280px */

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

// TODO: Modify this such that (I am not sure how best to word this yet but I like HOW the project cards and the SkillCategory cards are responsive.)
const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  // flex: 1;  // From Original before it was converted to flexbox from grid. TODO: Remove after "Modify "max-width:" such that the card(s) on the last row, ..." is addressed above. https://github.com/JamieBort/Portfolio-Website/blob/181cc932a913881fbab7f69938921e3caa1828b5/frontend/src/components/sections/Skills.tsx#L65
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  padding: ${theme.spacing.md};
  border-radius: 12px;
  transition: all ${theme.transitions.default};
  background: ${theme.colors.glass.card};
  max-height: 40px;

  svg {
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

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      // { name: "Redux", icon: <SiRedux /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <SiPython /> },
      { name: " Springboot", icon: <SiSpringboot /> },
      // { name: "MongoDB", icon: <SiMongodb /> },
      // { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  // {
  //   title: "DevOps",
  //   icon: <FaDocker />,
  //   skills: [
  //     { name: "Docker", icon: <FaDocker /> },
  //     { name: "Git", icon: <FaGitAlt /> },
  //     { name: "AWS", icon: <FaAws /> },
  //     { name: "CI/CD", icon: <FaDatabase /> },
  //   ],
  // },
  // {
  //   title: "skillPlaceholder1",
  //   icon: <FaNodeJs />,
  //   skills: [
  //     { name: "Python", icon: <SiPython /> },
  //     { name: "MongoDB", icon: <SiMongodb /> },
  //     { name: "PostgreSQL", icon: <SiPostgresql /> },
  //   ],
  // },
  // {
  //   title: "skillPlaceholder2",
  //   icon: <FaDocker />,
  //   skills: [
  //     { name: "Docker", icon: <FaDocker /> },
  //     { name: "Git", icon: <FaGitAlt /> },
  //     { name: "AWS", icon: <FaAws /> },
  //     { name: "CI/CD", icon: <FaDatabase /> },
  //     { name: "Docker", icon: <FaDocker /> },
  //   ],
  // },
];

const Skills = ({ isEnglish }: SkillsProps) => {
  console.log(isEnglish); // TODO: delete this line.
  const { t } = useTranslation();
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
        {t("skills.title")}
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
