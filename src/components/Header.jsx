const Header = () => {
  return (
    <header className="flex items-center justify-center gap-3 sm:gap-5 pb-4 px-4">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500"
        aria-label="Quizzle"
      >
        Quizzle
      </h1>
      <img
        src="quiz-logo.png"
        alt="Quizzle Logo"
        className="w-10 sm:w-12 md:w-14 lg:w-[70px] object-contain"
        loading="lazy"
        decoding="async"
      />
    </header>
  );
};

export default Header;
