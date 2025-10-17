import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
    'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
                secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                destructive:
                    'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
                outline: 'text-foreground',

                red: 'text-white bg-gradient-to-r from-[#33ff05]/70 via-[#2ee605]/60 to-[#29cc04]/50 border-[#3ba900]/60 backdrop-blur-md shadow-[0_0_35px_rgba(51,255,5,0.6),0_0_12px_rgba(59,169,0,0.3)] [&>svg]:text-[#33ff05]',
                orange: 'text-white bg-gradient-to-r from-[#2bf205]/70 via-[#27da05]/60 to-[#24c404]/50 border-[#2fac03]/60 backdrop-blur-md shadow-[0_0_35px_rgba(43,242,5,0.6),0_0_12px_rgba(47,172,3,0.3)] [&>svg]:text-[#2bf205]',
                emerald:
                    'text-white bg-gradient-to-r from-[#26e705]/70 via-[#22ce05]/60 to-[#1fb804]/50 border-[#2a9f03]/60 backdrop-blur-md shadow-[0_0_35px_rgba(38,231,5,0.6),0_0_12px_rgba(42,159,3,0.3)] [&>svg]:text-[#26e705]',
                purple: 'text-white bg-gradient-to-r from-[#22db05]/70 via-[#1fc304]/60 to-[#1bab04]/50 border-[#279703]/60 backdrop-blur-md shadow-[0_0_35px_rgba(34,219,5,0.6),0_0_12px_rgba(39,151,3,0.3)] [&>svg]:text-[#22db05]',
                rose: 'text-white bg-gradient-to-r from-[#1fc304]/70 via-[#1bab04]/60 to-[#189604]/50 border-[#208503]/60 backdrop-blur-md shadow-[0_0_35px_rgba(31,195,4,0.6),0_0_12px_rgba(32,133,3,0.3)] [&>svg]:text-[#1fc304]',
                pink: 'text-white bg-gradient-to-r from-[#1bab04]/70 via-[#189604]/60 to-[#158204]/50 border-[#1b7203]/60 backdrop-blur-md shadow-[0_0_35px_rgba(27,171,4,0.6),0_0_12px_rgba(27,114,3,0.3)] [&>svg]:text-[#1bab04]',
                funchsia:
                    'text-white bg-gradient-to-r from-[#189604]/70 via-[#158204]/60 to-[#126e03]/50 border-[#166003]/60 backdrop-blur-md shadow-[0_0_35px_rgba(24,150,3,0.6),0_0_12px_rgba(22,96,3,0.3)] [&>svg]:text-[#189604]',
                violet: 'text-white bg-gradient-to-r from-[#158204]/70 via-[#126e03]/60 to-[#0f5a03]/50 border-[#135003]/60 backdrop-blur-md shadow-[0_0_35px_rgba(21,130,3,0.6),0_0_12px_rgba(19,80,3,0.3)] [&>svg]:text-[#158204]',
                blue: 'text-white bg-gradient-to-r from-[#126e03]/70 via-[#0f5a03]/60 to-[#0c4703]/50 border-[#104103]/60 backdrop-blur-md shadow-[0_0_35px_rgba(18,110,3,0.6),0_0_12px_rgba(16,65,3,0.3)] [&>svg]:text-[#126e03]',
                lime: 'text-white bg-gradient-to-r from-[#0f5a03]/70 via-[#0c4703]/60 to-[#093603]/50 border-[#0b3003]/60 backdrop-blur-md shadow-[0_0_35px_rgba(15,90,3,0.6),0_0_12px_rgba(13,50,3,0.3)] [&>svg]:text-[#0f5a03]',
                teal: 'text-white bg-gradient-to-r from-[#0f5a03]/70 via-[#0c4703]/60 to-[#093603]/50 border-[#0b3003]/60 backdrop-blur-md shadow-[0_0_35px_rgba(15,90,3,0.6),0_0_12px_rgba(13,50,3,0.3)] [&>svg]:text-[#0f5a03]',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

function Badge({ className, variant, ...props }) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
