import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { StatsGrid } from '../components/xyz'
import { HeaderMiddle } from '../components/header2'
import { TableReviews } from '../components/table'
import { Group, ActionIcon, Box, Text, Title, UnstyledButton, useMantineTheme  } from '@mantine/core'
import { IconPlayerPlay, IconSettings, IconPlaylistAdd, IconPlus } from "@tabler/icons";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useMantineTheme();
  return (
    

      <Group //@ts-ignore
       direction ="column" mt = "-20px">
        <Group style={{backgroundColor: '#0c0c0c', height: '80vh', width:'400px', marginTop:'25px', borderRadius: "10px"}} mx="auto" //@ts-ignore
        direction = "column" >
          <Group position='apart' style={{ width: "100%"}}>
            <ActionIcon color="gray" variant="transparent" size="lg" style={{marginTop: "0px", marginLeft: "20px"}}><IconSettings></IconSettings></ActionIcon>
          </Group>
        </Group>
      </Group>


      
      
           
    
  )
}
