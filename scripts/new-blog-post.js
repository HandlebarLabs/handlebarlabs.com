const fs = require('fs');
const { format } = require('date-fns');
const slugify = require('slugify');

const today = new Date();
const year = format(today, 'yyyy');
const month = format(today, 'MM');
const day = format(today, 'dd');

const title = process.argv[2];

if (!title) {
  console.log('Please provide a title for your blog post');
  return null;
}

const slug = slugify(title, {
  lower: true,
});
const postPath = `${process.cwd()}/content/blog-wip/${month}-${day}-${slug}`;

const exists = fs.existsSync(postPath);
if (!exists) {
  fs.mkdirSync(postPath, { recursive: true });
}

const newPostContent = `---
slug: ${slug}
title: ${title}
description:
date: ${year}-${month}-${day}
published: false
topics:
  -
---
`;

const filePath = `${postPath}/index.md`;
fs.writeFile(filePath, newPostContent, err => {
  if (err) {
    console.log('Something went wrong', err);
  }
  console.log('New post created.', filePath);
});

return null;
