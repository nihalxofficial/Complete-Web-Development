import React from "react";

const PricingCard = (data) => {
  const card = data.data;
  const features = card.features;

  return (
    <div className="flex flex-col relative max-w-sm w-full bg-white rounded-2xl shadow-lg border border-gray-200/80 p-6">
      <div className="flex-1">
        {/* Popular badge */}
        {card.popular ? (
          <span className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
            POPULAR
          </span>
        ) : ("")}

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{card.name}</h2>
          <p className="text-sm text-gray-500 mt-0.5">{card.description}</p>
        </div>

        {/* Price */}
        <div className="mb-5 flex items-baseline">
          <span className="text-3xl font-extrabold text-gray-900">
            ${card.price}
          </span>
          <span className="text-gray-500 ml-1 text-sm">/month</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-3 text-gray-700">
            <svg
              className="w-5 h-5 text-indigo-500 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>10 Projects</span>
          </li>

          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <svg
                className="w-5 h-5 text-indigo-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Button */}
        <button className="cursor-pointer w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold py-3 px-4 rounded-xl transition-colors duration-150 border border-indigo-200/70 shadow-sm flex items-center justify-center gap-2">
          Choose {card.name}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        {/* Footer note */}
        <p className="text-xs text-gray-400 text-center mt-3">
          billed monthly · no hidden fees
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
