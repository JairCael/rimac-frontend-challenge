export interface User {
  name: string;
  lastName: string;
  birthday: string;
  dni: string;
  phone: string;
  plan: string;
  price: number;
}

export interface FormData {
  document: "DNI" | "CE";
  numberDocument: string;
  phone: string;
  privacyPolity: boolean;
  comunicationPolity: boolean;
}

export interface FormErrors {
  numberDocument?: string;
  phone?: string;
  checkboxes?: string;
  general?: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
