var pets;

$.ajax({
  type: 'GET',
  contentType: 'application/json',
  url: 'http://localhost:3000/' + 1,

  success: function (data, status, xhr) {
    if (status === 'success') {
      pets = data;
      renderCards();
    }
  }
});


$(document).ready(function() {

  $('#pages').twbsPagination({
    totalPages: pets.pageCount.pages,
    visiblePages: 5,
    onPageClick: function (event, page) {
      fillData(page);
    }
  });

});

function fillData(i) {
  $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: 'http://localhost:3000/' + (i),

    success: function (data, status, xhr) {
      if (status === 'success') {
        pets = data;
        $("#pet-card").empty();
        renderCards();
      }
    }
  });
}

function renderCards() {
  for (let i = 0; i < pets.pageCount.limit; i++) {
    var holder = $("<div id='holder' class='card'><div>");
    holder.prepend('<img src="' + pets.pageCount.docs[i].imageUrl + '" alt="Card image cap" />')
    var ul = holder.append('<ul class="card-text"></ul>');
    ul.append('<li>' + pets.pageCount.docs[i].name + '</li>');
    ul.append('<li>' + pets.pageCount.docs[i].typeAnimal + '</li>');
    ul.append('<li>' + pets.pageCount.docs[i].breed + '</li>');
    $("#pet-card").append(holder);

    holder.click(function() {
      // window.location.replace("http://localhost:3000/pet/" + pets.pageCount.docs[i].name);

      $('#pages').hide();
      $('#footer').hide();
      $("#pet-card").empty();

      var holder = $("#pet-details");
      holder.prepend('<img src="' + pets.pageCount.docs[i].imageUrl + '" alt="Card image cap" />');
      var ul = holder.append('<ul class="card-text"></ul>');
      ul.append('<li>' + pets.pageCount.docs[i].name + '</li>');
      ul.append('<li>' + pets.pageCount.docs[i].typeAnimal + '</li>');
      ul.append('<li>' + pets.pageCount.docs[i].breed + '</li>');
    });
  }
}
