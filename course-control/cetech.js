var courseData = {
  'courseTitle' : 'Technovation competition | Coding Minds Academy',
  'courseDescription' : 'Learn algorithms and perpare for competition',
  'topTitleLine1' : 'College Application Enrichment:',
  'topTitleLine2' : 'Technovation competition',
  'topGradeLevel' : 'Grade 6 - 12 (Girls Only)',
  'topIntroText' : "Technovation is the annual Global Girls' Technology Entrepreneurship Competition. students start an independent entrepreneurial project and realize it by programming.",

  'bgTitle':'Technovation competition',
  'bgImageUrl':'img/my/ioi/bg.jpeg',
  'bgText':'Practice your programming ablity and prepare for competitions',
  'bgLearnMoreText':'Learn more about Technovation competition',
  'bgLearnMoreLink':'https://technovationchallenge.org/',

  'aboutTitle':'About the Course',
  'aboutText':'',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Algorithmic Programming',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'6 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Intermediate to Advanced',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'4 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Professional and Efficient Code',
    'text':'students are required to solve a variety of complex computer algorithm problems in a short period of time in Computing Olympics competition.',
    'imageUrl':'img/my/cetech/img1.png'
  },


  'promotion2':{
    'enabled':true,
    'title':'Learn Big Ideas from Apps',
    'text':'Students will learn creating apps on various topics: Mobile User Interface, Mobile Interaction and Animation, Network Programming, Mobile Server Communication, Online Chat Mobile Sensors, Mobile Game Design and Development.',
    'imageUrl':'img/my/cetech/img2.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Team collaboration',
    'text':'Form your own startup team with your own friends and be the co-founder of your company',
    'imageUrl':'img/my/cetech/img3.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Business plan',
    'text':'Complete business plan and vision, full experience of the entire entrepreneurial process',
    'imageUrl':'img/my/cetech/img4.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'Presentation and Competition',
    'text':'Competing with girls from all over the world for the most promising youth entrepreneurship projects',
    'imageUrl':'img/my/cetech/img5.png'
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
      'text':'Understand the APP development server and cloud computing'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Learn to debug and optimize your code'
    },
    {
      'icon':'icon-Server',
      'text':'Officially released APP to participate in the competition'
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

  'engUrl':'cetech.html',
  'cnUrl':'cetechc.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });

