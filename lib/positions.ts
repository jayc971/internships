import { Position } from './types';

export const positions: Position[] = [
  {
    id: 'qa-intern',
    title: 'QA Intern',
    description: 'Join our quality assurance team to learn manual testing, bug reporting, and test case documentation.',
    responsibilities: [
      'Conduct manual testing of web and mobile applications',
      'Report and document bugs with detailed reproduction steps',
      'Create and maintain test case documentation',
      'Collaborate with developers to ensure quality standards'
    ],
    learningOutcomes: [
      'Testing methodologies and best practices',
      'Bug tracking and reporting tools',
      'Automation testing basics',
      'Quality assurance workflows'
    ]
  },
  {
    id: 'frontend-intern',
    title: 'Frontend Development Intern',
    description: 'Build modern, responsive user interfaces using React, TypeScript, and contemporary frontend technologies.',
    responsibilities: [
      'Develop React components with TypeScript',
      'Implement responsive UI designs',
      'Write clean, maintainable code',
      'Participate in code reviews and team collaboration'
    ],
    learningOutcomes: [
      'Modern frontend frameworks (React, Next.js)',
      'TypeScript and JavaScript best practices',
      'Responsive design and CSS',
      'Version control with Git'
    ]
  },
  {
    id: 'backend-intern',
    title: 'Backend Development Intern',
    description: 'Develop server-side applications, APIs, and work with databases to power our digital products.',
    responsibilities: [
      'Build and maintain RESTful APIs',
      'Work with databases and data models',
      'Implement server-side business logic',
      'Optimize application performance and scalability'
    ],
    learningOutcomes: [
      'Node.js or Python backend development',
      'REST API design and implementation',
      'Database management (SQL/NoSQL)',
      'Authentication and security best practices'
    ]
  },
  {
    id: 'uiux-intern',
    title: 'UI/UX Design Intern',
    description: 'Create intuitive, beautiful user experiences through wireframing, prototyping, and user research.',
    responsibilities: [
      'Design wireframes and prototypes',
      'Conduct user research and usability testing',
      'Create design systems and style guides',
      'Collaborate with developers on implementation'
    ],
    learningOutcomes: [
      'Figma and modern design tools',
      'User-centered design principles',
      'Design systems and component libraries',
      'Prototyping and user testing'
    ]
  }
];

export function getPositionById(id: string): Position | undefined {
  return positions.find(position => position.id === id);
}

export function getPositionTitle(id: string): string {
  const position = getPositionById(id);
  return position ? position.title : 'Unknown Position';
}
