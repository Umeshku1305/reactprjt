const App = () => {
  return (
    <div className="mt-5 w-[80%]  m-auto">
      <h1 className="text-5xl mt-10 font-semibold text-red-600">hello guys this is the react bolierplate </h1>
      <h1 className="text-4xl font-semibold mt-4 text-blue-900">hello guys ye hai hamara react ka bolierplate </h1>
      <h2 className="text-3xl">{import.meta.env.VITE_API_KEY}</h2>
      <button className="px-5 py-2 bg-blue-300 rounded mt-4 font-semibold ">Explore</button>
    </div>
  );
};

export default App;