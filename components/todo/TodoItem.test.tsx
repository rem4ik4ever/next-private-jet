import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TodoItem, Todo } from '@/components/todo/TodoItem'

const mockTodo: Todo = {
  id: '1',
  title: 'Test Todo',
  completed: false
}

const mockTodoCompleted: Todo = {
  id: '2',
  title: 'Completed Todo',
  completed: true
}

const mockHandlers = {
  onToggle: vi.fn(),
  onDelete: vi.fn(),
  onEdit: vi.fn()
}

describe('TodoItem', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders todo item with title and checkbox', () => {
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    expect(screen.getByTestId('title')).toHaveTextContent('Test Todo')
    expect(screen.getByTestId('checkbox')).not.toBeChecked()
    expect(screen.getByTestId('edit-button')).toHaveTextContent('Edit')
    expect(screen.getByTestId('delete-button')).toHaveTextContent('Delete')
  })

  it('applies line-through styling when completed', () => {
    render(<TodoItem todo={mockTodoCompleted} {...mockHandlers} />)
    
    const title = screen.getByTestId('title')
    expect(title).toHaveClass('line-through')
    expect(title).toHaveClass('text-muted-foreground')
  })

  it('handles checkbox toggle', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const checkbox = screen.getByTestId('checkbox')
    await user.click(checkbox)
    
    expect(mockHandlers.onToggle).toHaveBeenCalledWith('1')
  })

  it('handles delete button click', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const deleteButton = screen.getByTestId('delete-button')
    await user.click(deleteButton)
    
    expect(mockHandlers.onDelete).toHaveBeenCalledWith('1')
  })

  it('enters edit mode when edit button is clicked', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const editButton = screen.getByTestId('edit-button')
    await user.click(editButton)
    
    expect(screen.getByTestId('title-input')).toBeInTheDocument()
    expect(editButton).toHaveTextContent('Save')
  })

  it('enters edit mode when title is double-clicked', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const title = screen.getByTestId('title')
    await user.dblClick(title)
    
    expect(screen.getByTestId('title-input')).toBeInTheDocument()
  })

  it('saves edit on Enter key', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const editButton = screen.getByTestId('edit-button')
    await user.click(editButton)
    
    const input = screen.getByTestId('title-input')
    await user.clear(input)
    await user.type(input, 'Updated Title')
    await user.type(input, '{Enter}')
    
    expect(mockHandlers.onEdit).toHaveBeenCalledWith('1', 'Updated Title')
    expect(screen.queryByTestId('title-input')).not.toBeInTheDocument()
  })

  it('cancels edit on Escape key', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const editButton = screen.getByTestId('edit-button')
    await user.click(editButton)
    
    const input = screen.getByTestId('title-input')
    await user.clear(input)
    await user.type(input, 'Updated Title')
    await user.type(input, '{Escape}')
    
    expect(mockHandlers.onEdit).not.toHaveBeenCalled()
    expect(screen.queryByTestId('title-input')).not.toBeInTheDocument()
    expect(screen.getByTestId('title')).toHaveTextContent('Test Todo')
  })

  it('saves edit on blur', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const editButton = screen.getByTestId('edit-button')
    await user.click(editButton)
    
    const input = screen.getByTestId('title-input')
    await user.clear(input)
    await user.type(input, 'Updated Title')
    
    // Blur the input by clicking outside
    fireEvent.blur(input)
    
    expect(mockHandlers.onEdit).toHaveBeenCalledWith('1', 'Updated Title')
    expect(screen.queryByTestId('title-input')).not.toBeInTheDocument()
  })

  it('does not save empty title', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const editButton = screen.getByTestId('edit-button')
    await user.click(editButton)
    
    const input = screen.getByTestId('title-input')
    await user.clear(input)
    await user.type(input, '   ')
    await user.type(input, '{Enter}')
    
    expect(mockHandlers.onEdit).not.toHaveBeenCalled()
    expect(screen.queryByTestId('title-input')).not.toBeInTheDocument()
  })

  it('trims whitespace and respects 200 character limit', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const editButton = screen.getByTestId('edit-button')
    await user.click(editButton)
    
    const input = screen.getByTestId('title-input')
    await user.clear(input)
    
    const longTitle = 'a'.repeat(250)
    await user.type(input, longTitle)
    await user.type(input, '{Enter}')
    
    expect(mockHandlers.onEdit).toHaveBeenCalledWith('1', 'a'.repeat(200))
  })

  it('focuses and selects text when entering edit mode', async () => {
    const user = userEvent.setup()
    render(<TodoItem todo={mockTodo} {...mockHandlers} />)
    
    const editButton = screen.getByTestId('edit-button')
    await user.click(editButton)
    
    const input = screen.getByTestId('title-input') as HTMLInputElement
    expect(document.activeElement).toBe(input)
    expect(input.selectionStart).toBe(0)
    expect(input.selectionEnd).toBe(mockTodo.title.length)
  })
})