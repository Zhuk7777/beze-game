import BezeImage from '../../assets/images/beze.webp';

export interface IBezeProps {
  className?: string;
}

export const Beze = ({ className }: IBezeProps) => {
  return (
    <img
      className={className}
      src={BezeImage}
      alt="Безе"
      width={320}
      height={298}
    />
  );
};
