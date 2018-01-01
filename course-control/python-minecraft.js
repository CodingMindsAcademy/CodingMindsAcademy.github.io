var courseData = {
  'courseTitle' : 'Python Programming with Minecraft | Coding Minds Academy',
  'courseDescription' : 'Learn Python programming with Minecraft.',
  'topTitleLine1' : 'Python Programming',
  'topTitleLine2' : 'with Minecraft',
  'topGradeLevel' : 'Grade 7 - 12',
  'topIntroText' : 'Python has become the most popular programming language in the cutting-edge fields. This course introduces Python programming with the game all students love - Minecraft.',

  'bgTitle':'Python Programming with Minecraft',
  'bgImageUrl':'img/my/pythonmine/pyminebg.jpg',
  'bgText':'The most popular programming language Python + The most popular game Minecraft = The dream programming course',
  'bgLearnMoreText':'Learn More about Python',
  'bgLearnMoreLink':'https://www.youtube.com/embed/hxGB7LU4i1I?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Learn Python programming with Minecraft. Build your own version of Minecraft without limitations.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Python',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'7 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginning to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Be a Game Coder',
    'text':'No longer worry about addiction to play Minecraft. Let\'s motivate the kids to learn the professional programming in Python with the popular game.',
    'imageUrl':'img/my/pythonmine/pymine1.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'Learn the Professional Coding',
    'text':'The popularity of Python is not just based on its simplicity and conciseness, but because of its capability of doing complicated tasks rapidly and efficiently.',
    'imageUrl':'img/my/pythonmine/pymine2.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'The Gate to the Cutting-Edge',
    'text':'If you are interested in Machine Learning, AI, Computer Vision, Self-Driving Cars, Python should be the first topic to learn.',
    'imageUrl':'img/my/pythonmine/pymine3.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Prepare for AP CS',
    'text':'Python is the perfect foundation for both AP CS and AP CS Principles courses for high school students.',
    'imageUrl':'img/my/pythonmine/pymine4.png'
  },

  'promotion5':{
    'enabled':true,
    'title':'Become a Entrepreneur',
    'text':'Learn the practical instead of the pure theory. Students can learn how to solve real-world problems using programming.',
    'imageUrl':'img/my/pythonmine/pymine5.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Gears',
      'text':'Master the basics of Python'
    },
    {
      'icon':'icon-Coding',
      'text':'Design programs based on given problems'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Understanding of computer algorithms'
    },
    {
      'icon':'icon-Server',
      'text':'Introduction to game programming'
    },
    {
      'icon':'icon-Idea',
      'text':'The solid foundation for AP CS'
    },
    {
      'icon':'icon-Key',
      'text':'Creativity and entrepreneurship'
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
      'time':'Mondays 5:00-6:30PM',
      'location':'Irvine'
    },
    {
      'date':'1/13 - 3/17 (10 Weeks)',
      'time':'Saturdays 9:30-11:00AM',
      'location':'Rancho Cucamonga'
    }
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

  'promotionText':'Interested in learning programs with fun?',
  'promotionButtonText':'Contact Us',
  'promotionUrl':'page-contact-us.html',

  'engUrl':'python-minecraft.html',
  'cnUrl':'python-minecraftc.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
