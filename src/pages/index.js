import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageContent from '../components/layout/pageContent';

import LandingHeader from '../components/content/landingHeader/landingHeader';
import ChipStrip from '../components/content/chipStrip/chipStrip';


export default ({ data }) => {
  const doc = data.prismic.allHome_ps.edges.slice(0, 1).pop();

  if (!doc) return null

  return (
    <React.Fragment>
      <SEO title="Need a Bouncer - Security Services" />
      <Layout>
        <PageContent>
          <LandingHeader formData={doc.node.body[0]}  text={doc.node.call_to_action} bannerImage={doc.node.landing_imageSharp.childImageSharp.fluid} ></LandingHeader>
          <ChipStrip chips={doc.node.primary_services} text={doc.node.sectionPrimaryServices}/>
          <ChipStrip chips={doc.node.other_services} text={doc.node.section__other_services}/>
        </PageContent>
      </Layout>
    </React.Fragment>
  )
}

export const query = graphql`query MyQuery {
  prismic {
    allHome_ps {
      edges {
        node {
          body {
            ... on PRISMIC_Home_pBodyForm {
              type
              label
              primary {
                form_id
              }
            }
            ... on PRISMIC_Home_pBodyButton {
              type
              label
              primary {
                call_to_action_text
                button_link {
                  ... on PRISMIC__ExternalLink {
                    url
                    _linkType
                  }
                  ... on PRISMIC__FileLink {
                    _linkType
                    name
                    url
                  }
                }
              }
            }
          }
          call_to_action
          landing_image
          landing_imageSharp {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
          other_services
          primary_services
          sectionPrimaryServices
          section__other_services
          title
        }
      }
    }
  }
}
`