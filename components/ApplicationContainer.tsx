import { AppShell, Footer, Group, Header, Text } from "@mantine/core";

export const ApplicationContainer = ({ //@ts-ignore
    children }) => {
  return (
    <AppShell
      styles={{
        main: {
            backgroundColor: 'black',
            width: '100vw',
            height: '100vh',
            paddingLeft: '0px',


        }
      }}
      fixed
      footer={<Footer height={60} p= 'md'>
        <Group position="apart" spacing='xl'>
            <Text size='sm'>
                <span style={{fontWeight: "bolder"}}>
                  🚀 
                </span>
            </Text>
            <Text size='sm'>
                <span style={{fontWeight: "bolder"}}>
                   🎉
                </span> 
            </Text>             
        </Group>

      </Footer>}
      header={<Header height={60} p='md'>
        <Group position="apart" spacing='xl'>
            <Text size='xl'>
            <span style={
            {
                fontWeight: "bolder",
                fontSize: "1.2rem",
            }
        }>Alpaca</span>    Activity.
            </Text>
        
        <span style={{
            fontSize: "1.3rem",
        }}>🦙</span>
        </Group>
      </Header>}
    >
      {children}
    </AppShell>
  );
};