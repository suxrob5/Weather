interface Type {
    text: boolean;
}

const TextFalse:React.FC<Type> = ({ text }) => {
  return (
    <h1 className="text-blue-500 font-[600] text-2xl mt-5">
      {text == false ? (
        "Ob-havo"
      ) : (
        <span className="text-red-500 underline shadow-lg shadow-red-200">
          Bunday davlat yoki shahar topilmadi{" "}
          <button
            onClick={() => location.reload()}
            className=" shadow-gray-900 mt-5"
          >
            Boshidan qidish
          </button>
        </span>
      )}
    </h1>
  );
};

export default TextFalse