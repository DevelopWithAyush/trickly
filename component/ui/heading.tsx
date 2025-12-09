import React from 'react'
import { cn } from '@/lib/utils'

const Heading = ({ children, className, tag = 'p' }: { children: React.ReactNode, className?: string, tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }) => {
    const Tag = tag;
    return (
        <Tag className={cn("text-4xl font-medium mt-4 max-w-2xl font-inter", className)}>
            {children}
        </Tag>
    )
}

export default Heading
