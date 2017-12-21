var courseData = {
  'courseTitle' : 'Java 101 | Coding Minds Academy',
  'courseDescription' : 'Learn how to program in Java.',
  'topTitleLine1' : 'Java 101',
  'topTitleLine2' : '',
  'topGradeLevel' : 'Grade 8 - 12',
  'topIntroText' : 'This course teaches how to write Java code and develop real life applications with Java.',

  'bgTitle':'Java 101',
  'bgText':'Learn one of the most popular programming languages in the industry.',
  'bgLearnMoreText':'Learn More about Java',
  'bgLearnMoreLink':'',

  'aboutTitle':'About the Course',
  'aboutText':'Learn to program in Java',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Programming | General App',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'8 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginning to Advanced',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Enter the World of Coding',
    'text':'You are going to learn real programming - the same type of programming Google engineers are doing.',
    'imageUrl':'img/my/coding-3.jpeg'
  },

  'promotion2':{
    'enabled':true,
    'title':'From the Basic to the Practical',
    'text':'You will start with learning the fundamental concepts of Python and the basic language contructs. However, we will lead you to the practical and exciting side of Java quickly and let you make real world applications.',
    'imageUrl':'img/my/python-learn-2.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Machine Learning with Java',
    'text':'Have you ever wondered how the engineers built the self-driving cars and the Go master to beat the top human players? The answer is machine learning. With Java, you can build your own machine learning algorithm to make your computer smart!',
    'imageUrl':'img/my/math.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Game Development with Java',
    'text':'Playing games is fun, but building games by yourself is even more exciting. You will learn how to make games using Java. Bring your game ideas to our course!',
    'imageUrl':'img/my/game-design.png'
  },

  'promotion5':{
    'enabled':true,
    'title':'Be Prepared for AP Computer Science',
    'text':'Learn the fundamental Java programming skills and prepare for the AP Computer Science courses in high school.',
    'imageUrl':'img/my/coding-build.jpg'
  },

  'curriculum' : {
    'enabled':false
  },

  'goalsTtile' : 'Top Skills Students Will Learn',
  'goals' : [
    {
      'icon':'icon-Coding',
      'text':'The fundamentals of Java programming language'
    },
    {
      'icon':'icon-Gears',
      'text':'The basic knowledge and experience on machine learning'
    },
    {
      'icon':'icon-Puzzle',
      'text':'Game development skill using Java and algorithms'
    },
    {
      'icon':'icon-Server',
      'text':'Knowledge about computational thinking'
    },
    {
      'icon':'icon-Idea',
      'text':'Creativity and hands-on problem-solving skills'
    },
    {
      'icon':'icon-Key',
      'text':'Preparation for AP Computer Science and science fair'
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
