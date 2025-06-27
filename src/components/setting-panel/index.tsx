import { Badge, Card, Group, Stack, Switch, Text, Title } from "@mantine/core";
import { IconCheck, IconDots, IconPointFilled, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function SettingsPanel() {
    const [wifiEnabled, setWifiEnabled] = useState(true);

    return (
      <Card withBorder shadow="sm">
        <Group justify="space-between" mb="lg">
          <Title order={3} c="material-grey.8">Settings</Title>
        </Group>
        
        <Stack gap="lg">
          <Group justify="space-between">
            <div>
              <Text fw={500}>Wi-Fi</Text>
            </div>
            <Switch
              checked={wifiEnabled}
              onChange={(event) => setWifiEnabled(event.currentTarget.checked)}
              size="lg"
              color="material-green"
              thumbIcon={
                wifiEnabled ? (
                  <IconCheck size={12} color="var(--mantine-color-material-green-6)" stroke={3} />
                ) : (
                  <IconPointFilled size={20} color="var(--mantine-color-gray-6)" stroke={3} />
                )
              }
             />
          </Group>
        </Stack>
      </Card>
    );
  }