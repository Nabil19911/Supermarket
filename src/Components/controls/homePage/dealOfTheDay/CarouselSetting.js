export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  centerPadding: "0",
  centerMode: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        centerPadding: "17px",
      },
    },
    {
      breakpoint: 428,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        centerPadding: "0px",
      },
    },
  ],
};
