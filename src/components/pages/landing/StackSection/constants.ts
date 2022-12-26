import { IconEntry } from '@/components/pages/landing/StackSection/types';

export enum TechCategory {
  'back',
  'front',
  'scripting',
  'devops',
}

export const stackIcons: IconEntry[] = [
  {
    name: 'Typescript',
    logo: '/svg/typescript.svg',
    categories: new Set([
      TechCategory.front,
      TechCategory.back,
      TechCategory.scripting,
    ]),
    description: `When I first started using Typescript, I knew there was no turning back!
  Having a strong typing system means that I can spot so many more errors before I run the code.
  Now, if I have to use Javascript, it feels strange and weird.`,
  },
  {
    name: 'NodeJS',
    logo: '/svg/node-js.svg',
    categories: new Set([TechCategory.back]),
    description: `NodeJS is everywhere nowadays. I've always found the express framework for creating API endpoints and associated middleware to be very intuitive.
I have worked a lot with the no-code platform Zapier, whose app-builder SDK is written in NodeJS. As a result, I wrote many custom API integrations for well-known platforms in Node.`,
  },
  {
    name: 'Heroku',
    logo: '/svg/heroku.svg',
    categories: new Set([TechCategory.back]),
    description: `There's something reassuring about a platform which allows you to host your app, manage access, add databases, and create CI/CD pipelines all in one place.
Heroku gives me the additional peace of mind that I know exactly how much the bill will be at the end of the month.`,
  },
  {
    name: 'Git',
    logo: '/svg/git.svg',
    categories: new Set([TechCategory.devops]),
    description: `The version management tool for collaborating on large code bases.
I can't imagine working without following the workflow of creating a branch, creating a PR and merging to dev.`,
  },
  {
    name: 'Docker',
    logo: '/svg/docker.svg',
    categories: new Set([TechCategory.devops]),
    description: `Docker is a whole world unto itself and I feel I am only scratching the surface of what it can do.
Despite not being an expert, it's surprisingly easy to create a dockerfile & docker-compose which ensures that the same app will run in the same way, wherever you need it.`,
  },
  {
    name: 'React',
    logo: '/svg/react.svg',
    categories: new Set([TechCategory.front]),
    description: `React is my go-to framework for front-end development. Its well-developed ecosystem means that there is an enormous wealth of libraries and information to help in development.
By now, the component lifecycle is like second nature to me.`,
  },
  {
    name: 'Redux',
    logo: '/svg/redux.svg',
    categories: new Set([TechCategory.front]),
    description: `No more prop drilling!
Redux can be a little controversial due to the amount of additional code it requires. That being said, I'm a fan.
Being able to separate memory management into slices and then create custom hooks for managing updates across the entire app is a game-changer.`,
  },
  {
    name: 'GraphQL',
    logo: '/svg/graphql.svg',
    categories: new Set([TechCategory.front, TechCategory.back]),
    description: `GraphQL is a pleasure to work with, both on the back and the front end.
  
  Being able to specify schema in the back end which are automatically accessible to the front-end developer's IDE saves a lot of time. Also graphQL's flexibility means that one endpoint/method can service multiple functions.  `,
  },
  {
    name: 'Python',
    logo: '/svg/python.svg',
    categories: new Set([TechCategory.scripting, TechCategory.back]),
    description: `Python is currently my go-to back-end language of choice.`,
  },
  {
    name: 'Flask',
    logo: '/svg/flask.svg',
    categories: new Set([TechCategory.back]),
    description: `Flask has been around for a while now and its mature documentation and ecosystem makes finsing libraries and information very straightforward.`,
  },
  {
    name: 'FastAPI',
    logo: '/svg/fastapi.svg',
    categories: new Set([TechCategory.back]),
    description: `A more recent Python backend framework, this has become my favourite tool for building microservices.
    
  I really enjoy the fact that type safety is built into the framework, with Pydantic playing a central role. The only downside is that as a growing framework, some libraries lack the maturity of Flask/Django.`,
  },
  {
    name: 'NextJS',
    logo: '/svg/nextjs.svg',
    categories: new Set([TechCategory.front]),
    description: `Server Side Rendering, a logical directory-based approach to routing, quick means of creating API endpoints in node. What's not to like?`,
  },
  {
    name: 'Google Apps Script',
    logo: '/svg/googleappsscript.svg',
    categories: new Set([TechCategory.scripting]),
    description: `This is my first option for scripting, quick automations, and internal tools. 
    
  Everyone is familiar with Google Apps. A Google Sheet acts as a simple UI for many small automations, avoiding time-consuming front-end development for quick scripts. GAS is free to host and quick to set up and deploy.`,
  },
  {
    name: 'TailwindCSS',
    logo: '/svg/tailwind.svg',
    categories: new Set([TechCategory.front]),
    description: `TailwindCSS offers a large number of utility classes, meaning that you can achieve all of your styling without the need for specific CSS files.

  To avoid an excess of class names cluttering up my JSX code, I like to use the tailwind-styled-components library to separate my code into clear, manageable sections.`,
  },
  {
    name: 'Material UI',
    logo: '/svg/material-ui.svg',
    categories: new Set([TechCategory.front]),
    description: `Material-UI takes an opposite approach to TailwindCSS. This gives you entire compoenents out of the box.
    
  Although Material-UI is highly customisable, I like to use it to quickly implement UIs where a simple, familiar design is ok. I prefer Tailwind where custom styling is necessary.`,
  },
  {
    name: 'Firebase',
    logo: '/svg/firebase.svg',
    categories: new Set([TechCategory.devops]),
    description: `Firebase Firestore is my go-to document database. The clear UI on the backend makes it easy to access and edit data without the need for dedicated client software.
  
  Firebase Auth does a lot of the heavy lifting in terms of security. Firebase Functions allow for setting up API endpoints with greater functionality than GAS. This can even be used as the entire backend for a website.  `,
  },
  {
    name: 'Postgresql',
    logo: '/svg/postgresql.svg',
    categories: new Set([TechCategory.devops]),
    description: `My go-to relational database. Along with established ORMs like Python's SQLAlchemy, this is a pleasure to use.`,
  },
  {
    name: 'Google Cloud Platform',
    logo: '/svg/google-cloud.svg',
    categories: new Set([TechCategory.devops]),
    description: `From working with Google Apps Script as a freelancer, GCP became the logical choice for deploying and managing larger projects. 
  
I have a great deal of experience in consuming Google's APIs, such as Google Maps API, in addition to implementing Google's Single Sign On and using Google App Engine for deploying applications.`,
  },
];
