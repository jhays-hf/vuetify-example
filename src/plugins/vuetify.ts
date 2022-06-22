// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'

const hfDefault: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#ffffff',
    secondary: '#10B7DA',
    background: '#046996',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'hfDefault',
    themes: {
      hfDefault
    }
  }
})
