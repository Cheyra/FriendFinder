

var friends = [
        { 
            name : "Fernando",
            photo: "data:image/jpeg;base64,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",
            scores: [
                "1",
                "5",
                "3",
                "2",
                "4",
                "2",
                "4",
                "1",
                "5",
                "2"
            ]

        },
        { 
            name : "Gus",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCV-mjJ0S5FrEH0LSNYlfvqUcaKHqmWOxumB4YPxGCeCHU_t5D",
            scores: [
                "1",
                "4",
                "2",
                "5",
                "2",
                "2",
                "3",
                "4",
                "3",
                "1"
            ]

        },

    ]
    // let name = $('#name').val().trim();
    // let photo = $('#photo').val().trim();
    // let qOne = $('#one').val().trim();
    // let qTwo = $('#two').val().trim();
    // let qThree = $('#three').val().trim();
    // let qFour = $('#four').val().trim();
    // let qFive = $('#five').val().trim();
    // let qSix = $('#six').val().trim();
    // let qSeven = $('#seven').val().trim();
    // let qEight = $('#eight').val().trim();
    // let qNine = $('#nine').val().trim();
    // let qTen = $('#ten').val().trim();
    // $.post("/api/friends",
//     {
//         name :name,
//         photo:photo,
//         qOne:qOne,
//         qTwo:qTwo,
//         qThree:qThree,
//         qFour:qFour,
//         qFive:qFive,
//         qSix:qSix,
//         qSeven:qSeven,
//         qEight:qEight,
//         qNine:qNine,
//         qTen:qTen
//     },
//     function(data, status){
//         alert('Post request made.');
//     });
// })
module.exports= friends;