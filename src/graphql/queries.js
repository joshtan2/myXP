/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayerModel = /* GraphQL */ `
  query GetPlayerModel($id: ID!) {
    getPlayerModel(id: $id) {
      id
      games
      experiences
      user_info {
        name
        gamer_tag
        email
        pronouns
        location
        twitter
        youtube
      }
      user_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        user_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlayerModels = /* GraphQL */ `
  query SyncPlayerModels(
    $filter: ModelPlayerModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayerModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        games
        experiences
        user_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
