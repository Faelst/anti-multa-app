import StoresHeader from './StoresHeader';
import Stores from './Stores';

const StoresPage = () => {
  return (
    <div className="grid grid-cols-1">
      <StoresHeader />
      <Stores />
    </div>
  );
};

export default StoresPage;
