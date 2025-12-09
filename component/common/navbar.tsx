'use client'
import React, { useState } from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import Button from '../ui/button'
import { motion } from 'motion/react'
import ThemeToggle from '../ui/theme-toggle'
import { CheckCheck } from 'lucide-react'
const Navbar = () => {
    const links = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Services',
            href: '/services'
        },
        {
            label: 'Contact',
            href: '/contact'
        },
    ]
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
    return (
        <header className='fixed top-0 left-0 right-0 z-50  py-3'>
            <Container className=' lg:px-4 rounded-full bg-neutral-50 shadow-sm dark:bg-neutral-950  flex items-center justify-between py-2 md:py-2 lg:py-2'>

                <Link href='/' className='text-xl font-inter font-semibold text-brand-primary flex items-center justify-center gap-1'>
                    <CheckCheck className='size-6' /> Trickly
                </Link>

                <nav className='fixed left-1/2 -translate-x-1/2'>
                    <motion.ul className='flex items-center '>
                        {links.map((link, idx) => (
                            <motion.li
                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.3 * idx, ease: 'easeInOut' }}
                                viewport={{ once: true }}
                                key={link.href}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                className=' relative px-3 py-1 text-sm leading-none cursor-pointer'>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                                {hoveredIdx === idx && (
                                    <motion.span
                                        layoutId='underline'
                                        className='scale-y-110 absolute bottom-0 left-0 w-full h-full rounded-md bg-brand-primary/20 -z-10' />
                                )}
                            </motion.li>

                        ))}
                    </motion.ul>
                </nav>
                <div className='flex flex-row items-center gap-2'>
                    <ThemeToggle />
                    <Button variant='ghost' size='sm'>
                        Login
                    </Button>
                    <Button variant='primary' size='sm'>
                        Signup
                    </Button>

                </div>
            </Container>
        </header >
    )
}

export default Navbar