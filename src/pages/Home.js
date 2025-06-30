import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Explicit module
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    // Pause all videos and reset time when slide changes
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  };

  return (
    <div
      className="home"
      style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}
    >
      <p>
        Stavana handpainted guitars are not just instruments; they are works of
        art. Each guitar is meticulously painted and repaired, with vibrant,
        intricate designs that reflect a unique blend of creativity and
        craftsmanship. Whether you're a musician or a collector, these guitars
        offer both stunning aesthetics and exceptional sound quality. In
        addition to guitars, Stavana also offers a variety of handpainted lamps
        that bring a touch of artistic flair to any space. These lamps are
        designed to illuminate with style, combining functionality with stunning
        visuals. Stavana's collection extends beyond guitars and lamps,
        featuring other handpainted items that showcase the same level of
        artistry and attention to detail. Whether you're looking for an
        instrument, a decorative piece, or something unique for your home,
        Stavana delivers exquisite, one-of-a-kind creations.
      </p>

      <br />
      <br />
      <br />
      <br />

      <p>
        Stasavana ručno oslikane gitare nisu samo instrumenti; one su prava
        umetnička dela. Svaka gitara je pažljivo oslikana i restaurirana, sa
        živopisnim, složenim dizajnom koji odražava jedinstven spoj kreativnosti
        i umeća. Bilo da ste muzičar ili kolekcionar, ove gitare nude
        zadivljujuću estetiku i izuzetnu zvučnu kvalitetu. Pored gitara, Stavana
        nudi i raznovrsne ručno oslikane lampe koje unose umetnički duh u svaki
        prostor. Ove lampe su dizajnirane da osvetle prostor sa stilom,
        spajajući funkcionalnost sa vizuelnom lepotom. Stavanina kolekcija se ne
        zaustavlja na gitarama i lampama – u ponudi su i drugi ručno oslikani
        predmeti koji odišu istim nivoom umetničkog izraza i pažnje prema
        detaljima. Bilo da tražite instrument, dekorativni predmet ili nešto
        jedinstveno za svoj dom, Stavana nudi prefinjene, jedinstvene kreacije.
      </p>

      <br />
      <br />

      <div className="mt-10" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <video
              src={process.env.PUBLIC_URL + "/video/video1.mp4"}
              controls
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={process.env.PUBLIC_URL + "/video/video2.mp4"}
              controls
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
