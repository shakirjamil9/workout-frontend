import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Container } from '@mui/material';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Container fixed maxWidth="md">
        <Component {...pageProps} />
      </Container>
    </QueryClientProvider>
  );
}

export default MyApp;
