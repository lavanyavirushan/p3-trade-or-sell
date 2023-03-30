import { gql } from '@apollo/client';

export const LOGIN = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token 
        user {
            _id
        }
    }
}`;

export const ADD_USER = gql `
mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}`;

export const ADD_PRODUCT = gql `
mutation addProduct($name: String!, $description: String!, $image: String!, $category: String!, $price: Float!, $saleType: String!, $saleEndTime: String!) {
    addProduct(name: $name, description: $description, image: $image, category: $category, price: $price, saleType: $saleType, saleEndTime: $saleEndTime) {
        _id
        name
        description
        image
        category
        price
        saleType
        saleEndTime
        createdBy
        createdAt
        deletedAt
    }
}`;