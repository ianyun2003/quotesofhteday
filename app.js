// function clickfunction() {
//     console.log(document.querySelector("h1").innerHTML);
//     if (document.querySelector("h1").innerHTML == "Clicked!") {
//         document.querySelector("h1").innerHTML = "Not clicked!";
//     } else {
//         document.querySelector("h1").innerHTML = "Clicked!";
//     }
// }

//     function changeCSS() {
//         document.querySelector(".myclass").style.color = "blue";
//         document.querySelector("#second").style.fontSize = "100px";
       
//     }
let quotes = []


async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes")
    const jsonQuotes = await response.json();
    quotes = jsonQuotes;
    console.log(quotes.length);
}

getQuote()

async function myfunction() {
    
    const randomInteger = Math.floor(quotes.length * Math.random());
    const randomQuote = quotes[randomInteger].text
    // const randomAuthor = json[randomInteger].author
    // console.log("Author" + randomAuthor);
    console.log("Quote:" + randomQuote);
    document.querySelector("#quote").innerHTML = randomQuote
}









// // let pretty = "jisoo";
// // const myfavnum = 7;
// // const favboolean = "true";
// // pretty = "Lisa";
// // console.log(pretty);



// // const num1 = "a";
// // const num2 = "b";

// // if (num1 > num2) {
// //     console.log("1>2");
// // } else {
// //     console.log("2>1");
// // }


// // for (let number = 0; number <= 10; number +=2) {
// //     if (number % 2 == 0 ) {
// //         console.log(number, "is even");
        
        
// //     } else {
// //         console.log(number, "is odd");
        
// //     }
// // }


// // const mysports = ["Soccer", "Rugby", "Football", "heavy lifting"]

// // for (let index = 0; index <= 4; index++) {
// //     console.log(mysports[index]);
    
// // }

// function fibseq(seqlength) {
//     const mylist = [1,1];
//     for (let index = 0; index < seqlength -2; index++) {
//         const a= mylist[index];
//         const b= mylist [index+1];
//         mylist.push (a+b);
//     }
//     return mylist;
// }

// console.log(fibseq(5));
// console.log(fibseq(100));

// function f(x) {
//     const answer = Math.pow(x,2) + x + 2;q
//     return answer
// }

// console.log(f(3)+f(4));







