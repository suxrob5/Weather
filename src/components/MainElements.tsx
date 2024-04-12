interface Type {
  data: {
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
}

const MainElements: React.FC<Type> = ({ data }) => {
  return (
    <div>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Qidirildi: <span className="text-blue-500">{data.location.name}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Bulut: <span className="text-blue-500">{data.current.gust_kph}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Shamol km/soat: <span className="text-blue-500">{data.cloud}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        shamol mil/soat:{" "}
        <span className="text-blue-500">{data.current.gust_mph}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Namlik: <span className="text-blue-500">{data.current.humidity}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Region: <span className="text-blue-500">{data.location.region}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Davlat: <span className="text-blue-500">{data.location.country}</span>
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
        <span className="text-blue-500">{data.current.pressure_in}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Bosim mb:{" "}
        <span className="text-blue-500">{data.current.pressure_mb}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Harorat c: <span className="text-blue-500">{data.current.temp_c}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Harorat f: <span className="text-blue-500">{data.current.temp_f}</span>
      </h1>
      <h1 className="text-2xl mt-5 font-[500] text-white">
        Shamol darajasi:{" "}
        <span className="text-blue-500">{data.current.wind_degree}</span>
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
  );
};

export default MainElements;
