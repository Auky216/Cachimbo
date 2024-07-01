import React, { useState } from 'react';

const SuggestionDetail = () => {
  const [suggestion, setSuggestion] = useState({
    title: 'Pinten la UTEC',
    author: 'Jojiz',
    date: '10 Jun - 10:00pm',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas, similique omnis cum dicta sint porro. Quod facilis, rerum odit quibusdam iste ratione non omnis quidem amet illo cumque eveniet.',
    comments: [
      { author: 'Jojiz', date: '10 Jun - 10:00pm', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { author: 'Marlin', date: '10 Jun - 1:00pm', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas, similique omnis cum dicta sint porro.' }
    ]
  });

  const [newComment, setNewComment] = useState({ author: '', content: '' });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      setSuggestion(prev => ({
        ...prev,
        comments: [...prev.comments, { ...newComment, date: new Date().toLocaleString() }]
      }));
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div className="container mx-auto p-4 bg-transparent rounded-lg shadow-lg">
      <div className="flex items-start mb-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0 mr-4"></div>
        <div>
          <h2 className="text-xl font-bold text-cach-l1">{suggestion.title}</h2>
          <p className="text-sm text-cach-l3">{suggestion.author} • <span className="text-cach-l1">{suggestion.date}</span></p>
        </div>
      </div>

      <p className="mb-6 text-cach-l3">{suggestion.content}</p>

      <h3 className="text-lg font-bold mb-4 text-cach-l1">Comentarios</h3>

      {suggestion.comments.map((comment, index) => (
        <div key={index} className="bg-cach-l3/10 rounded-lg p-4 mb-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
            <div>
              <p className="font-bold text-cach-l1">{comment.author}</p>
              <p className="text-sm text-cach-l1">{comment.date}</p>
            </div>
          </div>
          <p className="text-cach-l3">{comment.content}</p>
        </div>
      ))}

      <form onSubmit={handleCommentSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Tu nombre"
          value={newComment.author}
          onChange={(e) => setNewComment({...newComment, author: e.target.value})}
          className="w-full p-2 mb-2 border border-cach-l3 rounded text-cach-l3/70 focus:outline-none bg-transparent"
        />
        <textarea
          placeholder="Tu comentario"
          value={newComment.content}
          onChange={(e) => setNewComment({...newComment, content: e.target.value})}
          className="w-full p-2 mb-2 border border-cach-l3 rounded text-cach-l3/70 focus:outline-none bg-transparent"
        />
        <button type="submit" className="px-4 py-2 bg-cach-l3 text-cach-l1 rounded focus:outline-none">
          Agregar Comentario
        </button>
      </form>

      <button className="px-4 py-2 bg-cach-l3 text-cach-l1 rounded float-right focus:outline-none">
        Siguiente
      </button>
    </div>
  );
};

export default SuggestionDetail;
