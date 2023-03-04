import * as Yup from 'yup';
export const userSchema = Yup.object({
  fullName: Yup.string().required('Name is required field'),
  age: Yup.string().required(),
  gender: Yup.string().required(),
  mainGoal: Yup.string().required(),
  resistanceDays: Yup.number().required(),
  timeOfWorkout: Yup.string().required(),
  intensityOfWorkout: Yup.string().required(),
  exercises: Yup.number().required(),
  eatingStyle: Yup.string().required(),
});
