import { useState, ChangeEvent } from 'react'

interface Item {
  id: number;
  name: string;
}

interface SearchableListProps {
  items: Item[];
}

export default function SearchableList({ items }: SearchableListProps) {
  const [query, setQuery] = useState<string>('')

  const filtered: Item[] = items.filter((item: Item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input
        placeholder='Search...'
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <ul>
        {filtered.map((item: Item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}