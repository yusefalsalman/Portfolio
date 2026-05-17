export default function Skills() {
  const skills_src = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  ];

  return (
    <div className="header-section " id="Skills">
      <header>
        <h2 className="praimary-head  text-2xl mx-auto mb-10 fade-in-left ">
          Skills
        </h2>
      </header>
      <div className="flex flex-wrap justify-center gap-6 fade-in-right">
        {skills_src.map((src, index) => {
          return (
            <img
              src={src}
              title={src.split('/').slice(-2)[0].split('-')[0].toUpperCase()}
              className=" bg-primary-dark w-20 lg:w-35 hover:scale-110 transition-all duration-300 p-2 rounded-lg"
              alt=""
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
