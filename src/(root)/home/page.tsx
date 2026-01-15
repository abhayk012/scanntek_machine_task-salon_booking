const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
            Template Home Page
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            I am template home page
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <div className="px-6 py-3 bg-white rounded-lg shadow-md">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Built with
            </p>
            <p className="text-lg font-semibold text-gray-900">Vite + React</p>
          </div>
          <div className="px-6 py-3 bg-white rounded-lg shadow-md">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Styled with
            </p>
            <p className="text-lg font-semibold text-gray-900">Tailwind CSS</p>
          </div>
          <div className="px-6 py-3 bg-white rounded-lg shadow-md">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Type-safe with
            </p>
            <p className="text-lg font-semibold text-gray-900">TypeScript</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Ready to Build
          </h2>
          <p className="text-gray-600">
            This is a clean template with the same structure as your main
            project. Start building your next amazing application!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
