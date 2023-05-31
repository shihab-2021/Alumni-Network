/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Sanjana",
      photo:
        "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.1.2120694587.1685456014&semt=robertav1_2_sidr",
      testimonial:
        "Being a part of the alumni network has been an incredible experience. It has allowed me to reconnect with old classmates, discover new career opportunities, and stay updated on the latest events. The platform is user-friendly, and the support from the alumni community is amazing. I highly recommend joining!",
    },
    {
      name: "Micel Jane",
      photo:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2120694587.1685456014&semt=robertav1_2_sidr",
      testimonial:
        "The alumni network has been invaluable in my professional journey. Through the network, I have connected with mentors who have guided me in my career, attended insightful webinars, and even landed job opportunities. It's a supportive community that genuinely cares about the success of its members.",
    },
    {
      name: "Muhtakim Safat",
      photo:
        "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?size=626&ext=jpg&ga=GA1.1.2120694587.1685456014&semt=robertav1_2_sidr",
      testimonial:
        "I can't emphasize enough how much the alumni network has helped me expand my professional network. The networking events and online forums have allowed me to connect with alumni from different industries, which has opened doors for collaboration and partnerships. It's a great platform for both personal and professional growth.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-24 text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mt-4">
                <div className="rounded-full h-[5.2rem] w-[5.2rem] flex items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-500 mt-[-80px]">
                  <img
                    className="rounded-full h-20 w-20 object-cover"
                    src={`${testimonial.photo}`}
                    alt=""
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 float-right mt-[-33px]">
                  {testimonial.name.slice(0, 18)}
                </h3>
              </div>
              <p className="text-gray-600">
                <span className="text-3xl">❝</span>
                {testimonial.testimonial}
                <span className="">❞</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
