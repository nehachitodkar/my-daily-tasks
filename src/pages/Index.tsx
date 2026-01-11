import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from '@/components/TodoInput';
import { TodoItem } from '@/components/TodoItem';
import { TodoFilters } from '@/components/TodoFilters';
import { EmptyState } from '@/components/EmptyState';
import { Zap } from 'lucide-react';

const Index = () => {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    activeCount,
    completedCount,
    totalCount,
  } = useTodos();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 gradient-bg rounded-full opacity-20 blur-3xl blob" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-accent rounded-full opacity-15 blur-3xl blob" style={{ animationDelay: '-2s' }} />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-success rounded-full opacity-10 blur-3xl blob" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="relative z-10 py-8 px-4 sm:py-16">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 gradient-bg rounded-2xl shadow-glow-lg mb-6 float-animation">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
              <span className="gradient-text">Task Master</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Organize. Focus. Achieve. ✨
            </p>
          </div>

          {/* Input */}
          <div className="mb-8">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* Filters */}
          {totalCount > 0 && (
            <div className="mb-8">
              <TodoFilters
                filter={filter}
                onFilterChange={setFilter}
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={clearCompleted}
              />
            </div>
          )}

          {/* Task List */}
          <div className="space-y-4">
            {todos.length === 0 ? (
              <EmptyState filter={filter} />
            ) : (
              todos.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  index={index}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
