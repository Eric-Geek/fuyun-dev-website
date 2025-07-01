import { Box, Avatar, HStack, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SplitText from "../../../content/TextAnimations/SplitText/SplitText";
import GradientText from "../../../content/TextAnimations/GradientText/GradientText";
import MetaBalls from "../../../content/Animations/MetaBalls/MetaBalls";

const ResponsiveSplitText = ({ isMobile, text, ...rest }) =>
  isMobile ? (
    <span className={rest.className}>{text}</span>
  ) : (
    <SplitText text={text} {...rest} />
  );

const PersonalHero = ({ isMobile }) => {
  return (
    <Box 
      minHeight="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      position="relative"
      px={6}
      py={20}
    >
      {/* MetaBalls背景装饰 */}
      {!isMobile && (
        <Box 
          position="absolute" 
          top="20%" 
          right="10%" 
          width="300px" 
          height="300px"
          opacity="0.3"
          zIndex="1"
        >
          <MetaBalls />
        </Box>
      )}

      <VStack spacing={8} textAlign="center" zIndex="2" maxW="800px">
        {/* 头像 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <Avatar 
            size="2xl" 
            name="Fuyun" 
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            color="white"
            fontSize="2xl"
            boxShadow="0 20px 40px rgba(102, 126, 234, 0.3)"
          />
        </motion.div>

        {/* 主标题 */}
        <VStack spacing={4}>
          <Box fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white">
            <ResponsiveSplitText
              isMobile={isMobile}
              text="Hi, I'm Fuyun"
              splitType="chars"
              delay={40}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </Box>
          
          <Box fontSize={{ base: "xl", md: "2xl" }} color="gray.300">
            <GradientText
              text="Full Stack Developer & Creator"
              colors={["#667eea", "#764ba2", "#f093fb"]}
              animationSpeed={3}
              showBorder={false}
            />
          </Box>
        </VStack>

        {/* 描述文字 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Text 
            fontSize={{ base: "md", md: "lg" }} 
            color="gray.400" 
            maxW="600px"
            lineHeight="1.8"
          >
            Passionate about building amazing digital experiences with modern technologies. 
            I create beautiful, functional, and user-friendly applications that make a difference.
          </Text>
        </motion.div>

        {/* 按钮组 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Box
              as="button"
              px={8}
              py={3}
              bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              color="white"
              borderRadius="full"
              fontSize="md"
              fontWeight="semibold"
              boxShadow="0 10px 25px rgba(102, 126, 234, 0.3)"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)",
              }}
              _active={{
                transform: "translateY(0px)",
              }}
              transition="all 0.3s ease"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Box>
            
            <Box
              as="button"
              px={8}
              py={3}
              border="2px solid"
              borderColor="gray.600"
              color="white"
              borderRadius="full"
              fontSize="md"
              fontWeight="semibold"
              bg="transparent"
              _hover={{
                borderColor: "#667eea",
                bg: "rgba(102, 126, 234, 0.1)",
                transform: "translateY(-2px)",
              }}
              _active={{
                transform: "translateY(0px)",
              }}
              transition="all 0.3s ease"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Box>
          </HStack>
        </motion.div>

        {/* 滚动指示器 */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="scroll-indicator"
            style={{
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Box
                width="2px"
                height="30px"
                bg="linear-gradient(to bottom, transparent, #667eea, transparent)"
                borderRadius="full"
              />
            </motion.div>
          </motion.div>
        )}
      </VStack>
    </Box>
  );
};

export default PersonalHero; 