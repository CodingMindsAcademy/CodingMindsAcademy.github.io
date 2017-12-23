var courseData = {
  'courseTitle' : 'Mobile App Programming with MIT App Inventor',

  'topTitleLine1' : 'Mobile App Programming ',
  'topTitleLine2' : 'with MIT App Inventor',
  'topGradeLevel' : 'Grade 7 - 10',
  'topIntroText' : 'Tired of playing apps or games on your parents\' phones? Why don\'t you build your own? You will learn how to make real mobile apps with the most popular mobile technologies and solve real world problems.',

  'bgTitle':'Build and Publish Apps to Google Play',
  'bgText':'Learn how to program and develop mobile apps. Become the next young entrepreneurs.',
  'bgLearnMoreText':'See MIT App Inventor in Action',
  'bgLearnMoreLink':'https://www.youtube.com/embed/sNjGAiOrX-o?autoplay=1',

  'aboutTitle':'About the Camp',
  'aboutText':'',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Programming | Mobile',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'7 - 10',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginner to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Fun and Powerful Programming',
    'text':'MIT App Inventor is an innovative beginner\'s introduction to programming and app creation that transforms the complex language of text-based coding into visual, drag-and-drop building blocks.',
    'imageUrl':'img/my/mobile-learn-12.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'It\'s All about Apps',
    'text':'Students will learn creating apps on various topics: Mobile User Interface, Mobile Interaction and Animation, Network Programming, Mobile Server Communication, Online Chat Mobile Sensors, Mobile Game Design and Development.',
    'imageUrl':'img/my/mobile-learn-11.png'
  },

  'promotion3':{
    'enabled':true,
    'title':'Learn Big Ideas from Apps',
    'text':'As a cutting-edge programming learning platform from MIT Media Lab, students learn programming and computer science in a fun way. The app development teaches the most important concepts about computer programming, making students ready for the real coding study.',
    'imageUrl':'img/my/mobile-learn-5.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Publish And Share Your Apps',
    'text':'Every student are expected to make 6 - 10 apps during the 5-day camp. Just like a real app developer and entrepreneur, you will publish your apps to the app store, and make it available to download for people from all over the world.',
    'imageUrl':'img/my/mobile-learn-6.jpg'
  },

  'promotion5':{
    'enabled':true,
    'title':'Be the Next Entrepreneur',
    'text':'We focus on hands-on problem solving skills and techniques. We will also encourage and guide students to think about startup ideas, build prototypes, and become a young entrepreneur.',
    'imageUrl':'img/my/startup-1.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTtile' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Smartphone',
      'text':'The fundamentals of mobile app programming'
    },
    {
      'icon':'icon-Duplicate-Window',
      'text':'MIT App Iventor and the visual programming language'
    },
    {
      'icon':'icon-Computer',
      'text':'The concepts of computer science and Internet'
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
      'text':'The innovation mindset and entrepreneurship'
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
      'date':'6/26 - 6/30',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    },
    {
      'date':'7/17 - 7/21',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    },
    {
      'date':'8/7 - 8/11',
      'time':'9AM - 12PM',
      'location':'Irvine, CA'
    },
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

  'engUrl':'mobile.html',
  'cnUrl':'mobilec.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
