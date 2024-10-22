/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

export default function BlockSlider({
  data,
  setSelected,
}: {
  data: any;
  setSelected: any;
}) {
  return (
    <section className="w-screen">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((block: any, index: number) => (
          <SwiperSlide
            key={index}
            className="bg-slate-500 p-4 m-4 rounded-lg min-w-fit cursor-pointer"
            onClick={() => setSelected(index)}
          >
            <h1 className="text-2xl font-bold">Block {index}</h1>
            <p>ID: {block.id}</p>
            {/* <p>Hash: {block.hash}</p>
          <p>Previous Hash: {block.previousHash}</p> */}
            <p>Timestamp: {block.timestamp}</p>
            <p>Transactions: {block.transaction.length}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
