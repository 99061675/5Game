var kaas = prompt('Is de kaas geel?');

if(kaas == "ja"){
    var kaas1 = prompt('Zitten er gaten in?');
    if(kaas1 == "ja"){
        var kaas2 = prompt('Is de kaas belachelijk duur?');
        if(kaas2 == "ja"){
            document.write('Het is Emmenthaler');
        }else if(kaas2 == "nee"){
            document.write('Het is Leerdammer');
        }else{
            document.write("ERROR");
        } 
    }else if(kaas1 == "nee"){
        var  kaas5 = prompt('Is de kaas hard als steen?');
        if(kaas5 == "ja"){
            document.write('Het is Parmigiano Reggiano.');
        }else if(kaas5 == "nee"){
            document.write('Het is Goudse kaas');
        }else{
            document.write("ERROR");
        }
    }else{
        document.write("ERROR");
    }
    


}else if(kaas == "nee"){
    var kaas3 = prompt('Heeft de kaas blauwe schimmels?');
    if(kaas3 == "ja"){
        var kaas4 = prompt('Heeft de kaas een korst?');
        if(kaas4 == "ja"){
            document.write('Het is Bleu de Rochbaron.');
        }else if(kaas4 == "nee"){
            document.write("Het is Foume d'Ambert");
        }else{
            document.write("ERROR");
        }
    }else if(kaas3 == "nee"){
        var kaas6 = prompt('Heeft de kaas een korst?');
        if(kaas6 =="ja"){
            document.write('Het is Camembert');
        }else if(kaas6 == "nee"){
            document.write('Het is Mozzarella');
        }else{
            document.write("ERROR");
        }
    }else{
        document.write("ERROR");
    }


}else{
    document.write("ERROR");
}