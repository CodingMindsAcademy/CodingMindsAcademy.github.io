var courseData = {
  'courseTitle' : 'Robotics and Programming with SPRK | Coding Minds Academy',
  'courseDescription' : 'Learn how to program and control a robot, and enter the world of coding',
  'topTitleLine1' : 'Robotics and Programming with SPRK',
  'topTitleLine2' : '',
  'topGradeLevel' : 'Grade 2 - 6',
  'topIntroText' : 'SPRK is far more than just a robot; it’s your vehicle to discovery. Connect to the Lightning Lab app to learn programming, complete activities, and get inspired through connected play and coding. This robot opens the world of coding.',

  'bgTitle':'Learn Programming with a SPRK Robot',
  'bgText':'Learn how to program and control a robot, and enter the world of coding.',
  'bgLearnMoreText':'See SPRK Robot in action',
  'bgLearnMoreLink':'https://www.youtube.com/embed/Yg8LmEkI_0c?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Robotics | Programming',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'2 - 6',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginner to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Learn with Your Robot Friend',
    'text':'You are going to spend the entire camp with your robot friend &mdash; SPRK. SPRK is smart and understands your commands. Your job is to learn how to program the commands in order to let SPRK accomplish challenging tasks.',
    'imageUrl':'img/my/sprk-learn-3.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'Approachable Programming',
    'text':'Beginners can give robots commands by drawing a path in the app for their robot to follow. Intermediate coders can utilize the familiar block-based drag and drop interface, while pros can use new text programming and write their own code.',
    'imageUrl':'img/my/sprk-learn-1.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Simple Examples Show Big Ideas',
    'text':'SPRK uses a simple and visual programming language to build program blocks and control robots. However, the simple blocks reveal the most important concepts about computer programming such as variables, conditions, and loops.',
    'imageUrl':'img/my/sprk-learn-6.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Learn Programming with Fun',
    'text':'Through connected play and discovery, the robots challenge and inspire brilliant young minds. From math and science to programming and the arts, hands-on activities expand imaginations and help shape a brighter future.',
    'imageUrl':'img/my/sprk-learn-5.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'Hands-On Learning Experiences',
    'text':'We focus on hands-on problem solving skills and techniques. You will learn how to solve problems using different programming methods. Everybody competes with each other, but will also collaborate and work with each other to accomplish the challenging tasks together.',
    'imageUrl':'img/my/sprk-learn-6.png'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Robot',
      'text':'The fundamentals of robotics and robot controller'
    },
    {
      'icon':'icon-Duplicate-Window',
      'text':'SPRK Lightening Lab and the visual programming language'
    },
    {
      'icon':'icon-Computer',
      'text':'The basic concepts of computer science and programming'
    },
    {
      'icon':'icon-Idea',
      'text':'Creativity and hands-on problem-solving skills'
    },
    {
      'icon':'icon-Affiliate',
      'text':'Collaborative teamwork and social skills'
    },
    {
      'icon':'icon-Key',
      'text':'The ability to adapt new challenges and environments'
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
      'date':'6/19 - 6/23',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/10 - 7/14',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    },
    {
      'date':'8/14 - 8/18',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    }
  ],

  'registrationEnabled':false,
  'registrationTitle':'Registration',
  'priceTitle':'Price',
  'price':'$595',
  'allCreditCards':'All credit cards are supported',
  'priceItems':[
    'Try the first session for FREE',
    'Learn from the professionals',
    '1:6 teacher to students ratio',
    'Always learn by doing and having fun'
  ],
  'registrationLink':'https://codingminds.wufoo.com/forms/p1cux67e0ufz4uh/',
  'registerNow':'REGISTER NOW',

  'faq':{
    'enalbed':false
  },

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'sprk.html',
  'cnUrl':'sprkc.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
