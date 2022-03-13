import { HStack, Box, VStack, Heading, Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

type Props = {
  name: string;
};

const Landing = (props: Props) => {
  const [showName, setShowName] = useState(true);
  useEffect(() => {
    console.log(props);
    if (showName) {
      setTimeout(() => {
        setShowName(false);
      }, 1000);
    }
  }, []);

  return (
    <Center height="100vh">
      <AnimatePresence>
        {showName && (
          <motion.div exit={{ opacity: 0 }}>
            <VStack bg="brand.block" spacing="24px" p="2rem" rounded="md">
              <Heading p="1rem" rounded="sm" width="full">
                Welcome {props.name.split(" ")[0]}!
              </Heading>
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
    </Center>
  );
};
export default Landing;
