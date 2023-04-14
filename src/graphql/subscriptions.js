/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayerModel = /* GraphQL */ `
  subscription OnCreatePlayerModel(
    $filter: ModelSubscriptionPlayerModelFilterInput
  ) {
    onCreatePlayerModel(filter: $filter) {
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
export const onUpdatePlayerModel = /* GraphQL */ `
  subscription OnUpdatePlayerModel(
    $filter: ModelSubscriptionPlayerModelFilterInput
  ) {
    onUpdatePlayerModel(filter: $filter) {
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
export const onDeletePlayerModel = /* GraphQL */ `
  subscription OnDeletePlayerModel(
    $filter: ModelSubscriptionPlayerModelFilterInput
  ) {
    onDeletePlayerModel(filter: $filter) {
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