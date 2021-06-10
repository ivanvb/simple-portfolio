const path = require('path');

async function createDrawingsPages(graphql, actions) {
    const template = path.resolve('./src/templates/Drawing.js');
    const {
        data: { allDatoCmsDrawing: drawings },
    } = await graphql(`
        {
            allDatoCmsDrawing {
                edges {
                    node {
                        title
                        url
                    }
                }
            }
        }
    `);

    drawings.edges.forEach(({ node }) => {
        actions.createPage({
            path: `/art/${node.url}`,
            context: {
                title: node.title,
            },
            component: template,
        });
    });
}

exports.createPages = async ({ graphql, actions }) => {
    return Promise.all([createDrawingsPages(graphql, actions)]);
};
