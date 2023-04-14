// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PlayerModel, GameNames, UserInfo } = initSchema(schema);

export {
  PlayerModel,
  GameNames,
  UserInfo
};