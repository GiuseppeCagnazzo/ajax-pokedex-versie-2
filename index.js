
let $submit = $("#bigbluebutton")
let $url = "https://pokeapi.co/api/v2/"
let $li = $("#lii")
let $rightT = $("#rightT")
let $leftT = $("#leftT")
let currentId = 0;


$submit.click(function(){
  let $input = $("#input").val()

  console.log($input)

  $.ajax({
    method: 'GET',
    url: ($url + "pokemon/" + $input + "/") ,
    dataType: 'json'
  }).done(function(data){
    document.getElementById("ul").innerHTML = ""
    currentId = data.id;
    $('#result').html('<p>'+data.id+'</p>') +
    $('#result2').html('<p>'+data.name+'</p>') +
    $('#picture').html('<img src="'+data.sprites.front_default+' ";>')

    if (data.moves.length >= 4){
    for (var i = 0; i <= 3; i++) {
      document.getElementById("ul").innerHTML +='<li>'+data.moves[i].move.name+'</li>'
    }
  } else {
    for (var i = 0; i < data.moves.length; i++) {
      document.getElementById("ul").innerHTML +='<li>'+data.moves[i].move.name+'</li>'
    }
  }
  });
});

$submit.click(function(){

  let $input = $("#input").val()
  $.ajax({
    method: 'GET',
    url: ($url + "pokemon-species/" + $input + "/") ,
    dataType: 'json'
  }).done(function(data1){
        document.getElementById("result5").innerHTML = ""
        document.getElementById("result6").innerHTML = ""
    if (data1.evolves_from_species != null){
      $('#result5').html('<p>'+data1.evolves_from_species.name+'</p>')

      $.ajax({
        method: 'GET',
        url: ($url + "pokemon/" + data1.evolves_from_species.name + "/") ,
        dataType: 'json'
      }).done(function(data2){

        $('#result6').html('<img src="' + data2.sprites.front_default + '">')
      });
    }
  });
});


$rightT.click(function(){
  currentId = (parseInt(currentId) + 1).toString();
  $.ajax({
    method: 'GET',
    url: ($url + "pokemon/" + currentId + "/") ,
    dataType: 'json'
  }).done(function(data5){
    document.getElementById("ul").innerHTML = ""

    $('#result').html('<p>'+data5.id+'</p>') +
    $('#result2').html('<p>'+data5.name+'</p>') +
    $('#picture').html('<img src="'+data5.sprites.front_default+' ";>')

    if (data5.moves.length >= 4){
    for (var i = 0; i <= 3; i++) {
      document.getElementById("ul").innerHTML +='<li>'+data5.moves[i].move.name+'</li>'
    }
  } else {
    for (var i = 0; i < data5.moves.length; i++) {
      document.getElementById("ul").innerHTML +='<li>'+data5.moves[i].move.name+'</li>'
    }
  }
    $.ajax({
      method: 'GET',
      url: ($url + "pokemon-species/" + currentId + "/") ,
      dataType: 'json'
    }).done(function(data1){
          document.getElementById("result5").innerHTML = ""
          document.getElementById("result6").innerHTML = ""
      if (data1.evolves_from_species != null){
        $('#result5').html('<p>'+data1.evolves_from_species.name+'</p>')

        $.ajax({
          method: 'GET',
          url: ($url + "pokemon/" + data1.evolves_from_species.name + "/") ,
          dataType: 'json'
        }).done(function(data2){
          $('#result6').html('<img src="' + data2.sprites.front_default + '">')
        });
      }
    });
  });
});
$leftT.click(function(){
  currentId = (parseInt(currentId) - 1).toString();
  $.ajax({
    method: 'GET',
    url: ($url + "pokemon/" + currentId + "/") ,
    dataType: 'json'
  }).done(function(data5){
    document.getElementById("ul").innerHTML = ""

    $('#result').html('<p>'+data5.id+'</p>') +
    $('#result2').html('<p>'+data5.name+'</p>') +
    $('#picture').html('<img src="'+data5.sprites.front_default+' ";>')

    if (data5.moves.length >= 4){
    for (var i = 0; i <= 3; i++) {
      document.getElementById("ul").innerHTML +='<li>'+data5.moves[i].move.name+'</li>'
    }
  } else {
    for (var i = 0; i < data5.moves.length; i++) {
      document.getElementById("ul").innerHTML +='<li>'+data5.moves[i].move.name+'</li>'
    }
  }
    $.ajax({
      method: 'GET',
      url: ($url + "pokemon-species/" + currentId + "/") ,
      dataType: 'json'
    }).done(function(data1){
          document.getElementById("result5").innerHTML = ""
          document.getElementById("result6").innerHTML = ""
      if (data1.evolves_from_species != null){
        $('#result5').html('<p>'+data1.evolves_from_species.name+'</p>')

        $.ajax({
          method: 'GET',
          url: ($url + "pokemon/" + data1.evolves_from_species.name + "/") ,
          dataType: 'json'
        }).done(function(data2){
          $('#result6').html('<img src="' + data2.sprites.front_default + '">')
        });
      }
    });
  });
});
