import React from "react";
import {
  ActionIcon,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Title,
  Select,
  Box,
} from "@mantine/core";
import SettingsPanel from "../src/components/setting-panel";
import ContactForm from "../src/components/contact-form";
import ButtonShowcase from "../src/components/buttons";
import CustomCascader from "../src/components/cascad";
import { cascaderOptions } from "../src/components/data/cascade-data";
import ColorSchemeToggle from "../src/components/color-scheme-toggle";
import SelectWithFlagsDemo from "../src/components/select-with-flags/select-with-flags-demo";

export default function IndexPage() {
  return (
    <Container size="lg" py="xl">
      <Paper p="xl" mb="xl" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Group justify="space-between" align="center">
         <Box  w="100%" ta="center" mt="md">
           <ColorSchemeToggle />
         </Box>
        </Group>
      </Paper>

      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack>
            <ContactForm />
            <SelectWithFlagsDemo />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack>
            <SettingsPanel />
            <ButtonShowcase />
          </Stack>
        </Grid.Col>
      </Grid>

      <Divider my="xl" />

      <Card>
        <Select
          label="Country"
          placeholder=" "         
          data={['Item 1', 'Item 2', 'Item 3']}
          clearable
          leftSection={<span className="material-symbols-outlined" style={{ fontSize: 20 }}>public</span>}
          rightSection={<span className="material-symbols-outlined" style={{ fontSize: 20 }}>expand_more</span>}
        />
        <Group mt="md">
          <ActionIcon variant="default" radius="md" size="lg">
            <Box className="material-symbols-outlined">home</Box>
          </ActionIcon>

          <ActionIcon variant="default" radius="md" size="lg" color="blue">
            <Box component="span" c='var(--mantine-color-material-blue-5)' className="material-symbols-outlined">settings</Box>
          </ActionIcon>

          <ActionIcon variant="default" radius="md" size="lg" color="red">
            <Box
              component="span"
              c="var(--mantine-color-red-5)"
              className="material-symbols-outlined material-icon-fill"
            >
              favorite
            </Box>
          </ActionIcon>
          <CustomCascader 
            options={cascaderOptions} 
            onChange={(value, selected) => {
              console.log("Selected path:", value);
              console.log("Selected item:", selected);
            }}
          />
        </Group>
      </Card>
    </Container>
  );
}
