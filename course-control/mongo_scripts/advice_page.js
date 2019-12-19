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

// "5d992d2b8fa98c001578d44f" : [
//     "5df3d09557e17945699bd2f6"
// ],
// "5d9a58648fa98c001578d466" : [
//     "5df3d09557e17945699bd2f9"
// ],
// "5d9a58688fa98c001578d468" : [
//     "5df3d09557e17945699bd2f9"
// ],

// "5da3d84b2c78070015ae94b4" : [
//     "5df3d09557e17945699bd310"
// ],
// "5da3d87a2c78070015ae94b6" : [
//     "5df3d09557e17945699bd310"
// ],
// "5da3d8992c78070015ae94ba" : [
//     "5df3d09557e17945699bd310"
// ],


// "5db77bdc901f840015fa7b27" : [
//     "5df3d09557e17945699bd310"
// ],