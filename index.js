$(function(){

    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
       
    const userInput = $(event.currentTarget).find(
        'input[name="shopping-list-entry" ]').val();

    if (userInput !== "") {


    $("button").click($("ul").append(
        `<li><span class="shopping-item">` + [userInput] + `</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div></li>`
        )
      );}
      else {$(alert("Please, provide the item"))}

    });


    $('.shopping-list').on('click', '.shopping-item-toggle', function(event)  {
        $(this).closest('li').toggleClass('shopping-item__checked');
    });
    
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });


})