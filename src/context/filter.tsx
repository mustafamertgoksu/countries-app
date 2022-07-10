import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface FilterProviderProps {
  name: string;
  region: string;
  setFilters: Dispatch<SetStateAction<any>>;
}

interface CProps {
  children: React.ReactNode;
}

export const FilterContext = createContext<FilterProviderProps>(
  {} as FilterProviderProps
);

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider: FC<CProps> = ({ children }) => {
  const [filters, setFilters] = useState({
    name: '',
    region: '',
  });

  return (
    <FilterContext.Provider value={{ ...filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
