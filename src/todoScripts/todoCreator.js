export default function createTodo(
  title,
  description = "No description",
  date,
  priority
) {
  console.log(`A todo with title ${title} has been created`);
  return { title, description, date, priority };
}
