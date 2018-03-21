var courseData = {
  'courseTitle' : 'Arduino Programming | Coding Minds Academy',
  'courseDescription' : 'Create intelligent electronic systems. Learn software in the world of hardware.',
  'topTitleLine1' : 'Electrical Engineer Growth Path:',
  'topTitleLine2' : 'Arduino Programming',
  'topGradeLevel' : 'Grade 6 - 12',
  'topIntroText' : 'Arduino is a convenient, flexible and easy-to-use open source electronic programming development platform. The Arduino can sense the environment through a variety of sensors and feedback and influence the environment by controlling lights, motors and other devices. The microcontroller on the board can program through Arduino\'s programming language. Through hands-on operation of software and hardware, it can quickly make automatic alarm devices, smart irrigation systems and other professional projects.',

  'bgTitle':'Arduino Programming',
  'bgImageUrl':'img/my/arduino/arduino-bg.jpg',
  'bgText':'Create intelligent electronic systems and learn software through the world of hardware',
  'bgLearnMoreText':'Learn More about Arduino',
  'bgLearnMoreLink':'https://www.youtube.com/embed/Fjx5EjLCPpc?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Create intelligent electronic systems and learn software through the world of hardware.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Hardware',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'6 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginning to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Enter the world of hardware',
    'text':'There\'s a lot to explore in the world of hardware and a little Arduino can let you experience the magic of electronic circuits.',
    'imageUrl':'img/my/arduino/ard-1.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'Sensors that meet your imagination',
    'text':'The application of the hardware depends on a variety of sensors, and with your imagination, you will find that all the functions you want can be achieved by the sensor.',
    'imageUrl':'img/my/arduino/ard-2.png'
  },

  'promotion3':{
    'enabled':true,
    'title':'Use Arduino to control smart devices',
    'text':'Software and programs are the brains of hardware. Learn the C programming language to control electronic systems.',
    'imageUrl':'img/my/arduino/ard-3.png'
  },

  'promotion4':{
    'enabled':true,
    'title':'The path to become a electrical engineer',
    'text':'Electronic engineers start with the most basic circuits and programming. Bit by bit, you will grow rapidly.',
    'imageUrl':'img/my/arduino/ard-4.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'Become an entrepreneur',
    'text':'Create a project that solves a problem, and become an entrepreneur.',
    'imageUrl':'img/my/arduino/ard-5.png'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Gears',
      'text':'Master the basic concepts and architecture of Arduino'
    },
    {
      'icon':'icon-Coding',
      'text':'Learn the basics of C# programming language'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Understanding circuit design principles'
    },
    {
      'icon':'icon-Server',
      'text':'Understanding the relationship between hardware and software systems'
    },
    {
      'icon':'icon-Idea',
      'text':'Designed to achieve personalized programming and research projects'
    },
    {
      'icon':'icon-Key',
      'text':'Preparation of Science Fair projects'
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
      'date':'1/8 - 3/12 (10 Weeks)',
      'time':'Mon 3:20-4:50PM',
      'location':'Irvine, CA'
    },
    {
      'date':'1/10 - 3/14 (10 Weeks)',
      'time':'Wed 3:20-4:50PM',
      'location':'Irvine, CA'
    },
  ],

  'registrationEnabled':true,
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

  'locations':[
    {
      'name' : 'Irvine Classroom',
      'address1' : '980 Roosevelt, Suite 210',
      'address2' : 'Irvine, CA 92620',
      'addressMap' : '980 Roosevelt, Irvine, CA 92620'
    },
    {
      'name' : 'Rancho Cucamonga Classroom',
      'address1' : '6080 Haven Ave',
      'address2' : 'Rancho Cucamonga, CA 91737',
      'addressMap' : '6080 Haven Ave, Rancho Cucamonga, CA 91737'
    }
  ],

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'course-layout-version-3.html',
  'cnUrl':'course-layout-version-3-cn.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
