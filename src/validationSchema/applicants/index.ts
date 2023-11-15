import * as yup from 'yup';

export const applicantValidationSchema = yup.object().shape({
  resume: yup.string().nullable(),
  application_date: yup.date().nullable(),
  status: yup.string().nullable(),
  position_applied: yup.string().nullable(),
  interview_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
