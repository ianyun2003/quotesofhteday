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
//         single_status = "false but becomes gay πΊπΊπΊπΊπΊ"
//     }
    
//     else if (schoolname == "washington university"){
//         single_status = "no π¦π¦π¦ π€‘π€‘π€‘"
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
    hobbies: ["κ²μ", "μ¬μ§ μ°κΈ°"]
}
Ian = {
    name: "μ€νμ½",
    age: 18, 
    school: "Stanford class of 2026",
    major: "CS",
    hobbies: ["playing R6", "drumming", "playing guitar"],
    gender: "Male",
    μ΄μν: Jisoo
}

// console.log(Ian.school)
// console.log(Ian.hobbies)
// console.log(Ian.hobbies[1])

console.log(Ian.μ΄μν.hobbies[0]);