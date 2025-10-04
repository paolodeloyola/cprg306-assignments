// /app/week-3/item-list.js
// Import in a way that survives any default/named export mismatch:
import * as ItemMod from "./item.js";
const Item = ItemMod.default ?? ItemMod.Item;

// Safety check (dev-only). If this trips, the import isn't a component.
if (typeof Item !== "function") {
  throw new Error(
    "Item import is not a component function. " +
      "Check /app/week-3/item.js exports."
  );
}

const items = [
  { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
  { name: "bread 🍞", quantity: 2, category: "bakery" },
  { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
  { name: "bananas 🍌", quantity: 6, category: "produce" },
  { name: "broccoli 🥦", quantity: 3, category: "produce" },
  { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
  { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
  { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
  { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
  { name: "paper towels, 6 pack", quantity: 1, category: "household" },
  { name: "dish soap 🍽️", quantity: 1, category: "household" },
  { name: "hand soap 🧼", quantity: 4, category: "household" },
];

export default function ItemList() {
  return (
    <ul className="list-disc pl-6">
      {items.map((it) => (
        <Item key={it.name} {...it} />
      ))}
    </ul>
  );
}
