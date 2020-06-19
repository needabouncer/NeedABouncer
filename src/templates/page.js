
import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs";
import Layout from '../components/layout/layout';
import SliceRenderer from '../components/slices/SliceRenderer';
import PageContent from '../components/layout/pageContent';
import CCTV from '../components/content/cctv/cctv';
import SEO from '../components/seo';


export const query = graphql`
query MyPageQuery($uid: String) {
    prismic {
        allPages(uid: $uid) {
          edges {
            node {
              title
              text
              _linkType
              _meta {
                uid
                id
                type
              }
              body {
                ... on PRISMIC_PageBodyText {
                  type
                  label
                  primary {
                    content
                  }
                }
                ... on PRISMIC_PageBodyEmbed {
                  type
                  label
                  primary {
                    embed_link
                  }
                }
                ... on PRISMIC_PageBodyForm {
                  type
                  label
                  primary {
                    form_id
                  }
                }
                ... on PRISMIC_PageBodyGroup_acc {
                  fields {
                    content
                    title1
                  }
                  type
                  label
                }
                ... on PRISMIC_PageBodyCard {
                  type
                  label
                  fields {
                    image
                    card_text
                    title1
                    link {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                    imageSharp {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                        fixed {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_PageBodyImage {
                  type
                  label
                  primary {
                    display
                    use_dimensions
                    uploaded_image
                    uploaded_imageSharp {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                        fixed {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }`


export default ({ data }) => {
    const doc = data.prismic.allPages.edges.slice(0, 1).pop()
    if (!doc) return null
    return (
      <React.Fragment>
        <SEO title={doc.node.title[0].text} />
        <Layout>
          <CCTV />
          <PageContent>
            <h1>{RichText.asText(doc.node.title)}</h1>
            <div>{RichText.render(doc.node.text)}</div>
            <SliceRenderer slices={doc.node.body} />
          </PageContent>
        </Layout>
      </React.Fragment>
    )
  }

