import { gql } from "@apollo/client";

export const getContinents = gql`
    query Continents {
        continents {
            code
            name
        }
    }
`

export const getContinent = gql`
    query Continent($code: ID!) {
        continent(code: $code) {
            code
            name
            countries {
                code, 
                name, 
                emoji
            }
        }
    }
`


export const getCountries = gql`
    query Countries($continentCode: String!) {
        countries(filter: {continent: {eq: $continentCode}}) {
            code
            name
            emoji
        }
    }
`