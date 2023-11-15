import { JobPostingInterface } from 'interfaces/job-posting';
import { OwnerInterface } from 'interfaces/owner';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  industry?: string;
  size?: number;
  founded_year?: number;
  website_url?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  job_posting?: JobPostingInterface[];
  owner?: OwnerInterface[];
  user?: UserInterface[];

  _count?: {
    job_posting?: number;
    owner?: number;
    user?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  industry?: string;
  website_url?: string;
  name?: string;
}
