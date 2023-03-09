import React, { useEffect, useRef } from 'react';

import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import { useMutation } from 'react-query';
import parse from 'html-react-parser';
import Head from 'next/head';
import UserForm from '../UserForm';
import { GENERATE_PLAN } from './queries';

const Form = () => {
  const ref = useRef();
  const { mutate, data, isLoading, isError } = useMutation(GENERATE_PLAN, {
    onSuccess: () => {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    },
    retry: 1,
  });

  return (
    <>
      <Head>
        <title>Workout/Meal Plan Generator</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YSHN2JXH3N"
        ></script>
        {typeof window !== 'undefined' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'G-YSHN2JXH3N');`,
            }}
          />
        )}
      </Head>
      <div style={{ padding: '20px 0' }}>
        <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <Typography
          variant="h3"
          component={'h1'}
          align="center"
          gutterBottom={true}
          style={{
            marginTop: '20px',
            fontWeight: 'bold',
            background: '#121FCF',
            background:
              'radial-gradient(circle farthest-corner at center center, #121FCF 0%, #4785FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Generate Your Workout/Meal Plan
        </Typography>
        <UserForm mutate={mutate} isLoading={isLoading} />
        <div ref={ref}>
          {isError ? (
            <h1
              style={{
                backgroundColor: 'red',
                color: 'white',
                display: 'inline-block',
              }}
            >
              Ooops! Got into an error. Try again.
            </h1>
          ) : (
            data?.plan && parse(data.plan)
          )}
        </div>
        <br />
      </div>
    </>
  );
};

export default Form;
