//use follow command to run the script, change the name to current file's name.
//when modify data in prod, remember to mongodump first!!!
// mongo ds247569.mlab.com:47569/shareworks-prod -u admin -p sharemyworks1 < [filename].js > [outputfile]


var students = db.Account.find({"suggestedCourses":{$nin:[null,[]]}});
var studentsArray = students.toArray();

printjson(studentsArray.length);
var studentsdb = {};
var students = {};
var irvineStuList = [];
var arcadiaStuList = [];
studentsArray.forEach(student=>{
    studentsdb[student._id.str] = student.suggestedCourses;
    students[student._id.str] = {
        firstName: student.firstName,
        lastName: student.lastName,
        parentEmail: student.email,
        parentPhoneNumber: student.phoneNumber,
    };
    if(student.organizationId != undefined){
        if(student.organizationId.str === "5b2423bbc0991500145353f4"){
            irvineStuList.push(student._id.str);
        }
        if(student.organizationId.str === "5d801257d2c9f600154965d8"){
            arcadiaStuList.push(student._id.str);
        }
    }
});

print("var id_courses = ");
printjson(studentsdb);
print("var id_student = ");
printjson(students);
printjson(irvineStuList.length);
print("var irvineStuList =");
printjson(irvineStuList);
print("var arcadiaStuList =");
printjson(arcadiaStuList);

