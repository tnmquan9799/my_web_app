window.onload = function () {

  var tds = document.getElementsByTagName('td');
  var highlighteds = document.getElementsByClassName('highlighted');
  var myTd = document.getElementById('my-td');

  for (var i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function(event) {
      event.preventDefault();

      var highlighteds = document.getElementsByClassName('highlighted');

      for (var i = highlighteds.length - 1; i >= 0; i--) {
        highlighteds[i].classList.remove('highlighted');
      }

      this.classList.add('highlighted');

    });
  }

  for (var i = 0; i < tds.length; i++) {
    tds[i].addEventListener('mouseover', function(event) {
      myTd.innerHTML = `<span class="my-td-span">${this.innerText}</span>`
    });

    tds[i].addEventListener('mouseleave', function(event) {
      myTd.innerHTML = null;
    });
  }

  // var trs = document.getElementsByTagName('tr');
  //
  // for (var i = 0; i < trs.length; i++) {
  //
  //   trs[i].addEventListener('mouseover', function(event) {
  //     this.classList.add('trHighlighted');
  //   })
  //
  //   trs[i].addEventListener('mouseleave', function(event) {
  //     var trHighlighteds = document.getElementsByClassName('trHighlighted');
  //
  //     for (var i = trHighlighteds.length - 1; i >= 0; i--) {
  //       trHighlighteds[i].classList.remove('trHighlighted');
  //     }
  //   });
  // } 
}
