import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import {
  Group,
  ActionIcon,
  Box,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
  Center,
  Flex,
} from "@mantine/core";
import {
  IconPlayerPlay,
  IconSettings,
  IconPlaylistAdd,
  IconPlus,
} from "@tabler/icons";
import { FeaturesCard } from "../components/card";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useMantineTheme();
  return (
    <>
     
      <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'lg', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
        <FeaturesCard></FeaturesCard>
        <FeaturesCard></FeaturesCard>
        <FeaturesCard></FeaturesCard>
      </Flex>
    </>
  );
}
