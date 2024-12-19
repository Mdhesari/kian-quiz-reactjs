import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'px-4 py-2 rounded-lg font-medium transition-colors',
          variant === 'primary' 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);