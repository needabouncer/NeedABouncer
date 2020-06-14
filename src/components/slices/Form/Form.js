import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import NetlifyForm from '../../UI/form/form';
import classes from './FormStyles.module.css';
import Paper from '@material-ui/core/Paper';

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

  let formData;

  if (data.prismic.allForms.edges){
    formData = data.prismic.allForms.edges.filter(form => {
        return +form.node.form_id[0].text === +slice.primary.form_id}
    );
    return (
    <div className={classes.Form}>
        <Paper>
            <NetlifyForm formData={formData[0]} />
        </Paper>
    </div>
    )
  }

  else {
      return null;
  }

}

export default Form

