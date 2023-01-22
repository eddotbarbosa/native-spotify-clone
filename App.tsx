import {StatusBar} from 'expo-status-bar';
import {ThemeProvider} from 'styled-components/native';

import {theme} from './src/styles/theme';

import {Routes} from './src/routes/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="light" backgroundColor={theme.colors.blackOne} />
    </ThemeProvider>
  );
}
