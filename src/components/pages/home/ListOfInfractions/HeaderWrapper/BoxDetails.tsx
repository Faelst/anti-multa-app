import CardData from '@/components/Card';

interface CardDetailsProps {
  name: string;
  registrationNumber: string;
  detran: string;
  multaMeter: string;
}

const BoxDetails: React.FC<CardDetailsProps> = ({
  name,
  registrationNumber,
  detran,
  multaMeter
}) => {
  return (
    <CardData
      width="2/6"
      data={[
        { title: 'Nome', value: name },
        { title: 'CPF', value: registrationNumber },
        { title: 'Detran', value: detran },
        { title: 'Valor Total', value: multaMeter }
      ]}
    />
  );
};
export default BoxDetails;
