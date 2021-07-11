var courseData = {
  'courseTitle' : 'Advanced Lego Robotics Programming with Java | Coding Minds Academy',
  'courseDescription' : 'Build and program your own EV3 robot using Java!',
  'topTitleLine1' : 'Advanced Robotics Programming',
  'topTitleLine2' : 'with Java',
  'topGradeLevel' : 'Grade 4 - 8',
  'topIntroText' : 'This course allows students to build and program the EV3 robots, implementing sensors and motors. This advanced Lego programming course teaches you how to control the robots using Java.',

  'bgTitle':'Advanced Robotics Programming with Java',
  'bgImageUrl':'img/my/lego/lego-bg.jpg',
  'bgText':'Build new experiences as you program your own robot!',
  'bgLearnMoreText':'Learn More about LEGO Mindstorms',
  'bgLearnMoreLink':'https://www.youtube.com/embed/hkN_DObmh1c?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Learn to program your own EV3 robot to complete tasks and challenges.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Robotics | Programming',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'4 - 8',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginning to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'4 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Learn Java with Your Robot Friend',
    'text':'Learn Java programming fundamentals while having fun.',
    'imageUrl':'img/my/lego/lego-7.png'
  },

  'promotion2':{
    'enabled':true,
    'title':'From Lego to Real Robots',
    'text':'Have you ever thought about creating a robot like those from Boston Dynamics? Programming a LEGO Mindstorm robot is a step towards the professional robotics world.',
    'imageUrl':'img/my/lego/lego-1.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Think Like Engineers',
    'text':'Learning Lego is the best way to lead you to become the engineer you want.',
    'imageUrl':'img/my/lego/lego-3.jpeg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Learn by Doing',
    'text':'The best way to learn is with a hands-on approach and to keep trying in order to turn your ideas into reality.',
    'imageUrl':'img/my/lego/lego-5.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'Promote Yourself in Competitions',
    'text':'The LEGO Robotics Challenge is held regularly around the world. It is the best motivation to learn and compete with other students.',
    'imageUrl':'img/my/lego/lego-4.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Gears',
      'text':'Learn and explore the principles and techniques of robotics and robots'
    },
    {
      'icon':'icon-Coding',
      'text':'Understand the algorithms involved in programming and controlling robots'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Spark students\' interest in computer programming'
    },
    {
      'icon':'icon-Server',
      'text':'Develop problem-solving skills'
    },
    {
      'icon':'icon-Idea',
      'text':'Build creative thinking and team-building skills'
    },
    {
      'icon':'icon-Key',
      'text':'Participate in the FIRST LEGO League and FIRST LEGO League Jr.'
    },
  ],

  'highlightsTitle':'Course Highlights',
  'highlights':[
    {
      'icon':'icon-Fashion',
      'title':'Always Having Fun',
      'text':'Fun programming is our top priority when designing all the content'
    },
    {
      'icon':'icon-Administrator',
      'title':'Learn with Professionals',
      'text':'Gain extra experiences about the real industry and research'
    },
    {
      'icon':'icon-Hand',
      'title':'Live Interactions',
      'text':'Get your question answered in class and compete with your classmates'
    },
    {
      'icon':'icon-Air-Balloon',
      'title':'Well-Designed Assignments and Projects',
      'text':'Learn by doing is the key for CS study, all the assignments and projects are design for the goals'
    },
    {
      'icon':'icon-Idea',
      'title':'Focus on Imagination and Creativity',
      'text':'Learning programming is not the ultimate goal. We focus on pushing the kids\' imagination and creativity'
    },
    {
      'icon':'icon-Key',
      'title':'Apply Colleges with More Experiences',
      'text':'Programming is just the first step. Build projects, attend science fairs will help you get into the top unversities'
    },
  ],

  'sessionsTitle':'Schedule',
  'sessionsTimeTitle':'Time',
  'sessionsDateTitle':'Date',
  'sessionsLocationTitle':'Location',
  'sessions':[
    {
      'date':'6/25 - 6/29',
      'time':'9:00AM - 12:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/16 - 7/20',
      'time':'1:00PM - 4:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'8/6 - 8/10',
      'time':'1:00PM - 4:00PM',
      'location':'Irvine, CA'
    }
  ],
  'sessionsEnabled':false,
  'registrationEnabled':true,
  'registrationTitle':'',
  'priceTitle':'Registration',
  'price':'',
  'allCreditCards':'',
  'priceItems':[
    'Try the first session for FREE',
    'Learn from the professionals',
    '1:4 teacher to students ratio',
    'Always learn by doing and having fun'
  ],
  'registrationLink':'https://csfoundation.wufoo.com/forms/m8vsgm21cz06w0/',
  'registerNow':'REGISTER NOW',

  'faq':{
    'enalbed':false
  },

  'locations':[
    {
      'name' : 'Irvine Classroom',
      'address1' : '920 Roosevelt, Suite 200',
      'address2' : 'Irvine, CA 92620',
      'addressMap' : '970 Roosevelt, Irvine, CA 92620'
    },
  ],

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'lego2.html',
  'cnUrl':'legoc2.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
