Lisa = {
    name: "Lisa",
    age: 24,
    nationality: "Thai",
    hobbies: ["사진 찍기, 카메라 모으기, 영화(애니메이션)및 드라마 보기"]

}

Rosé = {
    name: "Rosé",
    age: 24,
    nationality: "New Zealand",
    hobbies: ["꽃꽂이, 그림 그리기, 기타 연주, 피아노치기"]
}

Jennie = {
    name: "Jennie",
    age: 25,
    nationality: "Korean",
    hobbies: ["요리하기, 베이킹, 사진 찍기, 카메라 수집, 레고, 영화·드라마 감상, 승마, 사격꽃꽂이, 그림 그리기, 기타 연주, 피아노치기"]
}

Jisoo = {
    name: "Jisoo",
    age: 26,
    nationality: "Korean",
    hobbies: ["게임, 사진 찍기, 독서, 영화 보기"]
}

const blackpink = [Jisoo, Rosé, Jennie, Lisa]

function imground(members) {
    for (let index = 0; index <= 3; index++) {
        currentmember = members[index];
        console.log(`Hello my name is ${currentmember.name}, I am ${currentmember.age} years old, and I'm from ${currentmember.nationality}. My hobbies are ${currentmember.hobbies}.`);
    }
}

imground(blackpink)