import { useState } from "react";

const Navbar = ({
  handleClick,
}: {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              🇧🇷{" "}
              <a
                href="#"
                className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Portuquiz
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="shuffle"
                >
                  <svg
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M418.972,324.766c-2.839-2.106-6.642-2.359-9.748-0.637c-3.081,1.733-4.862,5.102-4.549,8.629l2.624,30.327
		c-14.369-2.214-27.151-5.861-38.752-10.662c-19.448-8.088-35.958-19.484-51.219-33.685c-10.157-9.459-19.689-20.171-28.859-31.796
		c-7.702-9.785-15.116-20.266-22.457-31.074c11.697-17.149,23.66-33.336,36.538-47.513c9.748-10.783,20.026-20.422,31.097-28.678
		c12.66-9.424,26.356-17.065,42.026-22.697c9.652-3.454,20.122-6.114,31.627-7.871l-2.624,30.134
		c-0.313,3.527,1.468,6.896,4.549,8.629c3.106,1.722,6.908,1.469,9.748-0.637l89.418-66.432c2.263-1.708,3.611-4.38,3.611-7.22
		c0-2.841-1.348-5.512-3.611-7.209L418.972,39.93c-2.839-2.106-6.642-2.358-9.748-0.625c-3.081,1.72-4.862,5.102-4.549,8.617
		l2.96,34.057c-23.42,2.624-44.841,8.112-64.216,16.116c-27.848,11.468-51.291,27.811-71.197,46.284
		c-13.286,12.336-25.079,25.61-35.862,39.221c-3.322,4.212-6.523,8.449-9.676,12.697c-3.152-4.248-6.354-8.496-9.675-12.708
		c-10.76-13.611-22.53-26.91-35.791-39.258c-19.881-18.508-43.326-34.876-71.149-46.369C82.269,86.421,50.304,79.922,14.152,79.946
		H0v66.564h14.152c25.056,0.012,45.684,3.864,63.591,10.289c15.669,5.644,29.34,13.311,42.001,22.758
		c11.048,8.256,21.301,17.907,31.074,28.703c12.852,14.201,24.766,30.399,36.465,47.561c-7.342,10.795-14.78,21.265-22.505,31.036
		c-9.171,11.626-18.726,22.325-28.884,31.772c-15.283,14.177-31.794,25.549-51.266,33.624c-19.497,8.028-42.145,12.925-70.475,12.95
		H0v66.551h14.152c31.964,0.024,60.679-5.042,86.12-14.225c22.288-7.992,41.977-19.111,59.306-32.06
		c15.164-11.324,28.546-24.046,40.604-37.392c9.532-10.566,18.245-21.529,26.429-32.589c8.16,11.071,16.848,22.048,26.38,32.614
		c12.058,13.37,25.417,26.102,40.581,37.451c17.304,12.974,36.97,24.106,59.234,32.133c16.849,6.089,35.117,10.337,54.806,12.552
		l-2.937,33.841c-0.313,3.515,1.468,6.896,4.549,8.617c3.106,1.734,6.908,1.48,9.748-0.626l89.418-66.443
		c2.263-1.697,3.611-4.367,3.611-7.208c0-2.84-1.348-5.524-3.611-7.222L418.972,324.766z"
                      />
                    </g>
                  </svg>
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="ar"
                >
                  AR
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="ir"
                >
                  IR
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="er"
                >
                  ER
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="presente"
                >
                  Presente
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="preterito-perfeito"
                >
                  Pretérito Perfeito
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="preterito-imperfeito"
                >
                  Pretérito Imperfeito
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="futuro-do-presente"
                >
                  Futuro do Presente
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="preterito-mais-que-perfeito"
                >
                  Pretérito Mais-Que-Perfeito
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="presente-progressivo"
                >
                  Presente Progressivo
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-xs text-white rounded"
                  onClick={handleClick}
                  value="futuro-do-preterito"
                >
                  Futuro do Pretérito
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button className="bg-blue-500 hover:bg-blue-600 px-3 py-2 mr-2 text-sm text-white rounded">
            AR
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-3 py-2 mr-2 text-sm text-white rounded">
            IR
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-3 py-2 mr-2 text-sm text-white rounded">
            ER
          </button>
          <button className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-sm text-white rounded">
            Presente
          </button>
          <button className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-sm text-white rounded">
            Pretérito Perfeito
          </button>
          <button className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-sm text-white rounded">
            Pretérito Imperfeito
          </button>
          <button className="bg-green-500 hover:bg-green-600 px-3 py-2 mr-2 text-sm text-white rounded">
            Futuro do Presente
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
