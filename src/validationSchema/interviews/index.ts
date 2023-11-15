import * as yup from 'yup';

export const interviewValidationSchema = yup.object().shape({
  date: yup.date().nullable(),
  feedback: yup.string().nullable(),
  result: yup.string().nullable(),
  applicant_id: yup.string().nullable().required(),
  interviewer_id: yup.string().nullable().required(),
  job_posting_id: yup.string().nullable().required(),
});
