import { cn } from '@/lib/utils'
import React from 'react'

const Skeleton1 = () => {
    const skeleton = [
        {
            name: "Markel Brand Design",
            date: "Mar 24",
            status: "Completed",
        },
        {
            name: "Markel Brand Design",
            date: "Mar 24",
            status: "High Priority",
        },
        {
            name: "Markel Brand Design",
            date: "Mar 24",
            status: "In Progress",
        }
    ]
    return (
        <div className='w-full flex flex-col items-start justify-start gap-14 :
        '>
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:30px_30px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className='w-full h-full absolute inset-0 bg-linear-to-tr from-neutral-100  to-brand-primary/30 dark:from-neutral-900 dark:to-brand-primary/30' />
            <div className='w-full h-full absolute inset-0 bg-linear-to-t from-neutral-100 to-brand-primary/0 dark:from-neutral-900 dark:to-brand-primary/0 z-10' />            {
                skeleton.map((sk, index) => (
                    <div className={cn('relative w-full flex flex-col bg-neutral-50 dark:bg-neutral-800 shadow-md p-4 rounded-xl gap-4 scale-95',
                        index === 1 && 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[85%]'

                    )} key={index}>

                        <div className='flex flex-row items-center justify-between' >

                            <p className='text-md font-medium'>{sk.name}</p>
                            <div className={cn('text-sm bg-neutral-300 w-fit p-1 rounded-lg text-neutral-600',
                                sk.status === 'High Priority' && 'bg-brand-primary text-white'
                            )}>
                                {sk.date}
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
    )
}

export default Skeleton1
