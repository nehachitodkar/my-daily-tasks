import type { FilterType } from '@/hooks/useTodos';

interface TodoFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

const filters: { value: FilterType; label: string; emoji: string }[] = [
  { value: 'all', label: 'All', emoji: '✨' },
  { value: 'active', label: 'Active', emoji: '🎯' },
  { value: 'completed', label: 'Done', emoji: '🎉' },
];

export function TodoFilters({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
      <div className="flex items-center gap-1 p-1.5 glass-card rounded-2xl">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
              filter === f.value
                ? 'gradient-bg text-primary-foreground shadow-glow'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            <span className="mr-1.5">{f.emoji}</span>
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl">
          <span className="text-2xl font-bold gradient-text">{activeCount}</span>
          <span className="text-muted-foreground">task{activeCount !== 1 ? 's' : ''} left</span>
        </div>
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="px-4 py-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all duration-300"
          >
            Clear done
          </button>
        )}
      </div>
    </div>
  );
}
