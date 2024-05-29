import React from "react";

const AboutSection = () => {
  return (
    <section class="flex flex-col md:flex-row md:items-center justify-center py-12">
      <div class="w-full md:w-1/2 order-2 md:order-1">
        <img
          src="path/to/your/image.jpg"
          alt="About Us Image"
          class="object-cover h-full w-full rounded-lg shadow-md md:rounded-none md:shadow-none"
        />
      </div>
      <div class="w-full md:w-1/2 px-4 mt-8 md:mt-0 order-1 md:order-2">
        <h2 class="text-3xl font-bold mb-4">About Light Charity</h2>
        <p class=" text-lg font-semibold text-gray-400">
          We are a charitable organization dedicated to facilitating blood
          donations. Our mission is to bridge the gap between blood donors and
          recipients, ensuring that individuals in urgent need of blood can
          easily find willing donors. Through our dedicated website, we provide
          a comprehensive and accessible platform where potential donors can
          register and list their details. This enables those in need, or
          healthcare providers acting on their behalf, to quickly identify and
          connect with donors in their local area. Our organization is committed
          to making the process of blood donation as straightforward and
          efficient as possible, thereby saving lives and supporting our
          community's health needs.
        </p>
        <button className="bg-rose-500 py-2 px-3 rounded-lg text-white font-bold tracking-wide">
          read more
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
