export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  bgColor?: 'gray' | 'orange' | 'red',
  size?: 'sm' | 'md' | 'lg',
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', bgColor = 'orange', size = 'md', ...rest }) => {
  let btnColor = {
    gray: `bg-gray-900`,
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };
  let btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-1 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
  };

  return (
    <button
      type={ type }
      className={`${ btnColor[bgColor] } ${ btnSize[size] } text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded`}
      { ...rest }
    >
      { children }
    </button>
  );
}

export default Button;