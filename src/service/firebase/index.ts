'use client';
import { initializeApp } from 'firebase/app';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updatePassword,
  AuthError
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB7I556Ro_gkpdCerhmwnT0SArHkxw6klA',
  authDomain: 'antimultasbrasil-auth-5bf71.firebaseapp.com',
  projectId: 'antimultasbrasil-auth-5bf71',
  storageBucket: 'antimultasbrasil-auth-5bf71.appspot.com',
  messagingSenderId: '885492056505',
  appId: '1:885492056505:web:1503ba48831006dc9cb668',
  measurementId: 'G-Z7LEXYL0GR'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const currentUser = () => auth.currentUser;

export async function signInWithGoogleAsync() {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}

export async function signInWithFacebookAsync() {
  const provider = new FacebookAuthProvider();
  return await signInWithPopup(auth, provider);
}

export async function loginAsync(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function logoutAsync() {
  return await signOut(auth);
}

export function onAuthStateChangedAsync(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export function createUserWithEmailAndPasswordAsync(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signInWithEmailAndPasswordAsync(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function updateUserProfileAsync(user: User, name: string) {
  return updateProfile(user, { displayName: name });
}

export function forgotPasswordAsync(email: string) {
  return sendPasswordResetEmail(auth, email);
}

export function resetPasswordAsync(code: string, newPassword: string) {
  return confirmPasswordReset(auth, code, newPassword);
}

export function changePasswordAsync(user: User, newPassword: string) {
  return updatePassword(user, newPassword);
}

export function handleFirebaseError(error: unknown): string {
  if (error instanceof Error && 'code' in error) {
    const authError = error as AuthError;
    switch (authError.code) {
      case 'auth/user-not-found':
        return 'Usuário não encontrado. Verifique o email informado.';
      case 'auth/wrong-password':
        return 'Senha incorreta. Verifique a senha informada.';
      case 'auth/weak-password':
        return 'A senha deve ter no mínimo 6 caracteres.';
      case 'auth/email-already-in-use':
        return 'O email informado já está sendo usado por outra conta.';
      case 'auth/operation-not-allowed':
        return 'Operação não permitida. Contate o suporte.';
      case 'auth/popup-closed-by-user':
        return 'O popup foi fechado antes da conclusão da operação de login.';
      case 'auth/cancelled-popup-request':
        return 'A solicitação de login via popup foi cancelada.';
      case 'auth/popup-blocked':
        return 'O navegador bloqueou a janela popup de login.';
      case 'auth/network-request-failed':
        return 'Falha na conexão de rede. Verifique sua conexão com a internet.';
      case 'auth/invalid-email':
        return 'Email inválido. Verifique o email informado.';
      case 'auth/invalid-action-code':
        return 'Código de ação inválido. Verifique o código informado.';
      case 'auth/expired-action-code':
        return 'Código de ação expirado. Solicite um novo código.';
      case 'auth/invalid-credential':
        return 'Credencial inválida. Verifique as informações de login, como email e senha.';
      case 'auth/too-many-requests':
        return 'Você fez muitas tentativas de login sem sucesso. Por favor, tente novamente mais tarde.';
      default:
        return 'Ocorreu um erro ao realizar a autenticação. Por favor, tente novamente mais tarde.';
    }
  } else {
    return 'Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.';
  }
}
