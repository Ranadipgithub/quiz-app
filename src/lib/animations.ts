export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};
