//use follow command to run the script, change the name to current file's name.
//when modify data in prod, remember to mongodump first!!!
// mongo ds247569.mlab.com:47569/shareworks-prod -u admin -p sharemyworks1 < [filename].js > [outputfile]


var students = db.Account.find({"suggestedCourses":{$nin:[null,[]]}});
var studentsArray = students.toArray();

printjson(studentsArray.length);
var studentsdb = {};
studentsArray.forEach(student=>{
    studentsdb[student._id.str] = student.suggestedCourses;
});

printjson(studentsdb);
