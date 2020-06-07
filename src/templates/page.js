
import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs";
import Layout from '../components/layout';
import SliceRenderer from '../components/slices/SliceRenderer';
import PageContent from '../components/layout/pageContent';
import CCTV from '../components/content/cctv/cctv';



export const query = graphql`
query MyPageQuery($uid: String) {
    prismic {
        allPages(uid: $uid) {
          edges {
            node {
              title
              page_banner
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
                ... on PRISMIC_PageBodyAccordion {
                  type
                  label
                  primary {
                    content
                    heading
                  }
                }
                ... on PRISMIC_PageBodyCard {
                  type
                  label
                  primary {
                    title1
                    link {
                      ... on PRISMIC__ExternalLink {
                        _linkType
                      }
                    }
                    image
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
                    card_text
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
      <Layout>
        <CCTV />
        <PageContent>
          <h1>{RichText.asText(doc.node.title)}</h1>
          <span>
            {/* <img src={doc.node.page_banner.url}></img> */}
          </span>
            <div>{RichText.render(doc.node.text)}</div>
            <SliceRenderer slices={doc.node.body} />
        </PageContent>
      </Layout>
    )
  }

