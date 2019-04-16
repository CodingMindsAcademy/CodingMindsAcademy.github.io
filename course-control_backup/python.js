var courseData = {
  'courseTitle' : 'Python Programming | Coding Minds Academy',
  'courseDescription' : 'Learn the most popular programming language in the industry',
  'topTitleLine1' : 'Python Programming:',
  'topTitleLine2' : 'Build Real World Applications',
  'topGradeLevel' : 'Grade 6 - 12',
  'topIntroText' : 'This course does not only teach how to write Python code. It is a carefully designed program that teaches how to develop real life applications with Python.',

  'bgTitle':'Python Programming',
  'bgImageUrl':'img/my/python-learn-3.jpg',
  'bgText':'Learn the most popular programming language in the industry.',
  'bgLearnMoreText':'See what can you do with Python',
  'bgLearnMoreLink':'https://www.youtube.com/embed/hxGB7LU4i1I?autoplay=1',

  'aboutTitle':'About the Course',
  'aboutText':'',
  'aboutCategoryTitle':'Category',
  'aboutCategory':'Programming | General App',
  'aboutGradeLevelTitle':'Grade',
  'aboutGradeLevel':'6 - 12',
  'aboutSkillLevelTitle':'Skill Level',
  'aboutSkillLevel':'Beginner to Intermediate',
  'aboutRatioTitle':'Ratio Guarantee',
  'aboutRatio':'6 Students per Instructor',

  'promotion1':{
    'enabled':true,
    'title':'Enter the World of Coding',
    'text':'You are going to learn the real programming — the same type of programming Google engineers are doing. With Python, you can accomplish any challenging tasks by writing the code.',
    'imageUrl':'img/my/python-learn-1.jpg'
  },

  'promotion2':{
    'enabled':true,
    'title':'From the Basic to the Practical',
    'text':'You will start with learning the fundamental concepts of Python and the basic language contructs. However, we will lead you to the practical and exciting side of Python quickly and let you make real world applications on machine learning, game development and web servers.',
    'imageUrl':'img/my/python-learn-5.jpg'
  },

  'promotion3':{
    'enabled':true,
    'title':'Machine Learning with Python',
    'text':'Have you ever wondered how the engineers built the self-driving cars and the Go master to beat the top human players? The answer is machine learning. With Python, you can build your own machine learning algorithm to make your computer smart!',
    'imageUrl':'img/my/machine-learning-1.jpg'
  },

  'promotion4':{
    'enabled':true,
    'title':'Game Development with Python',
    'text':'Playing games is fun, but building games by yourself is even more exciting. You will learn how to make games using Python and PyGame. Bring your game ideas to our camp!',
    'imageUrl':'img/my/pygame-1.jpg'
  },

  'promotion5':{
    'enabled':true,
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

  'engUrl':'python.html',
  'cnUrl':'pythonc.html'

}

angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseDetailsController', function($scope) {
    $scope.cd = courseData;
  });
