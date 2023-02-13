let btns = document.querySelectorAll('.cart-btn-shopping');
let main_container = document.getElementsByTagName('tbody')[0];
 let removeBtns = document.getElementsByClassName('removeBtn');

 
 
 
const myBtnClickHandler = (event) => {
  let btn = event.target;
  let btn_parent = btn.parentElement;

  let btn_grandparent = btn.parentElement.parentElement;
  let itemName = btn_parent.children[0].innerText;
 let itemPrice = btn_parent.children[2].innerText;
 let itemImage = btn_grandparent.children[0].src
 let itemContainer = document.createElement('tr');
 itemContainer.innerHTML = `<td> <img src="${itemImage}" alt="" id="image_list" class="img"> </td>
 <td>
     <h6 class="item_name"> <b> ${itemName}</b> </h6>
 </td>
 <td>
     <h6 class="item_price"><b>${itemPrice}</b></h6>
 </td>
 <td>
     <button id="removeBtn"class="removeBtn">Remove</button>
 </td>`
 main_container.append(itemContainer);
 for(i = 0; i< removeBtns.length;i++){
   removeBtns[i].addEventListener('click',removeItem);
 }

  console.log(itemImage);
}

 btns.forEach((btn)=> {
  btn.addEventListener('click', myBtnClickHandler);
 });
 
 function removeItem(event){
   remove_btn = event.target;
   remove_btn_grandParent = remove_btn.parentElement.parentElement;
   remove_btn_grandParent.remove();

 }



