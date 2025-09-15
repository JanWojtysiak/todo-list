export default function createTodo(
  title,
  description = "No description",
  date,
  priority,
  id = crypto.randomUUID()
) {
  return { title, description, date, priority, id };
}
