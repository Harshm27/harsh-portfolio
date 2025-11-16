interface StatsCardProps {
  value: string;
  label: string;
}

const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300">
      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;
