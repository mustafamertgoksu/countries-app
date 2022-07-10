import { CountryProps } from '../interfaces';
import { FC } from 'react';
import Image from 'next/image';
import * as ST from '../styles/components';

interface Props {
  country: CountryProps;
}

export const CountryItem: FC<Props> = ({ country }) => {
  const { name, population, capital, flags, region } = country;

  return (
    <ST.CountryItemStyles>
      <>
        <Image
          src={flags?.svg || '/assets/no-image.png'}
          alt={name.common}
          width={400}
          height={250}
        />
      </>
      <ST.CountryInfoStyles>
        <h2>{name.common}</h2>
        <div>
          <p>
            Population:
            <span> {new Intl.NumberFormat('de-DE').format(population)}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          {capital && (
            <p>Capital: {capital}</p>
          )}
        </div>
      </ST.CountryInfoStyles>
    </ST.CountryItemStyles>
  );
};
