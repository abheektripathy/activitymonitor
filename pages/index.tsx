/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { useMantineTheme } from "@mantine/core";

import { Key } from "react";
import { GetServerSideProps } from "next";
import { Prisma, prisma } from "@prisma/client";
const inter = Inter({ subsets: ["latin"] });
interface props {
  projects: Prisma.ProjectsSelect[]
}

//see here in the main function we're calling the data as props, using launches

export default function Home({}) {
  const theme = useMantineTheme();
  return <></>;
}


export const getServerSideProps:  GetServerSideProps= async() => {
  const projects= await prisma.projects.findMany();

  
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
