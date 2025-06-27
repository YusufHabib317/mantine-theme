import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";

export default function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };

  return (
    <ActionIcon
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
      onClick={toggleColorScheme}
    >
      {computedColorScheme === "light" ? (
        <IconMoonFilled stroke={1.5} />
      ) : (
        <IconSunFilled stroke={1.5} />
      )}
    </ActionIcon>
  );
} 