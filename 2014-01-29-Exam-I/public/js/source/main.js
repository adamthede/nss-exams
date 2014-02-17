(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#gonuts').click(start);
  }

  var preamble = $('#preamble p').text();
  var preambleNoComma = preamble.replace(/,/g, '');
  var preambleNoPeriod = preambleNoComma.substring(0, preambleNoComma.length - 1);
  var preambleArray = preambleNoPeriod.split(' ');
  var timer;

  console.log(preambleNoPeriod);

  function start() {
    timer = setInterval(pickWord, '1000');
  }

  function pickWord() {
    if(preambleArray.length === 0){
      clearInterval(timer);
    }
    else{
      var word = _.sample(preambleArray);
      var $chosenWord = $('<span>');
      var $chosenLength = $('<span>');
      var $div = $('<div>');
      var $a = $('<a>');
      var place = 0;

      if(word.length % 2 === 0){
        $chosenWord.addClass('evenword');
        $chosenLength.addClass('evennumber');

        var pigWord = makePigLatin(word).toLowerCase();
        var wordSum = lengthSum(pigWord);

        $chosenWord.text(pigWord);
        $chosenLength.text(wordSum);
        $chosenWord.append($chosenLength);

        $a.attr('href', 'https://www.google.com/#q='+word);
        $a.append($chosenWord);
        
        $div.append($a);
        $('#evens').append($div);
        
        place = _.indexOf(preambleArray, word);
        preambleArray.splice(place, 1);
      }
      else if(word.length %2 !== 0){
        $chosenWord.addClass('oddword');
        $chosenLength.addClass('oddnumber');

        var noVowels = removeVowels(word).toUpperCase();
        var wordFactorial = lengthFactorial(noVowels);

        if(noVowels.length === 0){
          return;
        }
        else{
          $chosenWord.text(noVowels);
          $chosenLength.text(wordFactorial);
          $chosenWord.append($chosenLength);

          $a.attr('href', 'https://www.google.com/#q='+word);
          $a.append($chosenWord);
          
          $div.append($a);
          $('#odds').append($div);
          
          place = _.indexOf(preambleArray, word);
          preambleArray.splice(place, 1);
        }
      }
    }
  }

  function makePigLatin(word){
    var firstLetter = word.slice(0,1);
    var restofWord = word.slice(1);
    var newWord = restofWord.concat(firstLetter);
    var finalWord = newWord.concat('a');
    return finalWord;
  }

  function removeVowels(word){
    var noA = word.replace(/a/g, '');
    var noE = noA.replace(/e/g, '');
    var noI = noE.replace(/i/g, '');
    var noO = noI.replace(/o/g, '');
    var noU = noO.replace(/u/g, '');
    return noU;
  }

  function lengthFactorial(word){
    var length = word.length;
    var rval = 1;
    for(var i = 2; i <= length; i++){
      rval = rval * i;
    }
    return rval;
  }

  function lengthSum(word){
    var length = word.length;
    var sum = 0;
    for(var i = 0; i <= length; i++){
      sum = sum + i;
    }
    return sum;
  }

})();

