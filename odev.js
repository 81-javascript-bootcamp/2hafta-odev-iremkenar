/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

/* Hocam merhaba, uc farkli metodla sonuca ulasabildim. Asagida sirasiyla bulabilirsiniz. Biri digerinden daha iyi midir emin degilim. 3 nolu metod aklima ilk gelendi fakat onu kullanmak icin myCarDetails fonksiyonunu silmem gerektigi icin onceliklendirmedim.*/
/* Metod 1 : Explicit binding - bind. */  
var myCarDetails =  car.displayDetails.bind(car);
myCarDetails();
// Metod 2: Explicit binding - call
//var myCarDetails =  car.displayDetails;
//myCarDetails.call(car);
/* Metod 3 : implicit binding
"var myCarDetails =  car.displayDetails;
myCarDetails();" kod grubunun tamamini asagidaki kodla degistirebiliriz.*/
//car.displayDetails();



/** 
2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haricindeki isimler en az 2 karakterden olusmali.

**/


/** 
Bosluklari yok etmek için trim metodunu buldum, kalan string'in uzunlugunun 2 karakterden fazla olmasi gerektigi icin length ekledim. Trimden once String(Number(name)) denedim, derste Number(" 12ab ") uzerine konustugumuzda once bosluklari yok ettigine deginmistik. Fakat "X" testine hata verdigi icin trimle devam ettim.

Hocam burada bir sorum var, typeof ve not equal operatorunu kullanirken strict ya da loose equality'nin sonuca etkisinden emin olamadim, cunku ikisinde de ayni sonuca ulasabiliyorum. Bu problem kapsaminda bir farki var midir? 
**/  

function isValidName(name) {
    if (typeof name === 'string' && name !== "" && name.trim().length >= 2) {
      return true;
  } 
  return false;
}

/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}
/*Burada kodu dogru konsolda test etmek uzerine cok degerli bir ders ogrendim*/
summary.call(book, 'dystopian', 1932);




