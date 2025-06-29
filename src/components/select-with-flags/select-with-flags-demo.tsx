import { Card, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { countries } from 'countries-list';
import SelectWithFlags from './index';

export default function SelectWithFlagsDemo() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);
  const [selectedPriorityCountry, setSelectedPriorityCountry] =
    useState<string | null>(null);
  const [selectedWhitelistCountry, setSelectedWhitelistCountry] =
    useState<string | null>(null);
  const [selectedBlacklistCountry, setSelectedBlacklistCountry] =
    useState<string | null>(null);

  return (
    <Card withBorder shadow="sm" p="lg">
      <Stack gap="lg">
        <Text size="lg" fw={600}>Select With Flags Component with mantine-flagpack & countries-list</Text>
        
        <Stack gap="xs">
          <Text size="sm" fw={500}>With Country Names</Text>
          <SelectWithFlags
            label="Select Country"
            placeholder=" "
            value={selectedCountry}
            onChange={setSelectedCountry}
            clearable
            searchable
            w="100%"
          />
          {selectedCountry && (
            <Text size="xs" c="dimmed">
              Selected: {countries[selectedCountry as keyof typeof countries]?.name} ({selectedCountry})
            </Text>
          )}
        </Stack>

        {/* Usage with phone codes */}
        <Stack gap="xs">
          <Text size="sm" fw={500}>With Phone Codes</Text>
          <SelectWithFlags
            label="Select Country Code"
            placeholder=" "
            labelValue="code"
            value={selectedCountryCode}
            onChange={setSelectedCountryCode}
            clearable
            searchable
            w="100%"
          />
          {selectedCountryCode && (
            <Text size="xs" c="dimmed">
              Selected: +{countries[selectedCountryCode as keyof typeof countries]?.phone} ({selectedCountryCode})
            </Text>
          )}
        </Stack>

        {/* Usage with priority list */}
        <Stack gap="xs">
          <Text size="sm" fw={500}>With Priority Countries</Text>
          <SelectWithFlags
            label="Select Country (Priority: US, CA, GB, DE, RU)"
            placeholder=" "
            priorityList={['US', 'CA', 'GB', 'DE', 'RU']}
            clearable
            searchable
            labelValue="code"
            w="100%"
            value={selectedPriorityCountry}
            onChange={setSelectedPriorityCountry}
          />
        </Stack>

        {/* Usage with whitelist */}
        <Stack gap="xs">
          <Text size="sm" fw={500}>With Whitelist (Only North America & Europe)</Text>
          <SelectWithFlags
            label="Select Country (Whitelist)"
            placeholder=" "
            whiteList={['US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES']}
            clearable
            searchable
            labelValue="code"
            w="100%"
            value={selectedWhitelistCountry}
            onChange={setSelectedWhitelistCountry}
          />
        </Stack>

        {/* Usage with blacklist */}
        <Stack gap="xs">
          <Text size="sm" fw={500}>With Blacklist (Excluding CN, RU)</Text>
          <SelectWithFlags
            label="Select Country (Blacklist)"
            placeholder=" "
            blackList={['CN', 'RU']}
            clearable
            searchable
            labelValue="name"
            w="100%"
            value={selectedBlacklistCountry}
            onChange={setSelectedBlacklistCountry}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
