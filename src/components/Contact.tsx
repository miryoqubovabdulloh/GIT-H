import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const tariffs = [
    {
      id: 1,
      name: "Start ⚡",
      price: "11500 so'm",
      drivers: [
        { name: "Akmal Karimov", car: "Spark", time: "2 daqiqa" },
        { name: "Dilshod Tursunov", car: "Matiz", time: "3 daqiqa" },
      ],
    },
    {
      id: 2,
      name: "Komfort 🌸",
      price: "5500 so'm",
      drivers: [
        { name: "Javlon Ergashev", car: "Cobalt", time: "4 daqiqa" },
        { name: "Ulug‘bek Aliyev", car: "Gentra", time: "6 daqiqa" },
      ],
    },
    {
      id: 3,
      name: "Komfort+ 🚘",
      price: "9000 so'm",
      drivers: [
        { name: "Sardor Rustamov", car: "Malibu 2", time: "5 daqiqa" },
        { name: "Bekzod Xolmatov", car: "Tracker", time: "7 daqiqa" },
      ],
    },
    {
      id: 4,
      name: "Business 💼",
      price: "11000 so'm",
      drivers: [
        { name: "Zokir Mamatov", car: "Kia K5", time: "3 daqiqa" },
        { name: "Sherzod Qodirov", car: "Camry", time: "5 daqiqa" },
      ],
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);
  const [likedDrivers, setLikedDrivers] = useState<string[]>([]);

  const handleSelect = (id: number) => {
    setSelected(selected === id ? null : id);
  };

  const handleCall = (driverName: string) => {
    toast.success(`${driverName} sizning manzilingizga yo‘l oldi 🚕`, {
      position: "top-center",
      autoClose: 2500,
    });
  };

  const handleLike = (driverName: string) => {
    setLikedDrivers((prev) =>
      prev.includes(driverName)
        ? prev.filter((n) => n !== driverName)
        : [...prev, driverName]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">🚖 Taxi tariflari</h2>

      {/* Tariflar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tariffs.map((tariff) => (
          <div
            key={tariff.id}
            onClick={() => handleSelect(tariff.id)}
            className={`p-4 rounded-xl border cursor-pointer transition duration-200 ${
              selected === tariff.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-white"
            }`}
          >
            <p className="font-semibold text-gray-800">{tariff.name}</p>
            <p className="text-gray-600 text-sm">от {tariff.price}</p>
          </div>
        ))}
      </div>

      {/* Haydovchilar */}
      {selected && (
        <div className="mt-8 w-full max-w-md bg-white border border-gray-200 rounded-xl p-4 shadow">
          {tariffs
            .find((t) => t.id === selected)
            ?.drivers.map((driver, index) => (
              <div
                key={index}
                className="border-b last:border-none py-3 flex items-center justify-between"
              >
                <div>
                  <p className="text-gray-800 font-medium">
                    👨‍✈️ {driver.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    🚗 {driver.car} — ⏱ {driver.time}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleCall(driver.name)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1"
                  >
                    🚕 Chaqirish
                  </button>

                  <button
                    onClick={() => handleLike(driver.name)}
                    className={`${
                      likedDrivers.includes(driver.name)
                        ? "bg-yellow-400 text-white"
                        : "bg-gray-200 text-gray-700"
                    } px-3 py-1.5 rounded-lg text-sm`}
                  >
                    ⭐
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Toast */}
      <ToastContainer />
    </div>
  );
}
