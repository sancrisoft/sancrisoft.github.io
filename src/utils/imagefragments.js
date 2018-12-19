import { graphql } from 'gatsby'

export const imageFragment = graphql`
fragment imageFragment on File {
    childImageSharp {
        sizes(maxWidth: 1000) {
            ...GatsbyImageSharpSizes
        }
    }
}
`;
