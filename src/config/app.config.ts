interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own application details',
    'View job postings',
    'Submit application for job postings',
    'View application status',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage user information',
    'Manage applicant information',
    'Manage job postings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a6b68dc7-a30d-44ce-8df8-9f48b863474d',
};
