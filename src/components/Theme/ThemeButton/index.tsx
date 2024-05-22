'use client';
import { Button } from '@/components';
import { useTheme } from 'next-themes';
import { LuMoonStar } from 'react-icons/lu';
import { PiSunDuotone } from 'react-icons/pi';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button size="small" onClick={toggleTheme} variant="text" className="hidden md:block md:px-2">
      {theme === 'light' ? <PiSunDuotone size={25} /> : <LuMoonStar size={22} />}
    </Button>
  );
};
