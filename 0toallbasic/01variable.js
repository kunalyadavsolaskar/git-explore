var user={
    firstname:"kunal",
    lastname:"yadav",
    email:"kunalnyadav300@gamil.com",
    logincount:32,
    signin:true,
    courseList:[],
    buycourse: function(coursename){
        this.courseList.push(coursename)
    },
    getCourseCount: function(){
        return `${this.firstname} is enrolled in total of ${this.courseList.length} are ${this.courseList} .`
    }
}
var courseList=true;
// console.log(user.firstname)
console.log(user.getCourseCount());
user.buycourse("ReactJS")
console.log(user.getCourseCount());
user.buycourse("AngularJS")
console.log(user.getCourseCount());
console.table(user)

// console.log(user.lastname);
// user.logincount=75
// console.log(user);
// console.table(user)