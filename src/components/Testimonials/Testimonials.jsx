import React from "react";
import { FaQuoteRight, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Avinash Kr",
    role: "Co-Founder at XYZ",
    testimonial:
      "Like this video and ask your questions in the comment section. Don't forget to subscribe for more videos on website designing, digital marketing, and Photoshop.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
  },
  {
    name: "Bharat Kunal",
    role: "Manager at XYZ",
    testimonial:
      "Like this video and ask your questions in the comment section. Don't forget to subscribe for more videos on website designing, digital marketing, and Photoshop.",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    rating: 5,
  },
  {
    name: "Prabhakar D",
    role: "Founder / CEO at XYZ",
    testimonial:
      "Like this video and ask your questions in the comment section. Don't forget to subscribe for more videos on website designing, digital marketing, and Photoshop.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
  },
];

// Function to render stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0; // Check for half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center mb-2 text-yellow-400">
      {/* Full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
      {/* Half star */}
      {halfStar && <FaStarHalfAlt />}
      {/* Empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <h2 className="text-3xl font-bold text-center mb-2">
          TESTIMONIALS
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Subscribe to watch more videos on website designing, digital marketing, and Photoshop.
        </p>

        {/* Grid layout for testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* User Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                />
              </div>

              {/* Star Rating */}
              {renderStars(testimonial.rating)}

              {/* Testimonial Content */}
              <p className="text-gray-700 italic mb-4">
                <FaQuoteRight className="inline-block text-orange-500 mr-2" />
                {testimonial.testimonial}
              </p>

              {/* Name and Role */}
              <h4 className="text-lg font-semibold text-orange-600">
                {testimonial.name}
              </h4>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
