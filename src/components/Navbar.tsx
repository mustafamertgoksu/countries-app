import Link from 'next/link';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { useDarkMode } from '../context';
import * as ST from '../styles/components';
import styled from 'styled-components';

export const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();
  const isDarkMode = theme === 'dark';

  return (
    <ST.CustomNavbar>
      <Link href="/" passHref>
        <NavTitle>Countries Info</NavTitle>
      </Link>
      <section onClick={toggleTheme}>
        {isDarkMode ? <BsMoonFill /> : <BsSun />}
        <h4>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h4>
      </section>
    </ST.CustomNavbar>
  );
};

const NavTitle = styled.h2`
  cursor: pointer;
`;
