const path = require('path');

async function createDrawingsPages(graphql, actions) {
    const template = path.resolve('./src/templates/Drawing.js');
    const {
        data: { allFile: drawings },
    } = await graphql(`
        {
            allFile(filter: { relativePath: { regex: "/artwork/" } }) {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `);

    drawings.edges.forEach(({ node }) => {
        actions.createPage({
            path: `/art/${node.name}`,
            context: {
                title: node.name,
            },
            component: template,
        });
    });
}

exports.createPages = async ({ graphql, actions }) => {
    return Promise.all([createDrawingsPages(graphql, actions)]);
};
