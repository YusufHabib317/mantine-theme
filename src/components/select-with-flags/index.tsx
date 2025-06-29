import { Select, SelectProps, Group, Text } from '@mantine/core';
import { useMemo } from 'react';
import * as Flags from 'mantine-flagpack';
import { countries } from 'countries-list';
import styles from '../../../styles/select.module.css';

const FlagPack = ({ code }: { code: string }) => {
  const Flag = Flags[`${code}Flag` as keyof typeof Flags] as React.ComponentType<any>;
  return Flag ? (
    <Flag w={24} h={16} radius={3} style={{marginLeft: 10}}/>
  ) : (
    null
  );
};

interface SelectWithFlagsProps extends Omit<SelectProps, 'data'> {
  labelValue?: 'code' | 'name';
  priorityList?: string[];
  blackList?: string[];
  whiteList?: string[];
}

export default function SelectWithFlags({
  labelValue = 'name',
  priorityList = [],
  blackList = [],
  whiteList,
  ...props
}: SelectWithFlagsProps) {
  const data = useMemo(() => {
    let countryCodes = Object.keys(countries);

    if (whiteList) countryCodes = countryCodes.filter(code => whiteList.includes(code));
    if (blackList.length) countryCodes = countryCodes.filter(code => !blackList.includes(code));

    const priority = priorityList.filter(code => countryCodes.includes(code));
    const others = countryCodes.filter(code => !priorityList.includes(code));

    return [...priority, ...others].map(code => {
      const country = countries[code as keyof typeof countries];
      return {
        value: code,
        label: labelValue === 'code' ? `+${country.phone}` : country.name
      };
    });
  }, [labelValue, priorityList, blackList, whiteList]);

  return (
    <Select
      searchable
      {...props}
      data={data}
      classNames={{
        input: props.value ? styles.input : undefined
      }}
      styles={{
        input: props.value ? { paddingLeft: '2.5rem' } : undefined
      }}
      renderOption={({ option }) => (
        <Group gap="sm">
          <FlagPack code={option.value} />
          <Text size="sm">{option.label}</Text>
        </Group>
      )}
      leftSection={props.value ? <FlagPack code={props.value as string} /> : null}
    />
  );
}
