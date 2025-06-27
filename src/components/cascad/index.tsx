import { Box, Group, Menu, Text, Button, UnstyledButton, Divider, useMantineTheme, useComputedColorScheme } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export interface CascaderOption {
  label: string;
  value: string;
  children?: CascaderOption[];
}

interface CustomCascaderProps {
  options: CascaderOption[];
  onChange?: (valuePath: string[], selected: { label: string; value: string }) => void;
  children?: React.ReactNode;
}

export default function CustomCascader({ options, onChange, children }: CustomCascaderProps) {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [buttonLabel, setButtonLabel] = useState<string>("Choose location");
  const [rootOpened, setRootOpened] = useState(false);
  const [activePath, setActivePath] = useState<string[]>([]);

  useEffect(() => {
    if (rootOpened && selectedPath.length) {
      setActivePath(selectedPath.slice(0, -1));
    }
  }, [rootOpened]);    

  const handleSelect = (value: string, label: string, path: string[]) => {
    const fullPath = [...path, value];
    setSelectedPath(fullPath);
    setButtonLabel(label);
    onChange && onChange(fullPath, { label, value });
    setRootOpened(false);
    setActivePath([]);
  };

  const handleItemClick = (value: string, path: string[], hasChildren: boolean) => {
    if (hasChildren) {
      const newPath = [...path, value];
      setActivePath(newPath);
    } else {
      handleSelect(value, getItemLabel(value, path), path);
    }
  };

  const getItemLabel = (value: string, path: string[]): string => {
    const items = getItemsByPath(path);
    const item = items.find(item => item.value === value);
    return item ? item.label : value;
  };

  const handleRootClose = () => {
    setRootOpened(false);
    setActivePath([]);
  };

  const getItemsByPath = (path: string[]): CascaderOption[] => {
    if (path.length === 0) return options;
    
    let current = options;
    for (const value of path) {
      const item = current.find(item => item.value === value);
      if (item && item.children) {
        current = item.children;
      } else {
        return [];
      }
    }
    return current;
  };

  const getColumns = () => {
    const columns: CascaderOption[][] = [];
    columns.push(options);
    
    for (let i = 0; i < activePath.length; i++) {
      const pathToHere = activePath.slice(0, i + 1);
      const children = getItemsByPath(pathToHere);
      if (children.length > 0) {
        columns.push(children);
      }
    }
    
    return columns;
  };

  const renderColumn = (items: CascaderOption[], columnIndex: number) => {
    const currentPath = activePath.slice(0, columnIndex);
    
    return (
      <Box
        key={columnIndex}
        style={{
          minWidth: '120px',
          width: '120px',
          borderRight: columnIndex < getColumns().length - 1 ? `1px solid ${theme.colors.gray[colorScheme === 'dark' ? 6 : 2]}` : 'none',
          flexShrink: 0,
        }}
      >
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isActive = activePath[columnIndex] === item.value;
          const isSelected = selectedPath[columnIndex] === item.value;
          
          return (
            <UnstyledButton
              key={item.value}
              onClick={() => handleItemClick(item.value, currentPath, hasChildren ?? false)}
              style={{
                width: '100%',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '14px',
                color: isSelected 
                  ? theme.colors.blue[colorScheme === 'dark' ? 4 : 6]
                  : colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.gray[7],
                backgroundColor: isActive 
                  ? (colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[0])
                  : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                borderRadius: '4px',
                margin: '1px 4px',
                fontWeight: isSelected ? 500 : 400,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = colorScheme === 'dark' 
                    ? theme.colors.gray[8] 
                    : theme.colors.gray[0];
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Text size="sm" style={{ fontWeight: 'inherit' }}>
                {item.label}
              </Text>
              {hasChildren && (
                <IconChevronRight 
                  size={14} 
                  style={{ 
                    color: theme.colors.gray[colorScheme === 'dark' ? 5 : 4],
                    opacity: 0.7
                  }} 
                />
              )}
            </UnstyledButton>
          );
        })}
      </Box>
    );
  };

  return (
    <Menu
      shadow="md"
      withinPortal
      position="bottom-start"
      offset={4}
      opened={rootOpened}
      onChange={setRootOpened}
      onClose={handleRootClose}
      closeOnItemClick={false}
      closeOnClickOutside={true}
    >
      <Menu.Target>
        {children ?? (
          <Button
            variant="outline"
            onClick={() => setRootOpened((o) => !o)}
          >
            {buttonLabel}
          </Button>
        )}
      </Menu.Target>
      <Menu.Dropdown
        style={{
          border: `1px solid ${theme.colors.gray[colorScheme === 'dark' ? 6 : 3]}`,
          borderRadius: "6px",
          padding: "8px 0",
          minWidth: 'auto',
          boxShadow: colorScheme === 'dark' 
            ? '0 4px 12px rgba(0, 0, 0, 0.4)' 
            : '0 4px 12px rgba(0, 0, 0, 0.15)',
          backgroundColor: colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        }}
      >
        <Box style={{ maxHeight: '280px', overflowY: 'auto', overflowX: 'hidden' }}>
          <Group align="flex-start" gap={0} wrap="nowrap" style={{ width: 'fit-content' }}>
            {getColumns().map((column, index) => renderColumn(column, index))}
          </Group>
        </Box>
        
        {/* Show selected path at top */}
        {(selectedPath.length > 0 || activePath.length > 0) && (
          <>
            <Divider my="xs" />
            <Box px="sm" py="xs">
              <Text size="xs" c="dimmed">
                {activePath.length > 0 ? activePath.join(' / ') : selectedPath.join(' / ')}
              </Text>
            </Box>
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}