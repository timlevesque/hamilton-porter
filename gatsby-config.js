module.exports = {
    siteMetadata: {
        title: `Hamilton-Porter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/hp-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `https://hpapi.trlevesque.com`,
                queryLimit: 1000, // Default to 100
                contentTypes: [`article`, 'industries', `values`, `people`],
                //If using single types place them in this array.
                singleTypes: [`home`, `test`, `about-spot`, `logos`, `about-page`, `value-spot`, `clients`, `candidates`, `client-testimonials`, `candidate-testimonials`],
                // Possibility to login with a strapi user, when content types are not publically available (optional).
                //loginData: {
                //identifier: "",
                //password: "",
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}