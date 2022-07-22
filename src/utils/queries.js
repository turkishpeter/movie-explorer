import { gql } from '@apollo/client';

export const MOVIES_QUERY = {
    query: gql`
        query SearchMovies($name: String!) {
            searchMovies(query: $name, page: 1) {
                id
                name
                genres {
                    name
                }
                score
                similar(limit: 4) {
                    id
                    name
                }
            }
        }
    `,
    keyName: 'searchMovies',
};
export const RELATED_QUERY = {
    query: gql`
        query Movies($ids: [ID!]!) {
            movies(ids: $ids) {
                id
                name
                genres {
                    name
                }
                score
                similar(limit: 4) {
                    id
                    name
                }
            }
        }
    `,
    keyName: 'movies',
};

export const WIKIPEDIA = (query) => {
    return `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${query}`;
};
