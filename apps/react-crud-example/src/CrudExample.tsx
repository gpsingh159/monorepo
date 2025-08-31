import { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const initialItems: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

export default function CrudExample() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const handleAdd = () => {
    if (newName.trim()) {
      setItems([...items, { id: Date.now(), name: newName }]);
      setNewName("");
    }
  };

  const handleEdit = (id: number, name: string) => {
    setEditId(id);
    setEditName(name);
  };

  const handleUpdate = () => {
    setItems(
      items.map((item) =>
        item.id === editId ? { ...item, name: editName } : item
      )
    );
    setEditId(null);
    setEditName("");
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2>React CRUD Example</h2>
      <div style={{ marginBottom: 16 }}>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New item name"
        />
        <button onClick={handleAdd} style={{ marginLeft: 8 }}>
          Add
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: 8 }}>
            {editId === item.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={handleUpdate} style={{ marginLeft: 8 }}>
                  Update
                </button>
                <button
                  onClick={() => setEditId(null)}
                  style={{ marginLeft: 4 }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {item.name}
                <button
                  onClick={() => handleEdit(item.id, item.name)}
                  style={{ marginLeft: 8 }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{ marginLeft: 4 }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
