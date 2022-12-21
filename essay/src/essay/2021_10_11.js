{
  let i = 0;
  for (; i < 5; i++) {
    if (i == 3) {
      continue;
    }
    console.log("The number is " + i);
  }
  /* while (i < 5) {
    i++;
    if (i == 3) {
      continue;
      // break;
    }
    console.log("The number is " + i);
  } */
  //  continue 用于跳过循环中的一个迭代，并继续执行循环中的下一个迭代。
  // continue 与 break 语句的区别是， break 是结束整个循环体，continue是结束单次循环。

  /* 在执行 continue 语句时，表现出了两种不同类型的循环：
  在 while 循环中，会先判断条件，如果条件为 true，循环再执行一次。
  在 for 循环中，自增长表达式 (如：i++) 会先计算，然后再判断条件是否为true，再决定是否执行迭代。 */
}

{
  // console.log(i);
}
