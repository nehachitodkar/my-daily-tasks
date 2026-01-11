import { CheckCircle2, ListTodo } from 'lucide-react';
import type { FilterType } from '@/hooks/useTodos';

interface EmptyStateProps {
  filter: FilterType;
}

export function EmptyState({ filter }: EmptyStateProps) {
  const messages = {
    all: {
      icon: ListTodo,
      title: 'No tasks yet',
      description: 'Add your first task to get started!',
    },
    active: {
      icon: CheckCircle2,
      title: 'All done!',
      description: 'You have completed all your tasks. Great job!',
    },
    completed: {
      icon: ListTodo,
      title: 'No completed tasks',
      description: 'Complete some tasks to see them here.',
    },
  };

  const { icon: Icon, title, description } = messages[filter];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="p-4 rounded-full bg-secondary mb-4">
        <Icon className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
