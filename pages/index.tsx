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
  //@ts-ignore
  launches,
}) {
  console.log("launches", launches);
  const theme = useMantineTheme();
  return (
    <>
      <br></br>
      

      <Flex
        mih={30}
        bg="rgba(0, 0, 0, .3)"
        gap="xl"
        justify="center"
        align="flex-end"
        direction="row"
        wrap="wrap"
      >
        {launches.map(
          (launch: {
            rocket: any;
            mission_name: any;
            links: { mission_patch_small: ImageData; video_link: any };
            launch_date_utc: any;
          }) => {
            return (
              <FeaturesCard
                name={launch.mission_name}
                image={launch.links.mission_patch_small}
                date={launch.launch_date_utc}
                link={launch.links.video_link}
                rocket={launch.rocket.rocket_name}
              ></FeaturesCard>
            );
          }
        )}
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  //this func is first getting the data through the graphql client,
  // storing it in destructured {data}

  const Client = new ApolloClient({
    uri: `https://api.spacex.land/graphql/`,
    cache: new InMemoryCache(),
  });

  const { data } = await Client.query({
    query: gql`
      query getLaunches {
        launchesPast(limit: 4, offset: 40) {
          mission_name
          launch_date_local
          launch_date_utc
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch_small
            mission_patch
          }
          rocket {
            rocket_name
            first_stage {
              cores {
                flight
              }
            }
          }
          id
        }
      }
    `,
  });

  console.log("data", data);
  //what does props do here?
  return {
    props: {
      launches: data.launchesPast,
    },
  };
}
