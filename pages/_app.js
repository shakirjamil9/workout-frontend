import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Container, createTheme, Paper, ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <Container fixed maxWidth="md">
            <Component {...pageProps} />
          </Container>
        </Paper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
