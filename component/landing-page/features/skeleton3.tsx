import { cn } from '@/lib/utils'
import { ArrowRightIcon, PlusIcon, SearchIcon } from 'lucide-react'
import React from 'react'

const Skeleton3 = () => {
    const skeleton = [
        {
            name: "Markel Brand Design",
            date: "Mar 24",
            status: "High Priority",
        },
        {
            name: "Markel Brand Design",
            date: "Mar 24",
            status: "High Priority",
        },
        {
            name: "Markel Brand Design",
            date: "Mar 24",
            status: "High Priority",
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
            <div className='relative max-h-[250px] overflow-y-auto scrollbar-hide flex flex-col items-start justify-start gap-4 w-full border-4 border-neutral-50 dark:border-neutral-800 rounded-4xl  p-2 pt-6 bg-neutral-200 dark:bg-neutral-800 shadow-md'>

                <div className='w-full flex flex-col border-b border-neutral-400 dark:border-neutral-600 pb-2 px-2 items-start justify-start '>
                    <p className='text-xs font-inter font-medium text-neutral-600 dark:text-neutral-400'>Project</p>
                    <p className='text-sm font-inter font-medium text-neutral-900 dark:text-neutral-100'>Olan Marketing Campaign</p>
                </div>
                <div className='w-full flex flex-col items-start px-1 justify-start gap-2'>
                    {
                        skeleton.map((sk, index) => (
                            <div className={cn('relative w-full flex flex-col bg-neutral-50 dark:bg-neutral-900 shadow-md p-2 rounded-xl gap-2 ',
                            )} key={index}>
                                <div className='flex flex-row items-center justify-between' >
                                    <p className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>{sk.name}</p>
                                    <div className={cn('text-sm bg-neutral-300 dark:bg-neutral-600 w-fit p-1 rounded-lg text-neutral-600 dark:text-neutral-400',
                                        sk.status === 'High Priority' && 'bg-brand-primary text-white'
                                    )}>
                                        <ArrowRightIcon className='size-4' />
                                    </div>
                                </div>
                                <div className={cn('w-fit p-1 flex flex-row items-center justify-center gap-1 rounded-md',
                                    sk.status === 'High Priority' && 'bg-red-500/20',
                                    sk.status === 'Completed' && 'bg-green-500/20',
                                    sk.status === 'In Progress' && 'bg-yellow-500/20'
                                )
                                }>
                                    <div className={cn('h-2 w-2 bg-current rounded-full',
                                        sk.status === 'High Priority' && 'bg-red-700',
                                        sk.status === 'Completed' && 'bg-green-700',
                                        sk.status === 'In Progress' && 'bg-yellow-700'
                                    )} />
                                    <p className={cn('text-xs ',
                                        sk.status === 'High Priority' && 'text-red-700',
                                        sk.status === 'Completed' && 'text-green-700',
                                        sk.status === 'In Progress' && 'text-yellow-700'
                                    )}>{sk.status}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skeleton3
