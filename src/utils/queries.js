import { gql } from '@apollo/client';

export const MOVIES = gql`
    query SearchMovies($name: String!) {
        searchMovies(query: $name, page: 1) {
            id
            name
            genres {
                name
            }
            score
            similar(limit: 2) {
                id
                name
            }
        }
    }
`;
