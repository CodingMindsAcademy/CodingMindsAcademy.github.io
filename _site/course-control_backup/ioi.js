var courseData = {
  'courseTitle' : 'Computer Algorithm Competition | Coding Minds Academy',
  'courseDescription' : 'Learn algorithms and perpare for competition',
  'topTitleLine1' : 'Algorithm Competition:',
  'topTitleLine2' : 'Computing Olympics',
  'topGradeLevel' : 'Grade 7 - 12',
  'topIntroText' : 'This course does not only teach how to perpare competition. It is a carefully designed program that teaches how to Practice your programming ablity and skills',

  'bgTitle':'Computer Algorithm Competition',
  'bgImageUrl':'img/my/ioi/bg.jpeg',
  'bgText':'Practice your programming ablity and prepare for competitions',
  'bgLearnMoreText':'Learn more about Computing Olympics',
  'bgLearnMoreLink':'http://www.usaco.org/',

  'aboutTitle':'About the Course',
  'aboutText':'',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Algorithmic Programming',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'7 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Intermediate to Advanced',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'4 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Professional and Efficient Code',
    'text':'students are required to solve a variety of complex computer algorithm problems in a short period of time in Computing Olympics competition.',
    'imageUrl':'img/my/ioi/ioi2.jpeg'
  },


  'promotion2':{
    'enabled':true,
    'title':'From the Basic to the Practical',
    'text':'learning to consolidate knowledge of computer algorithms and data structures, complete the core computer science course at the university in high school.',
    'imageUrl':'img/my/ioi/ioi1.png'
  },

  'promotion3':{
    'enabled':true,
    'title':'Practice and improve in the competition',
    'text':'help students to perpare and participate in various informatics competitions, learn, summarize and improve themselves in competitions.',
    'imageUrl':'img/my/ioi/ioi3.jpg'
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
      'text':'Complete learning algorithm and data structure'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Learn to debug and optimize your code'
    },
    {
      'icon':'icon-Server',
      'text':'Practice in various informatics competitions'
    },
    {
      'icon':'icon-Idea',
      'text':'Creativity ability and entrepreneurial thinking'
    },
    {
      'icon':'icon-Key',
      'text':'Prepared for high school AP computer courses'
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

  'sessionsEnabled':false,
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

  'engUrl':'ioi.html',
  'cnUrl':'ioic.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
