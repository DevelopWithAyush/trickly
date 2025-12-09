import { cn } from '@/lib/utils'
import React from 'react'

const Skeleton5 = () => {
    const data = [
        {
            percentage: 45,
        },
        {
            percentage: 85,
        },
        {
            percentage: 35,
        },
        {
            percentage: 95,
        },
        {
            percentage: 100,
        },
        {
            percentage: 45,
        },
        {
            percentage: 85,
        },
        {
            percentage: 35,
        },
        {
            percentage: 95,
        },
    ]
    return (
        <div className='w-full flex flex-col items-start justify-start gap-14'>
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:30px_30px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className='w-full h-full absolute inset-0 bg-linear-to-tr from-neutral-100  to-brand-primary/30 dark:from-neutral-900 dark:to-brand-primary/30' />
            <div className='w-full h-full absolute inset-0 bg-linear-to-t from-neutral-100 to-brand-primary/0 dark:from-neutral-900 dark:to-brand-primary/0 z-10' />
            <div className='relative w-full flex flex-col items-start justify-start gap-4'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <div className='w-full flex flex-col items-start justify-start'>
                        <p className='text-xs font-inter font-medium text-neutral-600 dark:text-neutral-400'>Progress</p>
                        <p className='text-sm font-inter font-medium text-neutral-900 dark:text-neutral-100'>Olan Marketing Campaign</p>
                    </div>
                    <button className='text-sm rounded-lg whitespace-nowrap px-4 py-2 bg-brand-primary font-inter font-medium text-neutral-50 dark:text-neutral-100'>
                        65% Progress
                    </button>
                </div>
                <div className='w-full flex flex-row overflow-x-auto scrollbar-hide items-end justify-start gap-4 h-[250px]'>
                    
                    {
                        data.map((item, index) => (
                            <div
                                style={{
                                    height: `${item.percentage}%`,
                                    opacity: `${item.percentage === 100 ? 1 : 0.5}`
                                }}
                                className={cn('w-10  rounded-t-lg bg-brand-primary dark:bg-brand-primary/80  ',
                                
                            )} key={index} />
                        ))
                    }
                    
                    {
                        data.map((item, index) => (
                            <div
                                style={{
                                    height: `${item.percentage}%`,
                                    opacity: `${item.percentage === 100 ? 1 : 0.5}`
                                }}
                                className={cn('w-10  rounded-t-lg bg-brand-primary  ',
                                
                            )} key={index} />
                        ))
                    }
                    
                    
                </div>


            </div>
        </div>
    )
}

export default Skeleton5
