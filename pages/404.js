export default function Custom404() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-medium">Oops!</h1>
      <h1 className="text-center text-xl">404 - Page Not Found</h1>
      <a
        href="/"
        className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Back to Homepage
      </a>
    </div>
  );
}
