import {
  createTheme,
  Button,
  Card,
  TextInput,
  Modal,
  Notification,
  Select,
  PasswordInput,
  ColorInput,
  FileInput,
  Avatar,
  ActionIcon,
  Textarea,
  NumberInput,
  Radio,
  Slider,
  RangeSlider,
  Rating,
  Badge,
  Loader,
  Skeleton,
  Accordion,
  Drawer,
  Tooltip,
  Popover,
  Menu,
  SegmentedControl,
  Chip,
  Pill,
  Breadcrumbs,
  Anchor,
  List,
  Alert,
  Title,
  Text,
  Progress,
  Switch,
  Checkbox,
  Tabs,
  Paper,
  Group,
  Stack,
  Divider,
  ThemeIcon,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { Spotlight } from '@mantine/spotlight';

export const materialTheme = createTheme({
  fontFamily: 'Roboto Flex, Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
  primaryColor: 'md-primary',
  defaultRadius: 'md',
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px' },
  fontSizes: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' },
  lineHeights: { xs: '16px', sm: '20px', md: '24px', lg: '28px', xl: '32px' },
  colors: {
    'md-primary': [
      '#FFFBFE', '#F6EDFF', '#EADDFF', '#D0BCFF', '#B69DF8',
      '#9A82DB', '#7F67BE', '#6750A4', '#4F378B', '#381E72',
    ],
    'md-secondary': [
      '#FFFBFE', '#F3EDF7', '#E7E0EC', '#CAC4D0', '#B0A7C0',
      '#958DA5', '#7A7289', '#625B71', '#4A4458', '#332D41',
    ],
    'md-tertiary': [
      '#FFFBF9', '#F2EDF0', '#E6E0E9', '#CAC4D0', '#B0A7C0',
      '#958DA5', '#7A7289', '#625B71', '#4A4458', '#332D41',
    ],
    'md-error': [
      '#FFFBF9', '#FCEEEE', '#F9DEDC', '#F2B8B5', '#EC928E',
      '#E46962', '#BA1A1A', '#93000A', '#690005', '#410E0B',
    ],
    'md-surface': [
      '#FFFBFE', '#FEF7FF', '#F7F2FA', '#F3EDF7', '#E6E0E9',
      '#E0D9E2', '#CAC4D0', '#B0A7C0', '#958DA5', '#49454F',
    ],
  },
  other: {
    // Material Design 3 State Layers
    mdStateHover: 'rgba(103,80,164,0.08)',
    mdStateFocus: 'rgba(103,80,164,0.12)',
    mdStatePressed: 'rgba(103,80,164,0.16)',
    mdStateDragged: 'rgba(103,80,164,0.16)',

    // Material Design 3 Elevation System
    mdElevation0: 'none',
    mdElevation1: '0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)',
    mdElevation2: '0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)',
    mdElevation3: '0px 1px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)',
    mdElevation4: '0px 2px 3px 0px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15)',
    mdElevation5: '0px 4px 4px 0px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)',

    // Material Design 3 Motion
    mdMotionEmphasized: 'cubic-bezier(0.2, 0, 0, 1)',
    mdMotionStandard: 'cubic-bezier(0.2, 0, 0, 1)',
    mdMotionDecelerated: 'cubic-bezier(0, 0, 0, 1)',
    mdMotionAccelerated: 'cubic-bezier(0.3, 0, 1, 1)',

    // Material Design 3 Duration
    mdDurationShort1: '50ms',
    mdDurationShort2: '100ms',
    mdDurationShort3: '150ms',
    mdDurationShort4: '200ms',
    mdDurationMedium1: '250ms',
    mdDurationMedium2: '300ms',
    mdDurationMedium3: '350ms',
    mdDurationMedium4: '400ms',
    mdDurationLong1: '450ms',
    mdDurationLong2: '500ms',
    mdDurationLong3: '550ms',
    mdDurationLong4: '600ms',

    // Material Design 3 Surface Colors
    mdSurfaceDim: '#DDD8E1',
    mdSurfaceBright: '#FDF8FD',
    mdSurfaceContainerLowest: '#FFFFFF',
    mdSurfaceContainerLow: '#F7F2FA',
    mdSurfaceContainer: '#F3EDF7',
    mdSurfaceContainerHigh: '#ECE6F0',
    mdSurfaceContainerHighest: '#E6E0E9',
  },
  components: {
    Button: Button.extend({
      styles: (theme) => ({
        root: {
          borderRadius: 20,
          fontWeight: 500,
          fontSize: 14,
          letterSpacing: 0.1,
          minHeight: 40,
          padding: '10px 24px',
          position: 'relative',
          overflow: 'hidden',
          transition: `all ${theme.other.mdDurationShort4} ${theme.other.mdMotionStandard}`,
          textTransform: 'none',

          // State layer overlay
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'currentColor',
            opacity: 0,
            transition: `opacity ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,
            borderRadius: 'inherit',
          },

          // Hover states
          '&:hover::before': { opacity: 0.08 },
          '&:focus-visible::before': { opacity: 0.12 },
          '&:active::before': { opacity: 0.16 },

          // Filled variant (Primary button)
          '&[data-variant="filled"]': {
            backgroundColor: 'var(--mantine-color-md-primary-7)',
            color: 'white',
            boxShadow: theme.other.mdElevation1,
            border: 'none',

            '&:hover': {
              boxShadow: theme.other.mdElevation2,
              transform: 'translateY(-1px)',
            },
            '&:active': {
              boxShadow: theme.other.mdElevation1,
              transform: 'translateY(0)',
            },
            '&:disabled': {
              backgroundColor: 'rgba(29,27,32,0.12)',
              color: 'rgba(29,27,32,0.38)',
              boxShadow: 'none',
              transform: 'none',
            },
          },

          // Outlined variant (Secondary button)
          '&[data-variant="outline"]': {
            backgroundColor: 'transparent',
            color: 'var(--mantine-color-md-primary-7)',
            border: '1px solid var(--mantine-color-md-primary-7)',

            '&:hover': {
              backgroundColor: 'rgba(103,80,164,0.08)',
              borderColor: 'var(--mantine-color-md-primary-6)',
            },
            '&:disabled': {
              color: 'rgba(29,27,32,0.38)',
              borderColor: 'rgba(29,27,32,0.12)',
            },
          },

          // Text variant (Tertiary button)
          '&[data-variant="subtle"]': {
            backgroundColor: 'transparent',
            color: 'var(--mantine-color-md-primary-7)',
            border: 'none',

            '&:hover': {
              backgroundColor: 'rgba(103,80,164,0.08)',
            },
            '&:disabled': {
              color: 'rgba(29,27,32,0.38)',
            },
          },

          // Light variant (Tonal button)
          '&[data-variant="light"]': {
            backgroundColor: 'var(--mantine-color-md-secondary-2)',
            color: 'var(--mantine-color-md-primary-7)',
            border: 'none',

            '&:hover': {
              backgroundColor: 'var(--mantine-color-md-secondary-3)',
              boxShadow: theme.other.mdElevation1,
            },
            '&:disabled': {
              backgroundColor: 'rgba(29,27,32,0.12)',
              color: 'rgba(29,27,32,0.38)',
            },
          },
        },

        // Icon styling
        leftIcon: {
          marginRight: 8,
        },
        rightIcon: {
          marginLeft: 8,
        },
      }),
    }),

    Card: Card.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: theme.other.mdSurfaceContainer,
          borderRadius: 12,
          boxShadow: theme.other.mdElevation1,
          transition: `all ${theme.other.mdDurationMedium2} ${theme.other.mdMotionStandard}`,
          border: 'none',
          overflow: 'hidden',

          '&:hover': {
            boxShadow: theme.other.mdElevation2,
            transform: 'translateY(-2px)',
          },

          // Elevated card variant
          '&[data-variant="elevated"]': {
            backgroundColor: theme.other.mdSurfaceContainerLow,
            boxShadow: theme.other.mdElevation2,

            '&:hover': {
              boxShadow: theme.other.mdElevation3,
            },
          },

          // Filled card variant
          '&[data-variant="filled"]': {
            backgroundColor: theme.other.mdSurfaceContainerHighest,
            boxShadow: 'none',

            '&:hover': {
              boxShadow: theme.other.mdElevation1,
            },
          },

          // Outlined card variant
          '&[data-variant="outline"]': {
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            border: '1px solid var(--mantine-color-md-surface-4)',
            boxShadow: 'none',

            '&:hover': {
              borderColor: 'var(--mantine-color-md-surface-5)',
              boxShadow: theme.other.mdElevation1,
            },
          },
        },

        section: {
          padding: '16px 24px',

          '&:first-of-type': {
            paddingTop: 24,
          },
          '&:last-of-type': {
            paddingBottom: 24,
          },
        },
      }),
    }),

    TextInput: TextInput.extend({
      styles: (theme) => ({
        wrapper: {
          position: 'relative',
        },

        label: {
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          marginBottom: 4,
          letterSpacing: 0.4,
        },

        input: {
          borderRadius: 4,
          border: '1px solid #79747E',
          fontSize: 16,
          lineHeight: '24px',
          padding: '16px 30px',
          backgroundColor: theme.other.mdSurfaceContainerLowest,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&::placeholder': {
            color: 'rgba(73,69,79,0.6)',
            fontSize: 16,
          },

          '&:hover': {
            borderColor: '#49454F',
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-md-primary-7)',
            borderWidth: 2,
            outline: 0,
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            boxShadow: `0 0 0 1px var(--mantine-color-md-primary-7)`,
          },

          '&:disabled': {
            backgroundColor: 'rgba(29,27,32,0.04)',
            borderColor: 'rgba(29,27,32,0.12)',
            color: 'rgba(29,27,32,0.38)',
          },

          '&[data-invalid]': {
            borderColor: 'var(--mantine-color-md-error-6)',
            '&:focus': {
              borderColor: 'var(--mantine-color-md-error-6)',
              boxShadow: `0 0 0 1px var(--mantine-color-md-error-6)`,
            },
          },

          '&[data-with-left-section]': {
            paddingLeft: '44px',
          },
          '&[data-with-right-section]': {
            paddingRight: '44px',
          },
        },

        error: {
          fontSize: 12,
          color: 'var(--mantine-color-md-error-6)',
          marginTop: 4,
          letterSpacing: 0.4,
        },

        description: {
          fontSize: 12,
          color: 'rgba(73,69,79,0.8)',
          marginTop: 4,
          letterSpacing: 0.4,
        },
      }),
    }),

    Modal: Modal.extend({
      styles: (theme) => ({
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.32)',
          backdropFilter: 'blur(4px)',
        },

        content: {
          backgroundColor: theme.other.mdSurfaceContainerHigh,
          borderRadius: 28,
          boxShadow: theme.other.mdElevation3,
          maxWidth: 560,
          border: 'none',
          overflow: 'hidden',
        },

        header: {
          padding: '24px 24px 16px',
          backgroundColor: 'transparent',
          borderBottom: 'none',
        },

        title: {
          fontSize: 24,
          fontWeight: 400,
          color: 'var(--mantine-color-md-surface-9)',
          lineHeight: '32px',
        },

        body: {
          padding: '0 24px 24px',
          color: 'var(--mantine-color-md-surface-8)',
          fontSize: 16,
          lineHeight: '24px',
        },

        close: {
          color: 'var(--mantine-color-md-surface-7)',
          '&:hover': {
            backgroundColor: 'rgba(73,69,79,0.08)',
          },
        },
      }),
    }),

    Notification: Notification.extend({
      styles: {
        root: {
          backgroundColor: 'white',
          borderRadius: 12,
          color: '#1D1B20',
          padding: '12px 16px',
          boxShadow: 'var(--md-elevation-1)',
        },
      },
    }),

    Select: Select.extend({
      styles: (theme) => ({
        label: {
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          marginBottom: 4,
          letterSpacing: 0.4,
        },

        input: {
          borderRadius: 4,
          border: '1px solid #79747E',
          padding: '16px 30px',
          fontSize: 16,
          backgroundColor: theme.other.mdSurfaceContainerLowest,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            borderColor: '#49454F',
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-md-primary-7)',
            borderWidth: 2,
            outline: 0,
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            boxShadow: `0 0 0 1px var(--mantine-color-md-primary-7)`,
          },

          '&[data-with-left-section]': {
            paddingLeft: '44px',
          },
        },

        dropdown: {
          backgroundColor: theme.other.mdSurfaceContainer,
          border: 'none',
          borderRadius: 4,
          boxShadow: theme.other.mdElevation2,
          padding: 4,
        },

        option: {
          borderRadius: 4,
          padding: '12px 16px',
          fontSize: 16,
          color: 'var(--mantine-color-md-surface-9)',

          '&:hover': {
            backgroundColor: 'rgba(103,80,164,0.08)',
          },

          '&[data-selected]': {
            backgroundColor: 'var(--mantine-color-md-secondary-2)',
            color: 'var(--mantine-color-md-primary-7)',
          },
        },
      }),
    }),

    PasswordInput: PasswordInput.extend({
      styles: (theme) => ({
        label: {
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          marginBottom: 4,
          letterSpacing: 0.4,
        },

        input: {
          borderRadius: 4,
          border: '1px solid #79747E',
          padding: '16px 30px',
          fontSize: 16,
          backgroundColor: theme.other.mdSurfaceContainerLowest,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            borderColor: '#49454F',
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-md-primary-7)',
            borderWidth: 2,
            outline: 0,
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            boxShadow: `0 0 0 1px var(--mantine-color-md-primary-7)`,
          },

          '&[data-with-left-section]': {
            paddingLeft: '44px',
          },
        },

        visibilityToggle: {
          color: 'var(--mantine-color-md-surface-7)',
          '&:hover': {
            backgroundColor: 'rgba(73,69,79,0.08)',
          },
        },
      }),
    }),

    ColorInput: ColorInput.extend({
      styles: (theme) => ({
        label: {
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          marginBottom: 4,
          letterSpacing: 0.4,
        },

        input: {
          borderRadius: 4,
          border: '1px solid #79747E',
          padding: '16px 40px 16px 30px',
          fontSize: 16,
          backgroundColor: theme.other.mdSurfaceContainerLowest,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            borderColor: '#49454F',
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-md-primary-7)',
            borderWidth: 2,
            outline: 0,
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            boxShadow: `0 0 0 1px var(--mantine-color-md-primary-7)`,
          },

          '&[data-with-left-section]': {
            paddingLeft: '44px',
          },
        },
      }),
    }),

    FileInput: FileInput.extend({
      styles: (theme) => ({
        label: {
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          marginBottom: 4,
          letterSpacing: 0.4,
        },

        input: {
          borderRadius: 4,
          border: '1px solid #79747E',
          padding: '16px 40px 16px 30px',
          fontSize: 16,
          backgroundColor: theme.other.mdSurfaceContainerLowest,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            borderColor: '#49454F',
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-md-primary-7)',
            borderWidth: 2,
            outline: 0,
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            boxShadow: `0 0 0 1px var(--mantine-color-md-primary-7)`,
          },

          '&[data-with-left-section]': {
            paddingLeft: '44px',
          },
        },
      }),
    }),
    Avatar: Avatar.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: theme.other.mdSurfaceContainerHigh,
          borderRadius: '50%',
          border: '1px solid var(--mantine-color-md-surface-4)',
          color: 'var(--mantine-color-md-primary-7)',
          fontWeight: 500,
        },
      }),
    }),

    DatePickerInput: DatePickerInput.extend({
      styles: (theme) => ({
        label: {
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          marginBottom: 4,
          letterSpacing: 0.4,
        },

        input: {
          borderRadius: 4,
          border: '1px solid #79747E',
          padding: '16px 40px 16px 30px',
          fontSize: 16,
          backgroundColor: theme.other.mdSurfaceContainerLowest,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            borderColor: '#49454F',
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-md-primary-7)',
            borderWidth: 2,
            outline: 0,
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            boxShadow: `0 0 0 1px var(--mantine-color-md-primary-7)`,
          },

          '&[data-with-left-section]': {
            paddingLeft: '44px',
          },
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      styles: (theme) => ({
        root: {
          borderRadius: 20,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&[data-variant="filled"]': {
            backgroundColor: 'var(--mantine-color-md-primary-7)',
            color: 'white',

            '&:hover': {
              backgroundColor: 'var(--mantine-color-md-primary-6)',
              boxShadow: theme.other.mdElevation1,
            },
          },

          '&[data-variant="light"]': {
            backgroundColor: 'var(--mantine-color-md-secondary-2)',
            color: 'var(--mantine-color-md-primary-7)',

            '&:hover': {
              backgroundColor: 'var(--mantine-color-md-secondary-3)',
            },
          },

          '&[data-variant="outline"]': {
            backgroundColor: 'transparent',
            border: '1px solid var(--mantine-color-md-surface-4)',
            color: 'var(--mantine-color-md-surface-8)',

            '&:hover': {
              backgroundColor: 'rgba(73,69,79,0.08)',
              borderColor: 'var(--mantine-color-md-surface-5)',
            },
          },

          '&[data-variant="subtle"]': {
            backgroundColor: 'transparent',
            color: 'var(--mantine-color-md-surface-8)',

            '&:hover': {
              backgroundColor: 'rgba(73,69,79,0.08)',
            },
          },
        },
      }),
    }),

    Switch: Switch.extend({
      styles: (theme) => ({
        track: {
          backgroundColor: 'var(--mantine-color-md-surface-4)',
          border: '2px solid var(--mantine-color-md-surface-4)',
          borderRadius: 16,
          height: 28,
          width: 45,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&[data-checked]': {
            backgroundColor: 'var(--mantine-color-md-primary-7)',
            borderColor: 'var(--mantine-color-md-primary-7)',
          },
        },

        thumb: {
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '50%',
          height: 15,
          width: 15,
          boxShadow: theme.other.mdElevation1,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&[data-checked]': {
            backgroundColor: 'white',
          },
        },

        label: {
          fontSize: 16,
          color: 'var(--mantine-color-md-surface-9)',
          fontWeight: 400,
        },
      }),
    }),

    Checkbox: Checkbox.extend({
      styles: (theme) => ({
        input: {
          backgroundColor: 'transparent',
          border: '2px solid var(--mantine-color-md-surface-6)',
          borderRadius: 2,
          width: 18,
          height: 18,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:checked': {
            backgroundColor: 'var(--mantine-color-md-primary-7)',
            borderColor: 'var(--mantine-color-md-primary-7)',
          },

          '&:hover': {
            backgroundColor: 'rgba(103,80,164,0.08)',
          },
        },

        label: {
          fontSize: 16,
          color: 'var(--mantine-color-md-surface-9)',
          fontWeight: 400,
        },
      }),
    }),

    Textarea: Textarea.extend({
      styles: (theme) => ({
        wrapper: { position: 'relative' },

        label: {
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          marginBottom: 4,
          letterSpacing: 0.4,
        },

        input: {
          borderRadius: 4,
          border: '1px solid #79747E',
          fontSize: 16,
          lineHeight: '24px',
          minHeight: '80px',
          resize: 'vertical',
          padding: '16px',
          backgroundColor: theme.other.mdSurfaceContainerLowest,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&::placeholder': {
            color: 'rgba(73,69,79,0.6)',
            fontSize: 16,
          },

          '&:hover': {
            borderColor: '#49454F',
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-md-primary-7)',
            borderWidth: 2,
            outline: 0,
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            boxShadow: `0 0 0 1px var(--mantine-color-md-primary-7)`,
          },

          '&:disabled': {
            backgroundColor: 'rgba(29,27,32,0.04)',
            borderColor: 'rgba(29,27,32,0.12)',
            color: 'rgba(29,27,32,0.38)',
          },
        },
      }),
    }),

    NumberInput: NumberInput.extend({
      styles: (theme) => ({
        wrapper: { position: 'relative' },

        label: {
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          marginBottom: 4,
          letterSpacing: 0.4,
        },

        input: {
          borderRadius: 4,
          border: '1px solid #79747E',
          fontSize: 16,
          lineHeight: '24px',
          padding: '16px 40px 16px 16px',
          backgroundColor: theme.other.mdSurfaceContainerLowest,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            borderColor: '#49454F',
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-md-primary-7)',
            borderWidth: 2,
            outline: 0,
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            boxShadow: `0 0 0 1px var(--mantine-color-md-primary-7)`,
          },

          '&:disabled': {
            backgroundColor: 'rgba(29,27,32,0.04)',
            borderColor: 'rgba(29,27,32,0.12)',
            color: 'rgba(29,27,32,0.38)',
          },
        },

        controls: {
          borderRadius: 4,
        },

        control: {
          backgroundColor: 'transparent',
          border: 'none',
          color: 'var(--mantine-color-md-surface-7)',

          '&:hover': {
            backgroundColor: 'rgba(73,69,79,0.08)',
          },

          '&:disabled': {
            color: 'rgba(29,27,32,0.38)',
          },
        },
      }),
    }),

    Radio: Radio.extend({
      styles: (theme) => ({
        radio: {
          backgroundColor: 'var(--mantine-color-md-primary-6)',
          border: '2px solid var(--mantine-color-md-surface-6)',
          borderRadius: '50%',
          width: 20,
          height: 20,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:checked': {
            backgroundColor: 'var(--mantine-color-md-primary-7)',
            borderColor: 'var(--mantine-color-md-primary-7)',
          },

          '&:hover': {
            backgroundColor: 'rgba(103,80,164,0.08)',
          },
        },

        label: {
          fontSize: 16,
          color: 'var(--mantine-color-md-surface-9)',
          fontWeight: 400,
        },
      }),
    }),

    Text: Text.extend({
      styles: {
        root: {
          fontSize: 16,
          lineHeight: '24px',
          color: '#1D1B20',
        },
      },
    }),

    Title: Title.extend({
      styles: {
        root: {
          color: '#1D1B20',
          fontWeight: 400,
        },
      },
    }),

    Alert: Alert.extend({
      styles: {
        root: {
          borderRadius: 12,
          backgroundColor: 'var(--mantine-color-md-secondary-1)',
          border: '1px solid var(--mantine-color-md-secondary-3)',
        },
        title: { fontWeight: 500, color: '#1D1B20' },
      },
    }),

    Badge: Badge.extend({
      styles: () => ({
        root: {
          borderRadius: 16,
          backgroundColor: 'var(--mantine-color-md-secondary-2)',
          color: 'var(--mantine-color-md-primary-7)',
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: 0.5,
          padding: '4px 8px',
          height: 'auto',
          minHeight: 24,

          '&[data-variant="filled"]': {
            backgroundColor: 'var(--mantine-color-md-primary-7)',
            color: 'white',
          },

          '&[data-variant="outline"]': {
            backgroundColor: 'transparent',
            border: '1px solid var(--mantine-color-md-surface-4)',
            color: 'var(--mantine-color-md-surface-8)',
          },

          '&[data-variant="light"]': {
            backgroundColor: 'var(--mantine-color-md-secondary-1)',
            color: 'var(--mantine-color-md-primary-7)',
          },
        },
      }),
    }),

    Slider: Slider.extend({
      styles: (theme) => ({
        track: {
          backgroundColor: 'var(--mantine-color-md-secondary-3)',
          height: 4,
          borderRadius: 2,
        },

        bar: {
          backgroundColor: 'var(--mantine-color-md-primary-7)',
          borderRadius: 2,
        },

        thumb: {
          backgroundColor: 'var(--mantine-color-md-primary-7)',
          border: 'none',
          width: 20,
          height: 20,
          borderRadius: '50%',
          boxShadow: theme.other.mdElevation1,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            boxShadow: theme.other.mdElevation2,
            transform: 'scale(1.1)',
          },
        },

        label: {
          backgroundColor: 'var(--mantine-color-md-surface-8)',
          color: 'white',
          fontSize: 12,
          fontWeight: 500,
          borderRadius: 4,
          padding: '4px 8px',
        },
      }),
    }),

    RangeSlider: RangeSlider.extend({
      styles: (theme) => ({
        track: {
          backgroundColor: 'var(--mantine-color-md-secondary-3)',
          height: 4,
          borderRadius: 2,
        },

        bar: {
          backgroundColor: 'var(--mantine-color-md-primary-7)',
          borderRadius: 2,
        },

        thumb: {
          backgroundColor: 'var(--mantine-color-md-primary-7)',
          border: 'none',
          width: 20,
          height: 20,
          borderRadius: '50%',
          boxShadow: theme.other.mdElevation1,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            boxShadow: theme.other.mdElevation2,
            transform: 'scale(1.1)',
          },
        },

        label: {
          backgroundColor: 'var(--mantine-color-md-surface-8)',
          color: 'white',
          fontSize: 12,
          fontWeight: 500,
          borderRadius: 4,
          padding: '4px 8px',
        },
      }),
    }),

    Rating: Rating.extend({
      styles: (theme) => ({
        symbolBody: {
          color: '#FFB000',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      }),
    }),

    Progress: Progress.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: 'var(--mantine-color-md-secondary-2)',
          borderRadius: 2,
          height: 4,
          overflow: 'hidden',
        },

        bar: {
          backgroundColor: 'var(--mantine-color-md-primary-7)',
          borderRadius: 2,
          transition: `all ${theme.other.mdDurationMedium2} ${theme.other.mdMotionStandard}`,
        },
      }),
    }),

    Loader: Loader.extend({
      styles: () => ({
        root: {
          color: 'var(--mantine-color-md-primary-7)',
        },
      }),
    }),

    Skeleton: Skeleton.extend({
      styles: () => ({
        root: {
          backgroundColor: 'var(--mantine-color-md-secondary-2)',
          borderRadius: 4,

          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(29,27,32,0.1), transparent)',
            animation: 'skeleton-loading 1.5s ease-in-out infinite',
          },
        },
      }),
    }),

    Tabs: Tabs.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: 'transparent',
        },

        list: {
          borderBottom: '1px solid var(--mantine-color-md-surface-4)',
          backgroundColor: 'transparent',
        },

        tab: {
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: 0,
          color: 'var(--mantine-color-md-surface-7)',
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: 0.1,
          padding: '12px 16px',
          position: 'relative',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            backgroundColor: 'rgba(103,80,164,0.08)',
            color: 'var(--mantine-color-md-primary-7)',
          },

          '&[data-active]': {
            color: 'var(--mantine-color-md-primary-7)',
            backgroundColor: 'transparent',

            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              backgroundColor: 'var(--mantine-color-md-primary-7)',
              borderRadius: '3px 3px 0 0',
            },
          },
        },

        panel: {
          padding: '24px 0',
          color: 'var(--mantine-color-md-surface-9)',
          fontSize: 16,
          lineHeight: '24px',
        },
      }),
    }),

    SegmentedControl: SegmentedControl.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: 'var(--mantine-color-md-secondary-2)',
          borderRadius: 20,
          padding: 4,
          border: 'none',
        },

        control: {
          borderRadius: 16,
          fontWeight: 500,
          fontSize: 14,
          color: 'var(--mantine-color-md-surface-8)',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            backgroundColor: 'rgba(103,80,164,0.08)',
          },

          '&[data-active]': {
            backgroundColor: 'var(--mantine-color-md-primary-7)',
            color: 'white',
            boxShadow: theme.other.mdElevation1,
          },
        },
      }),
    }),

    Chip: Chip.extend({
      styles: (theme) => ({
        root: {
          borderRadius: 8,
          border: '1px solid var(--mantine-color-md-secondary-4)',
          backgroundColor: 'transparent',
          fontSize: 14,
          color: 'var(--mantine-color-md-surface-8)',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            backgroundColor: 'rgba(103,80,164,0.08)',
            borderColor: 'var(--mantine-color-md-primary-7)',
          },

          '&[data-checked]': {
            backgroundColor: 'var(--mantine-color-md-secondary-2)',
            borderColor: 'var(--mantine-color-md-primary-7)',
            color: 'var(--mantine-color-md-primary-7)',
          },
        },
      }),
    }),

    Pill: Pill.extend({
      styles: () => ({
        root: {
          borderRadius: 16,
          backgroundColor: 'var(--mantine-color-md-secondary-2)',
          color: 'var(--mantine-color-md-primary-7)',
          fontSize: 12,
          fontWeight: 500,
          padding: '4px 12px',
          height: 'auto',
          minHeight: 24,
          letterSpacing: 0.5,
        },
      }),
    }),

    Paper: Paper.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: theme.other.mdSurfaceContainer,
          borderRadius: 12,
          border: 'none',

          '&[data-variant="elevated"]': {
            boxShadow: theme.other.mdElevation2,
            backgroundColor: theme.other.mdSurfaceContainerLow,
          },

          '&[data-variant="outline"]': {
            backgroundColor: theme.other.mdSurfaceContainerLowest,
            border: '1px solid var(--mantine-color-md-surface-4)',
          },
        },
      }),
    }),

    ThemeIcon: ThemeIcon.extend({
      styles: (theme) => ({
        root: {
          borderRadius: 20,
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&[data-variant="filled"]': {
            backgroundColor: 'var(--mantine-color-md-primary-7)',
            color: 'white',
          },

          '&[data-variant="light"]': {
            backgroundColor: 'var(--mantine-color-md-secondary-2)',
            color: 'var(--mantine-color-md-primary-7)',
          },

          '&[data-variant="outline"]': {
            backgroundColor: 'transparent',
            border: '1px solid var(--mantine-color-md-surface-4)',
            color: 'var(--mantine-color-md-surface-8)',
          },
        },
      }),
    }),

    Divider: Divider.extend({
      styles: () => ({
        root: {
          borderColor: 'var(--mantine-color-md-surface-4)',
        },

        label: {
          color: 'var(--mantine-color-md-surface-7)',
          fontSize: 14,
          fontWeight: 500,
        },
      }),
    }),

    Accordion: Accordion.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: 'transparent',
        },

        item: {
          backgroundColor: theme.other.mdSurfaceContainer,
          borderRadius: 12,
          border: 'none',
          marginBottom: 8,
          overflow: 'hidden',
        },

        control: {
          backgroundColor: 'transparent',
          fontSize: 16,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-9)',
          padding: '16px 20px',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            backgroundColor: 'rgba(103,80,164,0.08)',
          },

          '&[data-active]': {
            color: 'var(--mantine-color-md-primary-7)',
          },
        },

        panel: {
          backgroundColor: 'transparent',
          fontSize: 16,
          color: 'var(--mantine-color-md-surface-8)',
          lineHeight: '24px',
        },

        content: {
          padding: '0 20px 16px',
        },
      }),
    }),

    Drawer: Drawer.extend({
      styles: (theme) => ({
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.32)',
          backdropFilter: 'blur(4px)',
        },

        content: {
          backgroundColor: theme.other.mdSurfaceContainerHigh,
          borderRadius: '28px 0 0 28px',
          border: 'none',
        },

        header: {
          backgroundColor: 'transparent',
          borderBottom: '1px solid var(--mantine-color-md-surface-4)',
          padding: '24px',
        },

        title: {
          fontSize: 24,
          fontWeight: 400,
          color: 'var(--mantine-color-md-surface-9)',
        },

        body: {
          padding: '24px',
          color: 'var(--mantine-color-md-surface-8)',
        },
      }),
    }),

    Tooltip: Tooltip.extend({
      styles: (theme) => ({
        tooltip: {
          backgroundColor: 'var(--mantine-color-md-surface-8)',
          color: 'white',
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 500,
          padding: '8px 12px',
          boxShadow: theme.other.mdElevation2,
        },
      }),
    }),

    Popover: Popover.extend({
      styles: (theme) => ({
        dropdown: {
          backgroundColor: theme.other.mdSurfaceContainer,
          borderRadius: 12,
          boxShadow: theme.other.mdElevation2,
          border: 'none',
          padding: 8,
        },
      }),
    }),

    Menu: Menu.extend({
      styles: (theme) => ({
        dropdown: {
          backgroundColor: theme.other.mdSurfaceContainer,
          borderRadius: 4,
          boxShadow: theme.other.mdElevation2,
          border: 'none',
          padding: 4,
        },

        item: {
          fontSize: 16,
          borderRadius: 4,
          color: 'var(--mantine-color-md-surface-9)',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            backgroundColor: 'rgba(103,80,164,0.08)',
          },

          '&[data-selected]': {
            backgroundColor: 'var(--mantine-color-md-secondary-2)',
            color: 'var(--mantine-color-md-primary-7)',
          },
        },

        label: {
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--mantine-color-md-surface-7)',
          padding: '8px 12px 4px',
        },

        divider: {
          borderColor: 'var(--mantine-color-md-surface-4)',
          margin: '4px 0',
        },
      }),
    }),

    Breadcrumbs: Breadcrumbs.extend({
      styles: () => ({
        root: {
          fontSize: 14,
          color: 'var(--mantine-color-md-surface-7)',
        },

        separator: {
          color: 'var(--mantine-color-md-surface-6)',
        },
      }),
    }),

    Anchor: Anchor.extend({
      styles: (theme) => ({
        root: {
          color: 'var(--mantine-color-md-primary-7)',
          fontSize: 16,
          textDecoration: 'none',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            textDecoration: 'underline',
            color: 'var(--mantine-color-md-primary-6)',
          },

          '&:visited': {
            color: 'var(--mantine-color-md-primary-8)',
          },
        },
      }),
    }),

    List: List.extend({
      styles: () => ({
        root: {
          fontSize: 16,
          color: 'var(--mantine-color-md-surface-9)',
          lineHeight: '24px',
        },

        item: {
          fontSize: 16,
          padding: '4px 0',

          '&::marker': {
            color: 'var(--mantine-color-md-primary-7)',
          },
        },
      }),
    }),

    Spotlight: Spotlight.extend({
      styles: (theme) => ({
        root: {
          '--spotlight-radius': '28px',
        },

        overlay: {
          background: 'rgba(0,0,0,0.32)',
          backdropFilter: 'blur(4px)',
        },

        content: {
          background: theme.other.mdSurfaceContainerHigh,
          border: 'none',
          borderRadius: 28,
          boxShadow: theme.other.mdElevation3,
          overflow: 'hidden',
        },

        search: {
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid var(--mantine-color-md-surface-4)',
          borderRadius: 0,
          color: 'var(--mantine-color-md-surface-9)',
          fontSize: 16,
          fontWeight: 400,
          padding: '40px',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&::placeholder': {
            color: 'var(--mantine-color-md-surface-7)',
          },

          '&:focus': {
            borderBottomColor: 'var(--mantine-color-md-primary-7)',
            boxShadow: 'none',
            background: 'rgba(103,80,164,0.04)',
          },
        },

        actionsList: {
          background: 'transparent',
          padding: '8px 0 16px',
          maxHeight: '400px',
          overflowY: 'auto',

          '&::-webkit-scrollbar': {
            width: '8px',
          },

          '&::-webkit-scrollbar-track': {
            background: 'var(--mantine-color-md-surface-2)',
            borderRadius: 4,
          },

          '&::-webkit-scrollbar-thumb': {
            background: 'var(--mantine-color-md-surface-5)',
            borderRadius: 4,

            '&:hover': {
              background: 'var(--mantine-color-md-surface-6)',
            },
          },
        },

        action: {
          background: 'transparent',
          border: 'none',
          borderRadius: 12,
          color: 'var(--mantine-color-md-surface-9)',
          margin: '2px 16px',
          padding: '12px 16px',
          transition: `all ${theme.other.mdDurationShort3} ${theme.other.mdMotionStandard}`,

          '&:hover': {
            background: 'rgba(103,80,164,0.08)',
          },

          '&[data-selected]': {
            background: 'var(--mantine-color-md-secondary-2)',
            color: 'var(--mantine-color-md-primary-7)',
          },
        },

        actionLabel: {
          color: 'inherit',
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '24px',
        },

        actionDescription: {
          color: 'var(--mantine-color-md-surface-7)',
          fontSize: 14,
          lineHeight: '20px',
          marginTop: 2,
        },

        actionSection: {
          color: 'var(--mantine-color-md-primary-7)',

          '& svg': {
            width: 24,
            height: 24,
          },
        },
      }),
    }),
  },
});
