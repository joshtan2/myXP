/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTestModel = /* GraphQL */ `
  query GetTestModel($id: ID!) {
    getTestModel(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listTestModels = /* GraphQL */ `
  query ListTestModels(
    $filter: ModelTestModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayerModel = /* GraphQL */ `
  query GetPlayerModel($id: ID!) {
    getPlayerModel(id: $id) {
      id
      games
      experiences
      user_info
      createdAt
      updatedAt
    }
  }
`;
export const listPlayerModels = /* GraphQL */ `
  query ListPlayerModels(
    $filter: ModelPlayerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        games
        experiences
        user_info
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
