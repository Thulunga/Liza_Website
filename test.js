$.getJSON("https://api.thedogapi.com/v1/images/search", 
function(data){

    var breedfor = data[0].breeds[0].bred_for;
    var name = data[0].breeds[0].name;
    var bgroup = data[0].breeds[0].breed_group;
    var temperament = data[0].breeds[0].temperament;
    var lspan = data[0].breeds[0].life_span;
    var himpe = data[0].breeds[0].height.imperial;
    var hmetr = data[0].breeds[0].height.metric;
    var wimpe = data[0].breeds[0].weight.imperial;
    var wmetr = data[0].breeds[0].weight.metric;

    var image = data[0].url;

    $('#name').append('', name)
    $('#breedfor').append('', breedfor)
    $('#image').attr('src', image)
    $('#bgroup').append('', bgroup)
    $('#lspan').append('', lspan)
    $('#temperament').append('', temperament)
    $('#himpe').append('', himpe)
    $('#hmetr').append('', hmetr)
    $('#wimpe').append('', wimpe)
    $('#wmetr').append('', wmetr)


});
