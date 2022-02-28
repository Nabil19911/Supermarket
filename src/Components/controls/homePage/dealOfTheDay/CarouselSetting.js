export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 1,
  centerPadding: "420px",
  speed: 500,
  centerMode: true,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 889,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: "130px",
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
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 428,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        centerPadding: "70px",
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        centerPadding: "50px",
      },
    },
  ],
};
