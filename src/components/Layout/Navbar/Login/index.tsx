import SignInContainer from '@/components/pages/Login/SignIn/SignInContainer';
import SignupContainer from '@/components/pages/Login/Signup/SignupContainer';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';

interface LoginProps {
  isSignInModal: boolean;
  isSignUpModal: boolean;
  setIsSignUpModal: Dispatch<SetStateAction<boolean>>;
  setIsSignInModal: Dispatch<SetStateAction<boolean>>;
}

export const Login: FunctionComponent<LoginProps> = ({
  setIsSignInModal,
  setIsSignUpModal,
  isSignInModal,
  isSignUpModal
}) => {
  const handleOnClose = () => {
    setIsSignInModal(false);
    setIsSignUpModal(false);
  };

  return (
    <div>
      <SignupContainer openModal={isSignUpModal} onCloseModal={handleOnClose} />
      <SignInContainer
        openModal={isSignInModal}
        setIsSignUpModal={setIsSignUpModal}
        onCloseModal={handleOnClose}
      />
    </div>
  );
};
