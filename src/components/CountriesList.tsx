import { useMemo, FC } from 'react';
import { CountryProps } from '../interfaces';
import { CountryItem } from './CountryItem';
import * as ST from '../styles/components';
import { useFilterContext } from '../context';
  
interface Props {
  countries: CountryProps[];
}

export const CountriesList: FC<Props> = ({ countries }) => {
  const { name, region } = useFilterContext();

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      if (!name && !region) {
        return true;
      } else if (name && !region) {
        return country.name.common.toLowerCase().includes(name.toLowerCase());
      } else if (region && !name) {
        return country.region === region;
      } else {
        return (
          country.name.common.toLowerCase().includes(name.toLowerCase()) &&
          country.region === region
        );
      }
    });
  }, [countries, name, region]);

  return (
    <ST.CountriesListStyles>
      {filteredCountries.map((country) => {
        return <CountryItem key={country.name.common} country={country} />;
      })}
    </ST.CountriesListStyles>
  );
};
