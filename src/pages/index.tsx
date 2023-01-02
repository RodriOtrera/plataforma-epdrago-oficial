import React from "react";
import Navbar from "../../components/home/Navbar";
import { motion } from "framer-motion";
import Carousell from "../../components/home/Carousell";
import IconsContainer from "../../components/home/IconsContainer";
import MainLayout from "../../components/home/MainLayout";
const HomePage = () => {
  return (
    <MainLayout>
      <Navbar />
      <Carousell />
      <IconsContainer />
    </MainLayout>
  );
};

export default HomePage;
