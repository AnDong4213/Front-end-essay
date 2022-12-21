[precommit 提交前格式化代码](https://prettier.io/docs/en/precommit.html)

[prettier 代码美化](https://prettier.io/docs/en/install.html)
简书： 2zZz7zHBgcVC3Vt
yozocloud123

## 前端随笔

### vue 部分

#### vue 中的 name 属性作用？

> 1.递归组件运用（指组件自身调用自身组件）<br />

```java
<template>
  <article>
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title">
        <span class="item-title-ticket"></span>
        {{item.title}}</div>
        <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list> //递归调用
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "DetailList",  /*指组件自身调用自身组件*/
};
</script>
```

> 2、配合 keep-alive 对组件缓存做限制（include/exclude="name"），keep-alive 的 include 和 exclude 允许有条件的对组件进行缓存,其中 include 和 exclude 所匹配的就是组件的 name 值。<br />
> 3、在 dev-tools 中使用，在开发中经常需要对代码进行调试，在 dev-tools 中组件是以组件 name 进行显示的，这样更有语义化，方便快速定位到需要审查的位置，结构更清晰明了。
