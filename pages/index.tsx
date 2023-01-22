/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

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
import { Key } from "react";
const inter = Inter({ subsets: ["latin"] });

//see here in the main function we're calling the data as props, using launches

export default function Home({
}) {

  const theme = useMantineTheme();
  return (
    <>
     


    </>
  );
}

// export async function getStaticProps() {
//   //this func is first getting the data through the graphql client,
//   // storing it in destructured {data}

//   const Client = new ApolloClient({
//     uri: `https://api.spacex.land/graphql/`,
//     cache: new InMemoryCache(),
//   });

//   const { data } = await Client.query({
//     query: gql`
//       query getLaunches {
//         launchesPast(limit: 4, offset: 40) {
//           mission_name
//           launch_date_local
//           launch_date_utc
//           launch_site {
//             site_name_long
//           }
//           links {
//             article_link
//             video_link
//             mission_patch_small
//             mission_patch
//           }
//           rocket {
//             rocket_name
//             first_stage {
//               cores {
//                 flight
//               }
//             }
//           }
//           id
//         }
//       }
//     `,
//   });

//   console.log("data", data);
//   //what does props do here?
//   return {
//     props: {
//       launches: data.launchesPast,
//     },
//   };
// }
