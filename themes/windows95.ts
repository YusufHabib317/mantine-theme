import { createTheme } from '@mantine/core';

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
    Button: {
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
    },

    Card: {
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          padding: 8,
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        },
      },
    },

    TextInput: {
      styles: {
        root: {
          position: 'relative',
          width: '100%',
          '&:has(input:focus) label, &:has(input:not(:placeholder-shown)) label': {
            top: '-0.45rem !important',
            transform: 'translateY(0) !important',
            fontSize: '0.75rem !important',
            color: 'black !important',
          },
          '&[data-invalid] label': {
            color: 'var(--mantine-color-red-6) !important',
          },
        },
        input: {
          width: '100%',
          height: '3.75rem',
          padding: '1.25rem 1rem 0.5rem 2.5rem',
          fontSize: '1.125rem',
          borderRadius: 'var(--mantine-radius-md)',
          backgroundColor: 'white',
          transition: 'outline-color 0.18s ease, border-color 0.18s ease',
          border: '2px inset #C0C0C0',
          outline: 'none',
          fontFamily: 'inherit',
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          '&:hover': {
            borderColor: '#A0A0A0',
          },
          '&:focus': {
            outline: '1px dotted black',
            outlineOffset: -3,
          },
        },
        label: {
          position: 'absolute',
          left: '2.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '0 0.25rem',
          fontSize: '1rem',
          lineHeight: 1,
          color: '#808080',
          backgroundColor: 'white',
          pointerEvents: 'none',
          transition: 'top 0.18s ease, transform 0.18s ease, font-size 0.18s ease, color 0.18s ease',
          zIndex: 2,
          fontFamily: 'inherit',
        },
        section: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        },
      },
    },

    Modal: {
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
    },

    Progress: {
      styles: {
        root: { border: '2px inset #C0C0C0', height: 20 },
      },
    },

    Tabs: {
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
    },

    Notification: {
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
    },

    Select: {
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
    },
    PasswordInput: {
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
    },
    ColorInput: {
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
    },
    FileInput: {
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
    },
    Avatar: {
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        },
      },
    },
    DatePickerInput: {
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
    },
    ActionIcon: {
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
    },

    Textarea: {
      styles: {
        root: {
          position: 'relative',
          width: '100%',
          '&:has(textarea:focus) label, &:has(textarea:not(:placeholder-shown)) label': {
            top: '-0.45rem !important',
            transform: 'translateY(0) !important',
            fontSize: '0.75rem !important',
            color: 'black !important',
          },
          '&[data-invalid] label': {
            color: 'var(--mantine-color-red-6) !important',
          },
        },
        input: {
          width: '100%',
          minHeight: '120px',
          padding: '1.25rem 1rem 0.5rem 1.25rem',
          fontSize: '1.125rem',
          borderRadius: 'var(--mantine-radius-md)',
          backgroundColor: 'white',
          transition: 'outline-color 0.18s ease, border-color 0.18s ease',
          border: '2px inset #C0C0C0',
          outline: 'none',
          fontFamily: 'inherit',
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF',
          resize: 'vertical',
          '&:hover': {
            borderColor: '#A0A0A0',
          },
          '&:focus': {
            outline: '1px dotted black',
            outlineOffset: -3,
          },
        },
        label: {
          position: 'absolute',
          left: '1.25rem',
          top: '1.25rem',
          transform: 'translateY(0)',
          padding: '0 0.25rem',
          fontSize: '1rem',
          lineHeight: 1,
          color: '#808080',
          backgroundColor: 'white',
          pointerEvents: 'none',
          transition: 'top 0.18s ease, transform 0.18s ease, font-size 0.18s ease, color 0.18s ease',
          zIndex: 2,
          fontFamily: 'inherit',
        },
      },
    },

    NumberInput: {
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
    },

    Radio: {
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
    },

    Text: {
      styles: {
        root: {
          fontSize: 11,
          fontFamily: 'inherit',
          color: 'black',
        },
      },
    },

    Title: {
      styles: {
        root: {
          fontFamily: 'inherit',
          color: 'black',
          fontWeight: 'bold',
        },
      },
    },

    Alert: {
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          fontSize: 11,
          fontFamily: 'inherit',
        },
        title: { fontSize: 11, fontWeight: 'bold' },
      },
    },

    Badge: {
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
    },

    Slider: {
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
    },

    RangeSlider: {
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
    },

    Rating: {
      styles: {
        symbolBody: {
          color: '#FFD700',
        },
      },
    },

    Loader: {
      styles: {
        root: {
          color: 'var(--mantine-color-blue-6)',
        },
      },
    },

    Skeleton: {
      styles: {
        root: {
          backgroundColor: 'var(--mantine-color-gray-3)',
          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          },
        },
      },
    },

    SegmentedControl: {
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
    },

    Chip: {
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
    },

    Pill: {
      styles: {
        root: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          color: 'black',
          fontSize: 10,
          fontFamily: 'inherit',
        },
      },
    },

    Accordion: {
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
    },

    Drawer: {
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
    },

    Tooltip: {
      styles: {
        tooltip: {
          border: '2px outset #C0C0C0',
          backgroundColor: '#FFFFCC',
          color: 'black',
          fontSize: 10,
          fontFamily: 'inherit',
        },
      },
    },

    Popover: {
      styles: {
        dropdown: {
          border: '2px outset #C0C0C0',
          backgroundColor: 'var(--mantine-color-gray-5)',
          fontSize: 11,
        },
      },
    },

    Menu: {
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
    },

    Breadcrumbs: {
      styles: {
        root: {
          fontSize: 11,
          fontFamily: 'inherit',
        },
      },
    },

    Anchor: {
      styles: {
        root: {
          fontSize: 11,
          fontFamily: 'inherit',
          color: 'var(--mantine-color-blue-6)',
          textDecoration: 'underline',
        },
      },
    },

    List: {
      styles: {
        root: {
          fontSize: 11,
          fontFamily: 'inherit',
        },
        item: {
          fontSize: 11,
        },
      },
    },

    Spotlight: {
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
    },
  },
});
