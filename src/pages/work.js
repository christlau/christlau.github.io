import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@components';

const WorkPage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <div style={{ padding: '100px 20px' }}>
        <h1 className="big-title">Current Projects</h1>
        <ul>
          {projects.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <h3>{node.frontmatter.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

WorkPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default WorkPage;
