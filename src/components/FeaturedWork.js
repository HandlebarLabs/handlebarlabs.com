import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

const TabButton = ({
  currentTab,
  tabNumber,
  headerText,
  text,
  icon,
  setTab,
}) => {
  return (
    <a
      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
        currentTab !== tabNumber
          ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
          : 'bg-gray-200 border-transparent'
      }`}
      href="#0"
      onClick={e => {
        e.preventDefault();
        setTab(tabNumber);
      }}
    >
      <div>
        <div className="font-bold leading-snug tracking-tight mb-1">
          {headerText}
        </div>
        <div className="text-gray-600">{text}</div>
      </div>
      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon}
        </svg>
      </div>
    </a>
  );
};

const Tab = ({ show, testimonial, author, role, company, url, logo }) => {
  return (
    <Transition
      show={show}
      appear={true}
      className="w-full"
      enter="transition ease-in-out duration-700 transform order-first"
      enterStart="opacity-0 translate-y-16"
      enterEnd="opacity-100 translate-y-0"
      leave="transition ease-in-out duration-300 transform absolute"
      leaveStart="opacity-100 translate-y-0"
      leaveEnd="opacity-0 -translate-y-16"
    >
      <div className="relative inline-flex flex-col">
        <div className="max-w-3xl mx-auto mt-20">
          <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
            {/* Testimonial */}
            <div className="text-center px-4 md:px-12 py-8 pt-20 mx-4 md:mx-0">
              <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                {/* <svg
                  className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                </svg> */}
                <img
                  className="relative rounded-full"
                  src={logo}
                  width="96"
                  height="96"
                  alt={`${company} Logo`}
                />
              </div>
              <blockquote className="text-xl font-normal mb-4 italic">
                "{testimonial}"
              </blockquote>
              <cite className="block font-bold text-lg not-italic mb-1">
                {author}
              </cite>
              {role && company && (
                <div className="text-gray-600">
                  <span>{role}</span>
                  {', '}
                  <a
                    className="text-blue-600 hover:underline"
                    href={url}
                    target="_blank"
                  >
                    {company}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

const FeaturedWork = ({ projects = [] }) => {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + 'px';
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore Our Work</h1>
            <p className="text-xl text-gray-600">
              From simple MVPs through to complex clinical products, Handlebar
              Labs has built over a dozen React Native apps and trained over
              27,000 developers to do the same.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Featured Projects</h3>
                {/* <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </p> */}
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {projects.map((project, index) => (
                  <TabButton
                    currentTab={tab}
                    tabNumber={index + 1}
                    headerText={project.name}
                    text={project.description}
                    icon={
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    }
                    setTab={setTab}
                  />
                ))}
                {/* <TabButton
                  currentTab={tab}
                  tabNumber={1}
                  headerText="Building the Simple ecosystem"
                  text="Take collaboration to the next level with security and
                      administrative features built for teams."
                  icon={
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  }
                  setTab={setTab}
                />
                <TabButton
                  currentTab={tab}
                  tabNumber={2}
                  headerText="Building the Simple ecosystem"
                  text="Take collaboration to the next level with security and
                      administrative features built for teams."
                  icon={
                    <path
                      d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                      fillRule="nonzero"
                    />
                  }
                  setTab={setTab}
                />
                <TabButton
                  currentTab={tab}
                  tabNumber={3}
                  headerText="Building the Simple ecosystem"
                  text="Take collaboration to the next level with security and
                      administrative features built for teams."
                  icon={
                    <path
                      d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                      fill="#191919"
                      fillRule="nonzero"
                    />
                  }
                  setTab={setTab}
                /> */}
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {projects.map((project, index) => (
                  <Tab
                    show={tab === index + 1}
                    testimonial={project.testimonial}
                    author={project.testimonialAuthor}
                    role={project.role}
                    company={project.company}
                    url={project.url}
                    logo={project.logo.publicURL}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
