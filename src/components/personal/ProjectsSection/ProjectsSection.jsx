import { Box, VStack, HStack, Text, Grid, GridItem, Button, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiVercel } from "react-icons/si";
import RotatingText from "../../../content/TextAnimations/RotatingText/RotatingText";
import TiltedCard from "../../../content/Components/TiltedCard/TiltedCard";

const ProjectsSection = ({ isMobile }) => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with Next.js and Node.js for optimal performance.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      category: "Full Stack",
      github: "https://github.com/fuyun",
      live: "https://demo.fuyun.dev",
      featured: true,
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, featuring smart responses, file sharing, and voice messages. Built with modern technologies.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
      ],
      category: "AI/ML",
      github: "https://github.com/fuyun",
      live: "https://chat.fuyun.dev",
      featured: true,
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for tracking investments and market analysis. Features real-time data, charts, and portfolio management tools.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
      category: "Web App",
      github: "https://github.com/fuyun",
      live: "https://portfolio.fuyun.dev",
      featured: false,
    },
    {
      title: "Cloud DevOps Pipeline",
      description: "Automated CI/CD pipeline with monitoring, testing, and deployment. Includes infrastructure as code and container orchestration.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
      ],
      category: "DevOps",
      github: "https://github.com/fuyun",
      live: null,
      featured: false,
    },
  ];

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

  return (
    <Box
      ref={sectionRef}
      id="projects"
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
        <VStack spacing={16} maxW="1400px" mx="auto">
          {/* 标题部分 */}
          <motion.div variants={itemVariants}>
            <VStack spacing={4} textAlign="center">
              <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="white">
                <RotatingText
                  words={["My Projects", "Recent Work", "Portfolio", "Creations"]}
                  duration={3000}
                />
              </Text>
              <Box width="80px" height="4px" bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="full" />
              <Text fontSize="lg" color="gray.400" maxW="600px" textAlign="center">
                A showcase of projects I've built, ranging from web applications to AI solutions
              </Text>
            </VStack>
          </motion.div>

          {/* 项目网格 */}
          <Grid 
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
            gap={8} 
            w="100%"
          >
            {projects.map((project, index) => (
              <GridItem key={index} colSpan={project.featured && !isMobile ? 2 : 1}>
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                  style={{ height: "100%" }}
                >
                  <Box
                    position="relative"
                    bg="rgba(255, 255, 255, 0.03)"
                    borderRadius="2xl"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    overflow="hidden"
                    height="100%"
                    _hover={{
                      transform: "translateY(-10px)",
                      bg: "rgba(255, 255, 255, 0.05)",
                    }}
                    transition="all 0.4s ease"
                  >
                    {/* TiltedCard效果 */}
                    {!isMobile && (
                      <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="1">
                        <TiltedCard />
                      </Box>
                    )}

                    <VStack spacing={0} position="relative" zIndex="2" height="100%">
                      {/* 项目图片占位 */}
                      <Box
                        width="100%"
                        height={project.featured ? "300px" : "200px"}
                        bg="linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                      >
                        {/* 项目类别标签 */}
                        <Box position="absolute" top="4" left="4">
                          <Badge
                            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                            color="white"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="xs"
                            fontWeight="semibold"
                          >
                            {project.category}
                          </Badge>
                        </Box>

                        {/* 特色项目标签 */}
                        {project.featured && (
                          <Box position="absolute" top="4" right="4">
                            <Badge
                              bg="rgba(255, 215, 0, 0.2)"
                              color="gold"
                              border="1px solid gold"
                              px={3}
                              py={1}
                              borderRadius="full"
                              fontSize="xs"
                              fontWeight="semibold"
                            >
                              Featured
                            </Badge>
                          </Box>
                        )}

                        {/* 占位图标 */}
                        <VStack spacing={4} color="gray.500">
                          <Box fontSize="4xl">
                            {(() => {
                              const IconComponent = project.technologies[0].icon;
                              return <IconComponent />;
                            })()}
                          </Box>
                          <Text fontSize="sm" opacity="0.7">Project Preview</Text>
                        </VStack>
                      </Box>

                      {/* 项目信息 */}
                      <VStack spacing={4} p={6} align="start" flex="1" w="100%">
                        <VStack spacing={2} align="start" w="100%">
                          <Text fontSize="xl" fontWeight="bold" color="white">
                            {project.title}
                          </Text>
                          <Text fontSize="md" color="gray.300" lineHeight="1.6">
                            {project.description}
                          </Text>
                        </VStack>

                        {/* 技术栈 */}
                        <VStack spacing={3} align="start" w="100%">
                          <Text fontSize="sm" fontWeight="semibold" color="gray.400">
                            Technologies Used
                          </Text>
                          <HStack spacing={3} flexWrap="wrap">
                            {project.technologies.map((tech, techIndex) => (
                              <HStack
                                key={techIndex}
                                spacing={2}
                                px={3}
                                py={1}
                                bg="rgba(255, 255, 255, 0.05)"
                                borderRadius="full"
                                border="1px solid rgba(255, 255, 255, 0.1)"
                              >
                                <Box color={tech.color} fontSize="sm">
                                  {(() => {
                                    const IconComponent = tech.icon;
                                    return <IconComponent />;
                                  })()}
                                </Box>
                                <Text fontSize="xs" color="gray.300" fontWeight="medium">
                                  {tech.name}
                                </Text>
                              </HStack>
                            ))}
                          </HStack>
                        </VStack>

                        {/* 操作按钮 */}
                        <HStack spacing={3} pt={4}>
                          <Button
                            size="sm"
                            bg="transparent"
                            border="1px solid #667eea"
                            color="#667eea"
                            leftIcon={<FaGithub />}
                            _hover={{
                              bg: "rgba(102, 126, 234, 0.1)",
                              transform: "translateY(-2px)",
                            }}
                            transition="all 0.3s ease"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            Code
                          </Button>
                          
                          {project.live && (
                            <Button
                              size="sm"
                              bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                              color="white"
                              leftIcon={<FaExternalLinkAlt />}
                              _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                              }}
                              transition="all 0.3s ease"
                              onClick={() => window.open(project.live, '_blank')}
                            >
                              Live Demo
                            </Button>
                          )}
                        </HStack>
                      </VStack>
                    </VStack>
                  </Box>
                </motion.div>
              </GridItem>
            ))}
          </Grid>

          {/* 查看更多按钮 */}
          <motion.div variants={itemVariants}>
            <VStack spacing={4} textAlign="center">
              <Text fontSize="md" color="gray.400">
                Want to see more projects?
              </Text>
              <Button
                size="lg"
                bg="transparent"
                border="2px solid #667eea"
                color="#667eea"
                px={8}
                py={6}
                _hover={{
                  bg: "#667eea",
                  color: "white",
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 35px rgba(102, 126, 234, 0.3)",
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.3s ease"
                onClick={() => window.open('https://github.com/fuyun', '_blank')}
              >
                View All Projects on GitHub
              </Button>
            </VStack>
          </motion.div>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default ProjectsSection; 