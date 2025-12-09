import React from 'react'
import { cn } from '@/lib/utils'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <section className={cn(' container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20', className)}>
            {children}
        </section>
    )
}

export default Container
