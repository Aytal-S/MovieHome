
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const questions = [
    {
      que: "What is Netflix?",
      ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad.`
    },
    {
      que: "How much does Netflix cost?",
      ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device. Plans range from ₹149 to ₹649 a month."
    },
    {
      que: "Where can I watch?",
      ans: "Watch anywhere, anytime, on your computer, smartphone, tablet, Smart TV, or other supported devices."
    },
    {
      que: "How do I cancel?",
      ans: "You can easily cancel your Netflix account online. There are no cancellation fees."
    },
    {
      que: "What can I watch on Netflix?",
      ans: "Netflix has movies, documentaries, TV shows, anime, and award-winning Netflix originals."
    },
    {
      que: "Is Netflix good for kids?",
      ans: "Netflix Kids profiles include parental controls to help parents manage the content children can watch."
    }
  ];

  return (
    <div className="pt-10 px-4 md:px-30 mt-5">
      <h2 className="font-bold text-2xl">
        Frequently Asked Questions
      </h2>

      <div className="mt-5">
        {questions.map((Title, index) => (
          <div key={index} className="mt-2">
            <div
              onClick={() => handleToggle(index)}
              className="cursor-pointer bg-[#2D2D2D] text-white flex justify-between items-center px-5 md:px-10"
            >
              <div className="text-xl md:text-2xl p-6">
                {Title.que}
              </div>

              <div
                className={`text-3xl md:text-5xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                <AiOutlinePlus />
              </div>
            </div>

            <div
              className={`bg-[#2D2D2D] text-white text-lg md:text-2xl px-5 transition-all mt-1 duration-500 ${
                activeIndex === index
                  ? "max-height: 500px; py-5 opacity-100"
                  : "max-h-0 py-0 opacity-0"
              } overflow-hidden`}
            >
              {Title.ans}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
