import React from 'react';
import {
  Container,
  Paper,
  Title,
  Grid,
  TextInput,
  Textarea,
  PasswordInput,
  Button,
  Group,
  Stack,
  Card,
  Text,
  Switch,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import OptimizedSelectWithFlags from '../src/components/select-with-flags/optimized-select-with-flags';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  bio: string;
  newsletter: boolean;
  countryWithFlag: string;
  phoneCountryCode: string;
  priorityCountry: string;
}

export default function Form() {
  const form = useForm<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      bio: '',
      newsletter: false,
      countryWithFlag: '',
      phoneCountryCode: '',
      priorityCountry: '',
    },
    validate: {
      firstName: (v) => (v.length < 2 ? 'First name must have at least 2 letters' : null),
      lastName:  (v) => (v.length < 2 ? 'Last name must have at least 2 letters'  : null),
      email:     (v) => (/^\S+@\S+$/.test(v) ? null : 'Invalid email'),
      password:  (v) => (v.length < 6 ? 'Password must have at least 6 characters' : null),
      confirmPassword: (v, vals) =>
        v !== vals.password ? 'Passwords did not match' : null,
    },
  });

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted with values:', values);
    alert('Form submitted successfully! Check console for values.');
  };

  return (
    <Container size="lg" py="xl">
      <Paper
        p="xl"
        mb="xl"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <Group justify="space-between" align="center">
          <Title order={1} c="white">
            Mantine v8 Form
          </Title>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button variant="white" color="blue">
              Back to Home
            </Button>
          </Link>
        </Group>
      </Paper>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="xl">
          {/* Personal Information */}
          <Card withBorder p="lg">
            <Title order={2} mb="md">
              Personal Information
            </Title>
            <Grid>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="First Name"
                  placeholder="Enter your first name"
                  {...form.getInputProps('firstName')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Last Name"
                  placeholder="Enter your last name"
                  {...form.getInputProps('lastName')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  {...form.getInputProps('email')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Phone"
                  placeholder="+1 (555) 123-4567"
                  {...form.getInputProps('phone')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <PasswordInput
                  label="Password"
                  placeholder="Enter password"
                  {...form.getInputProps('password')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <PasswordInput
                  label="Confirm Password"
                  placeholder="Confirm password"
                  {...form.getInputProps('confirmPassword')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Switch
                  label="Subscribe to newsletter"
                  {...form.getInputProps('newsletter', { type: 'checkbox' })}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Textarea
                  label="Bio"
                  placeholder="Tell us about yourself..."
                  autosize
                  minRows={3}
                  maxRows={6}
                  {...form.getInputProps('bio')}
                />
              </Grid.Col>
            </Grid>
          </Card>

          {/* Flag Selection */}
          <Card withBorder p="lg">
            <Title order={3} mb="md">
              Flag Selection
            </Title>
            <Text size="sm" c="dimmed" mb="md">
              These flag selects demonstrate priority lists and label modes.
            </Text>
            <Grid>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <OptimizedSelectWithFlags
                  label="Priority Countries"
                  placeholder="Select your country"
                  priorityList={['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'JP']}
                  {...form.getInputProps('countryWithFlag')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <OptimizedSelectWithFlags
                  label="Phone Country Code"
                  placeholder="Select country code"
                  labelValue="code"
                  priorityList={['US', 'GB', 'CA', 'AU', 'DE', 'FR']}
                  {...form.getInputProps('phoneCountryCode')}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <OptimizedSelectWithFlags
                  label="European Countries Only"
                  placeholder="Select European country"
                  whiteList={[
                    'GB','DE','FR','IT','ES','NL','BE','AT','CH','SE','NO','DK','FI','IE','PT','PL','CZ','HU','GR',
                  ]}
                  priorityList={['GB', 'DE', 'FR', 'IT', 'ES']}
                  {...form.getInputProps('priorityCountry')}
                />
              </Grid.Col>
            </Grid>
          </Card>

          {/* Submit / Actions */}
          <Card withBorder p="lg">
            <Group justify="space-between">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Button variant="outline" color="gray">
                  Cancel
                </Button>
              </Link>
              <Group>
                <Button variant="outline" onClick={() => form.reset()}>
                  Reset Form
                </Button>
                <Button type="submit" size="lg">
                  Submit Form
                </Button>
              </Group>
            </Group>
          </Card>
        </Stack>
      </form>
    </Container>
  );
}
