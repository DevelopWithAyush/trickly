'use client'
import React from 'react'
import Container from '@/component/ui/container'
import Heading from '@/component/ui/heading'
import SubHeading from '@/component/ui/sub-heading'
import Button from '@/component/ui/button'
import { motion } from 'motion/react'
import { IconArrowRight } from '@tabler/icons-react'
import { CheckCheck } from 'lucide-react'
import HeadingBadges from '@/component/ui/heading-badges'


const HeroSection = () => {
    return (

        <Container className='flex flex-col items-center justify-start lg:pt-32 pb-0 md:pb-0 lg:pb-0 relative overflow-hidden rounded-3xl' >


            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-brand-primary to-transparent blur-3xl -z-10' />


            <HeadingBadges >
                <div className='text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-300/60 dark:bg-neutral-700/70 py-[2px] rounded-full px-1'>✨ New </div>
                <motion.p
                    className='text-xs font-medium text-neutral-700 dark:text-neutral-300 relative overflow-hidden'
                    initial={{ backgroundPosition: '200% 0' }}
                    animate={{ backgroundPosition: '-200% 0' }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop',
                        repeatDelay: 5,
                    }}
                    style={{
                        backgroundImage: 'linear-gradient(90deg, currentColor 0%, currentColor 40%, rgba(255,255,255,0.8) 50%, currentColor 60%, currentColor 100%)',
                        backgroundSize: '200% 100%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Trickly AI is now available
                </motion.p>
            </HeadingBadges>
            <Heading tag='h1' className='text-5xl font-medium text-neutral-900 dark:text-neutral-100 text-center text-balance mt-4'>
                Turn Scattered work Into seamless workflows
            </Heading>
            <SubHeading tag='p' className='text-md font-medium text-neutral-500 dark:text-neutral-400 text-center text-balance mt-4'>
                Trickly brings projects , tasks, and collaboration together so your team can focus on progress
            </SubHeading>
            <div className='flex flex-row items-center justify-center gap-4 mt-8'>
                <Button variant='primary' size='md'>
                    Get Started
                </Button>
                <Button variant='outline' size='md' className='group'>
                    Learn More <IconArrowRight size={16} className='size-4 group-hover:translate-x-1 transition-all duration-300' />
                </Button>
            </div>
            <p className='text-sm font-medium text-neutral-500 dark:text-neutral-400 text-center text-balance mt-10 flex items-center justify-center gap-2'>
                <CheckCheck className='size-4 text-brand-primary/70' /> No credit card required
            </p>
            <div className='flex flex-row w-[96%] h-[700px] bg-neutral-50 dark:bg-neutral-950 rounded-3xl  relative top-10'>

            </div>
        </Container>
    )
}

export default HeroSection
