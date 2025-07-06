import React, { useState } from 'react';
import {
  AppShell,
  Text,
  Button,
  TextInput,
  Select,
  Switch,
  Textarea,
  NumberInput,
  PasswordInput,
  Radio,
  Slider,
  RangeSlider,
  Rating,
  ColorInput,
  FileInput,
  Card,
  Badge,
  Avatar,
  Group,
  Stack,
  Grid,
  Container,
  Title,
  Alert,
  Progress,
  Loader,
  Skeleton,
  Tabs,
  Accordion,
  Modal,
  Drawer,
  Tooltip,
  Popover,
  Menu,
  ActionIcon,
  SegmentedControl,
  Chip,
  Pill,
  Breadcrumbs,
  Anchor,
  List,
  SimpleGrid,
} from '@mantine/core';
import {
  IconHome,
  IconUser,
  IconSettings,
  IconChartBar,
  IconBell,
  IconSearch,
  IconUpload,
  IconDownload,
  IconEdit,
  IconTrash,
  IconPlus,
  IconLock,
  IconMail,
  IconCalendar,
  IconPhoto,
  IconDatabase,
  IconShield,
  IconTool,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMenu2,
  IconCheck,
  IconAlertCircle,
  IconInfoCircle,
} from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import { Spotlight as MantineSpotlight, spotlight } from '@mantine/spotlight';
import { notifications } from '@mantine/notifications';
import { ThemeSwitcher } from '../src/components/ThemeSwitcher';
import { useTheme } from '../src/contexts/ThemeContext';
import { themeBackgrounds, themeHeaders } from '../theme';
import SelectWithFlags from '../src/components/select-with-flags/optimized-select-with-flags';

export default function AdminDashboard() {
  const { currentTheme } = useTheme();
  const [opened, setOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);
  const [rating, setRating] = useState(0);
  const [segmentedValue, setSegmentedValue] = useState('react');
  const [chipValue, setChipValue] = useState(['react']);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: 18,
      bio: '',
      country: '',
      newsletter: false,
      role: '',
      color: '#3DADFF',
      avatar: null,
      birthDate: null,
      workTime: '',
      rating: 0,
      skills: [],
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
    },
  });

  const showNotification = () => {
    notifications.show({
      title: 'Success!',
      message: 'Your action was completed successfully',
      color: 'green',
      icon: <IconCheck size={16} />,
    });
  };

  return (
    <>
      <MantineSpotlight
        actions={[
          {
            id: 'home',
            label: 'Home',
            description: 'Go to home page',
            onClick: () => console.log('Home'),
            leftSection: <IconHome size={18} />,
          },
          {
            id: 'dashboard',
            label: 'Dashboard',
            description: 'Go to dashboard',
            onClick: () => console.log('Dashboard'),
            leftSection: <IconChartBar size={18} />,
          },
        ]}
        searchProps={{
          leftSection: <IconSearch size={18} />,
          placeholder: 'Search...',
        }}
      />

      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header style={themeHeaders[currentTheme] as React.CSSProperties}>
          <Group h="100%" px="md" justify="space-between">
            <Group>
              <ActionIcon
                variant="subtle"
                onClick={() => setOpened((o) => !o)}
                hiddenFrom="sm"
              >
                <IconMenu2 size={18} />
              </ActionIcon>
              <Title order={3} c="black">Admin Dashboard</Title>
            </Group>
            <Group>
              <Button
                leftSection={<IconSearch size={16} />}
                variant="light"
                onClick={spotlight.open}
              >
                Search
              </Button>
              <ActionIcon variant="light">
                <IconBell size={18} />
              </ActionIcon>
              <Avatar src={null} alt="User" size="sm">
                JD
              </Avatar>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar
          p="md"
          style={themeBackgrounds[currentTheme] as React.CSSProperties}
        >
          <Stack gap="xs">
            <ThemeSwitcher />
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>
          <Container size="xl">
            <Stack gap="lg">
              {/* Header Section */}
              <Group justify="space-between">
                <div>
                  <Title order={1}>Welcome to Admin Dashboard</Title>
                </div>
                <Group>
                  <Button onClick={showNotification}>Show Notification</Button>
                  <Button onClick={() => setModalOpened(true)}>Open Modal</Button>
                  <Button onClick={() => setDrawerOpened(true)}>Open Drawer</Button>
                </Group>
              </Group>

              {/* Stats Cards */}
              <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
                <Card withBorder>
                  <Group justify="space-between">
                    <div>
                      <Text size="sm">Total Users</Text>
                      <Text size="xl" fw={700}>1,234</Text>
                    </div>
                    <IconUser size={32} color="blue" />
                  </Group>
                  <Progress value={75} mt="md" />
                </Card>
                <Card withBorder>
                  <Group justify="space-between">
                    <div>
                      <Text size="sm">Revenue</Text>
                      <Text size="xl" fw={700}>$12,345</Text>
                    </div>
                    <IconChartBar size={32} color="green" />
                  </Group>
                  <Progress value={60} mt="md" color="green" />
                </Card>
                <Card withBorder>
                  <Group justify="space-between">
                    <div>
                      <Text size="sm">Orders</Text>
                      <Text size="xl" fw={700}>567</Text>
                    </div>
                    <IconDatabase size={32} color="orange" />
                  </Group>
                  <Progress value={45} mt="md" color="orange" />
                </Card>
                <Card withBorder>
                  <Group justify="space-between">
                    <div>
                      <Text size="sm">Performance</Text>
                      <Text size="xl" fw={700}>98%</Text>
                    </div>
                    <IconShield size={32} color="red" />
                  </Group>
                  <Progress value={98} mt="md" color="red" />
                </Card>
              </SimpleGrid>

              {/* Tabs Section */}
              <Tabs value={activeTab} onChange={(value) => setActiveTab(value || 'overview')}>
                <Tabs.List>
                  <Tabs.Tab value="overview" leftSection={<IconHome size={16} />}>
                    Overview
                  </Tabs.Tab>
                  <Tabs.Tab value="forms" leftSection={<IconEdit size={16} />}>
                    Forms
                  </Tabs.Tab>
                  <Tabs.Tab value="components" leftSection={<IconTool size={16} />}>
                    Components
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" pt="lg">
                  <Grid>
                    <Grid.Col span={{ base: 12, md: 8 }}>
                      <Card withBorder>
                        <Title order={3} mb="md">Recent Activity</Title>
                        <Stack gap="sm">
                          <Alert icon={<IconInfoCircle size={16} />} title="Info" color="blue">
                            System maintenance scheduled for tonight
                          </Alert>
                          <Alert icon={<IconCheck size={16} />} title="Success" color="green">
                            Database backup completed successfully
                          </Alert>
                          <Alert icon={<IconAlertCircle size={16} />} title="Warning" color="yellow">
                            High CPU usage detected on server 2
                          </Alert>
                        </Stack>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                      <Card withBorder>
                        <Title order={3} mb="md">Quick Actions</Title>
                        <Stack gap="xs">
                          <Button leftSection={<IconPlus size={16} />} fullWidth>
                            Add User
                          </Button>
                          <Button leftSection={<IconUpload size={16} />} variant="light" fullWidth>
                            Upload File
                          </Button>
                          <Button leftSection={<IconDownload size={16} />} variant="outline" fullWidth>
                            Export Data
                          </Button>
                        </Stack>
                      </Card>
                    </Grid.Col>
                  </Grid>
                </Tabs.Panel>

                <Tabs.Panel value="forms" pt="lg">
                  <Grid>
                    <Grid.Col span={{ base: 12, lg: 6 }}>
                      <Card withBorder>
                        <Title order={3} mb="md">User Registration Form</Title>
                        <form onSubmit={form.onSubmit((values) => console.log(values))}>
                          <Stack gap="md">
                            <TextInput
                              label="Full Name"
                              placeholder="Enter your name"
                              leftSection={<IconUser size={16} />}
                              {...form.getInputProps('name')}
                            />
                            <TextInput
                              label="Email"
                              placeholder="your@email.com"
                              leftSection={<IconMail size={16} />}
                              {...form.getInputProps('email')}
                            />
                            <PasswordInput
                              label="Password"
                              placeholder="Enter password"
                              leftSection={<IconLock size={16} />}
                              {...form.getInputProps('password')}
                            />
                            <NumberInput
                              label="Age"
                              placeholder="Enter your age"
                              min={18}
                              max={100}
                              {...form.getInputProps('age')}
                            />
                            <Select
                              label="Role"
                              placeholder="Select role"
                              data={['Admin', 'User', 'Moderator']}
                              {...form.getInputProps('role')}
                            />
                            <SelectWithFlags
                              label="Country"
                              placeholder="Select country"
                              {...form.getInputProps('country')}
                            />
                            <Textarea
                              label="Bio"
                              placeholder="Tell us about yourself"
                              rows={3}
                              {...form.getInputProps('bio')}
                            />
                            <ColorInput
                              label="Favorite Color"
                              placeholder="Pick a color"
                              {...form.getInputProps('color')}
                            />
                            <FileInput
                              label="Avatar"
                              placeholder="Upload avatar"
                              leftSection={<IconPhoto size={16} />}
                              {...form.getInputProps('avatar')}
                            />
                            <DatePickerInput
                              label="Birth Date"
                              placeholder="Pick date"
                              leftSection={<IconCalendar size={16} />}
                              {...form.getInputProps('birthDate')}
                            />
                            <Switch
                              label="Subscribe to newsletter"
                              {...form.getInputProps('newsletter', { type: 'checkbox' })}
                            />
                            <Group justify="flex-end">
                              <Button type="submit">Submit</Button>
                            </Group>
                          </Stack>
                        </form>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, lg: 6 }}>
                      <Stack gap="md">
                        <Card withBorder>
                          <Title order={4} mb="md">Interactive Controls</Title>
                          <Stack gap="md">
                            <div>
                              <Text size="sm" mb="xs">Rating: {rating}</Text>
                              <Rating value={rating} onChange={setRating} />
                            </div>
                            <div>
                              <Text size="sm" mb="xs">Slider: {sliderValue}</Text>
                              <Slider
                                value={sliderValue}
                                onChange={setSliderValue}
                                marks={[
                                  { value: 20, label: '20%' },
                                  { value: 50, label: '50%' },
                                  { value: 80, label: '80%' },
                                ]}
                              />
                            </div>
                            <div>
                              <Text size="sm" mb="xs">Range: {rangeValue[0]} - {rangeValue[1]}</Text>
                              <RangeSlider
                                value={rangeValue}
                                onChange={setRangeValue}
                                minRange={10}
                              />
                            </div>
                            <div>
                              <Text size="sm" mb="xs">Segmented Control</Text>
                              <SegmentedControl
                                value={segmentedValue}
                                onChange={setSegmentedValue}
                                data={[
                                  { label: 'React', value: 'react' },
                                  { label: 'Angular', value: 'angular' },
                                  { label: 'Vue', value: 'vue' },
                                ]}
                              />
                            </div>
                            <div>
                              <Text size="sm" mb="xs">Chip Group</Text>
                              <Chip.Group multiple value={chipValue} onChange={setChipValue}>
                                <Group>
                                  <Chip value="react">React</Chip>
                                  <Chip value="vue">Vue</Chip>
                                  <Chip value="angular">Angular</Chip>
                                  <Chip value="svelte">Svelte</Chip>
                                </Group>
                              </Chip.Group>
                            </div>
                          </Stack>
                        </Card>
                        <Card withBorder>
                          <Title order={4} mb="md">Radio Group</Title>
                          <Radio.Group name="framework" label="Select your favorite framework">
                            <Stack mt="xs">
                              <Radio value="react" label="React" />
                              <Radio value="vue" label="Vue" />
                              <Radio value="angular" label="Angular" />
                              <Radio value="svelte" label="Svelte" />
                            </Stack>
                          </Radio.Group>
                        </Card>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Tabs.Panel>

                <Tabs.Panel value="components" pt="lg">
                  <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="md">
                    <Card withBorder>
                      <Title order={4} mb="md">Loading States</Title>
                      <Stack gap="md">
                        <Loader size="sm" />
                        <Loader size="md" type="dots" />
                        <Loader size="lg" type="bars" />
                        <Skeleton height={8} radius="xl" />
                        <Skeleton height={8} mt={6} radius="xl" />
                        <Skeleton height={8} mt={6} width="70%" radius="xl" />
                      </Stack>
                    </Card>

                    <Card withBorder>
                      <Title order={4} mb="md">Badges & Pills</Title>
                      <Stack gap="md">
                        <Group>
                          <Badge>Default</Badge>
                          <Badge color="red">Error</Badge>
                          <Badge color="green">Success</Badge>
                          <Badge color="yellow">Warning</Badge>
                        </Group>
                        <Group>
                          <Pill>React</Pill>
                          <Pill>TypeScript</Pill>
                          <Pill>Mantine</Pill>
                        </Group>
                      </Stack>
                    </Card>

                    <Card withBorder>
                      <Title order={4} mb="md">Accordion</Title>
                      <Accordion>
                        <Accordion.Item value="customization">
                          <Accordion.Control>Customization</Accordion.Control>
                          <Accordion.Panel>
                            Colors, fonts, shadows and many other parts are customizable to fit your design needs
                          </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="flexibility">
                          <Accordion.Control>Flexibility</Accordion.Control>
                          <Accordion.Panel>
                            Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
                          </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="focus-ring">
                          <Accordion.Control>No annoying focus ring</Accordion.Control>
                          <Accordion.Panel>
                            With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                    </Card>

                    <Card withBorder>
                      <Title order={4} mb="md">Navigation</Title>
                      <Stack gap="md">
                        <Breadcrumbs>
                          <Anchor href="#">Home</Anchor>
                          <Anchor href="#">Dashboard</Anchor>
                          <Text>Current Page</Text>
                        </Breadcrumbs>
                        <List>
                          <List.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</List.Item>
                          <List.Item>Praesent vestibulum molestie lacus id cursus.</List.Item>
                          <List.Item>Quisque tincidunt enim at urna facilisis, non fermentum ex pellentesque.</List.Item>
                          <List.Item>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</List.Item>
                        </List>
                      </Stack>
                    </Card>

                    <Card withBorder>
                      <Title order={4} mb="md">Menu & Tooltips</Title>
                      <Stack gap="md">
                        <Menu shadow="md" width={200}>
                          <Menu.Target>
                            <Button>Toggle menu</Button>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
                            <Menu.Item leftSection={<IconBell size={14} />}>Notifications</Menu.Item>
                            <Menu.Divider />
                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
                              Delete my account
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                        <Group>
                          <Tooltip label="This is a tooltip">
                            <Button variant="outline">Hover me</Button>
                          </Tooltip>
                          <Popover width={200} position="bottom" withArrow shadow="md">
                            <Popover.Target>
                              <Button>Toggle popover</Button>
                            </Popover.Target>
                            <Popover.Dropdown>
                              <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
                            </Popover.Dropdown>
                          </Popover>
                        </Group>
                      </Stack>
                    </Card>

                    <Card withBorder>
                      <Title order={4} mb="md">Social Icons</Title>
                      <Group>
                        <ActionIcon variant="filled" color="blue">
                          <IconBrandTwitter size={18} />
                        </ActionIcon>
                        <ActionIcon variant="filled" color="dark">
                          <IconBrandGithub size={18} />
                        </ActionIcon>
                        <ActionIcon variant="filled" color="blue">
                          <IconBrandLinkedin size={18} />
                        </ActionIcon>
                      </Group>
                    </Card>
                  </SimpleGrid>
                </Tabs.Panel>
              </Tabs>
            </Stack>
          </Container>
        </AppShell.Main>

        <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Sample Modal">
          <Text>This is a sample modal</Text>
          <Group justify="flex-end" mt="md">
            <Button variant="outline" onClick={() => setModalOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setModalOpened(false)}>
              Confirm
            </Button>
          </Group>
        </Modal>

        <Drawer opened={drawerOpened} onClose={() => setDrawerOpened(false)} title="Sample Drawer">
          <Text>This is a sample drawer component.</Text>
          <Stack gap="md" mt="md">
            <Button fullWidth>Action 1</Button>
            <Button fullWidth variant="outline">Action 2</Button>
            <Button fullWidth variant="light">Action 3</Button>
          </Stack>
        </Drawer>
      </AppShell>
    </>
  );
}
