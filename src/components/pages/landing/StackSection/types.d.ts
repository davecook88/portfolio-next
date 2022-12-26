import { TechCategory } from '@/components/pages/landing/StackSection/constants';

export type IconEntry = {
  name: string;
  logo: string;
  description: string;
  categories: Set<TechCategory>;
};
