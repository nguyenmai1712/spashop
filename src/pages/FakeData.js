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

export const technicanNameData = [
  "Nguyễn Thu Hằng",
  "Nguyễn Lan Anh",
  "Nguyễn Mai",
  "Nguyễn Minh Thành"
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
    name: "Sản phẩm 1",
    oldPrice: 4000000,
    newPrice: 3500000,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
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
    name: "GEL DƯỠNG ẨM CLINIQUE MOISTURE SURGE",
    oldPrice: 400.000,
    newPrice: 320.050,
    description: "Sản phẩm chứa thành phần chính là Hyaluronic Acid và Glycerin tăng cường khả năng liên kết các phân tử nước và giữ nước cho da giúp da luôn căng mọng, hạn chế tối đa tình trạng da khô ráp, bong tróc.",
    mainImage: product1,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 1,
    color: ["Đỏ", "Xanh", "Trắng", "Đen"],
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
    name: "PHẤN PHỦ INNISFREE KIỀM DẦU DẠNG BỘT KHOÁNG",
    oldPrice: "",
    newPrice: 40.00,
    description: "Phấn Phủ Kiềm Dầu Dạng Bột Khoáng innisfree No Sebum Mineral Powder là sản phẩm phấn phủ đến từ thương hiệu mỹ phẩm innisfree của Hàn Quốc với chiết xuất từ bạc hà và khoáng chất tự nhiên Jeju, kiềm dầu đồng thời tạo độ che phủ tự nhiên cho lớp nền khô thoáng.",
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
    name: "KEM NỀN KIỀM DẦU MAC Studio Fix Fluid foundation SPF 15",
    oldPrice: 600.000,
    newPrice: 300.000,
    description: "Kem nền kiềm dầu MAC Studio Fix Fluid foundation SPF 15 phù hợp với những nàng da dầu. Với chất kem lỏng và nhanh khô, MAC Studio Fix Fluid foundation SPF 15 che phủ hoàn hảo các vết thâm nhẹ trên da, những quầng thâm.",
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
    name: "KEM LÓT BOBBI BROWN DƯỠNG ẨM DA 50ml",
    oldPrice: "",
    newPrice: 200.000,
    description: "Kem Lót Dưỡng Ẩm Bobbi Brown Vitamin Enriched Face Base 50ml là sản phẩm của thương hiệu Bobbi Brown từ Mỹ kết hợp cùng sức mạnh dưỡng ẩm của bơ hạt mỡ giàu Vitamin B, C và E mang đến hai công dụng trong một sản phẩm, vừa làm lớp lót trang điểm, vừa cung cấp độ ẩm sâu, làm da mịn màng. Kem lót mang hương thơm dịu nhẹ của bưởi và hoa phong lữ, cho bạn cảm giác dễ chịu cùng chất kem đặc mịn cực kì tiết kiệm.",
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
    name: "KHĂN LÔNG LAU MẶT SỢI TRE",
    oldPrice: "",
    newPrice: 20.000,
    description: "Là loại khăn mặt được làm từ vải sợi tre có tính kháng khuẩn tốt, chống ẩm mốc. Khăn mặt tre Shine KL-35 28x48cm với màu sắc trẻ trung, kích thước vừa vặn, mang đến cảm giác thoải mái khi sử dụng đến từ thương hiệu khăn mặt Shine",
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
    name: "THẢO DƯỢC RỬA MẶT",
    oldPrice: "",
    newPrice: 200.000,
    description: "Bột rửa mặt thảo dược Hoa Cúc là sản phẩm phù hợp với tất cả loại da, đặc biệt cực kỳ tốt với những làn da dầu nhờn, vì sản phẩm điều tiết tốt lượng dầu nhờn trên khuôn mặt bạn mỗi ngày, giúp hạn chế được những vấn đề mụn cám, mụn đầu đen hay mụn ẩn. ",
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
    name: "BỘT KHOÁNG",
    oldPrice: 200.000,
    newPrice: 190.000,
    description: "Khôi phục tính đàn hồi cho da, thu nhỏ lỗ chân lông, khôi phục vẻ sáng bóng, khỏe mạnh, mềm mượt cho làn da của bạn, cân bằng độ PH cho da, bổ sung thành phần nước dưỡng ẩm và thành phần dinh dưỡng làm cho làn da trở nên săn chắc, mịn màng, khỏe đẹp, trắng sáng tự nhiên. Khuôn mặt của bạn sẽ toát lên vẻ đẹp rạng ngời, đồng thời ngăn chặn quá trình lão hóa của da…",
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
    name: "KHĂN TẮM SỢI THAN TRE",
    oldPrice: "",
    newPrice: 25.000,
    description: "Là loại khăn tắm được làm từ vải sợi tre có tính kháng khuẩn tốt, chống ẩm mốc. Khăn mặt tre Shine KL-35 50x100cm với màu sắc trẻ trung, kích thước vừa vặn, mang đến cảm giác thoải mái khi sử dụng đến từ thương hiệu khăn mặt Shine",
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
    name: "BỘ TRẮNG DA QUYỀN NĂNG SAKURA BRIGHTENING SET",
    oldPrice: "",
    newPrice: 180.000,
    description: "Với các thành phần dưỡng chất chiết xuất thiên nhiên như cam thảo, hoa anh đào, atiso, cây hoàng bá, rau má…; Cùng với 2 thành phần dưỡng trắng da tối quan trọng là: Trannexamic Acid và Alpha arbutin; Bộ ba sản phẩm tạo nên set dưỡng trắng và bảo vệ da giúp bạn cải thiện làn da chỉ sau 4 tuần.",
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
    name: "TINH DẦU MASSAGE",
    oldPrice: "",
    newPrice: 200.000,
    description: "Với sự thay đổi của môi trường khí hậu, yếu tố gây hại và đe dọa đến sức khỏe tăng nhanh như khói bụi, rác thải, ô nhiễm…khiến cơ thể phải kích hoạt hệ thống miễn dịch và sản sinh các gốc tự do để chống lại. May mắn thay, nhiều nghiên cứu đã chứng minh công dụng chống oxy hóa từ tinh dầu oải hương, góp phần tăng cường hoạt động đề kháng, sản sinh nhiều enzym có lợi và chống oxy hóa mạnh mẽ.",
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
    name: "DƯỠNG ẨM CLINIQUE MOISTURE SURGE",
    oldPrice: 400.000,
    newPrice: 320.500,
    description: "Sản phẩm chứa thành phần chính là Hyaluronic Acid và Glycerin tăng cường khả năng liên kết các phân tử nước và giữ nước cho da giúp da luôn căng mọng, hạn chế tối đa tình trạng da khô ráp, bong tróc.",
    mainImage: product1,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 1,
    color: ["Đỏ", "Xanh", "Trắng", "Đen"],
    amount: 10,
    rating: 2,
    category: ["Body", "OnSale"],
    status: ["On sale"],
    tags: ["Blushers", "Creams"],
  },
  {
    id: 2,
    name: "PHẤN PHỦ INNISFREE KIỀM DẦU DẠNG BỘT KHOÁNG",
    oldPrice: "",
    newPrice: 400.534,
    description: "Phấn Phủ Kiềm Dầu Dạng Bột Khoáng innisfree No Sebum Mineral Powder là sản phẩm phấn phủ đến từ thương hiệu mỹ phẩm innisfree của Hàn Quốc với chiết xuất từ bạc hà và khoáng chất tự nhiên Jeju, kiềm dầu đồng thời tạo độ che phủ tự nhiên cho lớp nền khô thoáng.",
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
    name: "KEM NỀN KIỀM DẦU MAC Studio Fix Fluid foundation SPF 15",
    oldPrice: 600.000,
    newPrice: 300.000,
    description: "Kem nền kiềm dầu MAC Studio Fix Fluid foundation SPF 15 phù hợp với những nàng da dầu. Với chất kem lỏng và nhanh khô, MAC Studio Fix Fluid foundation SPF 15 che phủ hoàn hảo các vết thâm nhẹ trên da, những quầng thâm.",
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
    name: "KEM LÓT BOBBI BROWN DƯỠNG ẨM DA 50ml",
    oldPrice: 300.450,
    newPrice: 200.000,
    description: "Kem Lót Dưỡng Ẩm Bobbi Brown Vitamin Enriched Face Base 50ml là sản phẩm của thương hiệu Bobbi Brown từ Mỹ kết hợp cùng sức mạnh dưỡng ẩm của bơ hạt mỡ giàu Vitamin B, C và E mang đến hai công dụng trong một sản phẩm, vừa làm lớp lót trang điểm, vừa cung cấp độ ẩm sâu, làm da mịn màng. Kem lót mang hương thơm dịu nhẹ của bưởi và hoa phong lữ, cho bạn cảm giác dễ chịu cùng chất kem đặc mịn cực kì tiết kiệm.",
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
    name: "BỘ TRẮNG DA QUYỀN NĂNG SAKURA BRIGHTENING SET",
    oldPrice: 330.400,
    newPrice: 180.000,
    description: "Với các thành phần dưỡng chất chiết xuất thiên nhiên như cam thảo, hoa anh đào, atiso, cây hoàng bá, rau má…Cùng với 2 thành phần dưỡng trắng da tối quan trọng là: Trannexamic Acid và Alpha arbutin; Bộ ba sản phẩm tạo nên set dưỡng trắng và bảo vệ da giúp bạn cải thiện làn da chỉ sau 4 tuần.",
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
