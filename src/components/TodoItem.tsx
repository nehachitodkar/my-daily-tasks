import { useState } from 'react';
import { Check, Trash2 } from 'lucide-react';
import type { Todo } from '@/hooks/useTodos';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle(todo.id);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div
      className={`group flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-200 task-enter ${
        todo.completed ? 'opacity-60' : ''
      }`}
    >
      <button
        onClick={handleToggle}
        className={`relative flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 ${
          todo.completed
            ? 'bg-success border-success'
            : 'border-muted-foreground/40 hover:border-primary'
        } ${isAnimating ? 'checkbox-bounce' : ''}`}
      >
        {todo.completed && (
          <Check className="absolute inset-0 m-auto w-3.5 h-3.5 text-success-foreground" />
        )}
      </button>

      <span
        className={`flex-1 text-base transition-all duration-200 ${
          todo.completed
            ? 'line-through text-muted-foreground'
            : 'text-card-foreground'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 rounded-lg text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive hover:bg-destructive/10 transition-all duration-200"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
