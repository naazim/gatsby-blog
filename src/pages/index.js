import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h2`
  margin-bottom: 20px;
  color: blue;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <BlogLink to={node.fields.slug}>
          <BlogTitle>
            {node.frontmatter.title} - {node.frontmatter.date}
          </BlogTitle>
        </BlogLink>
        <p>{node.excerpt}</p>
      </div>
    ))}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
