import React from 'react';

export default function YoutubeCard({ data, thumbnail }) {
  const formattedDate = new Date(data.publishedAt);
  return (
    <article className="overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-green-200">
      <a href="#">
        <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={data.thumbnails.high.url}
        />
      </a>

      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg ">
          <a
            className="uppercase no-underline hover:underline text-gray-900 dark:text-green-200"
            href="#"
          >
            {data.title}
          </a>
        </h1>
        <p className="text-gray-900 dark:text-green-200 text-sm">
          {formattedDate.toDateString()}
        </p>
      </header>

      <footer className="flex items-center justify-start leading-none p-1 m-1">
        <a
          className="flex items-center no-underline hover:underline pt-2"
          href="#"
        >
          <img
            alt="Placeholder"
            className="block rounded-full w-8"
            src={thumbnail}
          />
          <p className="ml-2 text-sm text-gray-900 dark:text-green-200">
            {data.channelTitle}
          </p>
        </a>
        <a
          className="no-underline text-grey-darker hover:text-red-dark"
          href="#"
        >
          <span className="hidden">Like</span>
          <i className="fa fa-heart"></i>
        </a>
      </footer>
    </article>
  );
}
