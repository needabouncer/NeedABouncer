import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo";
import {Colors} from '../constants/colors';
import PageContent from '../components/layout/pageContent';

import { Link } from 'gatsby';

const Attribution = () => (
  <Layout>
    <SEO title="Image Attribution" />
        <PageContent>
        <h1>Image Attribution</h1>
        <h4>Home page Security Room</h4>
        <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by macrovector - www.freepik.com</a>
        <h4>CCTV cameras</h4>
        <a href="https://www.freepik.com/free-photos-vectors/design">Design vector created by freepik - www.freepik.com</a>
        <h4>Go back</h4>
        <div>
            <Link activeStyle={{color: Colors.secondary}} to="/">Head back to the home page</Link>
        </div>
    </PageContent>
  </Layout>
)

export default Attribution