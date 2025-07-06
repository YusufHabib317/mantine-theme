import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Center, Loader, Text, Stack } from '@mantine/core';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin');
  }, [router]);

  return (
    <Center h="100vh">
      <Stack align="center">
        <Loader size="lg" />
      </Stack>
    </Center>
  );
}
