import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",

          success: 'text-white bg-gradient-to-r from-[#7DDA71]/20 via-[#7DDA71]/15 to-[#7DDA71]/10 border border-[#7DDA71]/25 backdrop-blur-md shadow-[0_8px_30px_rgba(2,6,23,0.6),0_0_12px_rgba(125,218,113,0.15)] [&>svg]:text-[#7DDA71]',
          info: 'text-white bg-gradient-to-r from-[#F87171]/20 via-[#EF4444]/15 to-[#DC2626]/10 border border-[#F87171]/25 backdrop-blur-md shadow-[0_8px_30px_rgba(2,6,23,0.6),0_0_12px_rgba(239,68,68,0.15)] [&>svg]:text-[#F87171]',

      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props} />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
