import { cn } from "@/lib/utils"

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('w-full flex flex-col items-start justify-between overflow-hidden  bg-neutral-100 dark:bg-neutral-900 border-8 border-neutral-50 border-solid dark:border-neutral-800 rounded-4xl', className)}>
            {children}
        </div>
    )
}

export const CardHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('flex flex-col gap-2 p-4', className)}>
            {children}
        </div>
    )
}

export const CardTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('text-lg font-inter font-medium leading-tight text-neutral-700 dark:text-neutral-300', className)}>
            {children}
        </div>
    )
}

export const CardDescription = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('text-sm font-inter font-medium text-neutral-500 dark:text-neutral-500 max-w-md text-balance leading-tight', className)}>
            {children}
        </div>
    )
}

export const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('flex w-full p-4 flex-row flex-1 items-center justify-center relative', className)}>
            {children}
        </div>
    )
}

export const CardFooter = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('', className)}>
            {children}
        </div>
    )
}

export default Card