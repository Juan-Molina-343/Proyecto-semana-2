export type Plan = 'basico' | 'premium' | 'vip';

export interface Member {
  id: number;
  name: string;
  email: string;
  plan: Plan;
  startDate: string; 
  active: boolean;
}

