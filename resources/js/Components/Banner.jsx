export default function Banner({ title, subtitle }) {
    return (
        <div className="flex flex-col rounded-xl border-[#3ba900]/60 bg-gradient-to-br from-[#33ff05]/70 via-[#2ee605]/60 to-[#29cc04]/50 p-4 text-white">
            <h2 className="text-2xl font-medium leading-relaxed tracking-wide">{title}</h2>
            <p className="text-sm leading-relaxed">{subtitle}</p>
        </div>
    );
}
