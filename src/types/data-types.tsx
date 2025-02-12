export type employee = {
  name: string
  id: string
}

export type AttendanceFilterParams = {
  employeeId: string
  employeeName: string
  startDate: Date | null
  endDate: Date | null
  setEmployeeId: (id: string) => void
  setEmployeeName: (name: string) => void
  setStartDate: (date: Date | null) => void
  setEndDate: (date: Date | null) => void
}

export type EmployeeFilterParams = {
  employeeId: string
  startDate: Date | null
  endDate: Date | null
  managerName: string
  employeeName: string
  employeeLists: []
  setEmployeeId: (id: string) => void
  setStartDate: (date: Date) => void
  setEndDate: (date: Date) => void
  setManagerName: (name: string) => void
  setEmployeeName: (name: string) => void
  setEmployeeLists: (data: []) => void
}

export type ManagerSchema = {
  id: string
  name: string
}

export type JobFormValues = {
  status: string;
  assigned_to: string;
  job_description: string;
  job_location: string;
  job_title: string;
  // root_kml_file: File;
  start_date: Date;
}

export type EmployeeInput = {
  employee_id: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
  age: number;
  role: string;
  manager: string;
  additional_managers?: { name: string; id: string }[];
}

export type KMLFileType =
  { file_name: string; file_url: string; uploaded_at: Date; _id: string }


export type JobFilterParams = {
  employeeName: string,
  startDate: Date | null,
  endDate: Date | null,
  jobLocation: string,
  setEmployeeName: (id: string) => void,
  setStartDate: (date: Date | null) => void,
  setEndDate: (date: Date | null) => void,
  setJobLocation: (location: string) => void
}

export type additional_manager = {
  id: string,
  name: string
}

export type BulkJobFields = {
  // root_kml_file: ''
  csv: File
}

export type userType = {
  additional_managers: [];
  employee_id: string;
  name: string;
  age: number;
  email: string;
  phone_number: number;
  role: string;
  id: string;
}
export type Props = {
  type: string | undefined
  time: string | undefined
  location: string | undefined
  address: string | undefined
  bikeReading: number | undefined
  selfieImage: string | undefined
  odometerImage: string | undefined
}

export type editJobSchema = {
  job_title: string,
  status: string,
  assigned_to: string,
  job_location: string,
  root_kml_file: File,
  start_date: Date,
  job_description: string,
  tapping_location: string,
  fiber_owner: string,
  customer_company_number: string,
  remarks: string,
  type: string,
}
export type userSchema = {
  additoinal_managers: [],
  age: number,
  email: string,
  employee_id: string,
  id: string,
  name: string,
  phone_number: string,
  role: string
}
