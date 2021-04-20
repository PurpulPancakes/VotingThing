var r_text = new Array ();
r_text[0] = "Laura Blake has";
r_text[1] = "Richard Nixon has";
r_text[2] = "Joe Mama has";
r_text[3] = "Hugh Mungus has";
r_text[4] = "Sussus Amogus has";
r_text[5] = "Noxin Drahcir has";
r_text[6] = "Ekale Arual has";
r_text[7] = "Up Dog has";
r_text[8] = "Nita Norm has";
r_text[9] = "Scarlett Shanelle has";
r_text[10] = "Beckham Ambrosine has";
r_text[11] = "John Smith has";
r_text[12] = "Todd Diantha has";
r_text[13] = "John Doe has";
r_text[14] = "Hortense Sullivan has";
r_text[15] = "Winton Jaylin has";
r_text[16] = "Floretta Rian has";
r_text[17] = "Joann Elise has";
r_text[18] = "Totty Mitch has";
r_text[19] = "Tater Tot has";
r_text[20] = "Branda Cam has";
r_text[21] = "Faith Ebba has";
r_text[22] = "Clint Kaelea has";
r_text[23] = "Danita Lola has";
r_text[24] = "Reid Newton has";
r_text[25] = "Skyla Natasha has";
r_text[26] = "Chuck Adolph has";
r_text[27] = "Zanna Kelda has";
r_text[28] = "Geraldine Skye has";
r_text[29] = "YOU have";

var i = Math.floor(r_text.length * Math.random());

var intervalId = window.setInterval(function(){
        var i = Math.floor(r_text.length * Math.random());
        document.getElementById("footer").innerHTML = "<footer>" + r_text[i] + " voted for Nixon!</footer>";
  }, 2000);

document.getElementById("footer").innerHTML = "<footer>" + r_text[i] + " voted for Nixon!</footer>";