"use strict";

module.exports = {
  siteMetadata: {
    title: 'CodeBlock',
    author: 'Nouran Bakry',
    description: 'My attempt at blogging',
    siteUrl: 'https://codeblock.io',
    social: {
      twitter: '@nouranbakry_'
    }
  },
  pathPrefix: '/codeblock.io',
  plugins: ["gatsby-plugin-offline", {
    resolve: "gatsby-source-filesystem",
    options: {
      path: "".concat(__dirname, "/src/pages"),
      name: 'pages'
    }
  }, {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [{
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 590
        }
      }, {
        resolve: "gatsby-remark-responsive-iframe",
        options: {
          wrapperStyle: "margin-bottom: 1.0725rem"
        }
      }, 'gatsby-remark-autolink-headers', {
        resolve: 'gatsby-remark-prismjs',
        options: {
          inlineCodeMarker: '÷'
        }
      }, 'gatsby-remark-copy-linked-files', 'gatsby-remark-smartypants', {
        resolve: 'gatsby-remark-external-links',
        options: {
          target: '_blank'
        }
      }]
    }
  }, "gatsby-transformer-sharp", "gatsby-plugin-sharp", {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-130227707-1"
    }
  }, {
    resolve: "gatsby-plugin-feed",
    options: {
      query: "\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",
      feeds: [{
        serialize: function serialize(_ref) {
          var _ref$query = _ref.query,
              site = _ref$query.site,
              allMarkdownRemark = _ref$query.allMarkdownRemark;
          return allMarkdownRemark.edges.map(function (edge) {
            var siteUrl = site.siteMetadata.siteUrl;
            var postText = "\n                <div style=\"margin-top=55px; font-style: italic;\">(This is an article posted to my blog at codeblock.io. You can read it online by <a href=\"".concat(siteUrl + edge.node.fields.slug, "\">clicking here</a>.)</div>\n              ");
            var html = edge.node.html; // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65

            html = html.replace(/href="\//g, "href=\"".concat(siteUrl, "/")).replace(/src="\//g, "src=\"".concat(siteUrl, "/")).replace(/"\/static\//g, "\"".concat(siteUrl, "/static/")).replace(/,\s*\/static\//g, ",".concat(siteUrl, "/static/"));
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.frontmatter.spoiler,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{
                'content:encoded': html + postText
              }]
            });
          });
        },
        query: "\n              {\n                allMarkdownRemark(\n                  limit: 1000,\n                  sort: { order: DESC, fields: [frontmatter___date] }\n                  filter: {fields: { langKey: {eq: \"en\"}}}\n                ) {\n                  edges {\n                    node {\n                      excerpt(pruneLength: 250)\n                      html\n                      fields { \n                        slug   \n                      }\n                      frontmatter {\n                        title\n                        date\n                        spoiler\n                      }\n                    }\n                  }\n                }\n              }\n            ",
        output: '/rss.xml',
        title: "Nouran Bakry's CodeBlock Blog"
      }]
    }
  }, {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Codeblock",
      short_name: "Codeblock",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#ffa7c4",
      display: "minimal-ui",
      icon: "src/assets/icon.png",
      theme_color_in_head: false
    }
  }, "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'src/utils/typography'
    }
  }, {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyDefault: 'en',
      useLangKeyLayout: false
    }
  }, "gatsby-plugin-catch-links"]
};