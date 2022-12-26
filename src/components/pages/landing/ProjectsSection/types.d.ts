import React from 'react';

export type ProjectEntry = {
  name: string;
  description: React.ReactElement;
  images: string[];
  github?: { label: string; url: string }[];
};
