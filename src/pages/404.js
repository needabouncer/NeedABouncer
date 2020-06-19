import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo";
import {Colors} from '../constants/colors';

import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page does not currently exist.</p>
    <Link activeStyle={{color: Colors.secondary}} to="/">Head back to the home page</Link>
  </Layout>
)

export default NotFoundPage
