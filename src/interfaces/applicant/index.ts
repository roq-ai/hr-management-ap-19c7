import { InterviewInterface } from 'interfaces/interview';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApplicantInterface {
  id?: string;
  user_id: string;
  resume?: string;
  application_date?: any;
  status?: string;
  position_applied?: string;
  interview_date?: any;
  created_at?: any;
  updated_at?: any;
  interview?: InterviewInterface[];
  user?: UserInterface;
  _count?: {
    interview?: number;
  };
}

export interface ApplicantGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  resume?: string;
  status?: string;
  position_applied?: string;
}
