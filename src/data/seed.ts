import { Member } from '../types';

export const initialMembers: Member[] = [
  { id: 1, name: 'Rayan musculos', email: 'Rayan@GYM.com', plan: 'basico', startDate: new Date().toISOString(), active: true },
  { id: 2, name: 'Enma Star', email: 'Femboy214@GYM.com', plan: 'premium', startDate: new Date().toISOString(), active: true },
  { id: 3, name: 'Patricio Estrella', email: 'Patricio@Estrella.com', plan: 'vip', startDate: new Date().toISOString(), active: false },
];
