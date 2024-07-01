import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sugerencias = () => {
  const [showForm, setShowForm] = useState(false);
  const [newSuggestion, setNewSuggestion] = useState({ title: '', author: 'Nuevo Usuario', comments: 0 });
  const [suggestions, setSuggestions] = useState([
    { id: 1, title: 'Pinten la UTEC', author: 'Jojiz', comments: 10 },
  ]);

  const handleAddSuggestion = (e) => {
    e.preventDefault();
    if (newSuggestion.title) {
      setSuggestions([...suggestions, { ...newSuggestion, id: suggestions.length + 1 }]);
      setNewSuggestion({ title: '', author: 'Nuevo Usuario', comments: 0 });
      setShowForm(false); // Ocultar el formulario después de agregar la sugerencia
    }
  };

  return (
    <div className="container mx-auto p-4 bg-transparent">
      <h1 className="text-3xl font-bold mb-4 text-cach-l1">Foro</h1>

      {/* Botón para mostrar/ocultar formulario */}
      <button
        className="px-4 py-2 bg-cach-l3 text-cach-l1 rounded mb-4"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancelar' : 'Agregar Sugerencia'}
      </button>

      {/* Formulario para agregar nueva sugerencia */}
      {showForm && (
        <form onSubmit={handleAddSuggestion} className="mb-4">
          <input
            type="text"
            placeholder="Título de la sugerencia"
            value={newSuggestion.title}
            onChange={(e) => setNewSuggestion({ ...newSuggestion, title: e.target.value })}
            className="w-full p-2 border border-cach-l3 rounded mb-2 text-cach-l3/70 focus:outline-none"
          />
          <button type="submit" className="px-4 py-2 bg-cach-l3 text-cach-l1 rounded focus:outline-none">
            Agregar
          </button>
        </form>
      )}

      <div className="bg-transparent p-4 rounded shadow">
        {suggestions.map((suggestion, index) => (
          <div key={suggestion.id} className={`mb-4 ${index !== suggestions.length - 1 ? 'border-b-2 border-cach-l3' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full"></div>
                <div className="ml-4">
                  <Link to={`/dashboard/main/sugerencias/${suggestion.id}`} className="font-bold text-cach-l1">
                    {suggestion.title}
                  </Link>
                  <div className="text-cach-l3">{suggestion.author}</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="ml-2">{suggestion.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sugerencias;
