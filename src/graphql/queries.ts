import { gql } from "@apollo/client";

export const getContinents = gql`
    query Continents {
        continents {
            code
            name
        }
    }
`