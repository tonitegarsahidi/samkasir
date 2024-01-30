"use client"
import React from "react";
import { useState } from "react";
import Head from "next/head";
import { Metadata } from "next";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/MainContent/Main";
import styles from "./page.module.scss"

const metadata: Metadata = {
  title: 'Aku di Home loh',
  description: 'Generated by create next app',
}

const Home: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Head>
        <title>Your Page Title</title>
      </Head>

      <div>
        <Header>haha</Header>
        <div className={styles.main}>
          <Sidebar>Aku Sidebar</Sidebar>
          
            <Main>Aku Main</Main>

        </div>
        <Footer>Aku Footer</Footer>
      </div>



    </div>
  );
}

export default Home;