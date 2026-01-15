export default function SearchList({ items }) {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
