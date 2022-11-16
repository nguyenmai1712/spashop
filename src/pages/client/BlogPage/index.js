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
    title: "Maecenas nec venenatis augue unt vel",
    category: "Uncategoried",
    author: "Acops",
    date: "July 28, 2020",
    description: `Proin quam arcu, maximus maximus lorem sit amet, gravida commodo nunc. Maecenas condimentum justo sapien, nec congue urna faucibus at. Suspendisse tristique feugiat tortor, vel suscipit nibh. Cras convallis vehicula aliquam. Praesent ullamcorper id leo quis cursus. In dapibus turpis quis risus fermentum ultrices. Aenean eget mauris venenatis, vulputate ipsum non, placerat massa. Pellentesque blandit elementum metus, aliquet interdum massa. Maecenas nec venenatis augue. Sed tincidunt vel risus ut varius. Ut fermentum, sem non tristique pharetra, lectus orci elementum turpis, vitae ultrices ipsum leo non nibh. Ut diam lacus, maximus id risus et, gravida pretium tellus. Donec metus velit, dictum non porttitor in, tincidunt ut arcu.

    Aliquam mollis, ante vitae viverra lacinia, nulla ligula interdum ligula, non vulputate elit magna vitae nulla. Integer ultrices venenatis justo non sodales. Nam sollicitudin gravida arcu, a volutpat enim venenatis eget. Pellentesque placerat ipsum vitae neque dictum, id maximus justo viverra. Aenean at nisl sit amet odio mattis pretium. Nam ut vehicula enim. Nam urna ligula, vestibulum quis massa at, laoreet ultrices felis. Fusce aliquet volutpat turpis, id interdum dui porta ut. Vivamus arcu nulla, blandit ac ante in, pretium imperdiet tellus. Nam vehicula dui vitae consequat rutrum. Phasellus justo eros, pulvinar sed sem quis, sodales maximus velit. Cras arcu odio, accumsan placerat dui quis, malesuada hendrerit justo. Vestibulum sed nibh tempus, feugiat erat id, ultrices ipsum. Suspendisse potenti. Aenean venenatis ac mauris nec ornare.`,
  },
  {
    id: 2,
    image: post2,
    title: "Maecenas nec venenatis augue unt vel",
    category: "Uncategoried",
    author: "Thuy Duong",
    date: "July 28, 2020",
    description: `Proin quam arcu, maximus maximus lorem sit amet, gravida commodo nunc. Maecenas condimentum justo sapien, nec congue urna faucibus at. Suspendisse tristique feugiat tortor, vel suscipit nibh. Cras convallis vehicula aliquam. Praesent ullamcorper id leo quis cursus. In dapibus turpis quis risus fermentum ultrices. Aenean eget mauris venenatis, vulputate ipsum non, placerat massa. Pellentesque blandit elementum metus, aliquet interdum massa. Maecenas nec venenatis augue. Sed tincidunt vel risus ut varius. Ut fermentum, sem non tristique pharetra, lectus orci elementum turpis, vitae ultrices ipsum leo non nibh. Ut diam lacus, maximus id risus et, gravida pretium tellus. Donec metus velit, dictum non porttitor in, tincidunt ut arcu.

    Aliquam mollis, ante vitae viverra lacinia, nulla ligula interdum ligula, non vulputate elit magna vitae nulla. Integer ultrices venenatis justo non sodales. Nam sollicitudin gravida arcu, a volutpat enim venenatis eget. Pellentesque placerat ipsum vitae neque dictum, id maximus justo viverra. Aenean at nisl sit amet odio mattis pretium. Nam ut vehicula enim. Nam urna ligula, vestibulum quis massa at, laoreet ultrices felis. Fusce aliquet volutpat turpis, id interdum dui porta ut. Vivamus arcu nulla, blandit ac ante in, pretium imperdiet tellus. Nam vehicula dui vitae consequat rutrum. Phasellus justo eros, pulvinar sed sem quis, sodales maximus velit. Cras arcu odio, accumsan placerat dui quis, malesuada hendrerit justo. Vestibulum sed nibh tempus, feugiat erat id, ultrices ipsum. Suspendisse potenti. Aenean venenatis ac mauris nec ornare.`,
  },
  {
    id: 3,
    image: post3,
    title: "Maecenas nec venenatis augue unt vel",
    category: "Uncategoried",
    author: "Thuy Duong",
    date: "July 28, 2020",
    description: `Proin quam arcu, maximus maximus lorem sit amet, gravida commodo nunc. Maecenas condimentum justo sapien, nec congue urna faucibus at. Suspendisse tristique feugiat tortor, vel suscipit nibh. Cras convallis vehicula aliquam. Praesent ullamcorper id leo quis cursus. In dapibus turpis quis risus fermentum ultrices. Aenean eget mauris venenatis, vulputate ipsum non, placerat massa. Pellentesque blandit elementum metus, aliquet interdum massa. Maecenas nec venenatis augue. Sed tincidunt vel risus ut varius. Ut fermentum, sem non tristique pharetra, lectus orci elementum turpis, vitae ultrices ipsum leo non nibh. Ut diam lacus, maximus id risus et, gravida pretium tellus. Donec metus velit, dictum non porttitor in, tincidunt ut arcu.

    Aliquam mollis, ante vitae viverra lacinia, nulla ligula interdum ligula, non vulputate elit magna vitae nulla. Integer ultrices venenatis justo non sodales. Nam sollicitudin gravida arcu, a volutpat enim venenatis eget. Pellentesque placerat ipsum vitae neque dictum, id maximus justo viverra. Aenean at nisl sit amet odio mattis pretium. Nam ut vehicula enim. Nam urna ligula, vestibulum quis massa at, laoreet ultrices felis. Fusce aliquet volutpat turpis, id interdum dui porta ut. Vivamus arcu nulla, blandit ac ante in, pretium imperdiet tellus. Nam vehicula dui vitae consequat rutrum. Phasellus justo eros, pulvinar sed sem quis, sodales maximus velit. Cras arcu odio, accumsan placerat dui quis, malesuada hendrerit justo. Vestibulum sed nibh tempus, feugiat erat id, ultrices ipsum. Suspendisse potenti. Aenean venenatis ac mauris nec ornare.`,
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