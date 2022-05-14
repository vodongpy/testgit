var courses = [
    {
        id: 1,
        name: 'tran e',
        coin: 3000,
        course: 'java'
    },
    {
        id: 2,
        name: 'tran a',
        coin: 0,
        course: 'PHP'
    },
    {
        id: 3,
        name: 'tran b',
        coin: 100,
        course: 'ruby'
    },
    {
        id: 4,
        name: 'tran c',
        coin: 0,
        course: 'javascript'
    }
];

var isFree = courses.map(function(course,index) {
    return course.name;
});
// console.log(isFree);

var isFunc = function() {
    // alert('is notice');
};
// isFunc();

var myString = 'hoc JS tai F8';

// console.log(myString.);
// toString + join : Array => String
// pop remove last element
// push add element in last array
// shift remove first element
// unshift add element in first
var myArrays = [
    'java', 
    'PHP', 
    'Ruby', 
    'javascript'
];
var array2 = [
    'linux',
    'obuntu'
]
var newArrays = myArrays.concat(array2);
// console.log(newArrays);

function isFunc(language,index) {
    // return array2.;
};

function callbacks(course) {
        course();
};
// console.log(callbacks(isFunc));

var getElement = document.querySelector('h1');
console.log(getElement);
