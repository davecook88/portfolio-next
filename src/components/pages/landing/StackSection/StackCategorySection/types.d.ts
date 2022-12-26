import { TechCategory } from '@/components/pages/landing/StackSection/constants';
import { IconEntry } from '@/components/pages/landing/StackSection/types';

export type StackCategorySectionProps = {
  selectedCategory: TechCategory;
  label: string;
  setSelectedTech: (tech: IconEntry) => void;
};
