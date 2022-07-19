export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  mobile: number;
  DOB: string;
  gender: string;
  terms: boolean;
}
