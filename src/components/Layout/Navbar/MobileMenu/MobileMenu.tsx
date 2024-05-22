import Link from 'next/link';
import { MobileMenuProps } from './MobileMenu.interface';

export const MobileMenu: React.FC<MobileMenuProps> = ({ links, handleHref, onClose }) => (
  <div className="mx-3 w-full md:hidden" id="mobile-menu">
    <ul className="mt-4 flex flex-col space-y-4 divide-y divide-gray-200 rounded-lg border border-gray-100 bg-white p-4 md:dark:divide-[#FFFFFFB2] md:dark:border-[#FFFFFFB2] md:dark:bg-[#18171e]">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={handleHref(link)}
            onClick={onClose}
            className="text-gray-900 hover:text-[#EC0000] md:dark:text-white"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
