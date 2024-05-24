// for in

const myObject = {
    js: 'javascript', 
    cpp: 'c++',
    rb : 'ruby',
    swift: 'seift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}    

const programming = ["js" , "rb", "py", "java", "cpp" ]

for (const key in programming) {
  console.log(key);
}    

for (const key in programming) {
    console.log(programming[key]);
  } 