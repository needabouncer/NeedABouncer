import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import NetlifyForm from '../../UI/form/form';

const Form = ({ slice }) => {
  const data = useStaticQuery(graphql`
  query {
    prismic {
      allForms {
        edges {
          node {
            body {
              ... on PRISMIC_FormBodyText_input {
                type
                label
                primary {
                  input_type
                  label_text
                  placeholder_text
                  required
                }
              }
            }
            form_title
            submission_complete_message
            text
            form_id
          }
        }
      }
    }
  }
  `)

  console.log('FORM')
  console.log(data.prismic.allForms.edges)
  console.log('SLICE FORM')
  console.log(slice)
  let formData;

  if (data.prismic.allForms.edges){
    formData = data.prismic.allForms.edges.filter(form => {
        console.log(form.node.form_id[0].text)
        return +form.node.form_id[0].text === +slice.primary.form_id}
    );
    console.log('FILTERED');
    console.log(formData[0])
    return <NetlifyForm formData={formData[0]} />
  }

  else {
      return null;
  }

}

export default Form

