import React from "react";
import { Box, VStack, HStack, Text, Button, Input, Textarea, FormControl, FormLabel, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import DecryptedText from "../../../content/TextAnimations/DecryptedText/DecryptedText";
import FloatingCard from "../../../content/Components/SpotlightCard/SpotlightCard";

const ContactSection = ({ isMobile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    // 重置表单
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "hello@fuyun.dev",
      link: "mailto:hello@fuyun.dev",
      color: "#EA4335"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "China",
      link: null,
      color: "#4285F4"
    },
    {
      icon: FaPhone,
      label: "Available",
      value: "9 AM - 6 PM (UTC+8)",
      link: null,
      color: "#34A853"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/fuyun",
      color: "#333"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/fuyun",
      color: "#0077B5"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/fuyun",
      color: "#1DA1F2"
    },
    {
      icon: FaEnvelope,
      name: "Email",
      url: "mailto:hello@fuyun.dev",
      color: "#EA4335"
    }
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
      id="contact"
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
                <DecryptedText text="Get In Touch" />
              </Text>
              <Box width="80px" height="4px" bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="full" />
              <Text fontSize="lg" color="gray.400" maxW="600px" textAlign="center">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </Text>
            </VStack>
          </motion.div>

          {/* 主要内容 */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} w="100%">
            {/* 左侧：联系信息 */}
            <GridItem>
              <motion.div variants={itemVariants}>
                <VStack spacing={8} align="start" h="100%">
                  <VStack spacing={4} align="start">
                    <Text fontSize="2xl" fontWeight="bold" color="white">
                      Let's Connect
                    </Text>
                    <Text fontSize="md" color="gray.300" lineHeight="1.8">
                      Whether you're looking to hire a developer, collaborate on a project, 
                      or just want to say hello, I'd love to hear from you.
                    </Text>
                  </VStack>

                  {/* 联系信息卡片 */}
                  <VStack spacing={4} w="100%">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{ width: "100%" }}
                      >
                        <Box
                          as={info.link ? "a" : "div"}
                          href={info.link}
                          position="relative"
                          p={4}
                          bg="rgba(255, 255, 255, 0.03)"
                          borderRadius="xl"
                          border="1px solid rgba(255, 255, 255, 0.1)"
                          w="100%"
                          _hover={{
                            bg: "rgba(255, 255, 255, 0.05)",
                            transform: "translateY(-2px)",
                            textDecoration: "none",
                          }}
                          transition="all 0.3s ease"
                          cursor={info.link ? "pointer" : "default"}
                        >
                          {!isMobile && (
                            <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="1">
                              <FloatingCard />
                            </Box>
                          )}
                          
                          <HStack spacing={4} position="relative" zIndex="2">
                            <Box
                              p={3}
                              bg="rgba(255, 255, 255, 0.1)"
                              borderRadius="lg"
                              color={info.color}
                              fontSize="lg"
                            >
                              {(() => {
                                const IconComponent = info.icon;
                                return <IconComponent />;
                              })()}
                            </Box>
                            <VStack spacing={1} align="start">
                              <Text fontSize="sm" color="gray.400" fontWeight="medium">
                                {info.label}
                              </Text>
                              <Text fontSize="md" color="white" fontWeight="semibold">
                                {info.value}
                              </Text>
                            </VStack>
                          </HStack>
                        </Box>
                      </motion.div>
                    ))}
                  </VStack>

                  {/* 社交媒体链接 */}
                  <VStack spacing={4} align="start" w="100%">
                    <Text fontSize="lg" fontWeight="semibold" color="white">
                      Follow Me
                    </Text>
                    <HStack spacing={4}>
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Box
                            as="a"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            p={3}
                            bg="rgba(255, 255, 255, 0.05)"
                            borderRadius="xl"
                            color="gray.400"
                            fontSize="xl"
                            _hover={{
                              bg: "rgba(255, 255, 255, 0.1)",
                              color: social.color,
                              transform: "translateY(-3px)",
                            }}
                            transition="all 0.3s ease"
                          >
                            {(() => {
                              const IconComponent = social.icon;
                              return <IconComponent />;
                            })()}
                          </Box>
                        </motion.div>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
              </motion.div>
            </GridItem>

            {/* 右侧：联系表单 */}
            <GridItem>
              <motion.div variants={itemVariants}>
                <Box
                  position="relative"
                  p={8}
                  bg="rgba(255, 255, 255, 0.03)"
                  borderRadius="2xl"
                  border="1px solid rgba(255, 255, 255, 0.1)"
                  h="100%"
                >
                  {!isMobile && (
                    <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="1">
                      <FloatingCard />
                    </Box>
                  )}
                  
                  <VStack spacing={6} position="relative" zIndex="2" h="100%">
                    <Text fontSize="xl" fontWeight="bold" color="white" textAlign="center">
                      Send Me a Message
                    </Text>
                    
                    <Box as="form" onSubmit={handleSubmit} w="100%" flex="1">
                      <VStack spacing={6}>
                        <FormControl>
                          <FormLabel color="gray.300" fontSize="sm" fontWeight="medium">
                            Your Name
                          </FormLabel>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            bg="rgba(255, 255, 255, 0.05)"
                            border="1px solid rgba(255, 255, 255, 0.1)"
                            color="white"
                            _placeholder={{ color: "gray.500" }}
                            _focus={{
                              borderColor: "#667eea",
                              boxShadow: "0 0 0 1px #667eea",
                            }}
                            borderRadius="lg"
                          />
                        </FormControl>

                        <FormControl>
                          <FormLabel color="gray.300" fontSize="sm" fontWeight="medium">
                            Email Address
                          </FormLabel>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            bg="rgba(255, 255, 255, 0.05)"
                            border="1px solid rgba(255, 255, 255, 0.1)"
                            color="white"
                            _placeholder={{ color: "gray.500" }}
                            _focus={{
                              borderColor: "#667eea",
                              boxShadow: "0 0 0 1px #667eea",
                            }}
                            borderRadius="lg"
                          />
                        </FormControl>

                        <FormControl>
                          <FormLabel color="gray.300" fontSize="sm" fontWeight="medium">
                            Message
                          </FormLabel>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell me about your project or just say hello!"
                            bg="rgba(255, 255, 255, 0.05)"
                            border="1px solid rgba(255, 255, 255, 0.1)"
                            color="white"
                            _placeholder={{ color: "gray.500" }}
                            _focus={{
                              borderColor: "#667eea",
                              boxShadow: "0 0 0 1px #667eea",
                            }}
                            borderRadius="lg"
                            rows={6}
                            resize="vertical"
                          />
                        </FormControl>

                        <Button
                          type="submit"
                          bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          color="white"
                          size="lg"
                          w="100%"
                          _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 25px rgba(102, 126, 234, 0.3)",
                          }}
                          _active={{
                            transform: "translateY(0px)",
                          }}
                          transition="all 0.3s ease"
                        >
                          Send Message
                        </Button>
                      </VStack>
                    </Box>
                  </VStack>
                </Box>
              </motion.div>
            </GridItem>
          </Grid>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default ContactSection; 