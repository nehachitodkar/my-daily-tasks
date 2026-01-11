import { useState } from 'react';
import { Plus, Sparkles } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className={`absolute -inset-1 gradient-bg rounded-2xl opacity-0 blur-xl transition-all duration-500 ${isFocused ? 'opacity-40' : 'group-hover:opacity-20'}`} />
      <div className="relative">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Sparkles className={`w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-primary' : ''}`} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="What needs to be done?"
          className="w-full pl-14 pr-16 py-5 text-base bg-card text-card-foreground rounded-2xl border-2 border-border shadow-card placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow transition-all duration-300"
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-xl gradient-bg text-primary-foreground shadow-glow disabled:opacity-40 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:shadow-glow-lg active:scale-95"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
