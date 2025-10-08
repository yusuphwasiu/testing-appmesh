// Shared utility functions
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15)
}

export function formatDate(date: Date): string {
  return date.toISOString()
}
