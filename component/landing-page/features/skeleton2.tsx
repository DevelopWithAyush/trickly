import { cn } from '@/lib/utils'
import { PlusIcon, SearchIcon } from 'lucide-react'
import React from 'react'

const Skeleton2 = () => {
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
            <div className='relative  max-h-[250px] overflow-y-auto scrollbar-hide flex flex-col items-start justify-start gap-4 w-full border-4 border-neutral-50 dark:border-neutral-800 rounded-4xl  p-4 pt-6 bg-neutral-200 dark:bg-neutral-800 shadow-md'>
                <div className='sticky top-0  w-full flex flex-row items-center justify-between gap-2'>
                    <div className='flex flex-1 flex-row items-center justify-center gap-2 border-2 border-brand-primary rounded-lg p-[3px] px-2'>
                        <SearchIcon className='size-4' />
                        <input type="text" placeholder='Search' className='w-full outline-none bg-transparent' />
                    </div>
                    <div className='p-2 bg-brand-primary rounded-lg'>
                        <PlusIcon className='size-4 text-neutral-50' />
                    </div>
                </div>
                <div className='w-full flex flex-col items-start justify-start gap-2'>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </div>
        </div>
    )
}

export default Skeleton2


const SkeletonCard = () => {
    return (
        <div className='w-full  p-1 flex flex-row items-center justify-start gap-2 bg-neutral-50 dark:bg-neutral-900 rounded-lg'>
            <div className='w-10 h-10 bg-neutral-300 dark:bg-neutral-600 rounded-lg animate-pulse' />
            <div className='flex flex-1 flex-col items-start justify-center gap-1 '>
                <div className='w-[60%] h-2 bg-neutral-300 dark:bg-neutral-600 rounded-lg animate-pulse' />
                <div className='w-[40%] h-1 bg-neutral-300 dark:bg-neutral-600 rounded-lg animate-pulse' />
                <div className='w-[30%] h-1 bg-neutral-300 dark:bg-neutral-600 rounded-lg animate-pulse' />
            </div>
        </div>
    )
}