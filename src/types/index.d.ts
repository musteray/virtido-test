export type Customer = {
  name: string;
  company?: string;
  phone: string;
  email: string;
  address?: string;
};

export type Intake = {
  customer: Customer;
  description: string;
  site: { difficultAccess?: boolean };
};

export type ServiceItem = {
  position?: string;
  shortName: string;
  unit?: string;
  description?: string;
  calc?: any;
  category?: string;
  tags?: string[];
};

export type MatchResult = {
  // item: ServiceItem;
  position: string;
  shortName: string;
  score: number; // 0..1
  why: string;
};