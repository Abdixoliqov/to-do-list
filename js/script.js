// const elCreateCheck = document.querySelector("#check");
// const createTodo = document.querySelector("#create-todo");
// const todoContent = document.querySelector(".to-do__content");

// let str = "";

// elCreateCheck.addEventListener("click", () => {
//   const itemValue = createTodo.value;

//   str += `
//   <li class="to-do__content-item">
//   <div class="item-left__imgs">
//     <img class="checker-img" src="images/checker-icon.svg" alt="checker-icon">
//     <img class="checked-img" src="images/checked-icon.svg" alt="checker-icon">
//   </div>
//   <span class="item-text">${itemValue}</span>
//   <div class="item-right__img">
//     <img src="images/icon-cross.svg" alt="cross img">
//   </div>
//   </li>
//   `;

//   if (createTodo.value !== "") {
//     todoContent.innerHTML = str;
//     createTodo.value = "";
//     const todoItems = document.querySelectorAll(".to-do__content-item");

//     todoItems.forEach((item, idx) => {
//       const itemLeftImgCheck = item.querySelectorAll(".item-left__imgs");
//       let itemText = document.querySelectorAll(".item-text");
//       const itemRightImg = item.querySelectorAll(".item-right__img");
//       itemLeftImgCheck.forEach((item) => {
//         item.addEventListener("click", () => {
//           let checkerImg = item.querySelector(".checker-img");
//           let checkedImg = item.querySelector(".checked-img");
//           itemText[idx].classList.toggle("checked-item__text");
//           checkerImg.classList.toggle("d-none");
//           checkedImg.classList.toggle("d-block");
//         });
//       });
//       itemRightImg.forEach((key) => {
//         key.addEventListener("click", () => {
//           todoItems[idx].remove();
//         });
//       });
//     });
//   }

// });

let liItems = "";

const checkInput = document.querySelector("#check");
checkInput.addEventListener("click", () => {
  const createTodo = document.querySelector("#create-todo");
  let createTodoValue = createTodo.value;
  console.log(createTodoValue);
  liItems += `
  <li class="to-do__content-item">
    <div class="item-left__imgs">
      <img class="checker-img" src="images/checker-icon.svg" alt="checker-icon" />
      <img class="checked-img" src="images/checked-icon.svg" alt="checker-icon" />
    </div>
    <span class="item-text">${createTodoValue}</span>
    <div class="item-right__img">
      <img class="item-right" src="images/icon-cross.svg" alt="cross img" />
    </div>
  </li>
  
  `;

  const todoContent = document.querySelectorAll(".to-do__content");
  todoContent.forEach((elTodo) => {
    if (createTodoValue !== "") {
      elTodo.innerHTML = liItems;
    }
    const todoItems = elTodo.querySelectorAll(".to-do__content-item");

    todoItems.forEach((item, idx) => {
      const checkerImg = item.querySelector(".checker-img");
      const checkedImg = item.querySelector(".checked-img");
      const itemLeftImgs = item.querySelector(".item-left__imgs");
      const itemText = item.querySelector(".item-text");

      itemLeftImgs.addEventListener("click", () => {
        checkerImg.classList.toggle("d-none");
        checkedImg.classList.toggle("d-block");
        itemText.classList.toggle("checked-item__text");
      });
      const itemRightImg = item.querySelector(".item-right__img");
      const itemRight = item.querySelector(".item-right");
      itemRightImg.addEventListener("click", () => {
        item.remove();
        idx--;
      });

      let itemCount = document.querySelector(".items-count");
      itemCount.innerHTML = `${idx + 1} items left`;
    });
  });
});
