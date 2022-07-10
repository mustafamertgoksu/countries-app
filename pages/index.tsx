import { NextPage, GetStaticProps } from 'next';
import { MainLayout } from '../src/layout';
import { FilterSection } from '../src/components/FilterSection';
import { CountriesList } from '../src/components/CountriesList';
import * as ST from '../src/styles/components';
import { CountryProps } from '../src/interfaces';
import axios from 'axios';

interface Props {
  countries: CountryProps[];
}

const HomePage: NextPage<Props> = ({ countries }) => {
  return (
    <MainLayout title="Countries">
      <ST.IndexWrapper>
        <FilterSection />
        <CountriesList countries={countries} />
      </ST.IndexWrapper>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  const data = (await res.data) as CountryProps[];

  const countries = data.map((country) => {
    const { name, region, capital, population, flags, cca3 } = country;
    return { name, region, population, flags, cca3, capital: capital || null };
  });

  return {
    props: {
      countries,
    },
    revalidate: 300,
  };
};

export default HomePage;
