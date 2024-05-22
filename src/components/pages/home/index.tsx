'use client';
import HomeHeader from './HomeHeader';
import QueryFormContainer from './QueryForm/QueryFormContainer';

const HomePage = () => {
  return (
    <section className="grid grid-cols-1 gap-7 md:flex md:flex-col md:items-center md:justify-center lg:grid lg:grid-cols-2">
      <div className="col-span-1 space-y-2 md:col-span-1 md:w-3/4">
        <HomeHeader />
        <QueryFormContainer />
      </div>
      <div className="col-span-1 hidden text-black sm:block md:col-span-1">
        Espaço reservado para incluir um logotipo
      </div>
    </section>
  );
};

export default HomePage;
