import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, url = '#', title, icon: Icon, ...props }) {
    return (
        <Link
            {...props}
            href={url}
            className={cn(
                active
                    ? 'bg-gradient-to-br from-[#33ff05]/70 via-[#2ee605]/60 to-[#29cc04]/50 font-medium text-white'
                    : 'hover:bg-muted',
                'flex items-center gap-3 rounded-lg p-2.5 transition-all dark:text-white',
            )}
        >
            <icon className="size-5" />
            {title}
        </Link>
    );
}
