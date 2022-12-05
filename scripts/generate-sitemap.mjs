/**
 * 
   Note:  "postbuild": "node ./scripts/generate-sitemap.mjs",
   https://leerob.io/blog/nextjs-sitemap-robots
 * 
 */
import { writeFileSync } from 'fs';
import { globby } from 'globby';
// import prettier from 'prettier';

async function generate() {
  // const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.tsx',
    'pages/blog/**/*.mdx',
    'pages/projects/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.js',
    '!pages/api',
    '!pages/404.js'
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('data', '')
              .replace('.js', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;

            return `
              <url>
                  <loc>${`https://me.knnect.com${route}`}</loc>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  // const formatted = prettier.format(sitemap, {
  //   ...prettierConfig,
  //   parser: 'html'
  // });

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', sitemap);
}

generate();