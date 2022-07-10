import * as ST from '../styles/components';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useFilterContext } from '../context';
import { regions } from '../regions';

export const FilterSection = () => {
  const { name, region, setFilters } = useFilterContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilters((filters: any) => ({ ...filters, name: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFilters((filters: any) => ({ ...filters, region: value }));
  };

  return (
    <ST.FilterSectionWrapper>
      <ST.InputSectionStyled>
        <FaSearch />
        <input
          value={name}
          onChange={handleInputChange}
          placeholder="Search for a country..."
        />
      </ST.InputSectionStyled>

      <ST.SelectSectionStyled>
        <MdKeyboardArrowDown />
        <select value={region} onChange={handleSelectChange}>
          <option value="">All</option>
          {regions.map((reg) => (
            <option key={reg}>{reg}</option>
          ))}
        </select>
      </ST.SelectSectionStyled>
    </ST.FilterSectionWrapper>
  );
};
