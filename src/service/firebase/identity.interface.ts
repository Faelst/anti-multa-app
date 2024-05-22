import { UserCredential } from 'firebase/auth';

export type AuthenticationResponse =
  | SuccessResponse
  | FailureResponse
  | NewPasswordRequiredResponse;
export type SuccessResponse = {
  type: 'success';
  user: UserCredential;
};

export type FailureResponse = {
  type: 'failure';
  user?: UserCredential;
  failureDetails: FailureDetails;
};

export type NewPasswordRequiredResponse = {
  type: 'newPassword';
  user: UserCredential;
};

export type FailureDetails = {
  message: string | undefined;
  error?: any;
  code?: number;
};

export interface User {
  id: string;
  name?: string;
  verified?: boolean;
  sub?: string;
  email?: string;
  image?: string;
}

export type UserContextProps = {
  user?: User | undefined;
  token: string | undefined;
  authFlow: AuthenticationResponse | undefined;
  submitError: string | undefined;
  clearSubmitError: () => void;
  logout: () => void;
  signIn: (email: string, password: string) => Promise<AuthenticationResponse>;
  signInFacebook: () => Promise<AuthenticationResponse>;
  signInGoogle: () => Promise<AuthenticationResponse>;
  changePassword: (password: string) => Promise<void>;
  resetPassword: (code: string, newPassword: string) => Promise<AuthenticationResponse>;
  confirmPasswordRecover: (
    email: string,
    code: string,
    password: string
  ) => Promise<AuthenticationResponse>;
  isAuthenticated: () => boolean;
  navigateToFlow: (navigate: any) => void;
  confirmPassword: (email: string, password: string) => void;
  registerUser: (email: string, password: string, name: string) => Promise<AuthenticationResponse>;
  forgotPassword: (email: string) => Promise<void>;
};

export enum IdentityAction {
  RegisterUser = 'registerUser',
  SignIn = 'signIn',
  SignInFacebook = 'signInFacebook',
  SignInGoogle = 'signInGoogle',
  ResetPassword = 'resetPassword',
  ForgotPassword = 'forgotPassword',
  Logout = 'logout',
  changePassword = 'changePassword'
}
