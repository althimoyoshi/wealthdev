import { Link } from '@inertiajs/react';
export default function ApplicationLogo({ url = '#' }) {
    return (
        <Link href={url} className="mt-6 flex items-center gap-x-2">
            <div className="rounded-xl bg-gradient-to-br from-[#33ff05]/70 via-[#2ee605]/60 to-[#29cc04]/50 p-2">
                <IconWealth className="size-6 text-white" />
            </div>

            <span className="text-xl font-semibold leading-relaxed tracking-wide dark:text-lime-500">
                WEALTHDEV <span className="text-lg text-lime-500 dark:text-white"></span>
            </span>
        </Link>
    );
}
