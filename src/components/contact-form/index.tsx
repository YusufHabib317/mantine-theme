import { Card, Group, Stack, Switch, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import textInputClasses from '../../../styles/textInput.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: '',
      message: '',
      notifications: true,
      birthDate: null,
      country: null,
    });
  
    return (
        <Card withBorder shadow="sm">
          <Stack gap="md">
            <Group grow>
              <TextInput
                label="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                classNames={textInputClasses}
                placeholder=" "
              />
              <TextInput
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                classNames={textInputClasses}
                placeholder=" "
              />
            </Group>
    
            <TextInput
              label="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              classNames={textInputClasses}
              placeholder=" "
            />

            <TextInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              classNames={textInputClasses}
              placeholder=" "
            />

          </Stack>
        </Card>
    );
  }
  