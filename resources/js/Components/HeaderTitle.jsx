export default function HeaderTitle({ title, subtitle, icon: Icon }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-x-3">
                <div className="rounded-xl bg-gradient-to-br from-[#33ff05]/70 via-[#2ee605]/60 to-[#29cc04]/50 p-2 shadow-[0_0_20px_rgba(51,255,5,0.5)]">
                    {Icon && <Icon className="size-6 text-white" />}
                </div>

                <h1 className="text-2xl font-medium leading-relaxed tracking-wide text-foreground">{title}</h1>
            </div>
            <p className="text-sm font-light text-muted-foreground">{subtitle}</p>
        </div>
    );
}
