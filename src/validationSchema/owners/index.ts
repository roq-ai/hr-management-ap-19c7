import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  position: yup.string().nullable(),
  hired_date: yup.date().nullable(),
  salary: yup.number().integer().nullable(),
  benefits: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
