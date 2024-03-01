var posts=["2023/11/22/1/","2023/10/16/3/","2023/11/22/2/","2024/02/16/6/","2023/11/24/4/","2023/12/09/5/","2024/02/16/7/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };