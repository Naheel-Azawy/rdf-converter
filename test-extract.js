const print = s => console.log(s);
const des_builder = require("./descriptor-builder.js");

async function main(args) {
    print(JSON.stringify(await des_builder.build([
        {
            id: 0,
            name: "naheel",
            age: 21,
            birthday: "1997-03-28",
            working: true,
            test: {
                id: 3,
                name: "nnnnnn",
                age: 91
            },
            followers: [
                { name: "aaa", id: 1, thing: {a: 'a'} },
                { name: "bbb", id: 2 },
                { name: "ccc", id: 3, thing: {a: 'a'} },
                { name: "ddd", id: "a" },
                { name: "eee", id: "2018-07-18" }
            ]
        },
        {
            id: 7000,
            name: "naheel",
            age: "1997-03-05",
        }
    ])));
}

main(process.argv);
