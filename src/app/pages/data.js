// @flow

export const dummy = [
  {
    name: 'Jake Taylor',
    jobTitle: 'Environmental',
    assignedProjects: 3,
    email: 'jake@example.com',
    phone: '+1 555 555 5555',
    role: 'Member',
    status: 'Active',
  },
  {
    name: 'Angela Lee',
    jobTitle: 'Construction Manager',
    assignedProjects: 4,
    email: 'angela@example.com',
    phone: '+1 333 555 6666',
    role: 'Project Manager',
    status: 'Inactive',
  },
  {
    name: 'Annie Klain',
    jobTitle: 'System Engineer',
    assignedProjects: 10,
    email: 'annie@example.com',
    phone: '+1 111 555 7777',
    role: 'Program Manager',
    status: 'Active',
  },
  {
    name: 'Brian Fox',
    jobTitle: 'Environmental',
    assignedProjects: 1,
    email: 'brian@example.com',
    phone: '+1 444 555 9999',
    role: 'Admin',
    status: 'Active',
  },
];

export const columns = [
  { value: 'name', label: 'name' },
  { value: 'jobTitle', label: 'job title' },
  { value: 'assignedProjects', label: 'assigned projects' },
  { value: 'email', label: 'email' },
  { value: 'phone', label: 'phone' },
  { value: 'role', label: 'role' },
  { value: 'status', label: 'status' },
];

export const filters = [
  {
    open: false,
    label: 'status',
    values: [
      { value: 'all', text: 'all' },
      { value: 'active', text: 'active' },
      { value: 'inactive', text: 'inactive' },
    ],
  },
  {
    open: false,
    label: 'role',
    values: [
      { value: 'all', text: 'all' },
      { value: 'admin', text: 'Admin' },
      { value: 'programManager', text: 'Program Manager' },
      { value: 'projectManager', text: 'Project Manager' },
      { value: 'member', text: 'Member' },
    ],
  },
];

export const formValues = [
  { value: 'name', label: 'name' },
  { value: 'jobTitle', label: 'job title' },
  { value: 'assignedProjects', label: 'assigned projects' },
  { value: 'email', label: 'email' },
  { value: 'phone', label: 'phone' },
  { value: 'role', label: 'role' },
  { value: 'status', label: 'status' },
];

export const initialValues = {
  name: true,
  jobTitle: false,
  assignedProjects: false,
  email: false,
  phone: false,
  role: false,
  status: false,
};
