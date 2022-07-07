function Header() {
  return (
    <div className="flex text-center items-center justify-center text-5xl h-screen">
      <div className="flex-col gap-5">
        <h1 className="text-black">
          Interested in quality T-Shirts?
        </h1>
        <div className="mt-2 text-xl text-slate-400">
            Here at genericCompanyName we work hard so you can experience what is like having e high quality t-shirt. 
        </div>
        <button
          className="mt-6 h-12 text-2xl px-6 font-semibold rounded-md bg-blue-600 text-white select-none hover:bg-blue-900"
          type="submit"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Header;
