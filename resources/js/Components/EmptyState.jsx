export default function EmptyState({
    title = 'Tidak ada data',
    subtitle = 'Mulailah dengan membuat data baru',
    icon: Icon,
}) {
    return (
        <div className="secondary flex flex-col items-center border border-dashed p-4">
            <Icon className="size-2 text-lime-500" />
            <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
    );
}
