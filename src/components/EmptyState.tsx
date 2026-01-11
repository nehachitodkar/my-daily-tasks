import { Rocket, PartyPopper, ClipboardList } from 'lucide-react';
import type { FilterType } from '@/hooks/useTodos';

interface EmptyStateProps {
  filter: FilterType;
}

export function EmptyState({ filter }: EmptyStateProps) {
  const messages = {
    all: {
      icon: Rocket,
      title: 'Ready for liftoff! 🚀',
      description: 'Add your first task and start conquering your day!',
      gradient: 'from-pink-500 to-violet-500',
    },
    active: {
      icon: PartyPopper,
      title: 'You crushed it! 🎉',
      description: 'All tasks completed. Time to celebrate!',
      gradient: 'from-emerald-500 to-teal-500',
    },
    completed: {
      icon: ClipboardList,
      title: 'Nothing here yet',
      description: 'Complete some tasks to see them here.',
      gradient: 'from-amber-500 to-orange-500',
    },
  };

  const { icon: Icon, title, description, gradient } = messages[filter];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className={`relative p-6 rounded-3xl bg-gradient-to-br ${gradient} shadow-glow-lg mb-6 float-animation`}>
        <Icon className="w-12 h-12 text-white" />
        <div className="absolute inset-0 rounded-3xl bg-white/20 blob" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
}
