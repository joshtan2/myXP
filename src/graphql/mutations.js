/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayerModel = /* GraphQL */ `
  mutation CreatePlayerModel(
    $input: CreatePlayerModelInput!
    $condition: ModelPlayerModelConditionInput
  ) {
    createPlayerModel(input: $input, condition: $condition) {
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
export const updatePlayerModel = /* GraphQL */ `
  mutation UpdatePlayerModel(
    $input: UpdatePlayerModelInput!
    $condition: ModelPlayerModelConditionInput
  ) {
    updatePlayerModel(input: $input, condition: $condition) {
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
export const deletePlayerModel = /* GraphQL */ `
  mutation DeletePlayerModel(
    $input: DeletePlayerModelInput!
    $condition: ModelPlayerModelConditionInput
  ) {
    deletePlayerModel(input: $input, condition: $condition) {
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
