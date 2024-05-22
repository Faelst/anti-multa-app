'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';
import {
  createUserWithEmailAndPasswordAsync,
  currentUser,
  logoutAsync,
  signInWithEmailAndPasswordAsync,
  signInWithFacebookAsync,
  signInWithGoogleAsync,
  onAuthStateChangedAsync,
  updateUserProfileAsync,
  forgotPasswordAsync,
  resetPasswordAsync,
  changePasswordAsync,
  handleFirebaseError
} from '@/service/firebase';
import {
  AuthenticationResponse,
  IdentityAction,
  User,
  UserContextProps
} from '@/service/firebase/identity.interface';
import { UserCredential, getAuth, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'sonner';

const UserContext = createContext<UserContextProps>({
  user: undefined,
  token: undefined,
  authFlow: undefined,
  submitError: undefined,
  logout: () => 0,
  clearSubmitError: () => undefined,
  isAuthenticated: () => false,
  forgotPassword: () => {
    throw Error('UserContext not initialized');
  },
  resetPassword: () => {
    throw Error('UserContext not initialized');
  },
  navigateToFlow: () => undefined,
  signIn: () => {
    throw Error('UserContext not initialized');
  },
  signInFacebook: () => {
    throw Error('UserContext not initialized');
  },
  signInGoogle: () => {
    throw Error('UserContext not initialized');
  },
  changePassword: () => {
    throw Error('UserContext not initialized');
  },
  confirmPasswordRecover: () => {
    throw Error('UserContext not initialized');
  },
  confirmPassword: () => {
    throw Error('UserContext not initialized');
  },
  registerUser: () => {
    throw Error('UserContext not initialized');
  }
});

interface IdentityProviderProps {
  children: JSX.Element;
}

const mapCurrentUser = () => {
  var cur = currentUser();
  if (cur) {
    return {
      id: cur.uid
    };
  }
  return undefined;
};

const loadTokenAndVerifiedAttrs = (user: User | undefined, setUser: any, setToken: any) => {
  const cur = currentUser();
  if (cur) {
    cur.getIdToken().then((token) => {
      setToken(token);
    });
  }

  const displayName = localStorage.getItem('displayName');
  if (!user?.sub && cur) {
    cur.getIdTokenResult().then((tokenResult) => {
      setUser((prev: User) => ({
        ...prev,
        name: tokenResult.claims.name ?? displayName,
        verified: tokenResult.claims.email_verified,
        sub: tokenResult.claims.sub,
        email: tokenResult.claims.email,
        image: tokenResult.claims.picture
      }));
    });
  }
};

export const IdentityProvider = ({ children }: IdentityProviderProps) => {
  const [user, setUser] = useState<User | undefined>(mapCurrentUser());
  const [authFlow, setAuthFlow] = useState<AuthenticationResponse | undefined>();
  const [token, setToken] = useState<string | undefined>(undefined);
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedAsync((user) => {
      if (user) {
        const userObj: User = {
          id: user?.uid,
          name: user?.displayName!,
          email: user?.email!,
          image: user?.photoURL!,
          verified: user?.emailVerified!
        };

        setUser(userObj);

        //@ts-ignore
        const token = user?.accessToken;
        setToken(token);
      } else {
        setUser(undefined);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    loadTokenAndVerifiedAttrs(undefined, setUser, setToken);
  }, []);

  useEffect(() => {
    const auth = getAuth();

    const interval = setInterval(() => {
      if (token) {
        console.log('identity context - token available');
        onAuthStateChanged(auth, (user) => {
          if (user) {
            user.getIdToken().then((newToken) => {
              // Lógica para verificar se o token foi atualizado
              if (token !== newToken) {
                console.log('identity context - token updated');
                // Atualizar o token se necessário
                setToken(newToken);
              }
            });
          }
        });
      } else {
        console.log('identity context - token not available');
      }
    }, 3 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [token]);

  useEffect(() => {
    if (authFlow?.type === 'success') {
      loadTokenAndVerifiedAttrs(user, setUser, setToken);
    }
    if (authFlow?.type === 'failure') {
      console.log('IdentityProvider - authFlow failure', {
        details: authFlow.failureDetails
      });
      setSubmitError(authFlow?.failureDetails?.message);
    }
  }, [authFlow, user]);

  const isAuthenticated = () => (user && (!authFlow || authFlow?.type === 'success')) === true;
  const clearSubmitError = () => setSubmitError(undefined);

  const handleSuccess = (resp: UserCredential, action: IdentityAction): AuthenticationResponse => {
    const cur = mapCurrentUser();
    setUser(cur);
    setAuthFlow({ type: 'success', user: resp });
    clearSubmitError();

    const successMessages: Record<IdentityAction, string> = {
      [IdentityAction.RegisterUser]: 'Ótimo! Cadastro realizado com sucesso!',
      [IdentityAction.SignIn]: 'Ótimo! Login realizado com sucesso!',
      [IdentityAction.SignInFacebook]: 'Ótimo! Login com Facebook realizado com sucesso!',
      [IdentityAction.SignInGoogle]: 'Ótimo! Login com Google realizado com sucesso!',
      [IdentityAction.ResetPassword]:
        'Ótimo! Sua senha foi alterada com sucesso, faça login novamente!',
      [IdentityAction.ForgotPassword]: 'Ótimo! Email de recuperação de senha enviado com sucesso!',
      [IdentityAction.Logout]: 'Ótimo! Você foi deslogado com sucesso!',
      [IdentityAction.changePassword]: 'Ótimo! Sua senha foi alterada com sucesso!'
    };

    toast.success(successMessages[action]);
    return { type: 'success', user: resp };
  };

  const handleError = (error: unknown, action: IdentityAction): AuthenticationResponse => {
    const errorMessage = handleFirebaseError(error);
    setAuthFlow({
      type: 'failure',
      failureDetails: { message: errorMessage }
    });
    setSubmitError(errorMessage);

    const errorMessages: Record<IdentityAction, string> = {
      [IdentityAction.RegisterUser]: `Ops! Não foi possível realizar o cadastro: ${errorMessage}`,
      [IdentityAction.SignIn]: `Ops! Não foi possível realizar o login: ${errorMessage}`,
      [IdentityAction.SignInFacebook]: `Ops! Não foi possível realizar o login com Facebook: ${errorMessage}`,
      [IdentityAction.SignInGoogle]: `Ops! Não foi possível realizar o login com Google: ${errorMessage}`,
      [IdentityAction.ResetPassword]: `Ops! Não foi possível alterar a senha: ${errorMessage}`,
      [IdentityAction.ForgotPassword]: `Ops! Não foi possível enviar o email de recuperação de senha: ${errorMessage}`,
      [IdentityAction.Logout]: `Ops! Não foi possível realizar o logout: ${errorMessage}`,
      [IdentityAction.changePassword]: `Ops! Não foi possível alterar a senha: ${errorMessage}`
    };

    toast.error(errorMessages[action]);
    return { type: 'failure', failureDetails: { message: errorMessage } };
  };

  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ): Promise<AuthenticationResponse> => {
    await localStorage.setItem('displayName', displayName);

    try {
      const resp = await createUserWithEmailAndPasswordAsync(email, password);
      await updateUserProfileAsync(resp?.user, displayName);
      return handleSuccess(resp, IdentityAction.RegisterUser);
    } catch (error) {
      return handleError(error, IdentityAction.RegisterUser);
    }
  };

  const signIn = async (email: string, password: string): Promise<AuthenticationResponse> => {
    try {
      const resp = await signInWithEmailAndPasswordAsync(email, password);
      return handleSuccess(resp, IdentityAction.SignIn);
    } catch (error) {
      return handleError(error, IdentityAction.SignIn);
    }
  };

  const signInFacebook = async (): Promise<AuthenticationResponse> => {
    try {
      const resp = await signInWithFacebookAsync();
      return handleSuccess(resp, IdentityAction.SignInFacebook);
    } catch (error) {
      return handleError(error, IdentityAction.SignInFacebook);
    }
  };

  const signInGoogle = async (): Promise<AuthenticationResponse> => {
    try {
      const resp = await signInWithGoogleAsync();
      return handleSuccess(resp, IdentityAction.SignInGoogle);
    } catch (error) {
      return handleError(error, IdentityAction.SignInGoogle);
    }
  };

  const logout = () => {
    try {
      logoutAsync();
      setUser(undefined);
      setToken(undefined);
      setAuthFlow(undefined);
      toast.success('Logout realizado com sucesso!');
    } catch (error) {
      const errorMessage = handleFirebaseError(error);
      setSubmitError(errorMessage);
      handleError(error, IdentityAction.Logout);
    }
  };

  const changePassword = async (oldPassword: string): Promise<void> => {
    if (!user) return;
    const userFirebase = user as any;

    try {
      return await changePasswordAsync(userFirebase, oldPassword);
    } catch (error) {
      handleError(error, IdentityAction.changePassword);
    }
  };

  const forgotPassword = async (email: string): Promise<void> => {
    try {
      await forgotPasswordAsync(email);
      handleSuccess(user as any, IdentityAction.ForgotPassword);
    } catch (error) {
      handleError(error, IdentityAction.ForgotPassword);
    }
  };

  const resetPassword = async (
    code: string,
    newPassword: string
  ): Promise<AuthenticationResponse> => {
    try {
      await resetPasswordAsync(code, newPassword);
      const userCredential = currentUser() as any;
      return handleSuccess(userCredential, IdentityAction.ResetPassword);
    } catch (error) {
      return handleError(error, IdentityAction.ResetPassword);
    }
  };

  const confirmPasswordRecover = async (
    email: string,
    code: string,
    password: string
  ): Promise<any> => {};

  const confirmPassword = async (email: string, password: string) => {};

  const navigateToFlow = (navigate: NextRouter): void => {
    switch (authFlow?.type) {
      case 'success':
        navigate.push('/');
        break;
      case 'newPassword':
        navigate.push('/login/confirmar-senha');
        break;
      case 'failure':
        break;
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        authFlow,
        submitError,
        clearSubmitError,
        logout,
        signIn,
        signInFacebook,
        signInGoogle,
        changePassword,
        isAuthenticated,
        navigateToFlow,
        forgotPassword,
        confirmPasswordRecover,
        confirmPassword,
        resetPassword,
        registerUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useIdentity(): UserContextProps {
  const context = useContext(UserContext);
  return context;
}
