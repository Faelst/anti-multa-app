export const buttonColors: { [key: string]: string } = {
  inherit: 'text-white bg-black',
  primary: 'inline-block text-white bg-[#EC0000] hover:bg-red-600',
  secondary: 'inline-block border border-gray-950  text-black',
  success: 'text-white bg-green-500 hover:bg-green-600',
  error: 'text-white bg-red-500 hover:bg-[#EC0000]',
  info: 'text-white bg-blue-400 hover:bg-blue-500',
  warning: 'text-black bg-yellow-500 hover:bg-yellow-600'
};

export const buttonVariants = {
  contained: 'rounded-md drop-shadow-md font-medium',
  outlined:
    'text-[#EC0000] md:dark:text-white bg-white border border-[#EC0000]  md:dark:border-none  hover:bg-gray-100 font-medium rounded-md',
  text: 'bg-transparent text-black md:dark:text-white md:dark:hover:text-[#EC0000] hover:text-[#EC0000] hover:bg-transparent '
};

export const buttonSizes = {
  small: 'px-2.5 sm:px-5 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg'
};
