<template>
  <div>
    <div class="not-found">
      <h1 class="title">抱歉，找不到此页面～</h1>
      <p class="desc-en">Sorry, page not found</p>
      <p class="desc-cn">你请求访问的页面，暂时找不到，建议您返回<router-link class="link" :to="{ name: 'HomePage' }">主页</router-link>进行浏览，谢谢。</p>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  width: 500px;
  margin: 100px auto 0;
  text-align: center;
  border: 2px dashed #e5e5e5;
  border-radius: 5px;
}
.title {
  color: #409EFF;
}
.desc-en {
  font-size: 18px;
  color: #409EFF;
}
.desc-cn {
  font-size: 14px;
  margin: 30px 0;
  color: #333;
}
.link {
  padding: 0 3px;
  color: #409EFF;
}
</style>
