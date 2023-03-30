import { gql } from '@apollo/client';

export const QUERY_Product = gql`
  query getProducts {
    products {
        _id
        name
        description
        image
        price
        saleType
        saleEndTime
        createdBy
        createdAt
        deletedAt
        category {
            _id
        }
    }
    }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query getProducts {  
    products {
        _id
        name
        description
        image
        price
        saleType
        saleEndTime
        createdBy
        createdAt
        category {
            name
        }
    }
}`

export const QUERY_CATEGORIES = gql`
    query getCategories {
        categories {
            _id
            name  
        }  
`;
