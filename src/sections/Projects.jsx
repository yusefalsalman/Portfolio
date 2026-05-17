import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

/* 
Projects github repo:
 react-todo: https://github.com/yusefalsalman/Todo-List-React
  react-weather: https://github.com/yusefalsalman/Weatherify
  guess the word: https://github.com/yusefalsalman/Guess-The-Word-Game
  calculator: https://github.com/yusefalsalman/Calculator
  hungman:https://github.com/yusefalsalman/Hangman-Game
  js todo : https://github.com/yusefalsalman/To-Do-List
  login page: https://github.com/yusefalsalman/Login-Page
  quiz app:https://github.com/yusefalsalman/Quiz-Application
  weather app - js :https://github.com/yusefalsalman/Weather-Application
 */

export default function Projects() {
  const projects = [
    {
      title: 'To-Do App',
      description:
        'A sophisticated productivity app built with React.js. It features full CRUD (Create, Read, Update, Delete) functionality and demonstrates Virtual DOM efficiency, optional Context API usage, and persistent data handling for a seamless user workflow.',
      src: '../public/projects_images/react-todo.jpg',
      link: 'https://todoappyousefsalman.netlify.app/',
      github: 'https://github.com/yusefalsalman/Todo-List-React',
      technology: 'React',
    },
    {
      title: 'Weather App',
      description:
        'A robust React application utilizing Axios for optimized API calls. It implements the useEffect hook for lifecycle management and useState for handling global weather states. The app is structured with reusable components, ensuring a scalable and maintainable codebase.',
      src: '../public/projects_images/react_weather.jpg',
      link: 'https://weatherflyyousefsalman.netlify.app/',
      github: 'https://github.com/yusefalsalman/Weatherify',
      technology: 'React',
    },
    {
      title: 'Weather App',
      description:
        'An interactive weather application that fetches live meteorological data using the Fetch API. It features dynamic background changes based on weather conditions and handles complex JSON data structures to display humidity, wind speed, and temperature in real-time.',
      src: '../public/projects_images/js-weather.jpg',
      link: 'https://weathercheckabuseef.netlify.app/',
      github: 'https://github.com/yusefalsalman/Weather-Application',
      technology: 'Vanilla JS',
    },
    {
      title: 'Login Page',
      description:
        'A sophisticated login system focused on form validation. It uses JavaScript RegEx to verify email formats and password strength, providing real-time error messages to improve user experience and data integrity.',
      src: '../public/projects_images/login.jpg',
      link: 'https://loginpageseefo.netlify.app/',
      github: 'https://github.com/yusefalsalman/Login-Page',
      technology: 'Vanilla JS',
    },
    {
      title: 'Guess The Word Game',
      description:
        'Logic-based educational games that utilize complex JavaScript state management and array methods. These projects involve tracking user attempts, managing game win/loss conditions, and dynamically updating the UI without page refreshes.',
      src: '../public/projects_images/guess.jpg',
      link: 'https://guessthewordseefo.netlify.app/',
      github: 'https://github.com/yusefalsalman/Guess-The-Word-Game',
      technology: 'Vanilla JS',
    },
    {
      title: 'Calculator',
      description:
        'The Calculator demonstrates precision in handling arithmetic operations and edge cases in the UI, ensuring reliable results and graceful handling of invalid input.',
      src: '../public/projects_images/calculator.jpg',
      link: 'https://calculatorabuseef.netlify.app/',
      github: 'https://github.com/yusefalsalman/Calculator',
      technology: 'Vanilla JS',
    },
    {
      title: 'ToDo List App',
      description:
        'Simple to-do list with add, remove and mark-as-done features.',
      src: '../public/projects_images/js-todo.jpg',
      link: 'https://todolistseefo.netlify.app/',
      github: 'https://github.com/yusefalsalman/To-Do-List',
      technology: 'Vanilla JS',
    },
    {
      title: 'Hangman Game',
      description:
        'Logic-based educational games that utilize complex JavaScript state management and array methods. These projects involve tracking user attempts, managing game win/loss conditions, and dynamically updating the UI without page refreshes.',
      src: '../public/projects_images/hangman.jpg',
      link: 'https://seefosalmangames.netlify.app/',
      github: 'https://github.com/yusefalsalman/Hangman-Game',
      technology: 'Vanilla JS',
    },
    {
      title: 'GitHub Repo Finder',
      description:
        'A productivity tool that connects to the GitHub REST API. It allows users to search for any profile and instantly retrieves a list of repositories, including star counts, forks, and primary languages. This project showcases advanced asynchronous programming (async/await) and data filtering.',
      src: '../public/projects_images/repos.jpg',
      link: 'https://yousefhandleapi.netlify.app/',
      github: 'https://github.com/yusefalsalman/Get-Repos',
      technology: 'Vanilla JS',
    },
    {
      title: 'Quiz App',
      description:
        'Practical tools designed to handle user input and mathematical logic. The Quiz App features a scoring algorithm and immediate feedback loops, while the Calculator demonstrates precision in handling arithmetic operations and edge cases in the UI.',
      src: '../public/projects_images/quiz.jpg',
      link: 'https://quizappyousefsalman.netlify.app/',
      github: 'https://github.com/yusefalsalman/Quiz-Application',
      technology: 'Vanilla JS',
    },
    {
      title: 'First Project - Landing Page',
      description:
        'A high-performance, responsive landing page built with a mobile-first approach. This project demonstrates mastery of CSS Flexbox and Grid layouts, semantic HTML5 for SEO optimization, and smooth hover effects. It focuses on clean typography and consistent branding across all device breakpoints.',
      src: '../public/projects_images/first.jpg',
      link: 'https://pageyousef.netlify.app/',
      github: 'https://github.com/yusefalsalman/Landing-Page',
      technology: 'Vanilla JS',
    },
    {
      title: 'Portfolio',
      description: '',
      src: '../public/projects_images/portfolio.jpg',
      link: '',
      github: '',
      technology: 'React',
    },
  ];

  /* alignment */
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  let displayedProjects;

  const jsProjects = projects.filter(
    (project) => project.technology === 'Vanilla JS'
  );
  const reactProjects = projects.filter(
    (project) => project.technology === 'React'
  );

  if (alignment === 'center') {
    displayedProjects = jsProjects;
  } else if (alignment === 'right') {
    displayedProjects = reactProjects;
  } else {
    displayedProjects = projects;
  }

  /* === alignment === */

  return (
    <div id="Projects" className="header-section ">
      <header>
        <h2 className="praimary-head  text-2xl mx-auto mb-10 fade-in-left ">
          Projects
        </h2>
      </header>

      <div className="toggles flex justify-center my-15 w-fit mx-auto fade-in-right rounded-lg  ">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          color="success"
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <p className="text-lg  text-white">All</p>
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <p className="text-lg  text-white">Vanilla JS</p>
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <p className="text-lg  text-white">React</p>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="fade-in-right p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {displayedProjects.map((project, index) => {
          return (
            <div
              key={index}
              className="Box border border-gray-700 flex flex-col gap-2 rounded-lg  shadow-md transition duration-300 ease-in-out hover:scale-102 hover:shadow-center-indigo-500/50 hover:border-indigo-500"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-3 h-full flex flex-col justify-between gap-4">
                <div className="mb-2 pb-2">
                  <h3 className="text-2xl mb-3 font-semibold">
                    {project.title}
                  </h3>
                  <p className="desc text-gray-400">{project.description}</p>
                </div>
                <div className="link flex justify-between items-center px-4  mt-auto border-t border-gray-700 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-cente font-medium hover:text-blue-700 transition-colors duration-300"
                  >
                    <VisibilityIcon
                      sx={{
                        paddingRight: '5px',
                        marginRight: '5px',
                        fontSize: '30px',
                      }}
                    />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center   transition-colors duration-300"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
