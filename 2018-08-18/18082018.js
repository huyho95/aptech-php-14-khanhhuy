function batTat() {
  var img = document.getElementById('js-img');
  if (img.src.includes('pic_bulboff.gif')) {
      img.src = 'pic_bulbon.gif'; 
  }
  else{
    img.src = 'pic_bulboff.gif';
  }
}