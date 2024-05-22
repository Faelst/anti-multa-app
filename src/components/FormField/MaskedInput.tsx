import { default as MaskedInputBase } from 'react-text-mask';

export function MaskedInput(props: any) {
  const { mask, ...other } = props;
  return (
    <MaskedInputBase {...other} mask={mask} placeholderChar={'\u2000'} guide keepCharPositions />
  );
}
