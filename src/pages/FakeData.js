import AcUnitIcon from '@material-ui/icons/AcUnit';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import category1 from 'assets/images/category1.jpeg';
import category2 from 'assets/images/category2.jpg';
import category3 from 'assets/images/category3.jpg';
import category4 from 'assets/images/category4.jpg';
import category5 from 'assets/images/category5.jpg';
import product1 from 'assets/images/home_beauty_salon_shop_1.jpg';
import product10 from 'assets/images/home_beauty_salon_shop_10.jpg';
import product2 from 'assets/images/home_beauty_salon_shop_2.jpg';
import product3 from 'assets/images/home_beauty_salon_shop_3.jpg';
import product4 from 'assets/images/home_beauty_salon_shop_4.jpg';
import product5 from 'assets/images/home_beauty_salon_shop_5.jpg';
import product6 from 'assets/images/home_beauty_salon_shop_6.jpg';
import product7 from 'assets/images/home_beauty_salon_shop_7.jpg';
import product8 from 'assets/images/home_beauty_salon_shop_8.jpg';
import product9 from 'assets/images/home_beauty_salon_shop_9.jpg';

export const dayOfWeekLable = [
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
  "Chủ nhật"
];

export const storeData = [
  "Meow Meow",
  "Gau Gau",
]

export const appointmentStatus = [
  "Đã thanh toán",
  "Đang xử lí",
  "Đã lên lịch",
  "Hủy",
  "Đang thực hiện"
];

export const orderStatus = [
  "Đã thanh toán",
  "Chưa thanh toán",
  "Hủy"
]

export const treatmentCategory =[
  "Chăm sóc da mặt",
  "Trị mụn",
  "Xông hơi đá nóng",
  "Massage",
]

export const productCategory = [
  "Serum",
  "Thực phẩm chức năng",
  "Sản phẩm chăm sóc da mặt",
  "Sản phẩm thiên nhiên",
  "Hàng cao cấp",
]

export const treatmentData = [
  {
    id: 1,
    name: "REPLENISHING HYDRATOR",
    oldPrice: 4000000,
    newPrice: 3500000,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product1,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 1,
    color: ["red", "blue", "white", "black"],
    amount: 10,
    rating: 2,
    category: ["Body", "OnSale"],
    status: ["On sale"],
    tags: ["Blushers", "Creams"],
    duration: 90,
    ingredient: [{
      id: 1,
      name: "serum",
      type: "60ml",
      amount: 1,
    }],
    startDate: new Date().toISOString().slice(0, 16),
    bounus: {
      type: "PERCENT",
      value: 10,
    }
  },
]

export const productsData = [
  {
    id: 1,
    name: "REPLENISHING HYDRATOR",
    oldPrice: 40.00,
    newPrice: 32.50,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product1,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 1,
    color: ["red", "blue", "white", "black"],
    amount: 10,
    rating: 2,
    category: ["Body", "OnSale"],
    status: ["On sale"],
    tags: ["Blushers", "Creams"],
    startDate: new Date().toISOString().slice(0, 16),
    properties: [
      {
        name: 'bảo hành',
        value: '2 năm'
      }
    ],
    productCode: "12341ASDLKAHIOUWEN MASQR32423"
  },
  {
    id: 2,
    name: "BLENDED FACE POWDER",
    oldPrice: "",
    newPrice: 40.00,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product2,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["blue", "black"],
    amount: 10,
    rating: 3,
    category: ["MakeUp", "New Arrival"],
    status: ["On sale"],
    tags: ["Lotions", "Tanning"],
  },
  {
    id: 3,
    name: "MAKEUP BROAD SPECTRUM",
    oldPrice: 60.02,
    newPrice: 30.99,
    description: "Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services.",
    mainImage: product3,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 4,
    category: ["Suncare"],
    status: [],
    tags: ["Creams", "Lotions"],
  },
  {
    id: 4,
    name: "CREAM-MOUSSE CLEANSER",
    oldPrice: "",
    newPrice: 20.00,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product4,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },
  {
    id: 5,
    name: "ONE MARTINE",
    oldPrice: "",
    newPrice: 20.00,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product5,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },
  {
    id: 6,
    name: "ONE MARTINE",
    oldPrice: "",
    newPrice: 20.00,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product6,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },
  {
    id: 7,
    name: "TWO MARTINE",
    oldPrice: 200.00,
    newPrice: 190.00,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product7,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },

  {
    id: 8,
    name: "THREE MARTINE",
    oldPrice: "",
    newPrice: 25.00,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product8,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },

  {
    id: 9,
    name: "FOUR MARTINE",
    oldPrice: "",
    newPrice: 18.00,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product9,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },

  {
    id: 10,
    name: "FIVE MARTINE",
    oldPrice: "",
    newPrice: 20.00,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product10,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },
  

]

export const popularData = [
  {
    id: 1,
    name: "REPLENISHING HYDRATOR",
    oldPrice: 40.11,
    newPrice: 32.50,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product1,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 1,
    color: ["red", "blue", "white", "black"],
    amount: 10,
    rating: 2,
    category: ["Body", "OnSale"],
    status: ["On sale"],
    tags: ["Blushers", "Creams"],
  },
  {
    id: 2,
    name: "BLENDED FACE POWDER",
    oldPrice: "",
    newPrice: 40.534,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product2,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["blue", "black"],
    amount: 10,
    rating: 3,
    category: ["MakeUp", "New Arrival"],
    status: ["On sale"],
    tags: ["Lotions", "Tanning"],
  },
  {
    id: 3,
    name: "MAKEUP BROAD SPECTRUM",
    oldPrice: 60.02,
    newPrice: 30.99,
    description: "Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services.",
    mainImage: product3,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 4,
    category: ["Suncare"],
    status: [],
    tags: ["Creams", "Lotions"],
  },
  {
    id: 4,
    name: "CREAM-MOUSSE CLEANSER",
    oldPrice: 30.45,
    newPrice: 20.01,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product4,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },
  {
    id: 5,
    name: "ONE MARTINE",
    oldPrice: 33.4,
    newPrice: 24.10,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: product5,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Skincare", "Featured"],
    status: [],
    tags: ["Blushers", "Tanning"],
  },
]

export const menuData = [
  {
    id: 1,
    label: 'Trang chủ',
    link: '/home',
    subMenu: [],
  },
  {
    id: 2,
    label: 'Blog',
    link: '/blog',
    subMenu: [],
  },
  {
    id: 3,
    label: 'Cửa hàng',
    link: '/shop-page',
    subMenu: [],
  },
  {
    id: 4,
    label: 'Chọn Liệu trình',
    link: '/treatments',
    subMenu: [],
  },
  {
    id: 6,
    label: "Liên hệ",
    link: '/contact-us',
    subMenu: [],
  },
  {
    id: 7,
    label: 'Mua gói dịch vụ',
    link: '/services',
    subMenu: [
      {
        id: 1,
        label: "Gói bạc 236, 000đ/ tháng",
        link: "/services/silver"
      },
      {
        id: 2,
        label: "Gói bạc 476, 000đ/ tháng",
        link: "/services/Gold"
      },
      {
        id: 3,
        label: "Gói bạc 1,196, 000đ/ tháng",
        link: "/services/diamond"
      },
    ],
  },
]

export const categoryData = [
  {
    id: 1,
    label: "Uncategoried",
    icon: <NotInterestedIcon />,
    link: '/category/uncategoried',
    subMenu: [],
  },
  {
    id: 2,
    label: "Accessories",
    icon: <DevicesOtherIcon />,
    link: '/category/accessories',
    subMenu: [],
  },
  {
    id: 5,
    label: "New Arrival",
    icon: <AcUnitIcon />,
    link: '/category/new-rrival',
    subMenu: [],
  },
  {
    id: 6,
    label: "Most Popular",
    icon: <BubbleChartIcon />,
    link: '/category/most-popular',
    subMenu: [],
  },
  {
    id: 7,
    label: "On Sale",
    icon: <LocalMallIcon />,
    link: '/category/on-sale',
    subMenu: [],
  },
]

export const tagCloudData = [
  {
    id: 1,
    label: "Da mặt",
    link: "/"
  },
  {
    id: 2,
    label: "Trị mụn",
    link: "/"
  },
  {
    id: 3,
    label: "Châm cứu",
    link: "/"
  },
  {
    id: 4,
    label: "Xông hơi",
    link: "/"
  },
  {
    id: 5,
    label: "Body",
    link: "/"
  },
  {
    id: 6,
    label: "massage",
    link: "/"
  },
  {
    id: 7,
    label: "Thư giãn",
    link: "/"
  },
  {
    id: 8,
    label: "Dưỡng ẩm",
    link: "/"
  },
  {
    id: 9,
    label: "Luxury",
    link: "/"
  },
  {
    id: 10,
    label: "Liệu trình",
    link: "/"
  },
]

export const categoryImageData = [
  {
    id: 1,
    name: "Dưỡng sinh",
    image: category1,
  },
  {
    id: 2,
    name: "Chăm sóc body",
    image: category2,
  },
  {
    id: 3,
    name: "Massage",
    image: category3,
  },
  {
    id: 4,
    name: "Liệu trình thiên nhiên",
    image: category4,
  },
  {
    id: 5,
    name: "Thực phẩm chức năng",
    image: category5,
  },
]
