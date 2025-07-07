import { createTheme } from '@mantine/core';

export const glassTheme = createTheme({
  fontFamily: 'Inter, SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
  primaryColor: 'glass-primary',
  defaultRadius: 'xl',
  spacing: { xs: '8px', sm: '12px', md: '20px', lg: '32px', xl: '48px' },
  colors: {
    'glass-primary': [
      '#F0F9FF', '#E0F2FE', '#BAE6FD', '#7DD3FC', '#38BDF8',
      '#0EA5E9', '#0284C7', '#0369A1', '#075985', '#0C4A6E',
    ],
    'glass-accent': [
      '#FEF5FF', '#F8E8FF', '#F3DBFF', '#E7CAFF', '#D4B3FE',
      '#C19AFE', '#A872FC', '#934BFA', '#7D2CF7', '#6918F4',
    ],
  },
  other: {
    glassBlur: 'blur(24px)',
    glassBorder: '1px solid rgba(255,255,255,0.18)',
    glassBg: 'rgba(255,255,255,0.08)',
    glassShadow: '0 8px 32px rgba(0,0,0,0.12)',
  },
  components: {
    Button: {
      defaultProps: {
        color: 'teal',
        radius: 'md',
        size: 'lg'
      },
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          padding: '10px 20px',
          fontWeight: 600,
          letterSpacing: 0.5,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 12,
          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent)',
            transform: 'translateX(-100%) translateY(-100%)',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          },
          '&:hover': {
            transform: 'translateY(-4px) scale(1.05)',
            background: 'rgba(255,255,255,0.15)',
            borderColor: 'rgba(255,255,255,0.35)',
            boxShadow: '0 15px 45px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.2)',
            '&::before': {
              transform: 'translateX(100%) translateY(100%)',
            },
            '&::after': {
              opacity: 1,
            },
          },
          '&:active': {
            transform: 'translateY(-2px) scale(1.02)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.15)',
          },
          '&[dataVariant="filled"]': {
            background: 'linear-gradient(135deg, rgba(56,189,248,0.3), rgba(147,51,234,0.3))',
            borderColor: 'rgba(56,189,248,0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, rgba(56,189,248,0.4), rgba(147,51,234,0.4))',
              borderColor: 'rgba(56,189,248,0.6)',
              boxShadow: '0 15px 45px rgba(56,189,248,0.2), 0 0 0 1px rgba(56,189,248,0.3)',
            },
          },
          '&[dataVariant="outline"]': {
            background: 'transparent',
            borderColor: 'rgba(255,255,255,0.3)',
            '&:hover': {
              background: 'rgba(255,255,255,0.1)',
              borderColor: 'rgba(255,255,255,0.5)',
            },
          },
        },
      },
    },

    Text: {
      styles: {
        root: {
          color: 'white',
        },
      },
    },

    Card: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          boxShadow: 'var(--glass-shadow,0 8px 32px rgba(0,0,0,0.12))',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 16,
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            transform: 'translateY(-8px) scale(1.03)',
            background: 'rgba(255,255,255,0.12)',
            borderColor: 'rgba(255,255,255,0.3)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.2)',
            '&::before': {
              opacity: 1,
            },
          },
        },
      },
    },

    TextInput: {
      defaultProps: {
        radius: 'md',
        size: 'lg',
        placeholder: ' ',
      },

      styles: {
        root: {
          position: 'relative',
          width: '100%',
        },

        input: {
          width: '100%',
          height: '3.75rem',
          padding: '1.25rem 1rem 0.5rem 3.5rem',
          '::placeholder': { color: 'transparent' },
          fontSize: '1.125rem',
          borderRadius: 'var(--mantine-radius-md)',
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          outline: 'none',
          transition: 'border-color 0.18s ease',

          '&:hover': { borderColor: 'rgba(255,255,255,0.30)' },
          '&:focus': { borderColor: 'var(--mantine-color-blue-4)' },
          '&[dataInvalid]': { borderColor: 'var(--mantine-color-error)' },

          '&[dataWithLeftSection]': { paddingLeft: '2.75rem' },
        },

        label: {
          position: 'absolute',
          left: '3.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '0 0.25rem',
          fontSize: '1.125rem',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.7)',
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          pointerEvents: 'none',
          transition: 'top 0.18s ease, transform 0.18s ease, font-size 0.18s ease, color 0.18s ease',
          zIndex: 2,
        },

        section: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          borderRadius: '0.5rem',
          transition: 'background 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s',

          '&:hover': {
            background: 'rgba(255,255,255,0.15)',
            borderColor: 'rgba(255,255,255,0.30)',
          },
        },
      },
    },

    Select: {
      styles: {
        input: {
          background: 'var(--glass-bg, rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur, blur(24px))',
          border: 'var(--glass-border, 1px solid rgba(255,255,255,0.18))',
          color: 'white',
          fontSize: 14,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            left: '-100%',
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: 'none',
          },

          '&::placeholder': { color: 'rgba(255,255,255,0.5)' },

          '&:hover': {
            background: 'rgba(255,255,255,0.15)',
            borderColor: 'rgba(255,255,255,0.35)',
            transform: 'translateY(-2px) scale(1.01)',
            boxShadow:
              '0 12px 35px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.15)',
            '&::before': { left: '100%' },
            '&::placeholder': { color: 'rgba(255,255,255,0.7)' },
          },

          '&:focus': {
            borderColor: 'var(--mantine-color-blue-4)',
            background: 'rgba(255,255,255,0.18)',
            boxShadow:
              '0 0 0 3px rgba(56,189,248,0.4), 0 16px 50px rgba(0,0,0,0.25)',
            transform: 'translateY(-3px) scale(1.02)',
          },

          '&[dataWithLeftSection]': { paddingLeft: 28 },
        },

        section: {
          background: 'var(--glass-bg, rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur, blur(24px))',
          border: 'var(--glass-border, 1px solid rgba(255,255,255,0.18))',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(255,255,255,0.15)',
            borderColor: 'rgba(255,255,255,0.3)',
          },
        },

        label: {
          color: 'rgba(255,255,255,0.9)',
          fontWeight: 600,
          fontSize: 13,
          textShadow: '0 1px 3px rgba(0,0,0,0.4)',
          transition: 'all 0.3s ease',
        },

        dropdown: {
          background: 'var(--glass-bg, rgba(255,255,255,0.08))',
          backdropFilter: 'blur(40px)',
          border: 'var(--glass-border, 1px solid rgba(255,255,255,0.18))',
          borderRadius: 16,
          boxShadow:
            '0 25px 70px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)',
          overflow: 'hidden',
        },

        option: {
          '--_option-hover-background': 'transparent',
          '--_option-hover-color': 'var(--mantine-color-cyan-3)',

          color: 'rgba(255,255,255,0.9)',
          backgroundColor: 'transparent',
          fontSize: 14,
          padding: '14px 18px',
          borderRadius: 8,
          margin: '2px 6px',
          transition: 'color 0.2s ease',

          '&:hover, &[dataHovered]': {
            color: 'var(--_option-hover-color)',
          },

          '&[dataSelected]': {
            background:
              'linear-gradient(135deg, rgba(56,189,248,0.35), rgba(147,51,234,0.35))',
            color: 'white',
            fontWeight: 600,
            boxShadow:
              'inset 0 0 0 1px rgba(56,189,248,0.4), 0 4px 20px rgba(56,189,248,0.2)',

            '&::after': {
              content: '""',
              position: 'absolute',
              right: 14,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, var(--mantine-color-blue-4), var(--mantine-color-blue-6))',
              boxShadow:
                '0 0 12px var(--mantine-color-blue-4), 0 0 4px rgba(255,255,255,0.5)',
            },
          },
        },
      },
    },

    PasswordInput: {
      styles: {
        input: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          fontSize: 14,
          '&[dataWithLeftSection]': {
            paddingLeft: '28px',
          },
        },
         section: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        }
      },
    },

    ColorInput: {
      styles: {
        input: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          fontSize: 14,
          '&[dataWithLeftSection]': {
            paddingLeft: '28px',
          },
        },
         section: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        }
      },
    },

    FileInput: {
      styles: {
        input: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          fontSize: 14,
          '&[dataWithLeftSection]': {
            paddingLeft: '28px',
          },
        },
         section: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        }
      },
    },

    Avatar: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
        },
      },
    },

    DatePickerInput: {
      styles: {
        input: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          fontSize: 14,
          '&[dataWithLeftSection]': {
            paddingLeft: '35px',
          },
        },
         section: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        }
      },
    },

    NumberInput: {
      styles: {
        input: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          fontSize: 14,
          '&[dataWithLeftSection]': {
            paddingLeft: '28px',
          },
        },
      },
    },

    Textarea: {
      defaultProps: {
        radius: 'md',
        size: 'lg',
        placeholder: ' ',
      },

      styles: {
        root: {
          position: 'relative',
          width: '100%',
        },

        input: {
          width: '100%',
          minHeight: '7.5rem',
          padding: '1.25rem 1rem 0.5rem 1.25rem',
          '::placeholder': { color: 'transparent' },
          fontSize: '1.125rem',
          borderRadius: 'var(--mantine-radius-md)',
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          outline: 'none',
          transition: 'border-color 0.18s ease',
          resize: 'vertical',

          '&:hover': { borderColor: 'rgba(255,255,255,0.30)' },
          '&:focus': { borderColor: 'var(--mantine-color-blue-4)' },
          '&[dataInvalid]': { borderColor: 'var(--mantine-color-error)' },
        },

        label: {
          position: 'absolute',
          left: '1.25rem',
          top: '1.25rem',
          transform: 'translateY(0)',
          padding: '0 0.25rem',
          fontSize: '1.125rem',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.7)',
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          pointerEvents: 'none',
          transition: 'top 0.18s ease, transform 0.18s ease, font-size 0.18s ease, color 0.18s ease',
          zIndex: 2,
        },
      },
    },

    ActionIcon: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: 10,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          },
          '&:hover': {
            background: 'rgba(255,255,255,0.18)',
            borderColor: 'rgba(255,255,255,0.35)',
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.2)',
            '&::before': {
              opacity: 1,
            },
          },
          '&:active': {
            transform: 'translateY(-1px) scale(1.02)',
          },
        },
      },
    },

    Modal: {
      styles: {
        content: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'blur(40px)',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          boxShadow: '0 32px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)',
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          },
        },
        header: {
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(24px)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          },
        },
        title: {
          fontSize: 24,
          fontWeight: 700,
          color: 'white',
          textShadow: '0 1px 3px rgba(0,0,0,0.4)',
        },
        body: {
          color: 'rgba(255,255,255,0.9)',
        },
      },
    },

    Progress: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.12))',
          overflow: 'hidden',
        },
      },
    },

    Notification: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          padding: '8px 12px',
          boxShadow: 'var(--glass-shadow,0 8px 32px rgba(0,0,0,0.12))',
        },
      },
    },

    Radio: {
      styles: {
        radio: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          '&:checked': {
            backgroundColor: 'var(--mantine-color-blue-5)',
            borderColor: 'var(--mantine-color-blue-5)',
          },
        },
        label: { color: 'rgba(255,255,255,0.9)', fontSize: 14 },
      },
    },

    Slider: {
      styles: {
        track: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        },
        thumb: {
          background: 'var(--glass-bg,rgba(255,255,255,0.15))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        },
      },
    },

    RangeSlider: {
      styles: {
        track: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        },
        thumb: {
          background: 'var(--glass-bg,rgba(255,255,255,0.15))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
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

    Badge: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
        },
      },
    },

    Alert: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
        },
        title: { color: 'white', fontWeight: 600 },
      },
    },

    Title: {
      styles: {
        root: {
          color: 'white',
          fontWeight: 700,
        },
      },
    },

    Loader: {
      styles: {
        root: {
          color: 'var(--mantine-color-blue-5)',
        },
      },
    },

    Skeleton: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          },
        },
      },
    },

    SegmentedControl: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        },
        control: {
          color: 'rgba(255,255,255,0.7)',
          '&[dataActive]': {
            background: 'rgba(255,255,255,0.15)',
            color: 'white',
          },
        },
      },
    },

    Chip: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'rgba(255,255,255,0.7)',
          '&[dataChecked]': {
            background: 'rgba(255,255,255,0.15)',
            color: 'white',
          },
        },
      },
    },

    Pill: {
      styles: {
        root: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
        },
      },
    },

    Accordion: {
      styles: {
        control: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
          '&:hover': {
            background: 'rgba(255,255,255,0.12)',
          },
        },
        panel: {
          background: 'var(--glass-bg,rgba(255,255,255,0.05))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
        },
      },
    },

    Drawer: {
      styles: {
        content: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'blur(40px)',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        },
        header: {
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          color: 'white',
        },
        title: { color: 'white', fontWeight: 700 },
      },
    },

    Tooltip: {
      styles: {
        tooltip: {
          background: 'var(--glass-bg,rgba(0,0,0,0.8))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
        },
      },
    },

    Popover: {
      styles: {
        dropdown: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          color: 'white',
        },
      },
    },

    Menu: {
      styles: {
        dropdown: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
        },
        item: {
          color: 'rgba(255,255,255,0.9)',
          '&:hover': {
            background: 'rgba(255,255,255,0.12)',
            color: 'white',
          },
        },
        label: {
          color: 'rgba(255,255,255,0.6)',
          fontWeight: 600,
        },
      },
    },

    Breadcrumbs: {
      styles: {
        root: {
          color: 'rgba(255,255,255,0.9)',
        },
      },
    },

    Anchor: {
      styles: {
        root: {
          color: 'var(--mantine-color-blue-4)',
          '&:hover': {
            color: 'var(--mantine-color-blue-3)',
          },
        },
      },
    },

    List: {
      styles: {
        root: {
          color: 'rgba(255,255,255,0.9)',
        },
        item: {
          color: 'rgba(255,255,255,0.9)',
        },
      },
    },

    Spotlight: {
      styles: {
        root: {
          '--spotlight-radius': '16px',
        },

        overlay: {
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
        },

        content: {
          background: 'var(--glass-bg,rgba(255,255,255,0.08))',
          backdropFilter: 'var(--glass-blur,blur(24px))',
          border: 'var(--glass-border,1px solid rgba(255,255,255,0.18))',
          borderRadius: 16,
          boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
          overflow: 'hidden',
        },

        search: {
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 0,
          color: 'white',
          fontSize: 16,
          fontWeight: 500,
          padding: '20px 40px',

          '&::placeholder': {
            color: 'rgba(255,255,255,0.6)',
          },

          '&:focus': {
            borderBottomColor: 'var(--mantine-color-blue-4)',
            boxShadow: 'none',
            background: 'rgba(255,255,255,0.05)',
          },
        },

        actionsList: {
          background: 'transparent',
          padding: '8px 0',
          maxHeight: '400px',
          overflowY: 'auto',

          '&::WebkitScrollba': {
            width: '6px',
          },

          '&::WebkitScrollbaTrack': {
            background: 'rgba(255,255,255,0.05)',
          },

          '&::WebkitScrollbaThumb': {
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '3px',

            '&:hover': {
              background: 'rgba(255,255,255,0.3)',
            },
          },
        },

        action: {
          background: 'transparent',
          border: 'none',
          borderRadius: 8,
          color: 'rgba(255,255,255,0.9)',
          margin: '2px 12px',
          padding: '12px 16px',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

          '&:hover': {
            background: 'rgba(255,255,255,0.1)',
            transform: 'translateX(4px)',
          },

          '&[dataSelected]': {
            background: 'rgba(56,189,248,0.2)',
            borderLeft: '3px solid var(--mantine-color-blue-4)',
            transform: 'translateX(4px)',
          },
        },

        actionLabel: {
          color: 'white',
          fontWeight: 600,
          fontSize: 14,
          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
        },

        actionDescription: {
          color: 'rgba(255,255,255,0.7)',
          fontSize: 12,
          marginTop: 2,
        },

        actionSection: {
          color: 'var(--mantine-color-blue-4)',

          '& svg': {
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
          },
        },
      },
    },
  },
});
