
var Gallery = (function(){
  var Gallery = {};

    galleryPrototype = {

    };

  Gallery.create = function(id){
    var gal = Object.create(galleryPrototype);

    return gal;
  };

  return Gallery;
});
