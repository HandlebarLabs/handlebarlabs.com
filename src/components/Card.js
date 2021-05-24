import React from 'react';

export const Card = ({ image, name, excerpt, status }) => (
  <div className="max-w-md h-full rounded overflow-hidden shadow-lg flex flex-col">
    <img
      className="w-full h-48 object-cover"
      src={image}
      alt={`${name} Logo`}
    />
    <div className="px-6 py-4 flex-1">
      <h2 className="font-bold text-xl mb-2 text-gray-700">{name}</h2>
      <p className="text-gray-700 text-base">{excerpt}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {status}
      </span>
    </div>
  </div>
);
