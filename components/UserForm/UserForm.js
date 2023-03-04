import React from 'react';
import { Formik } from 'formik';
import {
  intensity,
  genders,
  heights,
  mainGoals,
  resistanceDays,
  timeOfWorkout,
  eatingStyle,
  exercises as exerciseCount,
} from '../../constants';

import { TextField, MenuItem, Button, Grid } from '@mui/material';
import { userSchema } from './validation';

const UserForm = ({ mutate, isLoading }) => {
  return (
    <Formik
      validateOnChange
      initialValues={{
        fullName: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        height: '',
        gender: '',
        mainGoal: '',
        resistanceDays: '',
        timeOfWorkout: '',
        intensityOfWorkout: '',
        exercises: '',
        eatingStyle: '',
      }}
      validationSchema={userSchema}
      onSubmit={values => {
        mutate(values);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  // error={errors.fullName && touched.fullName}
                  name="fullName"
                  label={`*Name`}
                  variant="outlined"
                  fullWidth
                  value={values.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && touched.fullName && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.fullName}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // error={errors.age && touched.age}
                  name="age"
                  label="*Age"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={values.age}
                  onChange={handleChange}
                />
                {errors.age && touched.age && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.age}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // error={errors.gender && touched.gender}
                  select
                  name="gender"
                  label="*Gender"
                  variant="outlined"
                  fullWidth
                  value={values.gender}
                  onChange={handleChange}
                >
                  {genders.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.gender && touched.gender && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.gender}
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  name="height"
                  label="Height"
                  variant="outlined"
                  fullWidth
                  value={values.height}
                  onChange={handleChange}
                >
                  {heights.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="currentWeight"
                  label="Current Body Weight"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={values.currentWeight}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="desiredWeight"
                  label="Desired Body Weight"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={values.desiredWeight}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  // error={errors.mainGoal && touched.mainGoal}
                  select
                  name="mainGoal"
                  label="*What is your Main Goal right now?"
                  variant="outlined"
                  fullWidth
                  value={values.mainGoal}
                  onChange={handleChange}
                >
                  {mainGoals.map(option => (
                    <MenuItem key={option.value} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.mainGoal && touched.mainGoal && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.mainGoal}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  // error={errors.resistanceDays && touched.resistanceDays}
                  select
                  name="resistanceDays"
                  label="*How many days you want to RESISTANCE training every week?"
                  variant="outlined"
                  fullWidth
                  value={values.resistanceDays}
                  onChange={handleChange}
                >
                  {resistanceDays.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.resistanceDays && touched.resistanceDays && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.resistanceDays}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  // error={errors.timeOfWorkout && touched.timeOfWorkout}
                  select
                  name="timeOfWorkout"
                  label="*How long do you want your workouts to be?"
                  variant="outlined"
                  fullWidth
                  value={values.timeOfWorkout}
                  onChange={handleChange}
                >
                  {timeOfWorkout.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.timeOfWorkout && touched.timeOfWorkout && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.timeOfWorkout}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  // error={errors.intensityOfWorkout && touched.intensityOfWorkout}
                  select
                  name="intensityOfWorkout"
                  label="*How intense would you like your workouts to be?"
                  variant="outlined"
                  fullWidth
                  value={values.intensityOfWorkout}
                  onChange={handleChange}
                >
                  {intensity.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.intensityOfWorkout && touched.intensityOfWorkout && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.intensityOfWorkout}
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // error={errors.exercises && touched.exercises}
                  select
                  name="exercises"
                  label="*How many exercises would you like to perform for each body part?"
                  variant="outlined"
                  fullWidth
                  value={values.exercises}
                  onChange={handleChange}
                >
                  {exerciseCount.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.exercises && touched.exercises && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.exercises}
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // error={errors.eatingStyle && touched.eatingStyle}
                  select
                  name="eatingStyle"
                  label="*How would you describe your eating style?"
                  variant="outlined"
                  fullWidth
                  value={values.eatingStyle}
                  onChange={handleChange}
                >
                  {eatingStyle.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.eatingStyle && touched.eatingStyle && (
                  <div
                    style={{
                      color: '#d32f2f',
                      paddingTop: '5px',
                    }}
                  >
                    {errors.eatingStyle}
                  </div>
                )}
              </Grid>
            </Grid>
            <Button
              style={{
                margin: '20px 0',
                background:
                  'radial-gradient(circle farthest-corner at center center, #121FCF 0%, #4785FF 100%)',
              }}
              fullWidth
              variant="contained"
              type="submit"
              disabled={isLoading}
            >
              Generate
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default UserForm;
