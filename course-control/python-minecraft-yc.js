var courseData = {
  'courseTitle' : 'Python Programming with Minecraft | Coding Minds Academy',
  'courseDescription' : 'Learn Python programming with Minecraft.',
  'topTitleLine1' : 'Python Programming',
  'topTitleLine2' : 'with Minecraft',
  'topGradeLevel' : 'Grades 7 - 12',
  'topIntroText' : 'Python has become the most popular programming language in cutting-edge fields. This course introduces Python programming with the game all students love - Minecraft.',

  'bgTitle':'Python Programming with Minecraft',
  'bgImageUrl':'img/my/pythonmine/pyminebg.jpg',
  'bgText':'The most popular programming language + The most popular game = The dream programming course',
  'bgLearnMoreText':'Learn More about Python',
  'bgLearnMoreLink':'https://www.youtube.com/embed/hxGB7LU4i1I?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'Learn Python programming with Minecraft. Build your own version of Minecraft without limitations.',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Python',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'7 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginniner to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Be a Game Designer',
    'text':' Motivate the kids to learn professional programming in Python with their favorite game.',
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
    'text':'If you are interested in Machine Learning, AI, Computer Vision, Self-Driving Cars, Python is an essential topic to learn.',
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
    'title':'Become an Entrepreneur',
    'text':'Learn practical applications as well as fundamental theory. Students can learn how to solve real-world problems using programming.',
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
      'text':'Fun programming is our top priority when designing all content'
    },
    {
      'icon':'icon-Administrator',
      'title':'Learn with Professionals',
      'text':'Gain extra experiences about industry and research'
    },
    {
      'icon':'icon-Hand',
      'title':'Live Interactions',
      'text':'Get your questions answered in class and compete with your classmates'
    },
    {
      'icon':'icon-Air-Balloon',
      'title':'Well-Designed Assignments and Projects',
      'text':'Learning by doing is key for CS study, all the assignments and projects are designed to mirror real world applications.'
    },
    {
      'icon':'icon-Idea',
      'title':'Focus on Imagination and Creativity',
      'text':'Learning programming is not the ultimate goal. We focus on pushing the kids\' imagination and creativity'
    },
    {
      'icon':'icon-Key',
      'title':'Apply Colleges with More Experiences',
      'text':'Programming is just the first step. Build projects and attend science fairs to get into the top unversities'
    },
  ],

  'sessionsEnabled':false,
  'sessionsTitle':'Schedule',
  'sessionsTimeTitle':'Time',
  'sessionsDateTitle':'Date',
  'sessionsLocationTitle':'Location',
  'sessions':[
    {
      'date':'6/18 - 6/22',
      'time':'9:00AM - 12:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/9 - 7/13',
      'time':'1:00PM - 4:00PM',
      'location':'Irvine, CA'
    },
    {
      'date':'8/13 - 8/17',
      'time':'9:00AM - 12:00PM',
      'location':'Irvine, CA'
    }
  ],

  'registrationEnabled':true,
  'registrationTitle':'',
  'priceTitle':'Registration',
  'price':'',
  'allCreditCards':'',
  'priceItems':[
    'Try the first session for FREE',
    'Learn from the professionals',
    '1:4 teacher to students ratio',
    'Always learn by doing and have fun'
  ],
  'registrationLink':'https://csfoundation.wufoo.com/forms/m8vsgm21cz06w0/',
  'registerNow':'REGISTER NOW',

  'faq':{
    'enalbed':false
  },

  'locations':[
    {
      'name' : 'Irvine Classroom',
      'address1' : '930 Roosevelt, Suite 236',
      'address2' : 'Irvine, CA 92620',
      'addressMap' : '930 Roosevelt, Irvine, CA 92620'
    },
    {
      'name' : 'Arcadia Classroom',
      'address1' : '17 E Huntington Dr.',
      'address2' : 'Arcadia, CA 91006',
      'addressMap' : '17 E Huntington Dr., Arcadia, CA 91006'
    },
  ],

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
