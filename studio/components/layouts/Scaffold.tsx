import React from 'react'
import { cn } from 'ui/src/utils/cn'

const maxWidthClasses = 'mx-auto w-full max-w-[1600px]'
const paddingClasses = 'px-6 lg:px-14 xl:px-28 2xl:px-32'

// lg: pt - 8

const ScaffoldHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <header {...props} ref={ref} className={cn('w-full', 'flex-col gap-3', className)}></header>
    )
  }
)

const ScaffoldTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return <h1 ref={ref} {...props} className={cn('text-3xl pt-6 pb-4', className)} />
})

const ScaffoldContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} {...props} className={cn(maxWidthClasses, paddingClasses, className)} />
  }
)

const ScaffoldDivider = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} {...props} className={cn('w-full h-px bg-scale-400', className)} />
  }
)

const ScaffoldSection = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn('flex flex-col gap-3 py-6', 'lg:grid md:grid-cols-12 lg:py-12', className)}
      />
    )
  }
)

const ScaffoldSectionDetail = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('col-span-4 xl:col-span-5', className)} />
})

const ScaffoldSectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn('col-span-8 xl:col-span-7', 'flex flex-col gap-6', className)}
    />
  )
})

ScaffoldHeader.displayName = 'ScaffoldHeader'
ScaffoldTitle.displayName = 'ScaffoldTitle'
ScaffoldContainer.displayName = 'ScaffoldContainer'
ScaffoldDivider.displayName = 'ScaffoldDivider'
ScaffoldSection.displayName = 'ScaffoldSection'
ScaffoldSectionDetail.displayName = 'ScaffoldSectionDetail'
ScaffoldSectionContent.displayName = 'ScaffoldSectionContent'

export {
  ScaffoldHeader,
  ScaffoldTitle,
  ScaffoldContainer,
  ScaffoldDivider,
  ScaffoldSection,
  ScaffoldSectionDetail,
  ScaffoldSectionContent,
}