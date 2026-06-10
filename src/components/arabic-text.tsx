import { cn } from '#/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  as?: 'span' | 'p' | 'h2' | 'h3'
}

const SIZE = {
  sm: 'text-base leading-[2]',
  md: 'text-xl leading-[2.2]',
  lg: 'text-3xl leading-[2.4]',
}

export function ArabicText({ children, className, size = 'lg', as: Tag = 'p' }: Props) {
  return (
    <Tag
      dir="rtl"
      className={cn('text-right', SIZE[size], className)}
      style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', Georgia, serif", wordSpacing: '0.08em' }}
    >
      {children}
    </Tag>
  )
}
