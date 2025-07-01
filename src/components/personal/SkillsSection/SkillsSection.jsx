import { Box, VStack, HStack, Text, Grid, GridItem, Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import BlurText from "../../../content/TextAnimations/BlurText/BlurText";
import SpotlightCard from "../../../content/Components/SpotlightCard/SpotlightCard";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGraphql, SiMongodb, SiPostgresql, SiRedis } from "react-icons/si";

const SkillsSection = ({ isMobile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    "Frontend": [
      { name: "React/Next.js", level: 95, icon: SiNextdotjs, color: "#61DAFB" },
      { name: "TypeScript", level: 90, icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", level: 95, icon: FaReact, color: "#F7DF1E" },
      { name: "HTML/CSS", level: 90, icon: FaReact, color: "#E34F26" },
    ],
    "Backend": [
      { name: "Node.js", level: 88, icon: FaNodeJs, color: "#339933" },
      { name: "Python", level: 85, icon: FaPython, color: "#3776AB" },
      { name: "GraphQL", level: 80, icon: SiGraphql, color: "#E10098" },
      { name: "REST APIs", level: 92, icon: FaReact, color: "#FF6B6B" },
    ],
    "Database": [
      { name: "MongoDB", level: 85, icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", level: 82, icon: SiPostgresql, color: "#336791" },
      { name: "Redis", level: 75, icon: SiRedis, color: "#DC382D" },
      { name: "MySQL", level: 80, icon: FaReact, color: "#4479A1" },
    ],
    "DevOps & Tools": [
      { name: "AWS", level: 80, icon: FaAws, color: "#FF9900" },
      { name: "Docker", level: 85, icon: FaDocker, color: "#2496ED" },
      { name: "Git", level: 90, icon: FaGitAlt, color: "#F05032" },
      { name: "CI/CD", level: 78, icon: FaReact, color: "#239FDB" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      ref={sectionRef}
      id="skills"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      py={20}
      px={6}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{ width: "100%" }}
      >
        <VStack spacing={16} maxW="1200px" mx="auto">
          {/* 标题部分 */}
          <motion.div variants={itemVariants}>
            <VStack spacing={4} textAlign="center">
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="white">
                <BlurText text="My Skills" delay={100} />
              </Text>
              <Box width="80px" height="4px" bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="full" />
              <Text fontSize="lg" color="gray.400" maxW="600px" textAlign="center">
                Here are the technologies and tools I work with to bring ideas to life
              </Text>
            </VStack>
          </motion.div>

          {/* 技能分类网格 */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} w="100%">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <GridItem key={category}>
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <Box
                    position="relative"
                    p={8}
                    bg="rgba(255, 255, 255, 0.03)"
                    borderRadius="2xl"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    overflow="hidden"
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.05)",
                      transform: "translateY(-5px)",
                    }}
                    transition="all 0.3s ease"
                  >
                    {/* SpotlightCard效果 */}
                    {!isMobile && (
                      <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="1">
                        <SpotlightCard />
                      </Box>
                    )}

                    <VStack spacing={6} position="relative" zIndex="2">
                      {/* 分类标题 */}
                      <Text fontSize="xl" fontWeight="bold" color="#667eea">
                        {category}
                      </Text>

                      {/* 技能列表 */}
                      <VStack spacing={4} w="100%">
                        {skillList.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                            style={{ width: "100%" }}
                          >
                            <VStack spacing={3} w="100%">
                              <HStack justify="space-between" w="100%">
                                <HStack spacing={3}>
                                  <Box color={skill.color} fontSize="lg">
                                    {(() => {
                                      const IconComponent = skill.icon;
                                      return <IconComponent />;
                                    })()}
                                  </Box>
                                  <Text fontSize="md" color="white" fontWeight="medium">
                                    {skill.name}
                                  </Text>
                                </HStack>
                                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                                  {skill.level}%
                                </Text>
                              </HStack>
                              
                              {/* 自定义进度条 */}
                              <Box w="100%" bg="rgba(255, 255, 255, 0.1)" borderRadius="full" height="6px" overflow="hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                                  transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.3, ease: "easeOut" }}
                                  style={{
                                    height: "100%",
                                    background: `linear-gradient(90deg, ${skill.color}, #667eea)`,
                                    borderRadius: "full",
                                  }}
                                />
                              </Box>
                            </VStack>
                          </motion.div>
                        ))}
                      </VStack>
                    </VStack>
                  </Box>
                </motion.div>
              </GridItem>
            ))}
          </Grid>

          {/* 额外信息 */}
          <motion.div variants={itemVariants}>
            <VStack spacing={6} textAlign="center">
              <Text fontSize="lg" color="gray.300" maxW="800px" lineHeight="1.8">
                I'm always learning and staying up-to-date with the latest technologies. 
                Currently exploring Web3, AI/ML integration, and advanced cloud architectures.
              </Text>
              
              <HStack spacing={4} flexWrap="wrap" justify="center">
                {["Currently Learning", "Web3", "AI/ML", "Microservices", "Kubernetes"].map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box
                      px={4}
                      py={2}
                      bg={index === 0 ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "rgba(102, 126, 234, 0.1)"}
                      border={index === 0 ? "none" : "1px solid rgba(102, 126, 234, 0.3)"}
                      borderRadius="full"
                      fontSize="sm"
                      color={index === 0 ? "white" : "#667eea"}
                      fontWeight="medium"
                      _hover={{
                        transform: "translateY(-2px)",
                        bg: index === 0 ? "linear-gradient(135deg, #7c8feb 0%, #8b5fbf 100%)" : "rgba(102, 126, 234, 0.2)",
                      }}
                      transition="all 0.3s ease"
                    >
                      {tag}
                    </Box>
                  </motion.div>
                ))}
              </HStack>
            </VStack>
          </motion.div>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default SkillsSection; 