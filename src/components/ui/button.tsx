import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-orange' | 'dark-grey';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary-orange', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'px-6 py-3 rounded-md font-medium transition-colors duration-200',
          {
            'bg-primary-orange text-white hover:bg-primary-orange/90': variant === 'primary-orange',
            'bg-dark-grey text-white hover:bg-dark-grey/90': variant === 'dark-grey',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';