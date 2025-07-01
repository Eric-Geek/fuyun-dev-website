import { Box, VStack, HStack, Text, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ScrambledText from "../../../content/TextAnimations/ScrambledText/ScrambledText";
import GlareHover from "../../../content/Animations/GlareHover/GlareHover";

const AboutSection = ({ isMobile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <Box
      ref={sectionRef}
      id="about"
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
                <ScrambledText
                  text="About Me"
                  chars="!@#$%^&*()_+-=[]{}|;:,.<>?"
                  speed={50}
                />
              </Text>
              <Box width="80px" height="4px" bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="full" />
            </VStack>
          </motion.div>

          {/* 主要内容 */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} w="100%">
            {/* 左侧：个人介绍 */}
            <GridItem>
              <motion.div variants={itemVariants}>
                <VStack spacing={6} align="start">
                  <Text fontSize="xl" fontWeight="semibold" color="#667eea">
                    Hello! I'm Fuyun
                  </Text>
                  
                  <VStack spacing={4} align="start">
                    <Text fontSize="md" color="gray.300" lineHeight="1.8">
                      I'm a passionate full-stack developer with a love for creating beautiful, 
                      functional, and user-centered digital experiences. With expertise in modern 
                      web technologies, I bring ideas to life through clean code and thoughtful design.
                    </Text>
                    
                    <Text fontSize="md" color="gray.300" lineHeight="1.8">
                      My journey in tech started with curiosity about how things work behind the scenes. 
                      Today, I specialize in React, Node.js, and cloud technologies, constantly learning 
                      and adapting to new tools and frameworks.
                    </Text>
                    
                    <Text fontSize="md" color="gray.300" lineHeight="1.8">
                      When I'm not coding, you can find me exploring new technologies, contributing to 
                      open-source projects, or sharing knowledge with the developer community.
                    </Text>
                  </VStack>

                  {/* 技术栈标签 */}
                  <VStack spacing={4} align="start" w="100%">
                    <Text fontSize="lg" fontWeight="semibold" color="white">
                      Technologies I Love
                    </Text>
                    <HStack spacing={3} flexWrap="wrap">
                      {[
                        "React", "Next.js", "TypeScript", "Node.js", "Python", 
                        "AWS", "Docker", "GraphQL", "MongoDB", "PostgreSQL"
                      ].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Box
                            px={3}
                            py={2}
                            bg="rgba(102, 126, 234, 0.1)"
                            border="1px solid rgba(102, 126, 234, 0.3)"
                            borderRadius="full"
                            fontSize="sm"
                            color="#667eea"
                            fontWeight="medium"
                            _hover={{
                              bg: "rgba(102, 126, 234, 0.2)",
                              transform: "translateY(-2px)",
                            }}
                            transition="all 0.3s ease"
                          >
                            {tech}
                          </Box>
                        </motion.div>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
              </motion.div>
            </GridItem>

            {/* 右侧：统计数据 */}
            <GridItem>
              <motion.div variants={itemVariants}>
                <VStack spacing={8}>
                  <Text fontSize="xl" fontWeight="semibold" color="white" textAlign="center">
                    Some Numbers
                  </Text>
                  
                  <Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Box
                          position="relative"
                          p={6}
                          bg="rgba(255, 255, 255, 0.05)"
                          borderRadius="xl"
                          textAlign="center"
                          border="1px solid rgba(255, 255, 255, 0.1)"
                          overflow="hidden"
                          _hover={{
                            transform: "translateY(-5px)",
                            bg: "rgba(255, 255, 255, 0.08)",
                          }}
                          transition="all 0.3s ease"
                        >
                          {/* Glare效果 */}
                          {!isMobile && (
                            <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="1">
                              <GlareHover />
                            </Box>
                          )}
                          
                          <VStack spacing={2} position="relative" zIndex="2">
                            <Text fontSize="3xl" fontWeight="bold" color="#667eea">
                              {stat.number}
                            </Text>
                            <Text fontSize="sm" color="gray.400" fontWeight="medium">
                              {stat.label}
                            </Text>
                          </VStack>
                        </Box>
                      </motion.div>
                    ))}
                  </Grid>

                  {/* 下载简历按钮 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Box
                      as="button"
                      px={8}
                      py={3}
                      bg="transparent"
                      border="2px solid #667eea"
                      color="#667eea"
                      borderRadius="full"
                      fontSize="md"
                      fontWeight="semibold"
                      _hover={{
                        bg: "#667eea",
                        color: "white",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(102, 126, 234, 0.3)",
                      }}
                      _active={{
                        transform: "translateY(0px)",
                      }}
                      transition="all 0.3s ease"
                      onClick={() => {
                        // 这里可以添加下载简历的逻辑
                        console.log("Download resume");
                      }}
                    >
                      Download Resume
                    </Box>
                  </motion.div>
                </VStack>
              </motion.div>
            </GridItem>
          </Grid>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default AboutSection; 