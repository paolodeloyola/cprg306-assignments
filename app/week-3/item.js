// /app/week-3/item.js
export default function Item({ name, quantity, category }) {
  return (
    <li className="mb-4">
      <p className="font-medium">{name}</p>
      <p>
        Buy {quantity} in {String(category).toLowerCase()}
      </p>
    </li>
  );
}
