import { MetadataRoute } from 'next';

import { BASE_URL } from '@/constants';

const generateRobots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${BASE_URL}/sitemap.xml`
  };
};

export default generateRobots;
