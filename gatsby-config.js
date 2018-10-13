module.exports = {
  siteMetadata: {
    title: 'Cristiano Dalbem',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cristiano Dalbem Portfolio',
        short_name: 'Cristiano Dalbem',
        start_url: '/',
        background_color: '#F5882D',
        theme_color: '#F5882D',
        display: 'minimal-ui',
        icon: 'src/images/selfie.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Muli\:400,600,700,900`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-19085664-5',
        // Puts tracking script in the head instead of the body
        head: true, 
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['localhost*'],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        siteSpeedSampleRate: 100,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-grid",
            options: {
              gridGap: "2rem",
              margin: '0'
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
              quality: 90,
              linkImagesToOriginal: false
            },
          },
          'gatsby-remark-smartypants',
          `gatsby-remark-reading-time`,
          'gatsby-remark-component',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
  ],
}
