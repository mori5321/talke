import * as _styles from './preview.modules.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { 
        name: 'light',
        value: '#f7f7f7'
      }
    ]
  }
}
