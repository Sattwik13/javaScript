const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (ans) {
    // console.log(ans);
});

coding.forEach( (item) => {
    // console.log(item);
})


function printMe(item) {
    console.log(item);
}
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding2 = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "j"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding2.forEach( (item) => {
    // console.log(item.languageName);
    // console.log(`${item.languageName} :- ${item.languageFileName}`);

})