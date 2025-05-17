import Header from "./components/header";

export default function HomePage() {
  return (
    <Header />
    <main className="min-h-screen flex flex-col items-center justify-center bg-offwhite p-6">
      <h1 className="text-5xl font-cute font-bold text-babyblue mb-4">
        Welcome to My Cute Portfolio!
      </h1>
      <p className="text-lg text-softlavender max-w-xl text-center mb-8">
        Hi! I’m Simrah,
      </p>
      <button className="bg-babyblue hover:bg-babypink text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-300">
        Explore My Projects
      </button>
    </main>
  );
}
