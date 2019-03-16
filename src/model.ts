export interface ChatMessage {
  id: string;
  text: string;
  username: string;
}

export type UsernameStatus = 'pristine' | 'done' | 'sending' | 'error';
export interface UsernameState {
  username: string;
  error: string;
  status: UsernameStatus;
}
