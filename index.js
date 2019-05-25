$(function() {

('#js-shopping-list-form').submit (event=> {
  event.preventDefault();

('.shopping-item-toggle').on ('click', event => {
  const checkedItem =  $(this);

  checkedItem.toggleClass('.shopping-item__checked')

}); 
});
})
