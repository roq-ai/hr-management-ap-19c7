import { ApplicantInterface } from 'interfaces/applicant';
import { UserInterface } from 'interfaces/user';
import { JobPostingInterface } from 'interfaces/job-posting';
import { GetQueryInterface } from 'interfaces';

export interface InterviewInterface {
  id?: string;
  applicant_id: string;
  interviewer_id: string;
  job_posting_id: string;
  date?: any;
  feedback?: string;
  result?: string;
  created_at?: any;
  updated_at?: any;

  applicant?: ApplicantInterface;
  user?: UserInterface;
  job_posting?: JobPostingInterface;
  _count?: {};
}

export interface InterviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  applicant_id?: string;
  interviewer_id?: string;
  job_posting_id?: string;
  feedback?: string;
  result?: string;
}
