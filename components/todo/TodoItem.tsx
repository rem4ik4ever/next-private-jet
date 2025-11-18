import * as React from "react"
import { Button } from "@/components/ui/button"

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, newTitle: string) => void
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = React.useState(false)
  const [editTitle, setEditTitle] = React.useState(todo.title)
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  const handleEdit = () => {
    setIsEditing(true)
    setEditTitle(todo.title)
  }

  const handleSave = () => {
    const trimmedTitle = editTitle.trim()
    if (trimmedTitle && trimmedTitle.length <= 200) {
      onEdit(todo.id, trimmedTitle)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditTitle(todo.title)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  const handleDoubleClick = () => {
    handleEdit()
  }

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-border hover:bg-accent/50 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 rounded border-input text-primary focus:ring-primary focus:ring-2"
        data-testid="checkbox"
      />
      
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="w-full px-2 py-1 text-sm border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="title-input"
            maxLength={200}
          />
        ) : (
          <span
            onDoubleClick={handleDoubleClick}
            className={`block text-sm cursor-pointer select-none ${
              todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'
            }`}
            data-testid="title"
          >
            {todo.title}
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          onClick={isEditing ? handleSave : handleEdit}
          size="sm"
          variant={isEditing ? "default" : "outline"}
          data-testid="edit-button"
        >
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <Button
          onClick={() => onDelete(todo.id)}
          size="sm"
          variant="destructive"
          data-testid="delete-button"
        >
          Delete
        </Button>
      </div>
    </div>
  )
}

export default TodoItem