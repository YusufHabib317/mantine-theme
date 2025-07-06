import {
  createTheme,
  Button,
  Card,
  TextInput,
  Modal,
  Progress,
  Tabs,
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
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { Spotlight } from '@mantine/spotlight';

export const windows95Theme = createTheme({
  fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", Tahoma, sans-serif',
  primaryColor: 'win95-blue',
  defaultRadius: 0,
  spacing: { xs: '2px', sm: '4px', md: '8px', lg: '12px', xl: '16px' },
  breakpoints: { xs: '30em', sm: '48em', md: '64em', lg: '74em', xl: '90em' },
  colors: {
    'win95-blue': [
      '#E6F3FF', '#CCE7FF', '#99CFFF', '#66B7FF', '#339FFF',
      '#0087FF', '#006FCC', '#005799', '#003F66', '#002733',
    ],
    'win95-gray': [
      '#FFFFFF', '#F8F8F8', '#F0F0F0', '#E8E8E8', '#E0E0E0',
      '#C0C0C0', '#A0A0A0', '#808080', '#404040', '#000000',
    ],
    'win95-green': [
      '#F0FFF0', '#E0FFE0', '#C0FFC0', '#80FF80', '#40FF40',
      '#00FF00', '#00E000', '#00C000', '#008000', '#004000',
    ],
    'win95-red': [
      '#FFF0F0', '#FFE0E0', '#FFC0C0', '#FF8080', '#FF4040',
      '#FF0000', '#E00000', '#C00000', '#800000', '#400000',
    ],
  },
  other: {
    win95BorderRaised: '2px outset #C0C0C0',
    win95BorderSunken: '2px inset #C0C0C0',
    win95Shadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
  },
  components: {
    Button: Button.extend({
      styles: {
        root: {
          border: '2px outset var(--mantine-color-gray-5)',
          backgroundColor: 'var(--mantine-color-gray-5)',
          color: 'black',
          fontFamily: 'inherit',
          fontSize: 11,
          padding: '4px 10px',
          minHeight: 21,
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
          userSelect: 'none',
          '&:hover': { backgroundColor: 'var(--mantine-color-gray-5)' },
          '&:active': {
            border: '2px inset var(--mantine-color-gray-5)',
            boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
            transform: 'translate(1px,1px)',
          },
          '&[data-disabled]': {
            color: '#808080',
            textShadow: '1px 1px 0 #FFFFFF',
          },
          '&[data-variant="filled"]': {
            backgroundColor: 'var(--mantine-color-blue-6)',
            borderColor: 'var(--mantine-color-blue-6)',
          },
        },
      },
    }),

    Card: Card.extend({
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          padding: 8,
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        },
      },
    }),

    TextInput: TextInput.extend({
      styles: {
        input: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: '2px 40px',
          fontFamily: 'inherit',
          fontSize: 11,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          '&:focus-visible': {
            outline: '1px dotted black',
            outlineOffset: -3,
          },
        },
        label: { fontSize: 11, marginBottom: 2 },
        section: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        },
      },
    }),

    Modal: Modal.extend({
      styles: {
        content: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          boxShadow: '4px 4px 8px rgba(0,0,0,0.5)',
          overflow: 'hidden',
        },
        header: {
          background: 'linear-gradient(90deg,#0087FF 0%,#006FCC 100%)',
          padding: '2px 4px',
          fontSize: 11,
          fontWeight: 'bold',
          color: 'white',
          borderBottom: '1px solid #004080',
        },
        close: {
          backgroundColor: 'var(--mantine-color-gray-5)',
          border: '1px outset #C0C0C0',
          width: 16,
          height: 14,
          fontSize: 10,
          '&:active': { borderStyle: 'inset' },
        },
      },
    }),

    Progress: Progress.extend({
      styles: {
        root: { border: '2px inset #C0C0C0', height: 20 },
      },
    }),

    Tabs: Tabs.extend({
      styles: {
        tab: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          borderBottom: 0,
          fontSize: 11,
          padding: '4px 12px',
          '&[data-active]': {
            backgroundColor: 'white',
            borderBottom: '2px solid white',
            zIndex: 1,
            marginBottom: -2,
          },
        },
        panel: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: 8,
        },
      },
    }),

    Notification: Notification.extend({
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          color: 'black',
          fontFamily: 'inherit',
          fontSize: 11,
          padding: '6px 8px',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        },
      },
    }),

    Select: Select.extend({
      styles: {
        input: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: '2px 4px',
          fontFamily: 'inherit',
          fontSize: 11,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          '&[data-with-left-section]': {
            paddingLeft: '28px',
          },
        },
      },
    }),
    PasswordInput: PasswordInput.extend({
      styles: {
        input: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: '2px 4px',
          fontFamily: 'inherit',
          fontSize: 11,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          '&[data-with-left-section]': {
            paddingLeft: '28px',
          },
        },
      },
    }),
    ColorInput: ColorInput.extend({
      styles: {
        input: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: '2px 30px',
          fontFamily: 'inherit',
          fontSize: 11,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          '&[data-with-left-section]': {
            paddingLeft: '28px',
          },
        },
      },
    }),
    FileInput: FileInput.extend({
      styles: {
        input: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: '2px 25px',
          fontFamily: 'inherit',
          fontSize: 11,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          '&[data-with-left-section]': {
            paddingLeft: '28px',
          },
        },
      },
    }),
    Avatar: Avatar.extend({
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        },
      },
    }),
    DatePickerInput: DatePickerInput.extend({
      styles: {
        input: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: '2px 30px',
          fontFamily: 'inherit',
          fontSize: 11,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          '&[data-with-left-section]': {
            paddingLeft: '28px',
          },
        },
      },
    }),
    ActionIcon: ActionIcon.extend({
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          color: 'black',
          '&:hover': { backgroundColor: 'var(--mantine-color-gray-5)' },
          '&:active': {
            border: '2px inset var(--mantine-color-gray-5)',
            transform: 'translate(1px,1px)',
          },
        },
      },
    }),

    Textarea: Textarea.extend({
      styles: {
        input: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: '2px 4px',
          fontFamily: 'inherit',
          fontSize: 11,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          minHeight: '60px',
          resize: 'vertical',
        },
        label: { fontSize: 11, marginBottom: 2 },
      },
    }),

    NumberInput: NumberInput.extend({
      styles: {
        input: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          padding: '2px 4px',
          fontFamily: 'inherit',
          fontSize: 11,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
        },
        label: { fontSize: 11, marginBottom: 2 },
        controls: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
        },
      },
    }),

    Radio: Radio.extend({
      styles: {
        radio: {
          border: '2px inset #C0C0C0',
          '&:checked': {
            backgroundColor: 'white',
            borderColor: '#C0C0C0',
          },
        },
        label: { fontSize: 11 },
      },
    }),

    Text: Text.extend({
      styles: {
        root: {
          fontSize: 11,
          fontFamily: 'inherit',
          color: 'black',
        },
      },
    }),

    Title: Title.extend({
      styles: {
        root: {
          fontFamily: 'inherit',
          color: 'black',
          fontWeight: 'bold',
        },
      },
    }),

    Alert: Alert.extend({
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          fontSize: 11,
          fontFamily: 'inherit',
        },
        title: { fontSize: 11, fontWeight: 'bold' },
      },
    }),

    Badge: Badge.extend({
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          color: 'black',
          fontSize: 10,
          fontFamily: 'inherit',
          padding: '2px 6px',
        },
      },
    }),

    Slider: Slider.extend({
      styles: {
        track: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          height: 6,
        },
        thumb: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          width: 16,
          height: 16,
        },
      },
    }),

    RangeSlider: RangeSlider.extend({
      styles: {
        track: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          height: 6,
        },
        thumb: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          width: 16,
          height: 16,
        },
      },
    }),

    Rating: Rating.extend({
      styles: {
        symbolBody: {
          color: '#FFD700',
        },
      },
    }),

    Loader: Loader.extend({
      styles: {
        root: {
          color: 'var(--mantine-color-blue-6)',
        },
      },
    }),

    Skeleton: Skeleton.extend({
      styles: {
        root: {
          backgroundColor: 'var(--mantine-color-gray-3)',
          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          },
        },
      },
    }),

    SegmentedControl: SegmentedControl.extend({
      styles: {
        root: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
        },
        control: {
          border: '1px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          fontSize: 11,
          '&[data-active]': {
            border: '2px inset #C0C0C0',
            backgroundColor: 'white',
          },
        },
      },
    }),

    Chip: Chip.extend({
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          fontSize: 10,
          '&[data-checked]': {
            border: '2px inset #C0C0C0',
            backgroundColor: 'white',
          },
        },
      },
    }),

    Pill: Pill.extend({
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          color: 'black',
          fontSize: 10,
          fontFamily: 'inherit',
        },
      },
    }),

    Accordion: Accordion.extend({
      styles: {
        control: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          fontSize: 11,
          fontFamily: 'inherit',
          '&:hover': { backgroundColor: 'var(--mantine-color-gray-5)' },
        },
        panel: {
          border: '2px inset #C0C0C0',
          backgroundColor: 'white',
          fontSize: 11,
        },
      },
    }),

    Drawer: Drawer.extend({
      styles: {
        content: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
        },
        header: {
          background: 'linear-gradient(90deg,#0087FF 0%,#006FCC 100%)',
          color: 'white',
          fontSize: 11,
          fontWeight: 'bold',
          borderBottom: '1px solid #004080',
        },
      },
    }),

    Tooltip: Tooltip.extend({
      styles: {
        tooltip: {
          border: '2px outset #C0C0C0',
          backgroundColor: '#FFFFCC',
          color: 'black',
          fontSize: 10,
          fontFamily: 'inherit',
        },
      },
    }),

    Popover: Popover.extend({
      styles: {
        dropdown: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          fontSize: 11,
        },
      },
    }),

    Menu: Menu.extend({
      styles: {
        dropdown: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
        },
        item: {
          fontSize: 11,
          fontFamily: 'inherit',
          '&:hover': {
            backgroundColor: 'var(--mantine-color-blue-6)',
            color: 'white',
          },
        },
        label: {
          fontSize: 10,
          fontWeight: 'bold',
          color: '#808080',
        },
      },
    }),

    Breadcrumbs: Breadcrumbs.extend({
      styles: {
        root: {
          fontSize: 11,
          fontFamily: 'inherit',
        },
      },
    }),

    Anchor: Anchor.extend({
      styles: {
        root: {
          fontSize: 11,
          fontFamily: 'inherit',
          color: 'var(--mantine-color-blue-6)',
          textDecoration: 'underline',
        },
      },
    }),

    List: List.extend({
      styles: {
        root: {
          fontSize: 11,
          fontFamily: 'inherit',
        },
        item: {
          fontSize: 11,
        },
      },
    }),

    Spotlight: Spotlight.extend({
      styles: {
        root: {
          '--spotlight-radius': '0px',
        },

        overlay: {
          background: 'rgba(0,0,0,0.5)',
        },

        content: {
          background: '#C0C0C0',
          border: '2px outset #C0C0C0',
          borderRadius: 0,
          boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          fontFamily: 'inherit',
        },

        search: {
          background: 'white',
          border: '1px inset #C0C0C0',
          borderRadius: 0,
          color: 'black',
          fontSize: 11,
          fontFamily: 'inherit',
          padding: '4px 30px',
          margin: '8px',

          '&::placeholder': {
            color: '#808080',
          },

          '&:focus': {
            outline: '1px dotted black',
            outlineOffset: '-2px',
            boxShadow: 'none',
          },
        },

        actionsList: {
          background: 'white',
          border: '1px inset #C0C0C0',
          borderRadius: 0,
          margin: '0 8px 8px 8px',
          maxHeight: '300px',
          overflowY: 'auto',

          '&::-webkit-scrollbar': {
            width: '16px',
          },

          '&::-webkit-scrollbar-track': {
            background: '#C0C0C0',
            border: '1px inset #C0C0C0',
          },

          '&::-webkit-scrollbar-thumb': {
            background: '#C0C0C0',
            border: '1px outset #C0C0C0',

            '&:hover': {
              background: '#D4D0C8',
            },

            '&:active': {
              border: '1px inset #C0C0C0',
            },
          },

          '&::-webkit-scrollbar-button': {
            background: '#C0C0C0',
            border: '1px outset #C0C0C0',
            height: '16px',

            '&:hover': {
              background: '#D4D0C8',
            },

            '&:active': {
              border: '1px inset #C0C0C0',
            },
          },
        },

        action: {
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          color: 'black',
          fontSize: 11,
          fontFamily: 'inherit',
          padding: '4px 8px',
          margin: 0,

          '&:hover': {
            background: '#0000FF',
            color: 'white',
          },

          '&[data-selected]': {
            background: '#0000FF',
            color: 'white',
          },
        },

        actionLabel: {
          fontSize: 11,
          fontFamily: 'inherit',
          fontWeight: 'normal',
        },

        actionDescription: {
          fontSize: 10,
          fontFamily: 'inherit',
          marginTop: 1,
          opacity: 0.8,
        },

        actionSection: {
          '& svg': {
            width: 16,
            height: 16,
          },
        },
      },
    }),
  },
});
