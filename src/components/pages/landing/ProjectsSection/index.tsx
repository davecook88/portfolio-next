import { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import ArrowButton from '@/components/buttons/ArrowButton';
import { ProjectDetailsPane } from '@/components/pages/landing/ProjectsSection/ProjectDetailsPane';
import { ProjectEntry } from '@/components/pages/landing/ProjectsSection/types';
const projectDetails: ProjectEntry[] = [
  {
    name: 'advise',
    description: (
      <div>
        <p className='my-2'>
          After making a great impression after joining Turn Technologies, I was
          invited onto the Advise team in order to help develop what was to
          become the company's flagship product.
        </p>
        <p className='my-2'>
          Initially we were a team of just two developers. I created a new
          template for building microservices with FastAPI, SQLModel and
          GraphQL. A network of interconnected microservices made up the backend
          for this product.
        </p>
        <p className='my-2'>
          As well as being the lead developer for the back end of the product, I
          was also heavily involved in front end development. This included
          developing the implementation of the Google Maps API to display hiring
          data by zipcode. We later moved this component into a private shared
          npm library for use across other micro frontends.
        </p>
      </div>
    ),
    images: ['/images/advise-1.png', '/images/advise-2.png'],
  },
  {
    name: 'thrive',
    description: (
      <div>
        <p className='my-2'>
          Thrive in Spanish's app was developed to solve the problem of how to
          administer group online language classes for students of multiple
          levels, while also allowing students the option to book private
          classes with the tutor of their choice.
        </p>
        <p className='my-2'>
          Thrive includes integrations with Google Classroom and Google Calendar
          to ensure bookings are synced with teacher and student calendars
          automatically. It boasts a Stripe integration for taking payments and
          a complex course management admin system for managing course
          registration and content.
        </p>
        <p className='my-2'>
          I built the front and back end of this project independently, hiring
          occasional help when required. Thrive has a front end built using
          NextJS and Tailwind. The back end is built with Python's FastAPI
          framework.
        </p>
      </div>
    ),
    github: [
      {
        label: 'front end',
        url: 'https://github.com/davecook88/Thrive_FE_PUBLIC',
      },
      {
        label: 'back end',
        url: 'https://github.com/davecook88/Thrive_BE_public',
      },
    ],

    images: [
      '/images/thrive-1.png',
      '/images/thrive-2.png',
      '/images/thrive-3.png',
    ],
  },
];

export const ProjectsSection = () => {
  const [selectedProjectEntry, setSelectedProjectEntry] =
    useState<ProjectEntry | null>(null);
  return (
    <section className='relative min-h-screen p-4'>
      <div className='absolute top-0 left-[20%] w-4/6 border-t-2 border-primary'></div>
      <div className='container m-auto'>
        <h2 className='my-4'>Projects</h2>
        <div className='grid md:grid-cols-6'>
          <div className='py-2'>
            <ul className='py-2'>
              {projectDetails.map((project) => (
                <li
                  className='py-2'
                  key={project.name}
                  onClick={() =>
                    setSelectedProjectEntry(
                      projectDetails.find((p) => p.name === project.name) ||
                        null
                    )
                  }
                >
                  <ArrowButton>{project.name}</ArrowButton>
                </li>
              ))}
            </ul>
          </div>
          <div className='md:col-span-2'>
            {selectedProjectEntry ? (
              <ProjectDetailsPane selectedProjectEntry={selectedProjectEntry} />
            ) : null}
          </div>
          <div className='md:col-span-3'>
            <h5 className='my-2 font-bold text-accent'>
              {selectedProjectEntry?.name}
            </h5>
            <div>{selectedProjectEntry?.description}</div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-[20%] w-4/6 border-b-2 border-primary'></div>
    </section>
  );
};
