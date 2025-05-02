import { rules } from "../constants/rules";

export default function Card() {
  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rules.length > 0 ? (
          rules.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl shadow-md p-6 transform transition hover:scale-105 hover:shadow-xl"
              aria-label={`Rule: ${card.title}`}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600">{card.description}</p>
            </article>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No rules found.
          </p>
        )}
      </div>
    </div>
  );
}
