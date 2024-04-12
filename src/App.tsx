import { FormEvent, useState } from "react";
import TextFalse from "./components/TextFalse";
import MainElements from "./components/MainElements";

type DataType = null | {
  cloud: number;
  location: {
    country: string;
    tz_id: string;
    localtime: string;
    name: string;
    region: string;
  };
  current: {
    wind_degree: number;
    wind_kph: number;
    temp_c: number;
    temp_f: number;
    pressure_in: string;
    precip_in: number;
    gust_kph: string;
    gust_mph: string;
    humidity: string;
    wind_mph: number;
    pressure_mb: number;
    condition: { icon: string; text: string };
  };
};
const App = () => {
  const [data, setdata] = useState<DataType>(null);
  const [input, setinput] = useState<string>("");
  const [text, settext] = useState<boolean>(false);

  const FetchData = async (e: FormEvent) => {
    e.preventDefault();
    if (input !== "") {
      const ApiKey = "9d032d2d79b8457aa6c142346232512";
      const q = input;

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${q}`
      );

      if (response.ok == false) {
        console.error("Bunday davlat topilmadi");
        settext(true);
      } else {
        const result = await response.json();
        setdata(result);
        console.log(data);
      }
    }
  };

  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="border p-10">
        <form onSubmit={FetchData} className="flex items-center">
          <input
            type="search"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="text-xl font-[400] px-5 py-3 sm:w-[300px] rounded-l-lg sm:text-2xl sm:font-[500] bg-blue-200 focus:outline-cyan-600"
          />
          <button className="font-[400] px-5 py-3 text-xl sm:text-2xl text-white sm:font-[500] rounded-r-lg bg-blue-500">
            Qidirish
          </button>
        </form>
        {text == false ? (
          data == null ? (
            <TextFalse text={text} />
          ) : (
            <MainElements data={data} />
          )
        ) : (
          <span className="text-red-500 font-[600] text-2xl underline shadow-lg shadow-red-200">
            Bunday davlat yoki shahar topilmadi <br />
            <button
              onClick={() => location.reload()}
              className=" shadow-gray-900 mt-5"
            >
              Boshidan qidish
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default App;
