'use client';
import { FC } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useIdentity } from '@/context/identityContext';
moment.locale('pt-br');

const date = moment();
const dayOfWeek = () => date.format('dddd');
const month = () => date.format('MMMM');
const day = () => date.format('DD');
const year = () => date.format('yyyy');

const firstName = (name: string | undefined) => {
  if (!!name) {
    return name?.split(' ')[0];
  }
  return undefined;
};

const Hello: FC = () => {
  const { user, isAuthenticated } = useIdentity();
  const name = firstName(user?.name);
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return null;
  }

  return (
    <div className="mb-2">
      <div className="mb-2 flex flex-row items-center">
        <div>
          <p className="text-sm text-black sm:text-lg md:dark:text-white">
            Olá{name && <span className="font-semibold text-red-600">&nbsp;{name}</span>}, hoje
            é&nbsp;
            <span>{dayOfWeek()}</span>,&nbsp;
            <span className="font-semibold text-red-600">
              {day()} de {month()} de {year()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
