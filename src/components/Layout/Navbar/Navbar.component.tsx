'use client';
import { FunctionComponent, useState } from 'react';
import { NavbarProps } from './Navbar.interface';
import Link from 'next/link';
import { Button } from '../../UI/atoms';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { CiLogin } from 'react-icons/ci';
import { ThemeButton } from '@/components';
import { useTheme } from 'next-themes';
import { LogoutIcon } from '@/assets/icon';
import { Login } from './Login';
import { useIdentity } from '@/context/identityContext';

export const Navbar: FunctionComponent<NavbarProps> = () => {
  const { theme } = useTheme();
  const { isAuthenticated, logout } = useIdentity();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignInModal, setIsSignInModal] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const links = ['Home', 'Acompanhar pedidos', 'Lojas', 'Contato'];

  const handleHref = (link: string) => {
    switch (link) {
      case 'Home':
        return '/';
      case 'A AntiMultasBr':
        return '/';
      case 'Lojas':
        return '/lojas';
      case 'Acompanhar pedidos':
        return '/acompanhar-pedidos';

      case 'Contato':
        return '/contato';
      default:
        return '/';
    }
  };

  const handleOpenSigninModal = () => setIsSignInModal(true);
  const handleOpenSignupModal = () => setIsSignUpModal(true);
  const isAuth = isAuthenticated();

  const isDark = theme === 'dark';
  const logo = isDark ? '/antimultasBrDark.png' : '/antimultasBr.png';
  return (
    <>
      <Login {...{ isSignInModal, isSignUpModal, setIsSignInModal, setIsSignUpModal }} />
      <nav className="z-50 w-full border border-gray-200 md:dark:border-none">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-0.5 py-4 sm:p-4">
          <Link href="/" className="ml-2 flex items-center space-x-3 sm:ml-0 rtl:space-x-reverse">
            <img
              src={logo}
              width={110}
              height={110}
              alt="Picture of the antimultasBrasil logo"
              loading="lazy"
            />
          </Link>
          <div className="mr-2 flex space-x-2 md:order-2 rtl:space-x-reverse">
            {isAuth && (
              <Button
                variant="contained"
                size="small"
                type="button"
                onClick={logout}
                className={`flex items-center justify-center md:dark:bg-red-600 md:dark:hover:bg-red-700 md:dark:focus:ring-red-800`}
                startIcon={
                  <LogoutIcon
                    htmlColor={'#fff'}
                    sx={{
                      height: 14.5,
                      width: 15,
                      marginRight: 0.5
                    }}
                  />
                }
              >
                Sair
              </Button>
            )}
            {!isAuth && (
              <>
                <Button
                  variant="outlined"
                  size="small"
                  type="button"
                  onClick={handleOpenSigninModal}
                  className={`flex items-center justify-center md:dark:bg-red-600 md:dark:hover:bg-red-700 md:dark:focus:ring-red-800`}
                  endIcon={<CiLogin size={22} />}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  type="button"
                  onClick={handleOpenSignupModal}
                  className={`md:dark:bg-red-600 md:dark:hover:bg-red-700 md:dark:focus:ring-red-800`}
                >
                  Cadastre-se
                </Button>
              </>
            )}
            <ThemeButton />
            <Button
              size="small"
              variant="text"
              data-collapse-toggle="navbar"
              aria-controls="mobile-menu"
              type="button"
              className={`rounded-lg p-2 text-gray-500
               hover:bg-gray-100 focus:outline-none 
               focus:ring-2 focus:ring-gray-200 md:hidden md:dark:bg-[#18171e] md:dark:focus:ring-1`}
              aria-expanded="false"
              onClick={toggleMenu}
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </Button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar"
          >
            <ul className="flex flex-col space-x-5 drop-shadow-2xl md:flex-row lg:space-x-7">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={handleHref(link)}
                    className="text-gray-900 hover:text-[#EC0000] md:dark:text-white md:dark:hover:text-[#EC0000]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {isMobileMenuOpen && <MobileMenu {...{ links, handleHref, onClose: closeMobileMenu }} />}
        </div>
      </nav>
    </>
  );
};
