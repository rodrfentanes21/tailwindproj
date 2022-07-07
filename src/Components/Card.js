import './Card.css'
function Card() {
  return (
    <div className="flex text-center items-center justify-center align-middle h-64 w-1/3 bg-blue-600 rounded-xl" id='card'>
      <div className="transition ease-in-out delay-150 hover:translate-y-1 hover:translate-x-1 flex text-center items-center justify-center align-middle h-64 w-[100%] hover:drop-shadow-md bg-slate-200 rounded-xl ">
        <div className="flex align-middle justify-center space-x-3 items-start p-3">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd4%2F94%2Fd4943bd9b75c08e11cbe6fc95ff38bf7f2caaf14.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            className="h-40 aspect-[3/4s] rounded-md"
            alt="plain t-shirt"
          ></img>
          <div className="flex-col align-middle justify-center items-center  h-40 min-w-42 max-w-42">
            <h1 className="text-xl font-semibold text-center">Plain T-Shirt</h1>
            <div className="flex-col min-h-[80%]">
              <p className="text-slate-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                porttitor volutpat aliquam. Lorem ipsum dolor sit amet, metus.
              </p>
            </div>
            <div className="text-slate-500 mb-0 mr-10 text-right min-w-[100%]">
              <a
                href="https://youtu.be/dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
