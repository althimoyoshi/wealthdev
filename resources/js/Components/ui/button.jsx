import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',

                yellow: 'text-white bg-gradient-to-r from-[#33ff05]/70 via-[#2ee605]/60 to-[#29cc04]/50 border border-[#3ba900]/60 shadow-[0_0_30px_rgba(51,255,5,0.5)] hover:shadow-[0_0_35px_rgba(51,255,5,0.7)] transition-all duration-300',
                purple: 'text-white bg-gradient-to-r from-[#2bf205]/70 via-[#27da05]/60 to-[#24c404]/50 border border-[#2fac03]/60 shadow-[0_0_30px_rgba(43,242,5,0.5)] hover:shadow-[0_0_35px_rgba(43,242,5,0.7)] transition-all duration-300',
                blue: 'text-white bg-gradient-to-r from-[#26e705]/70 via-[#22ce05]/60 to-[#1fb804]/50 border border-[#2a9f03]/60 shadow-[0_0_30px_rgba(38,231,5,0.5)] hover:shadow-[0_0_35px_rgba(38,231,5,0.7)] transition-all duration-300',
                red: 'text-white bg-gradient-to-r from-[#22db05]/70 via-[#1fc304]/60 to-[#1bab04]/50 border border-[#279703]/60 shadow-[0_0_30px_rgba(34,219,5,0.5)] hover:shadow-[0_0_35px_rgba(34,219,5,0.7)] transition-all duration-300',
                emerald:
                    'text-white bg-gradient-to-r from-[#1fc304]/70 via-[#1bab04]/60 to-[#189604]/50 border border-[#208503]/60 shadow-[0_0_30px_rgba(31,195,4,0.5)] hover:shadow-[0_0_35px_rgba(31,195,4,0.7)] transition-all duration-300',
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                xl: 'h-12 rounded-xl px-8',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
