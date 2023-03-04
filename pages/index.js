import React from 'react';

import { Button, Container, Typography } from '@mui/material';
import UserForm from '../components/UserForm';
import { useMutation } from 'react-query';
import { GENERATE_PLAN } from '../components/UserForm/queries';
import parse from 'html-react-parser';

const Form = () => {
  const { mutate, data, isLoading, isError } = useMutation(GENERATE_PLAN);
  return (
    <>
      {
        <>
          <Typography
            variant="h3"
            component={'h1'}
            align="center"
            gutterBottom={true}
            style={{
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
          <br />
          {data?.plan && parse(data.plan)}
        </>
      }
    </>
  );
};

export default Form;

{
  /* <Grid item xs={12}>
            <FormControl component={'fieldset'}>
              <FormLabel component={'legend'}>
                What do you need help planning?
              </FormLabel>
              <FormGroup onChange={handleChange}>
                <FormControlLabel
                  value="Breakfast"
                  control={<Checkbox name="Breakfast" />}
                  label="Breakfast"
                  labelPlacement="left"
                />
                <FormControlLabel
                  value="Lunch"
                  control={<Checkbox name="Lunch" />}
                  label="Lunch"
                  labelPlacement="left"
                />
                <FormControlLabel
                  value="Dinner"
                  control={<Checkbox name="Dinner" />}
                  label="Dinner"
                  labelPlacement="left"
                />
                <FormControlLabel
                  value="Snacks"
                  control={<Checkbox name="Snacks" />}
                  label="Snacks"
                  labelPlacement="left"
                />
              </FormGroup>
            </FormControl>
          </Grid> */
}
