var courseData = {
  'courseTitle' : 'Computer Information and Network Security | Coding Minds Academy',
  'courseDescription' : 'Learn how to protect your computer from hackers',
  'topTitleLine1' : 'Computer Information and Network Security',
  'topTitleLine2' : '',
  'topGradeLevel' : 'Grade 7 - 12',
  'topIntroText' : 'The safety of data and information is the most important topic in the morden world. learn how hackers attacking network and protect your computer in this course',
  'bgTitle':'Computer Information and Network Security',
  'bgImageUrl':'img/my/security/bg.jpeg',
  'bgText':'learn how hackers attacking network and protect your computer in this course',
  'bgLearnMoreText':'Learn more about network security',
  'bgLearnMoreLink':'https://www.youtube.com/embed/JIJslcA8Q5g?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Programming | General App',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'7 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginner to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'4 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Learn basic network security theories',
    'text':'Information and network security are based on a series of theories: cryptography, cryptography, computer network communication principles',
    'imageUrl':'img/my/security/ce1.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'Learn how to programming',
    'text':'Real hackers are master in programmering, you have to be a better coder to protect youeself from them.',
    'imageUrl':'img/my/security/ce2.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'From the Basic to the Practical',
    'text':'Experience the process of network attack and defense in a simulated environment.',
    'imageUrl':'img/my/security/ce3.jpg'
  },

  'promotion4':{
    'enabled':false,
    'title':'Game Development with Python',
    'text':'Playing games is fun, but building games by yourself is even more exciting. You will learn how to make games using Python and PyGame. Bring your game ideas to our camp!',
    'imageUrl':'img/my/pygame-1.jpg'
  },

  'promotion5':{
    'enabled':false,
    'title':'Web Server Programming with Python',
    'text':'To make your program more powerful, you need to turn it into a server program, so that people from all over the world can access it through the Internet. This is another core skill you will learn from the Python programming camp.',
    'imageUrl':'img/my/python-learn-4.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTitle' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Coding',
      'text':'The fundamentals of Python programming language'
    },
    {
      'icon':'icon-Gears',
      'text':'The basic knowledge and experience on machine learning'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Game development skill using Python and PyGame'
    },
    {
      'icon':'icon-Server',
      'text':'Knowledge on web servers programming'
    },
    {
      'icon':'icon-Idea',
      'text':'Creativity and hands-on problem-solving skills'
    },
    {
      'icon':'icon-Key',
      'text':'Get ready for AP Computer Science and science fair'
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

  'sessionsEnabled':false,
  'sessionsTitle':'Schedule',
  'sessionsTimeTitle':'Time',
  'sessionsDateTitle':'Date',
  'sessionsLocationTitle':'Location',
  'sessions':[
    {
      'date':'7/3 - 7/7',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/24 - 7/28',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/31 - 8/4',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    },
  ],

  'registrationEnabled':true,
  'registrationTitle':'',
  'priceTitle':'Registration',
  'price':'',
  'allCreditCards':'All credit cards are supported',
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
      'address1' : '930 Roosevelt, Suite 236',
      'address2' : 'Irvine, CA 92620',
      'addressMap' : '930 Roosevelt, Irvine, CA 92620'
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

  'engUrl':'security.html',
  'cnUrl':'securityc.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
