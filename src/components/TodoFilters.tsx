import type { FilterType } from '@/hooks/useTodos';

interface TodoFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export function TodoFilters({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
      <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              filter === f.value
                ? 'bg-card text-card-foreground shadow-soft'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="text-muted-foreground">
          <span className="font-semibold text-foreground">{activeCount}</span> task{activeCount !== 1 ? 's' : ''} left
        </span>
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-muted-foreground hover:text-destructive transition-colors duration-200"
          >
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}
