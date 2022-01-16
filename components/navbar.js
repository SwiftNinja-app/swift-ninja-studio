export default function NavBar() {
  return (
    <header className="border-b border-gray-100">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="" className="flex flex-shrink-0">
            <span className="inline-block w-20 h-10 bg-gray-200 rounded-lg"></span>
          </a>

          <nav className="items-center hidden pl-8 ml-8 space-x-8 text-sm font-medium border-l border-gray-100 md:flex">
            <a href="">Run</a>
            <a href="">Stop</a>
            <a href="">Sample Code</a>
          </nav>
        </div>

        <div className="flex items-center">
          <div className="items-center hidden divide-x divide-gray-100 lg:flex">
            <a href="" className="block px-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="block mt-1 text-xs font-medium">Account</span>
            </a>
          </div>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center w-16 h-16 bg-gray-100 border-l border-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}