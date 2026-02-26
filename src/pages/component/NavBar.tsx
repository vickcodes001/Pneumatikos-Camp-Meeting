const navLinks = [{ id: 1, label: "About Us", href: "#about" }];

const NavBar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-7xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0">
              <img
                src="images/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Prevent text overflow */}
            <span className="text-sm md:text-base font-semibold text-gray-900 md:max-w-none">
              GRACE AMBASSADORS WORLD OUTREACH MINISTRIES
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-900 font-semibold hover:text-amber-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          {/* <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />

          <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white rounded-2xl shadow-2xl z-50 md:hidden transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <nav className="space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-lg font-medium text-gray-800 hover:text-amber-500 transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <button
                onClick={() => {
                  onRegisterClick();
                  closeMenu();
                }}
                className="w-full mt-4 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition"
              >
                REGISTER NOW
              </button>
            </div>
          </div>
        </>
      )} */}
    </div>
  );
};

export default NavBar;
