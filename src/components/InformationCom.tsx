import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

export const InformationCom: FC<Props> = ({ description, title }) => {
  return (
    <>
      <p>
        <span>{title}</span>
        {description}
      </p>
    </>
  );
};
