import React from 'react';
import { Link } from 'gatsby';

const ProjectItem = ({ slug, imageUrl, name, caption }) => (
  <Link to={slug}>
    <div className="mb-10 flex flex-row items-center">
      {imageUrl && (
        <img
          src={imageUrl}
          className="w-24 h-24 object-cover rounded mr-6"
          alt={`${name} Logo`}
        />
      )}
      <div>
        <h2 className="text-2xl text-gray-900 font-bold mb-1">{name}</h2>
        <p className="text-gray-700">{caption}</p>
      </div>
    </div>
  </Link>
);

export default ProjectItem;
