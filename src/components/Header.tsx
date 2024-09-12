import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';

function Header() {
  return (
    <nav className=" w-full rounded border-4 border-double border-rose-500 bg-red-950  px-4 py-2 text-center text-2xl font-bold text-white  ">
      Expenso expense tracker created by Mo Adeeb Alkahat using mobx{' '}
      <a href="https://github.com/Mo-Adeeb-Alkahat">
        <img src={github} alt="github" className="mx-2 inline h-5 w-5" />
      </a>
      <a href="https://www.linkedin.com/in/mo-adeeb-alkahat/">
        <img src={linkedin} alt="likedin" className="inline h-6 w-6" />
      </a>
    </nav>
  );
}

export default Header;
