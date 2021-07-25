// function calcweight(mass, planet) {
//     let G = 0;
//     if (planet == "Earth") {
//         G = 9.81;
//     } else if(planet == "Moon") {
//         G = 1.62;
//     }
//     const answer = G * mass
//     return answer
// }

// console.log(G);

// console.log(calcweight(100, "A"));


// function will_be_single(schoolname) {
//     let single_status = 0;
//     schoolname = schoolname.toLowerCase();
//     if (schoolname.endsWith ("tech")) {
//         single_status = true;
//     }
//     else if (schoolname.startsWith("uc")) {
//         single_status = true;
//     }

//     else if (schoolname == "harvard") {
//         single_status = "false but becomes gay 👺👺👺👺👺"
//     }
    
//     else if (schoolname == "washington university"){
//         single_status = "no 💦💦💦 🤡🤡🤡"
//     }
//     return single_status
// }

// console.log(will_be_single ("WASHington UNIVersity"));

// console.log(will_be_single ("UC Berkley"));

// console.log(will_be_single ("Harvard"));

// console.log(will_be_single ("Cal Tech"));

//Obj

Jisoo = {
    name: "Jisoo",
    age: 26,
    gender: "female",
    hobbies: ["게임", "사진 찍기"]
}
Ian = {
    name: "윤현엽",
    age: 18, 
    school: "Stanford class of 2026",
    major: "CS",
    hobbies: ["playing R6", "drumming", "playing guitar"],
    gender: "Male",
    이상형: Jisoo
}

// console.log(Ian.school)
// console.log(Ian.hobbies)
// console.log(Ian.hobbies[1])

console.log(Ian.이상형.hobbies[0]);