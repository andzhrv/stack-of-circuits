import { MetadataRoute } from 'next';

const generateRobots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://stackofcircuits.com/sitemap.xml'
  };
};

export default generateRobots;
