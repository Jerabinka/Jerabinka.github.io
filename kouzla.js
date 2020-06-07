/* zdroj: https://jecas.cz/zobrazit-skryt*/

function prohodit (div, schovat, ukazat) {
  div.className = div.className == schovat ? ukazat : schovat;
}
    
/* function prohodit (div, schovat, ukazat) {
  div.className = div.className == schovat ? ukazat : schovat;
  };

<button onclick="prohodit(document.getElementById("id"),'ukazat','schovat'); return false"> Zobrazit/Skrýt </button> */ 

/*
For (){
  return x;
  function x (){
    This.parent.node(html(#kouzla .one));
     ();
  };
}

*/
