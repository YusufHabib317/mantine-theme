import { Button, Card, Group, Stack, Title, ButtonProps } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import type { ComponentPropsWithoutRef } from 'react';

import buttonClasses from '../../../styles/button.module.css';
import { forwardRef, useRef } from 'react';

type RippleButtonProps = ButtonProps & ComponentPropsWithoutRef<'button'> & {
  disableRipple?: boolean;
};

export const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ disableRipple = false, classNames, onPointerDown, ...props }, ref) => {
    const localRef = useRef<HTMLButtonElement>(null);

    const handlePointerDown: React.PointerEventHandler<HTMLButtonElement> = (e) => {
      const btn =
        (typeof ref === 'function' ? undefined : ref?.current) ?? localRef.current;
      if (!btn) return;

      if (!disableRipple) {
        const rect   = btn.getBoundingClientRect();
        const size   = Math.max(rect.width, rect.height) * 2;
        const xPct   = ((e.clientX - rect.left) / rect.width)  * 100;
        const yPct   = ((e.clientY - rect.top)  / rect.height) * 100;

        const span   = document.createElement('span');
        span.className = buttonClasses.ripple;            
        span.style.left = `${xPct}%`;
        span.style.top  = `${yPct}%`;
        span.style.setProperty('--r-size', `${size}px`); 

        span.addEventListener('animationend', () => span.remove());
        btn.appendChild(span);
      }

      onPointerDown?.(e);
    };

    return (
      <Button
        {...props}
        ref={(node) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          localRef.current = node;
        }}
        onPointerDown={handlePointerDown}
        classNames={{ ...classNames, root: buttonClasses.root }}
      />
    );
  }
);
RippleButton.displayName = 'RippleButton';

export default function ButtonShowcase() {
    return (
      <Card withBorder shadow="sm">
        <Title order={3} mb="lg" c="material-grey.8">
          Button Variants
        </Title>
        
        <Stack gap="md">
          <Group>
            <RippleButton bg="material-green.5">Filled</RippleButton>
            <RippleButton color="material-green.5" variant="light" >Tonal</RippleButton>
            <RippleButton color="material-green.5" variant="outline">Outlined</RippleButton>
            <RippleButton color="material-green.5" variant="subtle">Text</RippleButton>
            <RippleButton color="material-green.5" rightSection={<IconShare size={16} />} variant="outline">
              Share
            </RippleButton>
          </Group>
        </Stack>
      </Card>
    );
  }
  