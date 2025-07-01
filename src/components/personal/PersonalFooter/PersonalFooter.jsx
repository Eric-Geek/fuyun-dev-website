import React from "react";
import { Box, VStack, HStack, Text, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHeart, FaReact, FaCode } from "react-icons/fa";

const PersonalFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg="rgba(0, 0, 0, 0.3)"
      borderTop="1px solid rgba(255, 255, 255, 0.1)"
      py={12}
      px={6}
    >
      <VStack spacing={6} maxW="1200px" mx="auto">
        {/* 主要内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <VStack spacing={4} textAlign="center">
            <HStack spacing={2} fontSize="sm" color="gray.400">
              <Text>Made with</Text>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHeart color="#ff6b6b" />
              </motion.div>
              <Text>using</Text>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FaReact color="#61DAFB" />
              </motion.div>
              <Text>and lots of</Text>
              <FaCode color="#667eea" />
            </HStack>

            <Text fontSize="md" color="gray.300" fontWeight="medium">
              Fuyun - Full Stack Developer
            </Text>

            <Text fontSize="sm" color="gray.500">
              Building digital experiences that matter
            </Text>
          </VStack>
        </motion.div>

        <Divider borderColor="rgba(255, 255, 255, 0.1)" />

        {/* 版权信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HStack spacing={6} fontSize="sm" color="gray.500" flexWrap="wrap" justify="center">
            <Text>© {currentYear} Fuyun. All rights reserved.</Text>
            <Text>•</Text>
            <Text>fuyun.dev</Text>
            <Text>•</Text>
            <motion.div
              whileHover={{ color: "#667eea" }}
              transition={{ duration: 0.2 }}
            >
              <Text cursor="pointer">Privacy Policy</Text>
            </motion.div>
          </HStack>
        </motion.div>

        {/* 回到顶部按钮 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            as="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            p={3}
            bg="rgba(102, 126, 234, 0.1)"
            border="1px solid rgba(102, 126, 234, 0.3)"
            borderRadius="full"
            color="#667eea"
            fontSize="lg"
            _hover={{
              bg: "rgba(102, 126, 234, 0.2)",
              transform: "translateY(-2px)",
            }}
            _active={{
              transform: "translateY(0px)",
            }}
            transition="all 0.3s ease"
          >
            ↑
          </Box>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default PersonalFooter; 