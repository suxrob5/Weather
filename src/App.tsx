import { FormEvent, useState } from "react";

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
    <div className="w-screen bg-gray-900 flex items-center justify-center border">
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
          ) : (
            <div>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Qidirildi:{" "}
                <span className="text-blue-500">{data.location.name}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Bulut:{" "}
                <span className="text-blue-500">{data.current.gust_kph}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Shamol km/soat:{" "}
                <span className="text-blue-500">{data.cloud}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                shamol mil/soat:{" "}
                <span className="text-blue-500">{data.current.gust_mph}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Namlik:{" "}
                <span className="text-blue-500">{data.current.humidity}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Region:{" "}
                <span className="text-blue-500">{data.location.region}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Davlat:{" "}
                <span className="text-blue-500">{data.location.country}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Oxirgi yangilangan:{" "}
                <span className="text-blue-500">{data.location.localtime}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Yog'ingarchilik:{" "}
                <span className="text-blue-500">{data.current.precip_in}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Ichidagi bosim:{" "}
                <span className="text-blue-500">
                  {data.current.pressure_in}
                </span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Bosim mb:{" "}
                <span className="text-blue-500">
                  {data.current.pressure_mb}
                </span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Harorat c:{" "}
                <span className="text-blue-500">{data.current.temp_c}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Harorat f:{" "}
                <span className="text-blue-500">{data.current.temp_f}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Shamol darajasi:{" "}
                <span className="text-blue-500">
                  {data.current.wind_degree}
                </span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Shamol km/soat:{" "}
                <span className="text-blue-500">{data.current.wind_kph}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Shamol mph:{" "}
                <span className="text-blue-500">{data.current.wind_mph}</span>
              </h1>
              <h1 className="text-2xl mt-5 font-[500] text-white">
                Tz identifikatori:{" "}
                <span className="text-blue-500">{data.location.tz_id}</span>
              </h1>
              <div className="flex items-center justify-center mt-5">
                <img
                  className="border p-5 w-[200px] border-gray-800 sm:w-[300px]"
                  src={data.current.condition.icon}
                  alt={data.current.condition.text}
                />
              </div>
            </div>
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
