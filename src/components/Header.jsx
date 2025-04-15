const Header = () => {
  return (
    <div className="flex items-center justify-center pb-3 px-4">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mr-3 sm:mr-5">
        Quizzle
      </div>
      <img
        src="quiz-logo.png"
        alt="Quiz Logo"
        className="w-10 sm:w-12 md:w-14 lg:w-[70px]"
      />
    </div>
  );
};

export default Header;
