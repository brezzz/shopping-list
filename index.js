$(function(){
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const listEntry = $('#shopping-list-entry').val(); //.js-shopping-list-entry or the id #shopping-list-entry since the html can't be changed.

      //logs to console for the purpose of checking the listEntry 
      console.log(listEntry);
  
   // to append a list entry div to the shopping list.  
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${listEntry}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  //to check off & delete an item from list:
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
  
});
