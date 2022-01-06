import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';

const ProjectItem = ({
  slug,
  imageUrl,
  name,
  caption,
  showCTA = true,
  date,
}) => (
  <Link to={slug}>
    <div className="group mb-10 flex flex-col md:flex-row ">
      {imageUrl && (
        <img
          src={imageUrl}
          className="w-24 h-24 object-cover rounded mr-6 mb-2 md:mb-0 mt-1"
          alt={`${name} Logo`}
        />
      )}
      <div>
        {date && (
          <p className="block text-gray-500 uppercase font-semibold text-xs tracking-wide mb-1">
            <time dateTime={date}>
              {format(new Date(date), 'MMMM do, yyyy')}
            </time>
          </p>
        )}
        <h2 className="block mt-1 mb-2 text-lg leading-tight font-medium text-black flex-grow-0">
          {name}
        </h2>
        <p className="text-gray-600 text-lg mb-4">{caption}</p>
        {showCTA && (
          <p className="text-gray-700 hover:text-black text-sm no-underline group-hover:underline text-base leading-normal">
            Read this article →
          </p>
        )}
      </div>
    </div>
  </Link>
);

export default ProjectItem;
