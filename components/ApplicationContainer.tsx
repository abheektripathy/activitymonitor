import { AppShell, Footer, Group, Header, Text } from "@mantine/core";

export const ApplicationContainer = ({ //@ts-ignore
    children }) => {
  return (
    <AppShell
      
    >
      {children}
    </AppShell>
  );
};