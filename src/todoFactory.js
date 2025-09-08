export default function createTodo(
  title,
  description = "No description",
  date,
  priority
) {
  return { title, description, date, priority };
}
