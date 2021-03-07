import cake7 from './img/Cakes/cake7.jpg';
import cake3 from './img/Cakes/cake3.jpg';
import cake4 from './img/Cakes/cake4.jpg';
import cake5 from './img/Cakes/cake5.jpg';
import cake11 from './img/Cakes/cake11.jpg';
import cake17 from './img/Cakes/cake17.jpg';

export const CakeState = () => {
    return [
      {
        title: "Cake 1",
        mainImg: cake7,
        secondaryImg: cake5,
        url: "/work/cake1",
        reviews: [
          {
            title: "Truly A masterpiece",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
          {
            title: "Freshly Baked.",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
          {
            title: "So Delicious.",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
        ],
      },
      {
        title: "Cake 2",
        mainImg: cake3,
        url: "/work/cake2",
        secondaryImg: cake11,
        reviews: [
          {
            title: "Truly A masterpiece",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
          {
            title: "Freshly Baked.",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
          {
            title: "So Delicious.",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
        ],
      },
      {
        title: "Cake 3",
        mainImg: cake4,
        url: "/work/cake3",
        secondaryImg: cake17,
        reviews: [
          {
            title: "Truly A masterpiece",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
          {
            title: "Freshly Baked.",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
          {
            title: "So Delicious.",
            description:
              "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
          },
        ],
      },
    ];
  };