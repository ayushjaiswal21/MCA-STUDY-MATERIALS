function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 w-14 h-14 rounded-xl border-none cursor-pointer flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-700 hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <i className="fa-solid fa-circle-up text-2xl"></i>
    </button>
  );
}
