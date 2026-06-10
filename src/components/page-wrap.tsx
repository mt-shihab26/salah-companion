import { cn } from '#/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export function PageWrap({ children, className }: Props) {
  return (
    <div className={cn('mx-auto w-full max-w-[1080px] px-4', className)}>
      {children}
    </div>
  )
}
