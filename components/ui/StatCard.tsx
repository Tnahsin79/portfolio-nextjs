interface StatCardProps {
  value: string;
  suffix: string;
  label: string;
}

export default function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <div className="text-center sm:text-left p-3 sm:p-0 rounded-lg sm:rounded-none bg-white/5 sm:bg-transparent">
      <div className="flex items-baseline justify-center sm:justify-start gap-0.5 sm:gap-1">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{value}</span>
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">{suffix}</span>
      </div>
      <p className="text-gray-400 text-xs sm:text-sm mt-1">{label}</p>
    </div>
  );
}
