import { MetadataRoute } from 'next';

const generateSitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://stackofcircuits.com/ru/tools/battery-life',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/ru/tools/inductor-color-code',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/ru/tools/led-resistor',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/ru/tools/ohms-law',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/ru/tools/parallel-equivalence',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/ru/tools/resistor-color-code',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/ru/tools/smd-resistor-code',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/ru/tools/voltage-divider',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/tools/battery-life',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/tools/inductor-color-code',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/tools/led-resistor',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/tools/ohms-law',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/tools/parallel-equivalence',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/tools/resistor-color-code',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/tools/smd-resistor-code',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/tools/voltage-divider',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://stackofcircuits.com/ru/tools',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://stackofcircuits.com/tools',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://stackofcircuits.com/ru',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: 'https://stackofcircuits.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ];
};

export default generateSitemap;
