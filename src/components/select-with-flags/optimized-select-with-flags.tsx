import { Select, SelectProps, Group, Text } from '@mantine/core';
import { memo, useMemo } from 'react';
import * as Flags from 'mantine-flagpack';
import { countries } from 'countries-list';

const FlagPack = memo(({ code }: { code: string }) => {
  const Flag =
    Flags[`${code}Flag` as keyof typeof Flags] as React.ComponentType<any>;
  return Flag ? (
    <Flag w={20} h={14} radius={2} style={{ marginLeft: 8, flexShrink: 0 }} />
  ) : null;
});
FlagPack.displayName = 'FlagPack';

const OptionRenderer = memo(
  ({ option }: { option: { value: string; label: string } }) => (
    <Group gap="sm" wrap="nowrap">
      <FlagPack code={option.value} />
      <Text size="sm" truncate style={{ flex: 1 }}>
        {option.label}
      </Text>
    </Group>
  )
);
OptionRenderer.displayName = 'OptionRenderer';

const CountryData = Object.keys(countries).map(code => ({
  value: code,
  name: countries[code as keyof typeof countries].name,
  phone: countries[code as keyof typeof countries].phone,
}));

interface SelectWithFlagsProps extends Omit<SelectProps, 'data'> {
  labelValue?: 'code' | 'name';
  priorityList?: string[];
  blackList?: string[];
  whiteList?: string[];
}

const SelectWithFlags = memo(
  ({
    labelValue = 'name',
    priorityList = [],
    blackList = [],
    whiteList,
    ...props
  }: SelectWithFlagsProps) => {
    const data = useMemo(() => {
      const base = CountryData.filter(c => {
        if (whiteList && !whiteList.includes(c.value)) return false;
        if (blackList.includes(c.value)) return false;
        return true;
      });

      const priority = priorityList
        .filter(code => base.some(c => c.value === code))
        .map(code => base.find(c => c.value === code)!);

      const others = base.filter(c => !priorityList.includes(c.value));

      return [...priority, ...others].map(c => ({
        value: c.value,
        label: labelValue === 'code' ? `+${c.phone}` : c.name,
      }));
    }, [labelValue, priorityList, blackList, whiteList]);

    const leftSection = props.value ? (
      <FlagPack code={props.value as string} />
    ) : null;

    return (
      <Select
        searchable
        limit={100}
        {...props}
        data={data}
        renderOption={({ option }) => <OptionRenderer option={option} />}
        leftSection={leftSection}
        styles={{
          input: props.value ? { paddingLeft: '2.5rem' } : undefined,
        }}
      />
    );
  }
);
SelectWithFlags.displayName = 'SelectWithFlags';

export default SelectWithFlags;
