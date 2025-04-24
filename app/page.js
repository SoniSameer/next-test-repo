// app/page.js (App Router with Tailwind CSS)
'use client';

import { useState } from 'react';

export default function Home() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (!note.trim()) return;
    setNotes([note, ...notes]);
    setNote('');
  };

  return (
    <main className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 text-black">Notes App</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
          className="flex-1 p-2 border rounded-md text-sm text-gray-900 placeholder-gray-500 text-black"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {notes.map((n, index) => (
          <li
            key={index}
            className="p-3 bg-gray-100 rounded-md shadow-sm border text-yellow-900"
          >
            {n}
          </li>
        ))}
      </ul>
    </main>
  );
}
