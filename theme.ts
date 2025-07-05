import {
  createTheme,
  Button,
  TextInput,
  Select,
} from '@mantine/core';
import buttonClasses from './styles/button.module.css';
import textInputClasses from './styles/textInput.module.css';
import selectClasses from './styles/select.module.css';

export const materialTheme = createTheme({
  fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
  primaryColor: 'material-blue',
  defaultRadius: 'md',
  colors: {
    'material-blue': [
      '#E3F2FD', // 0 - lightest
      '#BBDEFB', // 1
      '#90CAF9', // 2
      '#64B5F6', // 3
      '#42A5F5', // 4
      '#2196F3', // 5 - primary shade
      '#1E88E5', // 6
      '#1976D2', // 7
      '#1565C0', // 8
      '#0D47A1', // 9 - darkest
    ],
    'material-green': [
      '#E8F5E9', // 0
      '#C8E6C9', // 1
      '#A5D6A7', // 2
      '#81C784', // 3
      '#66BB6A', // 4
      '#4CAF50', // 5 - primary shade
      '#43A047', // 6
      '#388E3C', // 7
      '#2E7D32', // 8
      '#1B5E20', // 9
    ],
  },

  components: {
    Button: Button.extend({
      classNames: buttonClasses,
      defaultProps: {
        radius: 'lg',
      },
    }),

    // TextInput: TextInput.extend({
    //   classNames: textInputClasses,
    // }),

    // Select: Select.extend({
    //   classNames: selectClasses,
    // }),

  },
});