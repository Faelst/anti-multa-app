'use client';
import { useTheme } from 'next-themes';
import AlertDialog from '../../Dialog';
import HomeHeader from './HomeHeader';
import QueryFormContainer from './QueryForm/QueryFormContainer';

const HomePage = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';
  const logo = isDark ? '/image.png' : '/image.png';

  return (
    <section className="grid grid-cols-1 gap-7 md:flex md:flex-col md:items-center md:justify-center lg:grid lg:grid-cols-2">
      <div className="col-span-1 space-y-2 md:col-span-1 md:w-3/4">
        <HomeHeader />
        <QueryFormContainer />
        <AlertDialog />
      </div>
      <div className="col-span-1 hidden text-black sm:block md:col-span-1">
        <img
          src={logo}
          width="110%"
          height="110%"
          alt="Picture of the antimultasBrasil logo"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HomePage;
