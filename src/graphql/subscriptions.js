/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTestModel = /* GraphQL */ `
  subscription OnCreateTestModel(
    $filter: ModelSubscriptionTestModelFilterInput
  ) {
    onCreateTestModel(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTestModel = /* GraphQL */ `
  subscription OnUpdateTestModel(
    $filter: ModelSubscriptionTestModelFilterInput
  ) {
    onUpdateTestModel(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTestModel = /* GraphQL */ `
  subscription OnDeleteTestModel(
    $filter: ModelSubscriptionTestModelFilterInput
  ) {
    onDeleteTestModel(filter: $filter) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayerModel = /* GraphQL */ `
  subscription OnCreatePlayerModel(
    $filter: ModelSubscriptionPlayerModelFilterInput
  ) {
    onCreatePlayerModel(filter: $filter) {
      id
      games
      experiences
      user_info
      createdAt
      updatedAt
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
      user_info
      createdAt
      updatedAt
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
      user_info
      createdAt
      updatedAt
    }
  }
`;
