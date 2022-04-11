import {
  HStack,
  Box,
  VStack,
  Heading,
  Center,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Landing = (props) => {
  const router = useRouter();
  const [showName, setShowName] = useState(true);
  useEffect(() => {
    if (showName) {
      setTimeout(() => {
        setShowName(false);
        router.push("/main");
      }, 1000);
    }
  }, []);

  return (
    <>
      {showName ? (
        <Center height="100vh">
          <AnimatePresence>
            {showName && (
              <motion.div exit={{ opacity: 0 }}>
                <VStack bg="brand.block" spacing="24px" p="2rem" rounded="md">
                  <Avatar size="md" src={props.img} />
                  <Heading p="1rem" rounded="sm" width="full">
                    Welcome {props.name.split(" ")[0]}!
                  </Heading>
                </VStack>
              </motion.div>
            )}
          </AnimatePresence>
        </Center>
      ) : (
        ""
      )}
    </>
  );
};
export default Landing;
