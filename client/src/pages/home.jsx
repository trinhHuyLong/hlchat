import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const yesf = () => {
    let result = confirm("Mình biết mmà! mình cũng nhớ cậu nhiều ❤️");

    if (result) {
      navigate("/home");
    }
  };

  const nof = () => {
    const el = ref.current;
    const parent = el.parentElement;

    const elW = el.offsetWidth;
    const elH = el.offsetHeight;

    const maxX = parent.clientWidth - elW;
    const maxY = parent.clientHeight - elH;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  };
  return (
    <div className="w-[50%] h-[50%] m-auto mt-20 p-10 border border-gray-300 rounded-lg flex flex-col items-center">
      <h1 className="mb-6 text-lg font-semibold">Hoài cậu có nhớ tớ không</h1>

      <div className="w-full h-[300px] flex">
        {/* YES */}
        <div className="w-1/2 h-full relative flex items-center justify-center">
          <button
            onClick={yesf}
            className="bg-green-500 text-white px-6 py-2 rounded"
          >
            Có
          </button>
        </div>

        {/* NO */}
        <div className="w-1/2 h-full relative">
          <div
            ref={ref}
            onMouseEnter={nof}
            onClick={nof}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <button className="bg-red-500 text-white px-6 py-2 rounded">
              Không
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
