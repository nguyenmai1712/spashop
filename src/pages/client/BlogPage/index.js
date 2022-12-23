import { makeStyles } from '@material-ui/core';
import post1 from 'assets/images/Post_1.png';
import post2 from 'assets/images/Post_2.png';
import post3 from 'assets/images/Post_3.png';
import React from 'react';

import PostCard from './PostCard';

const useStyles = makeStyles(() => ({
  post: {
    marginBottom: 20,
  },
}));
const postData = [
  {
    id: 1,
    image: post1,
    title: "MÙA KHÔ LẠNH, ĐỪNG QUÊN CÂN BẰNG ĐỘ PH CHO DA",
    category: "Làm đẹp",
    author: "Mei",
    date: "Tháng 7 28, 2022",
    description: `Tiết trời hanh hao thiếu ẩm, kết hợp với môi trường ô nhiễm sẽ phá vỡ sự cân bằng dầu và nước, gây bong tróc và khó chịu cho da. Do đó, để duy trì một làn da khỏe mạnh và ẩm mượt thì việc duy trì độ cân bằng pH là điều rất cần thiết. Vậy độ pH là gì và làm sao để duy trì một chỉ số lý tưởng? Chẳng cần hồi tưởng lại tiết hóa học căng thẳng ở những năm cấp 3, bài viết dưới đây sẽ tiết lộ tất tật những thông tin về độ pH mà bạn cần nắm để có một làn da đẹp.`,
  },
  {
    id: 2,
    image: post2,
    title: "DAVINES HAIR SHOW 2022: TRỌN VẸN SỨ MỆNH GÌN GIỮ VẺ ĐẸP ",
    category: "Chăm sóc tóc",
    author: "Thuy Thuy",
    date: "Tháng 8 28, 2022",
    description: `Davines Hair Show là chương trình thời trang và trình diễn tóc được tổ chức thường niên từ năm 2007, nhằm giới thiệu những thiết kế tóc sáng tạo trong nước và quốc tế, đồng thời truyền cảm hứng cho mọi người với những triết lý tôn trọng thiên nhiên, môi trường.`,
  },
  {
    id: 3,
    image: post3,
    title: "XU HƯỚNG DƯỠNG DA TỐI GIẢN “SKIN CYCLING” LIỆU CÓ ĐÁNG THỬ?",
    category: "Làm đẹp",
    author: "Thuy Duong",
    date: "Tháng 12, 2022",
    description: `Khi thực hành Skin Cycling, sản phẩm đặc trị sẽ được sử dụng lặp lại sau 2 ngày, điều này đồng nghĩa với việc da sẽ có một quãng nghỉ – chính là 2 ngày để phục hồi. Đây là bước rất quan trọng để bảo vệ hàng rào giữ ẩm của da sau chuỗi ngày thoa đắp những thành phần mạnh mẽ. Lúc này, bạn cần tập trung trang bị cho da những sản phẩm với chức năng cấp nước, cấp ẩm và nuôi dưỡng như axit hyaluronic, ceramide và glycerin,…
    Tuy nhiên Skin Cycling vẫn còn một số nhược điểm cần khắc phục, đó là sự đơn điệu trong việc lựa chọn thành phần và sản phẩm dưỡng da. Thực chất, để nhận định là đơn điệu hay tối giản còn tùy thuộc vào quan điểm của từng người, nhưng nếu da bạn không có quá nhiều vấn đề thì Retinoids không phải là sự lựa chọn duy nhất và vẫn còn rất nhiều thành phần khác bạn nên thử.`,
  },
]

function BlogPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {
        postData.map(item => (
          <div className={classes.post} key={item.id}>
            <PostCard data={item} />
          </div>
        ))
      }
    </div>
  )
}

export default BlogPage;