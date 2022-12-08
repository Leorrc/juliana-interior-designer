import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 }
};

export const BoxStyled = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants
}))`
  display: flex;
`;
