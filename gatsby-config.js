const fs = require('fs');

(process.env.NODE_ENV !== 'production' || process.env.DEPLOYED !== 'true') &&
    require('dotenv').config({
        path: `.env.development`,
    });

const siteUrl = process.env.GATSBY_URL || 'https://example.com';

let localDataSources = [];
const baseDataPath = `${__dirname}/src/data`;
if (fs.existsSync(baseDataPath)) {
    localDataSources = fs.readdirSync(`${__dirname}/src/data`).map((dir) => {
        return {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `${dir}`,
                path: `${baseDataPath}/${dir}`,
            },
        };
    });
}

module.exports = {
    siteMetadata: {
        title: 'Simple Portfolio',
        description: 'A portfolio for a digital artist.',
        author: 'Simple Portfolio',
        keywords: ['gatsby', 'portfolio', 'react'],
        siteUrl: siteUrl,
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
                    {
                        allSitePage{
                            nodes{
                                path
                            }
                        }
                    }                    
                `,
                resolveSiteUrl: () => siteUrl,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages.map((page) => {
                        return { ...page };
                    });
                },
                serialize: ({ path }) => {
                    return {
                        url: path,
                    };
                },
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                    quality: 50,
                    breakpoints: [378, 768, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        'gatsby-transformer-sharp',
        ...localDataSources,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: siteUrl,
                noTrailingSlash: true,
            },
        },
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: process.env.GATSBY_DATO_TOKEN,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: './src/images/icon.png',
            },
        },
    ],
};
