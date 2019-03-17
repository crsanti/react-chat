import { prop, compose, equals } from 'ramda';

export interface ChatMessage {
  id: string;
  text: string;
  username: string;
}

export interface InitialUsernameState { type: 'idle'; }
export interface LoadingUsernameState { type: 'loading'; }
export interface SuccessUsernameState { type: 'success'; username: string; }
export interface FailureUsernameState { type: 'error'; error: string; }
export type UsernameState =
  InitialUsernameState
  | LoadingUsernameState
  | SuccessUsernameState
  | FailureUsernameState;

const getType = prop('type');

type IsInitialUsernameState = (state: UsernameState) => state is InitialUsernameState;
export const isInitialState = compose(equals('idle'), getType) as IsInitialUsernameState;

type IsLoadingUsernameState = (state: UsernameState) => state is LoadingUsernameState;
export const isLoadingUsernameState = compose(equals('loading'), getType) as IsLoadingUsernameState;

type IsSuccessUsernameState = (state: UsernameState) => state is SuccessUsernameState;
export const isSuccessUsernameState = compose(equals('success'), getType) as IsSuccessUsernameState;

type IsFailureUsernameState = (state: UsernameState) => state is FailureUsernameState;
export const isFailureUsernameState = compose(equals('error'), getType) as IsFailureUsernameState;
