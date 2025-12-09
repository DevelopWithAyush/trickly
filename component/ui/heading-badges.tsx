'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'

const HeadingBadges = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div initial={{ width: 0, height: 0 }}
            whileInView={{ width: 'auto', height: 'auto' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            viewport={{ once: true }}

            className={cn('[box-shadow:0_0px_16px_0px_var(--color-brand-primary)]  origin-top text-xs text-neutral-600 dark:text-neutral-300 font-semibold shadow-sm flex flex-row items-center justify-center gap-2 bg-neutral-50 dark:bg-neutral-950  rounded-full', className)}>
            <motion.div
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
                viewport={{ once: true }}
                className='px-2 py-1 flex flex-row items-center justify-center gap-1'>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default HeadingBadges
