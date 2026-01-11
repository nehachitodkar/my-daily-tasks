import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from '@/components/TodoInput';
import { TodoItem } from '@/components/TodoItem';
import { TodoFilters } from '@/components/TodoFilters';
import { EmptyState } from '@/components/EmptyState';
import { ClipboardList } from 'lucide-react';

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
    <div className="min-h-screen bg-background py-8 px-4 sm:py-16">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4">
            <ClipboardList className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            My Tasks
          </h1>
          <p className="text-muted-foreground">
            Stay organized and get things done
          </p>
        </div>

        {/* Input */}
        <div className="mb-6">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filters */}
        {totalCount > 0 && (
          <div className="mb-6">
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
        <div className="space-y-3">
          {todos.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
