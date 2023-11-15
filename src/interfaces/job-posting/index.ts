import { InterviewInterface } from 'interfaces/interview';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobPostingInterface {
  id?: string;
  company_id: string;
  title?: string;
  description?: string;
  requirements?: string;
  salary_range?: string;
  posted_date?: any;
  closing_date?: any;
  created_at?: any;
  updated_at?: any;
  interview?: InterviewInterface[];
  company?: CompanyInterface;
  _count?: {
    interview?: number;
  };
}

export interface JobPostingGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  title?: string;
  description?: string;
  requirements?: string;
  salary_range?: string;
}
