var upcomingCourses = db.Course.find({"term":'Spring 2020'}).sort({'courseCode':1});
var upCoursesArray = upcomingCourses.toArray();
// printjson(upCoursesArray);
var irvineDB = {};
var arcadiaDB = {};
var onlineDB = {};
var orgs = {'5d801257d2c9f600154965d8':'a',
'5b2423bbc0991500145353f4':'i',
"5dfa8d08d9391000141d6015":'o'};
var coursesDB = db.CoursesDB.find({}).sort({'courseCode':1});
var coursesDBArray = coursesDB.toArray();
// printjson(coursesDBArray.length);
// var onlineList = [];
// coursesDBArray.forEach(course=>{
//     onlineList.push(course.courseCode);
// })
// printjson(onlineList);
upCoursesArray.forEach(course=>{
          var range;
          var dayTime;
        //   print(11);
        //   printjson(course.dateStart);
          var strStart = course.dateStart.toJSON();
          var strEnd = course.dateEnd.toJSON();
          var strStart = strStart.slice(5,10).replace('-','/');
          var strEnd = strEnd.slice(5,10).replace('-','/');
          range = strStart + '-' +strEnd;
          dayTime = translateClassDay(course.classDay) + ' ' +course.classTime + '-' + course.classEndTime;
          var location = orgs[course.organizationId.str];
          var courseid = course._id.str;
          var repeatInfo = {'courseid':courseid, 'dayTime':dayTime, 'range':range, 'orgnization':location};

          let weekDay = {
            '每周一': 1, '每周二': 2, '每周三': 3, '每周四': 4, '每周五': 5, '每周六': 6, '每周日': 7, '日期缺失': 8
          };

          function translateClassDay(day) {
            switch(day) {
              case 'Monday': return '每周一';
              case 'Tuesday': return '每周二';
              case 'Wednesday': return '每周三';
              case 'Thursday': return '每周四';
              case 'Friday': return '每周五';
              case 'Saturday': return '每周六';
              case 'Sunday': return '每周日';
              default: return '日期缺失'
            }
          }

          function isTimeAEarilier(a, b) {
            let hourA = parseInt(a.split(':')[0]);
            let hourB = parseInt(b.split(':')[0]);
            if(hourA === hourB) {
            let minuteA = parseInt(a.split(':')[1]);
            let minuteB = parseInt(b.split(':')[1]);
              return minuteA < minuteB;
            }
            return hourA < hourB;
          }

          Array.prototype.insertCourse = function(course) {
            for(let i = 0; i < this.length; i++) {
                if(compareDayTime(course.dayTime, this[i].dayTime)) {
                    this.splice(i, 0, course);
                    return;
                }
            }
            this.push(course);
          }

          function compareDayTime(a, b) {
            if(a.split(' ').length < 2) return true;
            if(b.split(' ').length < 2) return false;
            if(weekDay[a.split(' ')[0]] === weekDay[b.split(' ')[0]]) {
                let startTimeA = a.split(' ')[1].split('-')[0];
                let startTimeB = b.split(' ')[1].split('-')[0];
                if(startTimeA === startTimeB) {
                    let endTimeA = a.split(' ')[1].split('-')[1];
                    let endTimeB = b.split(' ')[1].split('-')[1];
                    if(isTimeAEarilier(endTimeA, endTimeB)) return true;
                    else return false;
                } else {
                    if(isTimeAEarilier(startTimeA, startTimeB)) return true;
                    else return false;
                }
            } else {
                if(weekDay[a.split(' ')[0]] < weekDay[b.split(' ')[0]]) return true;
                return false;
            }
          }

        //   print(course.courseCode);
          if(location == 'o'){
            // printjson(course);
            if (!(course.courseCode in onlineDB)){
                onlineDB[course.courseCode] = [];
                onlineDB[course.courseCode].push(repeatInfo);
              }
              else{
                onlineDB[course.courseCode].insertCourse(repeatInfo);
              }    
          }
          else if (location === 'a'){
              
            if (!(course.courseCode in arcadiaDB)){
              arcadiaDB[course.courseCode] = [];
              arcadiaDB[course.courseCode].push(repeatInfo);
            }
            else{
              arcadiaDB[course.courseCode].insertCourse(repeatInfo);
            }          
          }else if(location === 'i'){
            if (!(course.courseCode in irvineDB)){
              irvineDB[course.courseCode] = [];
              irvineDB[course.courseCode].push(repeatInfo);
            }
            else{
              irvineDB[course.courseCode].insertCourse(repeatInfo);
            }   
          }

        });
        // printjson(coursesDBArray);
        // printjson(irvineDB);
        // printjson(arcadiaDB);
        
var courseListArcadia = [];
var courseListIrvine = [];
var courseListOnline = [];
coursesDBArray.forEach(course=>{
    // course['id'] = course['_id'].str;
    var tempcourse = Object.assign({},course);
    var tempcourse1 = Object.assign({},course);
    var tempcourse2 = Object.assign({},course);

    // delete course['_id'];
    
    // printjson(tempcourse.courseCode);
    if(tempcourse.courseCode in irvineDB){
      delete tempcourse['_id'];

      tempcourse['repeatData'] = irvineDB[tempcourse.courseCode]
        courseListIrvine.push(tempcourse);
      }
    if(tempcourse1.courseCode in arcadiaDB){
      delete tempcourse1['_id'];

      tempcourse1['repeatData'] = arcadiaDB[tempcourse1.courseCode] 
      courseListArcadia.push(tempcourse1);  
    }
    if(tempcourse2.courseCode in onlineDB){
      delete tempcourse2['_id'];
        tempcourse2['repeatData'] = onlineDB[tempcourse2.courseCode] 
        courseListOnline.push(tempcourse2);  
    }
  });

        print('var irvinedb = ');
        printjson(courseListIrvine);
        print('var arcadiadb = ');
        printjson(courseListArcadia);
        print('var onlinedb = ');
        printjson(courseListOnline);



