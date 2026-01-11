import { useState } from 'react';
import { Check, Trash2, Star } from 'lucide-react';
import type { Todo } from '@/hooks/useTodos';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  index: number;
}

const gradientColors = [
  'from-pink-500 to-rose-500',
  'from-violet-500 to-purple-500',
  'from-blue-500 to-indigo-500',
  'from-cyan-500 to-teal-500',
  'from-emerald-500 to-green-500',
  'from-amber-500 to-orange-500',
];

export function TodoItem({ todo, onToggle, onDelete, index }: TodoItemProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const colorClass = gradientColors[index % gradientColors.length];

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle(todo.id);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      className={`group relative flex items-center gap-4 p-5 glass-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 task-enter ${
        todo.completed ? 'opacity-70' : ''
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Decorative gradient bar */}
      <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b ${colorClass} ${todo.completed ? 'opacity-30' : 'opacity-100'} transition-opacity duration-300`} />

      <button
        onClick={handleToggle}
        className={`relative flex-shrink-0 w-7 h-7 rounded-full border-2 transition-all duration-300 ml-2 ${
          todo.completed
            ? `bg-gradient-to-br ${colorClass} border-transparent shadow-glow`
            : 'border-muted-foreground/30 hover:border-primary hover:scale-110'
        } ${isAnimating ? 'checkbox-pop' : ''}`}
      >
        {todo.completed && (
          <Check className="absolute inset-0 m-auto w-4 h-4 text-white" strokeWidth={3} />
        )}
      </button>

      <span
        className={`flex-1 text-base font-medium transition-all duration-300 ${
          todo.completed
            ? 'line-through text-muted-foreground'
            : 'text-card-foreground'
        }`}
      >
        {todo.text}
      </span>

      {!todo.completed && (
        <Star className="w-4 h-4 text-warning opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      )}

      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 rounded-xl text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive hover:bg-destructive/10 transition-all duration-300 hover:scale-110"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
