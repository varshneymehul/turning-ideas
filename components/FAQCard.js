import React from "react";

const FAQCard = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        open ? "active bg-gray-100 border-black" : ""
      } rounded-xl border-2 transition-all m-4 p-4`}
    >
      <button className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500">
        {question}
        <svg
          className={`${
            open ? "rotate-180" : ""
          } transition-all shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
        role="region"
        style={{ maxHeight: open ? "1000px" : "0px" }}
      >
        <p className="text-gray-800">{answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
