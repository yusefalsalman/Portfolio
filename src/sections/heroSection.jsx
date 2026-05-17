import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DownloadingIcon from '@mui/icons-material/Downloading';

export default function HeroSection() {
  const links = [
    { href: 'https://github.com/yusefalsalman', icon: GitHubIcon },
    {
      href: 'https://www.linkedin.com/in/yousef-salman-27b19a33a',
      icon: LinkedInIcon,
    },
    {
      href: 'https://www.instagram.com/yusef.alsalman/?__pwa=1#',
      icon: InstagramIcon,
    },
    {
      href: 'https://wa.me/962799882249?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%D8%9F](https://wa.me/962799882249?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%D8%9F',
      icon: WhatsAppIcon,
    },
    {
      href: 'https://web.facebook.com/yousef.salman.96586?_rdc=1&_rdr#',
      icon: FacebookIcon,
    },
  ];

  return (
    <div className="  flex flex-col-reverse gap-20 justify-center items-center lg:flex-row lg:justify-between lg:items-center mt-20 transition-all duration-300">
      <div className="w-full lg:w-5/10  flex flex-col justify-center items-center gap-4 fade-in-left text-center lg:text-left lg:items-start transition-all duration-300">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          <span className="text-blue-400 block ">Yousef Salman</span>
          Front-End Specialist in React
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Hi, I'm Yousef Salman, a Front-End Web Developer with a knack for
          creating dynamic and responsive websites.
        </p>
        {/* Links */}
        <div className="mt-6">
          {links.map((e, index) => {
            const IconComponent = e.icon;
            return (
              <a
                key={index}
                href={e.href}
                target="_blank"
                className="inline-flex items-center   hover:text-blue-500 hover:scale-120 ml-4 transition-all duration-300"
              >
                <IconComponent sx={{ fontSize: '30px' }} />
              </a>
            );
          })}
        </div>
        {/* == Links == */}
        {/* Action Buttons */}
        <div>
          <a
            href="Files/yousef-resume.pdf"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer mt-6 mr-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300">
              <RemoveRedEyeIcon className="mr-2" />
              View CV
            </button>
          </a>
          <a
            href="Files/yousef-resume.pdf"
            className="text-white"
            target="_blank"
            download="Yousef_Salman_Resume.pdf"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer mt-6 inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all duration-300">
              <DownloadingIcon className="mr-2" />
              Download CV
            </button>
          </a>
        </div>
        {/* == Action Buttons == */}
      </div>

      <div className="w-full lg:w-4/10 flex justify-center items-center fade-in-right transition-all duration-300">
        <img
          src="images/FullSizeRender.jpg"
          className="w-70 w-min-50 bg-cover rounded-full shadow-lg  border-3 border-amber-700 animate-pulse  hover:animate-none hover:scale-105 hover:shadow-center-indigo transition-all duration-300"
          alt=""
        />
      </div>
    </div>
  );
}
