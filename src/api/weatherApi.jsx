const apiKey = "b701591ac091890fc7695da956cd8097";
const lat = -6.1761924;
const lon = 106.6382161;

export const fetchWeatherData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Gagal mengambil data cuaca!");
  }
  return response.json();
};
