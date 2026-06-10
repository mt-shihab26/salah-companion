import { cn } from '#/lib/utils'

export function PageWrap({ className, ...props }: React.ComponentProps<'div'>) {
    return <div className={cn('mx-auto w-full max-w-270 px-4', className)} {...props} />
}
