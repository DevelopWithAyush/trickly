import { cn } from '@/lib/utils'
import React from 'react'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center cursor-pointer justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap'

    const variantClasses = {
      primary:
        'bg-brand-primary text-white rounded-md [box-shadow:0_0px_8px_0px_var(--color-brand-primary)] hover:bg-brand-primary/90 focus-visible:ring-brand-primary',
      secondary:
        'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-700 focus-visible:ring-neutral-400',
      outline:
        'bg-transparent text-brand-primary border border-brand-primary rounded-md hover:bg-brand-primary/10 focus-visible:ring-brand-primary',
      ghost:
        'bg-transparent text-brand-primary hover:bg-brand-primary/10 rounded-md focus-visible:ring-brand-primary',
      link: 'bg-transparent text-brand-primary underline-offset-4 hover:underline focus-visible:ring-brand-primary',
      destructive:
        'bg-red-600 text-white rounded-md hover:bg-red-700 focus-visible:ring-red-600 [box-shadow:0_0px_8px_0px_rgba(220,38,38,0.3)]',
    }

    const sizeClasses = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-11 px-6 text-lg',
      icon: 'h-10 w-10',
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {!isLoading && leftIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export default Button
