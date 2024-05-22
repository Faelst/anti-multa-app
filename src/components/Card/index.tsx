import { Typography } from '@/components';
import { CustomSpan } from '@/components/Custom';

type CardContent = {
  title: string;
  value: string;
};

interface CardDataProps {
  data: CardContent[];
  width?: string;
}

const CardData: React.FC<CardDataProps> = ({ data, width = 'fit' }) => {
  return (
    <div
      className={`flex w-${width} flex-col gap-1 rounded-md border border-gray-300 bg-white p-5 md:dark:border-none md:dark:bg-[#15141b] md:dark:shadow`}
    >
      {data.map((item, index) => {
        const { title, value } = item;
        return (
          <div key={index}>
            <Typography variant="sm" className="font-bold md:dark:text-white">
              {title}:&nbsp;
              <CustomSpan value={value} />
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
export default CardData;
