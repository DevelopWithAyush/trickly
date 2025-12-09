import { cn } from '@/lib/utils';
import React from 'react'

const SubHeading = ({ children, className, tag = 'p' }: { children: React.ReactNode, className?: string, tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }) => {
  const Tag = tag;
  return (
    <Tag className={cn("text-sm mt-4 max-w-2xl leading-tight font-medium text-neutral-600 dark:text-neutral-400 font-inter", className)}>
      {children}
    </Tag>

  )
}

export default SubHeading
