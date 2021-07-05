import pd1 from "./assets/images/productsProfile/pd1.jpg";
import pd2 from "./assets/images/productsProfile/pd2.jpg";
import pd3 from "./assets/images/productsProfile/pd3.jpg";
import pd4 from "./assets/images/productsProfile/pd4.jpg";
import pd5 from "./assets/images/productsProfile/pd5.jpg";
import pd6 from "./assets/images/productsProfile/pd6.jpg";
import pd7 from "./assets/images/productsProfile/pd7.jpg";
import ml1 from "./assets/images/productsProfile/ml1.jpg";
import ml2 from "./assets/images/productsProfile/ml2.jpg";
import ml3 from "./assets/images/productsProfile/ml3.jpg";
import ml4 from "./assets/images/productsProfile/ml4.jpg";

// img for productsSlider1
import pfs1 from "./assets/images/productsProfile/pfs1.jpg";
import pfs2 from "./assets/images/productsProfile/pfs2.jpg";
import pfs3 from "./assets/images/productsProfile/pfs3.jpg";
import pfs4 from "./assets/images/productsProfile/pfs4.jpg";
import pfs5 from "./assets/images/productsProfile/pfs5.jpg";
import pfs6 from "./assets/images/productsProfile/pfs6.jpg";
import pfs7 from "./assets/images/productsProfile/pfs7.jpg";
import pfs8 from "./assets/images/productsProfile/pfs8.jpg";
import pfs9 from "./assets/images/productsProfile/pfs9.jpg";
import pfs10 from "./assets/images/productsProfile/pfs10.jpg";
import pfs11 from "./assets/images/productsProfile/pfs11.jpg";
import pfs12 from "./assets/images/productsProfile/pfs12.jpg";
import pfs13 from "./assets/images/productsProfile/pfs13.jpg";
import arts from "./assets/images/productsProfile/arts.jpg";

// img for productsSlider1
import slr1 from "./assets/images/productsProfile/slr1.jpg";
import slr2 from "./assets/images/productsProfile/slr2.jpg";
import slr3 from "./assets/images/productsProfile/slr3.jpg";
import slr4 from "./assets/images/productsProfile/slr4.jpg";
import slr5 from "./assets/images/productsProfile/slr5.jpg";
import slr6 from "./assets/images/productsProfile/slr6.jpg";
import slr7 from "./assets/images/productsProfile/slr7.jpg";
import slr8 from "./assets/images/productsProfile/slr8.jpg";
import slr9 from "./assets/images/productsProfile/slr9.jpg";
import slr10 from "./assets/images/productsProfile/slr10.jpg";
import slr11 from "./assets/images/productsProfile/slr11.jpg";
import slr12 from "./assets/images/productsProfile/slr12.jpg";
import slr13 from "./assets/images/productsProfile/slr13.jpg";

//img for arts & crafts
import a1 from "./assets/images/arts&parts/a1.jpg";
import a2 from "./assets/images/arts&parts/a2.jpg";
import a3 from "./assets/images/arts&parts/a3.jpg";
import a4 from "./assets/images/arts&parts/a4.jpg";
import a5 from "./assets/images/arts&parts/a5.jpg";
import a6 from "./assets/images/arts&parts/a6.jpg";
import a7 from "./assets/images/arts&parts/a7.jpg";
import a8 from "./assets/images/arts&parts/a8.jpg";
import a9 from "./assets/images/arts&parts/a9.jpg";
import a10 from "./assets/images/arts&parts/a10.jpg";
import a11 from "./assets/images/arts&parts/a11.jpg";

//img for oculus
import o1 from "./assets/images/oculus/o1.jpg";
import o2 from "./assets/images/oculus/o2.jpg";
import o3 from "./assets/images/oculus/o3.jpg";
import o4 from "./assets/images/oculus/o4.jpg";
import o5 from "./assets/images/oculus/o5.jpg";
import o6 from "./assets/images/oculus/o6.jpg";
import o7 from "./assets/images/oculus/o7.jpg";
import o8 from "./assets/images/oculus/o8.jpg";
import o9 from "./assets/images/oculus/o9.jpg";
import o10 from "./assets/images/oculus/o10.jpg";
import o11 from "./assets/images/oculus/o11.jpg";

//img for computer
import c1 from "./assets/images/computer/c1.jpg";
import c2 from "./assets/images/computer/c2.jpg";
import c3 from "./assets/images/computer/c3.jpg";
import c4 from "./assets/images/computer/c4.jpg";
import c5 from "./assets/images/computer/c5.jpg";
import c6 from "./assets/images/computer/c6.jpg";
import c7 from "./assets/images/computer/c7.jpg";
import c8 from "./assets/images/computer/c8.jpg";
import c9 from "./assets/images/computer/c9.jpg";
import c10 from "./assets/images/computer/c10.jpg";
import c11 from "./assets/images/computer/c11.jpg";

//img for amazon basics
import am1 from "./assets/images/amazonbasics/am1.jpg";
import am2 from "./assets/images/amazonbasics/am2.jpg";
import am3 from "./assets/images/amazonbasics/am3.jpg";
import am4 from "./assets/images/amazonbasics/am4.jpg";
import am5 from "./assets/images/amazonbasics/am5.jpg";
import am6 from "./assets/images/amazonbasics/am6.jpg";
import am7 from "./assets/images/amazonbasics/am7.jpg";
import am8 from "./assets/images/amazonbasics/am8.jpg";
import am9 from "./assets/images/amazonbasics/am9.jpg";
import am10 from "./assets/images/amazonbasics/am10.jpg";
import am11 from "./assets/images/amazonbasics/am11.jpg";

//products feed items
export const productsProfile = [
  {
    id: 1,
    photo: pd1,
    title: "Oculus",
    link: "/",
    multipleProducts: true,
    multipleProductsList: [
      {
        mId: 1,
        mPhoto: ml1,
        mTitle: "Computer",
        mLink: "/",
      },
      {
        mId: 2,
        mPhoto: ml2,
        mTitle: "Video Games",
        mLink: "/",
      },
      {
        mId: 3,
        mPhoto: ml3,
        mTitle: "Tody Games",
        mLink: "/",
      },
      {
        mId: 4,
        mPhoto: ml4,
        mTitle: "Baby",
        mLink: "/",
      },
    ],
  },
  {
    id: 2,
    photo: pd2,
    title: "Computers & Accessories",
    link: "/",
    multipleProducts: false,
  },
  {
    id: 3,
    photo: pd3,
    title: "AmazonBasics",
    link: "/",
    multipleProducts: false,
  },
  {
    id: 4,
    photo: pd4,
    title: "Find your ideal TV",
    link: "/",
    multipleProducts: false,
  },
  {
    id: 5,
    photo: arts,
    title: "Arts & Crafts",
    link: "/",
    multipleProducts: false,
  },
  {
    id: 6,
    photo: pd6,
    title: "Find your ideal TV",
    link: "/",
    multipleProducts: false,
  },
  {
    id: 7,
    photo: pd7,
    title: "Find your ideal TV",
    link: "/",
    multipleProducts: false,
  },
];
//product feed products slider1 img
export const productsProfileSlider1 = [
  {
    id: 1,
    photo: pfs1,
  },
  {
    id: 2,
    photo: pfs2,
  },
  {
    id: 3,
    photo: pfs3,
  },
  {
    id: 4,
    photo: pfs4,
  },
  {
    id: 5,
    photo: pfs5,
  },
  {
    id: 6,
    photo: pfs6,
  },
  {
    id: 7,
    photo: pfs7,
  },
  {
    id: 8,
    photo: pfs8,
  },
  {
    id: 9,
    photo: pfs9,
  },
  {
    id: 10,
    photo: pfs10,
  },
  {
    id: 11,
    photo: pfs11,
  },
  {
    id: 12,
    photo: pfs12,
  },
  {
    id: 13,
    photo: pfs13,
  },
];
//product feed products slider2 img
export const productsProfileSlider2 = [
  {
    id: 1,
    photo: slr1,
  },
  {
    id: 2,
    photo: slr2,
  },
  {
    id: 3,
    photo: slr3,
  },
  {
    id: 4,
    photo: slr4,
  },
  {
    id: 5,
    photo: slr5,
  },
  {
    id: 6,
    photo: slr6,
  },
  {
    id: 7,
    photo: slr7,
  },
  {
    id: 8,
    photo: slr8,
  },
  {
    id: 9,
    photo: slr9,
  },
  {
    id: 10,
    photo: slr10,
  },
  {
    id: 11,
    photo: slr11,
  },
  {
    id: 12,
    photo: slr12,
  },
  {
    id: 13,
    photo: slr13,
  },
];

// list of artsCrafts products
export const artsCrafts = [
  {
    id: 1,
    photo: a1,
    title: `
     Command Large Picture Hanging Strips, White, Holds up to 16 lbs, 14-Pairs, Easy to Open Packaging
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 2,
    photo: a2,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 15.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 3,
    photo: a3,
    title: `
    Soft Tape Measure Double Scale Body Sewing Flexible Ruler for Weight Loss Medical Body Measurement
    Sewing Tailor Craft Vinyl Ruler, Has Centimetre Scale on Reverse Side 60-inch（White）
     `,
    price: 20.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 4,
    photo: a4,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 9.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 5,
    photo: a5,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 32.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 6,
    photo: a6,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 25.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 7,
    photo: a7,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 8,
    photo: a8,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 13.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 9,
    photo: a9,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 10,
    photo: a10,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 50.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 11,
    photo: a11,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 20.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
];
// list of oculus products
export const oculus = [
  {
    id: 1,
    photo: o1,
    title: `
    Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 2,
    photo: o2,
    title: `
    Oculus Rift S PC-Powered VR Gaming Headset
     `,
    price: 15.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 3,
    photo: o3,
    title: `
    Flagship Oculus Quest 2 All-in-One Virtual Reality 64GB Gaming Headset w/ Fit Pack Bundle, High
     Resolution, PC VR Compatible, W/GM Controller Protection Controller Grip Accessories
     `,
    price: 20.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 4,
    photo: o4,
    title: `
    Oculus Rift S PC-Powered VR Gaming Headset
     `,
    price: 9.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 5,
    photo: o5,
    title: `
    Oculus Sensor (Includes 16Ft. Repeater Cable)
     `,
    price: 32.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 6,
    photo: o6,
    title: `
    Ahroy VR Shell Front Face Protector Cover for Oculus Quest 2
     with Black Lens Protector Dust Proof Washable Oculus Quest 2 Silicone Protector Case
     `,
    price: 25.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 7,
    photo: o7,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 8,
    photo: o8,
    title: `
    Compatible for Oculus Link Cable 16ft(5m),USB 3.0 Gen 1 Type A to C Cable,PC High Speed Data Transfer
     & Fast Charging Ompatible with Oculus Quest / Quest 2 VR Headset and Gaming PC
     `,
    price: 13.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 9,
    photo: o9,
    title: `
    Scotch Thermal Laminating Pouches, 100-Pack, 8.9 x 11.4 Inches, Letter Size Sheets (TP3854-100)
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 10,
    photo: o10,
    title: `
    Kaizen Spirit VR Headphones | Compatible with Oculus Quest | Designed as Oculus Quest Headphones,
     Oculus Quest Earbuds | Oculus Quest Accessories
     `,
    price: 50.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 11,
    photo: o11,
    title: `
    Yocaya VR Silicone Interfacial Cover for Oculus Quest 2 Eye Cushion Cover Sweatproof Lightproof Anti-Leakage
     `,
    price: 20.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
];
// list of computer products
export const computer = [
  {
    id: 1,
    photo: c1,
    title: `
    Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range
     Wireless and Voice Remote with TV Controls
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 2,
    photo: c2,
    title: `
    Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac,
     PS4, & Xbox - 1-Year Rescue Service (STGX2000400)
     `,
    price: 15.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 3,
    photo: c3,
    title: `
    Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote
     `,
    price: 20.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 4,
    photo: c4,
    title: `
    LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC Compatible Gaming Monitor, Black
     `,
    price: 9.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 5,
    photo: c5,
    title: `
    SAMSUNG ELECTRONICS EVO Select 256GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card
     with Adapter (MB-ME256HA)
     `,
    price: 32.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 6,
    photo: c6,
    title: `
    Ahroy VR Shell Front Face Protector Cover for Oculus Quest 2
     with Black Lens Protector Dust Proof Washable Oculus Quest 2 Silicone Protector Case
     `,
    price: 25.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 7,
    photo: c7,
    title: `
    HP 63XL | Ink Cartridge | Works with HP Deskjet 1112, 2100 Series, 3600 Series, HP ENVY 4500 Series,
     HP OfficeJet 3800 Series, 4600 Series, 5200 Series | Black | F6U64AN
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 8,
    photo: c8,
    title: `
    Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor,
     16GB DDR4, 256GB SSD,
     AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey
     `,
    price: 13.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 9,
    photo: c9,
    title: `
    Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 10,
    photo: c10,
    title: `
    Acer Swift 3 Thin & Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core with Radeon Graphics, 8GB LPDDR4,
     512GB NVMe SSD, Wi-Fi 6, Backlit KB, Fingerprint Reader, Alexa Built-in
     `,
    price: 50.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 11,
    photo: c11,
    title: `
    Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD
     Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey
     `,
    price: 20.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
];
// list of amazon basics products
export const amazonbasics = [
  {
    id: 1,
    photo: am1,
    title: `
    Amazon Basics Kids Pink Kitties Patterned Throw Blanket with Stuffed Animal Cat
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 2,
    photo: am2,
    title: `
    Amazon Basics Kids Bedding Nap Set with Dinosaur Pillow and Fleece Throw Blanket
     `,
    price: 15.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 3,
    photo: am3,
    title: `
    Amazon Basics Kids Fleece Tail Blanket - 26'' x 56'', Space Rocket
     `,
    price: 20.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 4,
    photo: am4,
    title: `
    Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends
     `,
    price: 9.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 5,
    photo: am5,
    title: `
    Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack
     `,
    price: 32.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 6,
    photo: am6,
    title: `
    Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 10,000 Bend Lifespan - -Rose Gold,
     `,
    price: 25.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 7,
    photo: am7,
    title: `
    Amazon Basic Care Mini Nicotine Polacrilex Lozenge, 4 mg nicotine, Stop Smoking Aid, White, Mint, 135 Count
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 8,
    photo: am8,
    title: `
    Amazon Basics Fabric Storage Basket Container with Handles and Drawstring, Large
     `,
    price: 13.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 9,
    photo: am9,
    title: `
    Amazon Basics High-Density Round Foam Roller for Exercise, Massage, Muscle Recovery - 12", 18", 24", 36"
     `,
    price: 10.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 10,
    photo: am10,
    title: `
    Amazon Basics Quick-Dry, Luxurious, Soft, 100% Cotton Towels, White - Set of 2 Bath Towels
     `,
    price: 50.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
  {
    id: 11,
    photo: am11,
    title: `
    Amazon Basics Heavy Duty Dry Erase Ticket Holder Pockets 8.5" X 11", Pack of 25
     `,
    price: 20.99,
    aboutThisItem: [
      {
        id: 1,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 2,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 3,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
      {
        id: 4,
        text: `It is a long established fact that a reader will be distracted by the readable
       content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution`,
      },
    ],
  },
];
