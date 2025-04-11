import { rules } from "../constants/rules";

export default function Card() {
  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {rules.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
