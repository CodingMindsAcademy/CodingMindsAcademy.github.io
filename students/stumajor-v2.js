/*
    1. Attribute的命名使用Java规则，第一个字母小写
    2. 这个JSON我们给它保持到最精简的版本，因为下面要推倒重建
    3. 这个JSON应该可以从CSV文件生成，所以我drop了courseId，等于所有内容就直接包括在这一个文件里面
    4. Notifications OpenID，我们可以再建一个CSV管理，然后在生成的时候把这两个merge到一起
*/

var stuFbDb = 
{    
    "stui000John": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "John\u8fd8\u662f\u4e00\u5982\u65e2\u5f80\u7684\u5728\u73ed\u4e0a\u662f\u6700\u8e0f\u5b9e\u548c\u8ba4\u771f\u7684\u540c\u5b66\uff0c\u4ed6\u7684\u4f5c\u4e1a\u548c\u9879\u76ee\u90fd\u5fc5\u5b9a\u8d85\u989d\u5b8c\u6210\u3002\u8fd9\u5b66\u671f\u80fd\u660e\u663e\u611f\u89c9\u5230John\u5728\u505a\u9879\u76ee\u4e0a\u8d8a\u6765\u8d8a\u6709\u5fc3\u5f97\u548c\u4fe1\u5fc3\u3002\u975e\u5e38\u671f\u5f85\u770b\u5230John\u5728\u65b0\u7684\u5b66\u6821\u548c\u65b0\u7684\u73af\u5883\u4e2d\u80fd\u6709\u66f4\u4f18\u79c0\u7684\u8868\u73b0\u3002",
                "instructor": "Dr. Sun",
                "ProjectLink": "",
                "ProjectTitle": "Content-based Image File Classification",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "John Xu",
        "since": "2017年10月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll57-29Z344qXug-dMb_bSBac",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui001James": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "James\u5bf9\u7f16\u7a0b\u7684\u53cd\u5e94\u975e\u5e38\u5feb\uff0c\u6240\u4ee5\u4ed6\u5e38\u5e38\u662f\u73ed\u4e0a\u6700\u5148\u5b8c\u6210\u8bfe\u4e0a\u7ec3\u4e60\u7684\u540c\u5b66\u3002\u6bcf\u6b21\u4e0a\u8bfe\u6211\u90fd\u8981\u51c6\u5907\u4e00\u4e9b\u989d\u5916\u6311\u6218\u7684\u5185\u5bb9\uff0c\u8fd9\u6837\u624d\u80fd\u4e0d\u8ba9\u4ed6\u5206\u5fc3\u73a9\u6e38\u620f\u3002James\u7684\u9879\u76ee\u9009\u6750\u5f88\u597d\uff0c\u505a\u7684\u4e5f\u633a\u5b8c\u6574\uff0c\u4f46\u662f\u5728\u6570\u636e\u91cf\u548c\u5c55\u793a\u4e0a\u9762\u6709\u63d0\u9ad8\u7684\u7a7a\u95f4\u3002\u6211\u8ba4\u4e3aJames\u4e0b\u9762\u53ef\u4ee5\u628a\u8fd9\u4e2a\u9879\u76ee\u62d3\u5c55\u6210\u4e3a\u79d1\u5b66\u7ade\u8d5b\u7684\u4f5c\u54c1\u3002\u671f\u5f85\u770b\u5230James\u6311\u6218\u66f4\u96be\u7684\u5185\u5bb9\u548c\u9879\u76ee\u3002",
                "instructor": "Dr. Sun",
                "ProjectLink": "",
                "ProjectTitle": "AI-based Tennis Game Prediction",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "James Wang",
        "mark": "Orchard Hill",
        "since": "2017年10月",
        "level": 3,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll55bqQtFAoECv8az8WNEHT74",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui002Shiyu": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "Shiyu\u5bf9\u52a8\u753b\u7684\u5174\u8da3\u5f00\u59cb\u6ee1\u6ee1\u7684\u6e17\u900f\u5230\u7f16\u7a0b\u4e2d\uff0c\u8fd9\u6b21\u7684\u9879\u76ee\u5979\u7684\u81ea\u52a8\u8c03\u8272\u7a0b\u5e8f\u590d\u6742\u5ea6\u5f88\u9ad8\uff0c\u800c\u4e14\u9898\u76ee\u4e5f\u5f88\u65b0\u9896\u3002Shiyu\u662f\u6211\u4eecIrvine\u8fd9\u8fb9\u6700\u8e0f\u5b9e\u7684\u540c\u5b66\uff0c\u57fa\u672c\u4e0a\u7ed9\u5979\u5b89\u6392\u7684\u529f\u8bfe\u6216\u8005\u662f\u4efb\u52a1\uff0c\u5979\u90fd\u80fd\u79ef\u6781\u4e3b\u52a8\u7684\u5b8c\u6210\u3002\u5f88\u9ad8\u5174\u770b\u5230\u4e00\u6bb5\u65f6\u95f4\u540eShiyu\u5bf9\u7f16\u7a0b\u7684\u4fe1\u5fc3\u4e0a\u7684\u63d0\u5347\u3002\u9f13\u52b1\u5c06\u6765Shiyu\u80fd\u591f\u9009\u62e9\u8ba1\u7b97\u673a\u4e13\u4e1a\u3002",
                "instructor": "Dr. Sun",
                "ProjectLink": "",
                "ProjectTitle": "Automated Image Paint using AI",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Shiyu",
        "notifications": [
            {
                "openId": "o7Rll55yiFJj3_tVOVymFgrVLA8I",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui003Miller": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "\u81ea\u4ece\u4e0a\u5b66\u671f\u7c73\u52d2\u72ec\u7acb\u5b8c\u62102000\u884c\u4ee3\u7801\u7684\u7a0b\u5e8f\u4e4b\u540e\uff0c\u7c73\u52d2\u57fa\u672c\u4e0a\u8fdb\u5165\u4e86\u4e00\u4e2a\u6bd4\u8f83\u4e13\u4e1a\u7684\u5b66\u4e60\u72b6\u6001\uff1a\u53ef\u4ee5\u81ea\u5df1\u786e\u5b9a\u9898\u76ee\uff0c\u6709\u80fd\u529b\u81ea\u5df1\u5728\u7f51\u4e0a\u627e\u7b54\u6848\u81ea\u5b66\uff0c\u5e76\u4e14\u53ef\u4ee5\u81ea\u5df1\u4e0d\u65ad\u5bf9\u7a0b\u5e8f\u8fdb\u884c\u8c03\u8bd5\u548c\u6539\u8fdb\u3002\u4e0b\u9762\u7684\u5b66\u4e60\u4e3b\u8981\u8fd8\u662f\u56f4\u7ed5\u4e24\u4e2a\u65b9\u9762\uff1a\u4e00\u662f\u8981\u4ee5\u9879\u76ee\u4e3a\u4e2d\u5fc3\uff1b\u4e8c\u662f\u53ef\u4ee5\u8ba9\u7c73\u52d2\u5f00\u59cb\u4e00\u4e9b\u4fe1\u606f\u5b66\u7ade\u8d5b\u7684\u5185\u5bb9\u3002\u5177\u4f53\u7684\u9879\u76ee\u5185\u5bb9\u6211\u4eec\u4e00\u8d77\u6765\u89c4\u5212\u3002",
                "instructor": "Dr. Sun",
                "ProjectLink": "",
                "ProjectTitle": "AI-based Video Filtering",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Miller Liu",
        "mark": "Orchard Hill",
        "since": "2017年10月",
        "level": 4,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll56K_3Ln5JmBaOEi-3Ff-wBU",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui004Carolyn": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "\u5f88\u9ad8\u5174\u5e26\u4e86Carolyn\u4e24\u5e74\u7684\u65f6\u95f4\uff0c\u7b2c\u4e8c\u5e74\u76f8\u5bf9\u4e8e\u7b2c\u4e00\u5e74\u7684\u660e\u663e\u53d8\u5316\u662f\uff1a\u7b2c\u4e00\u5e74\u662f\u8ba4\u8ba4\u771f\u771f\u8ddf\u8001\u5e08\u5b66\u4e60\u505a\u7ec3\u4e60\u4e3a\u4e3b\uff0c\u800c\u7b2c\u4e8c\u5e74\u662f\u81ea\u5df1\u6709\u601d\u60f3\u6709\u4fe1\u5fc3\u7684\u505a\u9879\u76ee\u3002Carolyn\u4e00\u76f4\u6bd4\u8f83\u5185\u5411\uff0c\u8bfe\u5802\u4e0a\u8bf4\u8bdd\u4e0d\u591a\uff0c\u4f46\u662f\u4f5c\u4e3a\u8001\u5e08\u6211\u53ef\u4ee5\u660e\u663e\u7684\u611f\u89c9\u5230\u5979\u5728\u505a\u9879\u76ee\u7684\u65f6\u5019\u591a\u4e86\u5f88\u591a\u7684\u81ea\u4fe1\u548c\u5e95\u6c14\uff0c\u4e0d\u8bba\u662fAI\u7684\u9879\u76ee\u8fd8\u662f\u5973\u751f\u7ade\u8d5b\u7684\u9879\u76ee\u3002\u5305\u62ec\u5927\u5bb6\u5728\u5f55\u89c6\u9891\uff0c\u51c6\u5907\u7ade\u8d5b\u63d0\u4ea4\uff0c\u6240\u6709\u4ea4\u7ed9Carolyn\u7684\u4efb\u52a1\u5979\u90fd\u662f\u5927\u80c6\u7684\u62ff\u4e0b\uff0c\u5e76\u4e14\u4e00\u6b65\u5b8c\u6210\u3002Carolyn\u867d\u7136\u5e73\u65f6\u8bdd\u4e0d\u591a\uff0c\u4f46\u662f\u5979\u5728\u8bb2\u89e3\u9879\u76ee\uff0c\u5c55\u793a\u9879\u76ee\u7684\u65f6\u5019\u4e00\u70b9\u4e0d\u5185\u5411\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48Carolyn\u53ef\u4ee5\u5728\u5404\u7c7b\u7684\u6bd4\u8d5b\u4e2d\u72ec\u663e\u51fa\u6765\u3002\u968f\u7740\u6211\u4eec\u5e26\u7684\u5973\u751f\u8d8a\u6765\u8d8a\u591a\uff0cCarolyn\u5728\u7ade\u4e89\u7684\u65f6\u5019\u5df2\u7ecf\u4e0d\u518d\u9700\u8981\u6253\u5973\u751f\u724c\u3002\u4f5c\u4e3a\u8001\u5e08\u6211\u5f88\u671f\u5f85\u770b\u5230Carolyn\u5728\u521d\u4e2d\u4e4b\u540e\u7684\u53d1\u5c55\u548c\u6210\u7ee9\uff0c\u53ef\u4ee5\u60f3\u8c61\u5230\u4f1a\u6bd4\u54e5\u54e5\u66f4\u51fa\u8272\uff01;-)",
                "instructor": "Dr. Sun",
                "ProjectLink": "",
                "ProjectTitle": "Attendance App using Facial Recognition ",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Carolyn",
        "mark": "Orchard Hill",
        "since": "2017年9月",
        "level": 4,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp600', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll53PZWZBoR-dy6giziHkDL1Y",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui005Dev": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "There is no doubt that Dev is the best student I have seen here in Irvine in the past year. Dev is sharp, smart and has very solid programming foundation. To be honest, I always feel a little bit pressure when Dev is present in the class, because he definitely needs something more challenging to fulfill his expectation. Dev is in a situation where he can independently learn and do a lot of things. What I expect Dev to grow and develop are two perspectives: 1) Dev should focus on a more professional and practical project, and complete the project with higher bars and requirements; 2) Dev can start looking into algorithms and information competitions. I had a brief chat with Dev's dad at the end of last day, and we can start planning Dev's next steps accordingly. Once again, I am so glad to have Dev in our class, and he is also such a respectful kid that really distinguishes himself from his peers. ",
                "instructor": "Dr. Sun",
                "ProjectLink": "",
                "ProjectTitle": "Machine Learning in Health Care",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Dev",
        "mark": "One top",
        "since": "2019年3月",
        "level": 4,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571',
            'cs500'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510', 'cp500'
        ],
        "notifications": [
            {
                "openId": "o7Rll5zCyJ2-btWADQgkj6MWjvZM",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui006Daniel": {
        "course": [
            {
                "CourseName": "Roblox RED",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "Daniel was a pleasure to teach. He was always first to answer questions related to the logic behind our code, specifically when working with the random generation of math questions. He took on a lead role in designing the website and took it upon himself to find images and fonts that he felt appropriate for the site. Overall, Daniel was very hard working and put in more hours than most students would normally put in on a project of this magnitude.",
                "instructor": "Mr. Matt Haase",
                "ProjectLink": "https://www.roblox.com/games/3177146740/Red-Math-Learning-Final-Day",
                "ProjectTitle": "RED Math Learning ",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Daniel",
        "mark": "RED",
        "since": "2017年10月",
        "level": 2,
        "coursesTodo": [
            'cs230'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "o7Rll58qGpbZ5D8hrkYtfy9uZR8Y",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui007Raymond": {
        "course": [
            {
                "CourseName": "Roblox RED",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "Raymond took on a role as more of a lead designer. His ideas and thoughts on the layout, flow, and creative aspect of the game drove the other students during the lessons. He took time to assist with coding and focused on creating a product that was not only useful for learning, but also fun and engaging for any user. Raymond was a pleasure to teach and completed his assignments as instructed to ensure there were no hold-ups when designing later aspects of the project.",
                "instructor": "Mr. Matt Haase",
                "ProjectLink": "https://www.roblox.com/games/3177146740/Red-Math-Learning-Final-Day",
                "ProjectTitle": "RED Math Learning",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Raymond",
        "mark": "RED",
        "since": "2019年3月",
        "level": 2,
        "coursesTodo": [
            'cs230'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll54LtloJFG48kXEtXqS_HmUI",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "o7Rll5-dP8yDIi-IVktTaNscEuQU",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui008Eric": {
        "course": [
            {
                "CourseName": "Roblox RED",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "Eric was a fantastic learner. He worked individually with me at times to make sure he could understand the code. He took it upon himself to ensure that the project was clean and organized and not only that the game worked currently, but that the game could be easily updated whenever needed. Eric has a bright mind for coding and a gift for organization and keeping projects structured, a very rare trait in students.",
                "instructor": "Mr. Matt Haase",
                "ProjectLink": "https://www.roblox.com/games/3177146740/Red-Math-Learning-Final-Day",
                "ProjectTitle": "RED Math Learning",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Eric",
        "mark": "RED",
        "since": "2019年3月",
        "level": 2,
        "coursesTodo": [
            'cs230'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll56UMmpAW-QWThH4Z7UxSceY",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui009Eric": {
        "course": [
            {
                "CourseName": "Unity3D I",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "Eric created a wonderful racing game. He implemented other racers to compete against using AI opponents. His AI racers followed a complex course. He designed a great racing track. For the last lessons he showed real interest in designing a game for VR. During those classes he was focused on the topic and motivated to see his game on a VR headset.",
                "instructor": "Mr Jonathan Sahagun",
                "ProjectLink": "https://www.sharemyworks.com/projects/5cd0d8bbf7e0e600158a3a7b",
                "ProjectTitle": "AI Racer",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Eric",
        "mark": "Qidi",
        "since": "2019年1月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll59HA5GyKisc9xZ_iLEb2XxU",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui010Peter": {
        "course": [
            {
                "CourseName": "Unity3D I",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "Peter is a quick learner and is friendly everyone in class. In the class there is another student how speaks primarily Chinese, Peter was kind enough to help translate between us. He also worked help other students with their projects sharing his knowledge. During the class, he showed a willingness to learn and an eagerness participate in the lectures.",
                "instructor": "Mr Jonathan Sahagun",
                "ProjectLink": "https://www.sharemyworks.com/projects/5cd0d2b3f7e0e600158a3a61",
                "ProjectTitle": "Obstacle Course Cars",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Peter",
        "mark": "Peter Zhengzhou",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs470',
            'cs490',
            'cs571',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll561tvaY3MhOFUlTANupnz70",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui011Frank": {
        "course": [
            {
                "CourseName": "Unity3D I",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "Frank is a very energetic student who definitely loves games. He has a knack for creativity and enjoyed designing many different unique ideas for the car game. This made him a fun student to teach, as I was constantly learning along with him, and helping him make his fun ideas come to life through code. He is helpful towards other students and liked exploring different capabilities through Unity.",
                "instructor": "Ms. Michaela Gonzales",
                "ProjectLink": "https://www.sharemyworks.com/projects/5cd0d662f7e0e600158a3a69",
                "ProjectTitle": "Car Collection Game",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Frank",
        "mark": "Peter Zhengzhou",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs470',
            'cs490',
            'cs310',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll5wgHjkB4A2LKrv_qY31NF1Q",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui012Daniel": {
        "course": [
            {
                "CourseName": "Unity3D I",
                "CourseTime": "Monday 5:00-6:30pm",
                "feedback": "Daniel is a bright student with respectful manners. He is respectful and quiet, but also not afraid to ask questions and push his learning capabilities. He had a very smart car racing game that he helped code the logic himself. He displayed patience when designing his intricate racing car map. He is a quick learner and has a knack for coding.",
                "instructor": "Ms. Michaela Gonzales",
                "ProjectLink": "https://www.sharemyworks.com/projects/5cd0d576f7e0e600158a3a63",
                "ProjectTitle": "\"A Different Racing Game.\"",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Daniel Lu",
        "mark": "Ol student",
        "since": "2017年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs470',
            'cs490',
            'cs571',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll56_OpUDfo4m6jLLgeLwVF7E",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui013Jacob": {
        "course": [
            {
                "CourseName": "Scratch",
                "CourseTime": "Monday 3:20pm - 4:50pm",
                "feedback": "Jacob is a very intelligent student, and as shown in his project, he does very well when it comes to improving and implementing his work. He's very creative and that shows through his work and how he adds fun things to his game to make it more challenging or more enjoyable for the players. He is also a very talented coder, with a natural taking for how to use the blocks in Scratch and how to implement and troubleshoot things. He's someone who talks very often with the other students, and is very outgoing. He does get distracted from time to time, but when he's focused, he does his work very well.",
                "instructor": "Ms. Gayatri Subramaniam",
                "ProjectLink": "https://scratch.mit.edu/projects/291210834/",
                "ProjectTitle": "*not modified:*Day 7 Examples (for class)",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jacob",
        "mark": "Orchard Hills",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs230'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll54pJrJpkw2wYHnA6DD2WdGI",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui014Johnny": {
        "course": [
            {
                "CourseName": "Scratch",
                "CourseTime": "Monday 3:20pm - 4:50pm",
                "feedback": "Johnny was an absolute pleasure to have in class. He was always very attentive and was very mature, which was helpful to me and to the rest of his classmates. He was a role-model, and I really appreciated how respectful he was to me and to his fellow classmates. He is a very talented student, and his ideas and games were all very advanced in thought, and I loved the effort he put in them. He worked well with others, and took input in a very positive way. He is a quick learner, and he really knows how to make his games better and what steps to take to improve his work.",
                "instructor": "Ms. Gayatri Subramaniam",
                "ProjectLink": "https://scratch.mit.edu/projects/291218207/",
                "ProjectTitle": "ZOMBIE OBBY",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Johnny Tao",
        "mark": "Tao Ge",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs230'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui015Oscar": {
        "course": [
            {
                "CourseName": "Scratch",
                "CourseTime": "Monday 3:20pm - 4:50pm",
                "feedback": "Oscar was a delight to have in class. It took him a little longer to grasp new things, but once he understood them, he was really able to create quality work his own and his game turned out to be very interesting. Without little to no guidance, he was also able to make a very good animation, which was really well-done. He's really talented and bright, and there's no question that he was really able to hold his own and make games and animations that were funny and well-developed. He worked exceptionally well with others, and was definitely a very happy and bright person, which made class more fun.",
                "instructor": "Ms. Gayatri Subramaniam",
                "ProjectLink": "https://scratch.mit.edu/projects/291210891/",
                "ProjectTitle": "Zombie Apocalypse",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Oscar",
        "mark": "Orchard Hills",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs230'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "o7Rll5wMI44DT2oxzTLD9mI72tFY",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "o7Rll50P8fDjA5ywXC4EBfkesct0",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui016Heaven": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://makecode.com/_XDCTYFhokgj5  /  Video Link: https://www.youtube.com/watch?v=ogwcW4zUarU",
                "ProjectTitle": "Monster Arena",
                "feedback": "Heaven is passionate about Minecraft and he brings a ton of motivation and creativity to the table. He is one of the more talkative students in the class and he was able to answer a lot of the harder questions during the lessons. When presented with a difficult problem, he can approach it methodically and eventually come up with a well-thought out solution which is uncommon among the students in his age group. He was a pleasure to have in the classroom and I will miss having him as a student.",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Heaven",
        "mark": "Orchard Hills",
        "since": "2018年1月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs200',
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui017Andrew": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://makecode.com/_5LyY3gETedg0 / Video: https://www.youtube.com/watch?v=Ime2ir-7rWM",
                "ProjectTitle": "TNT Nuggets",
                "feedback": "Andrew always brings a ton of energy and excitement into the classroom and he was a true pleasure to have in the classroom. Although he can get distracted sometimes when there is not enough chanllenge, when he is focused, he is very smart and he is able to pick up coding concepts with ease. He has a ton of creativity and great ideas and that is shown especially through his project. He is always interacting with the other students and he is well-liked by those around him. I will miss having Andrew in the classroom!",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Andrew",
        "mark": "Orchard Hills",
        "since": "2018年9月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs200',
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui018Emma": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://makecode.com/_hL37Cv64be5x / Video: https://www.youtube.com/watch?v=M2v_l3LYK2U",
                "ProjectTitle": "Enderman Challenge",
                "feedback": "Emma is probably the most focused student in the classroom. Whenever a new concept is introduced, she is almost always the first one to understand it and complete the in-class exercises. She extremely polite and considerate towards the teachers and the students and she is personally one of my favorite students to have in the classroom. She puts out amazing work through her assignments and her project and she is able to ask insightful questions during the lessons. Her project was pretty creative and I like that she made it about something that she was passionate about (which are Endermen!).",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Emma",
        "mark": "Stonegate",
        "since": "2018年9月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs230',
            'cs300',
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui019Derek": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://makecode.com/_LhC8co6UJ7qs\nWorld Save: https://drive.google.com/open?id=1o03iBM-nMfInwaAiU1VHjtpuCGw7KBXC: \n\n",
                "ProjectTitle": "Minecraft Maze",
                "feedback": "Derek is usually very focused when told to do work. In the beginning we gave out candies for incentive , but even if there was no candies he would be willing to do work if told to. He would also help other kids figure out issues with their projects or game if he was done early with his work . He was always eager to answer questions during in class activities and often invited teachers to test out his project and games. Overall, Derek improved a lot during the course and towards the end even did his maze project by himself. He also would want to make his projects always better and would ask for extra time to perfect his work, which is very refreshing to see.",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Derek",
        "mark": "Brothers Cypress",
        "since": "2019年1月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs200',
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui020Ellison": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://makecode.com/_hzD6qi9w6Csc\nWorld Save: https://drive.google.com/open?id=1Hz67cpDPnw-GAiewtA-i3sXIEOMoezxu\n",
                "ProjectTitle": "Minecraft Maze",
                "feedback": "Ellison was always a pleasure to have! She would be quite throughout the lesson, but interactive when need to be such as when answering in class question. She was always focused on completing her work and I rarely needed to ask her to follow the instructions. Even when going over lectures in class she would usually listen and grasp the concepts really well. She also completed her homework and remembered to bring worksheets to class. She is also very collaborative and would often work with other students in class to make new games and projects. ",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Ellison",
        "mark": "Stonegate",
        "since": "2018年9月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs220',
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui021Miyu": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://makecode.com/_ggYLzH9Fr2Cf (world save not necessary)\n\n",
                "ProjectTitle": "Slime Arena",
                "feedback": "Miyu progressed a lot over the span of this class. She became really focused and work oriented as time went by. She would also do her homework and bring it to class to go over it. She would also often ask questions when a topic was unclear, which is a really good trait to have and helped her absorb the material thoroughly. Miyu is also very creative and often had very creative ideas when it came to making her projects. She was also interactive with other students and performed well in teams. ",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Miyo",
        "mark": "Heaven sisiter",
        "since": "2019年3月",
        "level": 1,
        "coursesTodo": [
            'cs160'
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui022Jonathan": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://makecode.com/_AciYjz5o7Lbw\nWorld Save: https://drive.google.com/open?id=15sj_YA4f1zqvKp_chK9GoChI9fKLbx5A\n\n\n",
                "ProjectTitle": "Minecraft Maze",
                "feedback": "Johnathan was really active and always quick with everything. He would often grasp the concepts well and finish his work quickly. He also did his homework and brought it to class to get it checked. He was always eager to show his peers his project and often included them by making them test out his work. He was also creative and always wanted to add extra features and make his project perfect!",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jonathan",
        "mark": "Jason Michael Brother",
        "since": "2019年1月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui023Eric": {
        "course": [
            {
                "CourseName": "Minecraft Makecode",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://www.youtube.com/watch?v=LzEi2yuf27Y",
                "ProjectTitle": "Zombie Survival",
                "feedback": "Eric keeps surprising me as he grows from a shy, quiet boy to becoming the best student in the class. He doesn't have any advantages comparing to others when he first comes to the class. He is the youngest and is not very fluent or confident in his English. However, his curiosity and passion for the course drives him to explore as much knowledge as he can.  He puts in unparalleled amount of efforts and thoughts into his project, earning him an award at the CS Ignite Expo at the end. However, what pleases me the most is that Eric has more confidence in himself than ever when he speaks. I feel he might just learn one of the most valuable things in life.",
                "instructor": "Ms. Ariel Jiang",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Eric",
        "mark": "Wed Dylan Friend",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui024Dylan": {
        "course": [
            {
                "CourseName": "Minecraft Makecode",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "https://www.youtube.com/watch?v=LzEi2yuf27Y",
                "ProjectTitle": "Zombie Survival",
                "feedback": "Dylan is a very pleasant student to teach. He always looks at the bright side of things and always tries his best to learn new concepts even when they are difficult. He contributes a great part to the project he makes with Eric by building structures that require complex calculations and a good understanding of coordinates. He is also very popular among his classmates and never says no to anyone that needs his help. Him and Eric makes a great team together. I'm not surprise to see them winning an award at the end. I think they truly deserve what they earn as they both dramatically improve their skill sets in programming in these 16 weeks of studying.",
                "instructor": "Ms. Ariel Jiang",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Dylan",
        "mark": "Wed Eric Friend",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui025David": {
        "course": [
            {
                "CourseName": "Minecraft Makecode",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "",
                "ProjectTitle": "Arena",
                "feedback": "David is a very prideful person and thinks the utmost importance of his work. He takes his assignments we have been giving him very seriously. No matter how difficult or simple the task, David will always treat his work with respect. I admire this quality in him. David is a student I would really much enjoy to have in one of my classes again. I am pretty confident that David is going to do very well in every subject in his study.",
                "instructor": "Mr. Andrew Chen",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "David",
        "mark": "Derek Brother",
        "since": "2019年1月",
        "level": 1,
        "coursesTodo": [
            'cs200',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui026Alexander": {
        "course": [
            {
                "CourseName": "Minecraft Makecode",
                "CourseTime": "Wed 2:00-3:30pm",
                "ProjectLink": "",
                "ProjectTitle": "Water Slide",
                "feedback": "Alexander is a quick learner. He picked up the program fast enough that he was transferred from Makecode I to Makecode II half way through the session. I think Alex is very intelligent and always be well motivated. He always has ideas and this semester we start to see that he can start helping other students in the classroom, even for the ones who are older than him. In any case, Alex seems like he has the tools to learn anything he puts his mind to and he can always deliver it.",
                "instructor": "Mr. Andrew Chen",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Alexander",
        "mark": "Allena brother",
        "since": "2018年1月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui027Demi": {
        "course": [
            {
                "CourseName": "Python I: Introduction with Minecraft",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "",
                "ProjectTitle": "Music Generator",
                "feedback": "Demi is a very enthusiastic student. She was genuinely interested in all of the topics and ideas in this course. Even during the project phase when I introduced her to outside resources, she picked them up like everything else. The work she did for her music app is work I would not have expected from a high school student. I introduced many new and difficult topics to her in a very short amount of time and she managed to learn them all up to a working capacity right away. This is very impressive for a high school student. She has a promising future in computer science and I encourage her to explore more in this field.",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Demi",
        "mark": "Portorla HS",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs571',
            'cs470'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp600', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui028Gary": {
        "course": [
            {
                "CourseName": "Python I: Introduction with Minecraft",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "",
                "ProjectTitle": "Note Printer",
                "feedback": "Gary was a very willing learner. He soaked up everything we were saying like a sponge. This was very apparent when he was working on his project. He had asked about ways to have Minecraft play music and we helped him find ways to do it. Gary went above and beyond by creating his own sound sample to have the program play. I personally think that this shows his ability to use technology to its full potential. He understand the idea that if the tools do not exist, you can go make them. I would enjoy having Gary in any future classes of mine.",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Gary",
        "mark": "Portorla HS",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs310',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui029Sean": {
        "course": [
            {
                "CourseName": "Python I: Introduction with Minecraft",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.sharemyworks.com/projects/5cd360b96ee2680015da8a87",
                "ProjectTitle": "Fighting Parour",
                "feedback": "Sean\u4f5c\u4e3a\u73ed\u4e0a\u6700\u5c0f\u7684\u540c\u5b66\uff0c\u8868\u73b0\u7684\u6700\u4e3a\u62a2\u773c\u3002\u4ed6\u4e0d\u4f46\u4e0a\u8bfe\u79ef\u6781\u5730\u56de\u7b54\u95ee\u9898\uff0c\u6bcf\u6b21\u7684\u4f5c\u4e1a\u4ed6\u662f\u552f\u4e00\u4e00\u4e2a\u575a\u6301\u8ba4\u771f\u5b8c\u6210\u7684\u540c\u5b66\u3002\u5f00\u59cb\u505a\u9879\u76ee\u9636\u6bb5\uff0c\u6211\u4eec\u9f13\u52b1\u5927\u5bb6\u591a\u5728\u4e0b\u9762\u505a\u4e00\u4e9b\u5185\u5bb9\uff0cSean\u6bcf\u6b21\u6765\u4e0a\u8bfe\u90fd\u4f1a\u7ed9\u6211\u770b\u4e00\u4e9b\u4ed6\u81ea\u5df1\u5b8c\u6210\u7684\u65b0\u7684\u529f\u80fd\u3002Sean\u5bf9\u81ea\u5df1\u7684\u8981\u6c42\u5f88\u9ad8\uff0c\u4e00\u76f4\u60f3\u518d\u52a0\u4e00\u4e9b\u65b0\u7684\u60f3\u6cd5\u3002\u6211\u5f88\u9ad8\u5174\u770b\u5230Sean\u5bf9\u7f16\u7a0b\u7684\u70ed\u60c5\u548c\u5929\u8d4b\uff0c\u4e0b\u9762\u6211\u4eec\u8981\u5bf9Sean\u6709\u66f4\u9ad8\u7684\u8981\u6c42\uff0c\u6211\u8ba4\u4e3aSean\u662f\u4e00\u5b9a\u53ef\u4ee5\u5728\u5f88\u5c0f\u7684\u65f6\u5019\u5c31\u80fd\u505a\u51fa\u4e00\u4e9b\u5927\u9879\u76ee\u51fa\u6765\uff01",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Sean",
        "mark": "Jenny's Friends",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs310',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui030Jason": {
        "course": [
            {
                "CourseName": "Python I: Introduction with Minecraft",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.sharemyworks.com/projects/5b36af0647821000144d5eb8",
                "ProjectTitle": "Multi-Level Parkour",
                "feedback": "Jason\u867d\u7136\u4e0a\u8bfe\u4e00\u76f4\u504f\u4e8e\u5185\u5411\uff0c\u4f46\u662f\u8fd9\u4e1d\u6beb\u4e0d\u5f71\u54cd\u4ed6\u5bf9\u7f16\u7a0b\u5b66\u4e60\u7684\u5174\u8da3\u548c\u70ed\u60c5\u3002Jason\u5bf9\u81ea\u5df1\u8981\u5b66\u7684\u4e1c\u897f\u5f88\u8ba4\u771f\uff0c\u4e5f\u5f88\u7528\u5fc3\u3002\u4e0a\u8bfe\u7684\u7ec3\u4e60\uff0c\u4ed6\u5e38\u5e38\u662f\u7b2c\u4e00\u4e2a\u5b8c\u6210\uff0c\u7136\u540e\u5f00\u59cb\u81ea\u5df1\u9ed8\u9ed8\u7684\u5c1d\u8bd5\u4e00\u4e9b\u65b0\u7684\u4e1c\u897f\u3002\u505a\u9879\u76ee\u7684\u9636\u6bb5\uff0cJason\u5f00\u59cb\u4e0d\u662f\u7279\u522b\u6709\u601d\u8def\uff0c\u5f53\u7ed9\u4ed6\u8bb2\u8fc7\u4e00\u4e2a\u590d\u6742\u7684\u7b97\u6cd5\u540e\uff0cJason\u7acb\u523b\u6709\u4e86\u611f\u89c9\uff0c\u5b8c\u6210\u4e86\u521d\u671f\u8bbe\u8ba1\u7684\u9879\u76ee\u5185\u5bb9\u540e\u53c8\u81ea\u5df1\u52a0\u4e86\u65b0\u7684\u4e00\u4e2a\u90e8\u5206\uff0c\u8ba9\u6211\u5370\u8c61\u5f88\u6df1\u523b\u3002\u540e\u6765\u548cJason\u7684\u804a\u5929\u53d1\u73b0Jason\u6bd4\u8f83\u559c\u6b22\u4e13\u4e1a\u4ee3\u7801\u3001\u590d\u6742\u4e00\u4e9b\u7684\u7f16\u7a0b\u5185\u5bb9\uff0c\u6240\u4ee5\u4e0b\u9762\u6211\u9700\u8981\u5bf9Jason\u7684\u8981\u6c42\u518d\u9ad8\u4e00\u4e9b\uff0c\u76f8\u4fe1\u4ed6\u8fd8\u662f\u4f1a\u505a\u7684\u5f88\u597d\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jason",
        "mark": "Michael Jonathan Brother",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs310',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui031Hans": {
        "course": [
            {
                "CourseName": "Python Programming in Minecraft",
                "CourseTime": "Wed 3:30-5:00pm",
                "ProjectLink": "",
                "ProjectTitle": "Plinko",
                "feedback": "Hans always follows along in class and is usually one of the best behaved. Not only does he always try to solve in class problem, but he also grasps the concepts really well and is able to apply it on his projects. His focus on the ongoing topics really stand out and he seems to be enjoying working with Minecraft. He also helps bring the class to focus by not playing along with his classmates.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Hans Zhang",
        "mark": "Cecilia Brother",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs310',
            'cs425',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui032Kanon": {
        "course": [
            {
                "CourseName": "Python Programming in Minecraft",
                "CourseTime": "Wed 3:30-5:00pm",
                "ProjectLink": "",
                "ProjectTitle": "Missile Wars",
                "feedback": "Kanon is usually very active and creative in class. He grasps the concepts quickly and often applies them regularly, such as how to hack the servers. He is also quick to focus and pay attention to the in-class activities and goes above and beyond the requirement. He is always eager to learn and will work for quite a while to make sure he understands and comprehends the topic. He also spent extra time on his projects adding new features that allowed his project to be unique and well thought out.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Kanon Dou",
        "mark": "Dad Amanda Friend",
        "since": "2019年1月",
        "level": 3,
        "coursesTodo": [
            'cs310',
            'cs425',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui033Evan": {
        "course": [
            {
                "CourseName": "Python Programming in Minecraft",
                "CourseTime": "Wed 3:30 - 5:00PM",
                "ProjectLink": "",
                "ProjectTitle": "Connect 4 or Battleship",
                "feedback": "Evan would always try his best to understand the concepts going on in class by engaging with the teachers and asking questions. He was also patient and tried to solve practice questions when given during in class activities. Also doesn't skip over concepts he is confused about, but instead will go through each line of code and understand the logic behind the program. He would also help teachers by discouraging his peers disruptive behavior. ",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Evan Zhu",
        "mark": "Daniel Friend",
        "since": "2019年1月",
        "level": 3,
        "coursesTodo": [
            'cs310',
            'cs410',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui034Sam": {
        "course": [
            {
                "CourseName": "Python Programming in Minecraft",
                "CourseTime": "Wed 3:30 - 5:00PM",
                "ProjectLink": "",
                "ProjectTitle": "Maze",
                "feedback": "Sam is really energetic and often very active throughout the class. Over the period of him taking the class, he has improved a lot on focusing and paying attention through out the lecture. He also grasps concepts and answers easily when asked a question about the topic. Sam also tries his best to follow along by participating and asking the teachers if confused on a concept. He also had very creative ideas for the final project and was excited to implement it.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Sam Guo",
        "mark": "Daisy Brother",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs310',
            'cs410',
            'cs470',
            'cs490'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui035Daniel": {
        "course": [
            {
                "CourseName": "Python Programming in Minecraft",
                "CourseTime": "Wed 3:30-5:00pm",
                "ProjectLink": "",
                "ProjectTitle": "Zombie Game",
                "feedback": "Daniel isn\u2019t afraid to ask questions, puts a lot of effort into in-class exercises. He participates and interacts with students when needed and appropriate. He is also one of the students who almost gets all the answers right and fully understands the logic behind each problem. Instead of copying code and just calling it done, he actually tries to come up with his own way of solving problems first and then checks to make sure his logic's credibility. He is also one of the best behaved in the class and is quick to follow teacher's instruction. He willingly does his work and we do not have to force him to complete any assignments.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Daniel Zhang",
        "mark": "Daniel Friend",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs310',
            'cs410',
            'cs430',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui036Vicky": {
        "course": [
            {
                "CourseName": "Roblox I",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.youtube.com/watch?v=iPKI7Txl0i0&t=415s",
                "ProjectTitle": "Hamster Village",
                "feedback": "Vicky is a pleasant presence in the classroom. Throughout the semester, you can tell she improves her game building skill and starts to get comfortable with programming in Roblox. It's very rare to see a student pay much attention to the artistic aspects of game making, and she is the very first one in the class to do so. Vicky's creative and artistic nature make her project stands out from the rest. I'm looking forward to see more of her creative ideas in the future.",
                "instructor": "Ms. Ariel Jiang",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Vicky",
        "mark": "Neibor",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs230',
        ],
        "compTodo" : [
            'cp100', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui037Grace": {
        "course": [
            {
                "CourseName": "Roblox I",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.youtube.com/watch?v=iPKI7Txl0i0&t=415s",
                "ProjectTitle": "Hamster Village",
                "feedback": "Grace is funny, clever, and always makes herself the center of the classroom. She has a lot of her own ideas and thoughts. Her previous project \"Escape Dunkin' Donuts\" is one of the most creative, interesting game idea I've ever encountered. Later on, as she works with Vicky, Grace develops a great set of cooperation skills. Vicky and she were able to use each other's strength, as Vicky taking care of the aesthetics of the game while Grace working on the overall layout. It was not a surprise to see them winning the 3rd place at the CS Ignite Expo given that Grace's project idea is so refreshing and unique from the rest.",
                "instructor": "Ms. Ariel Jiang",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Grace",
        "mark": "Neibor",
        "since": "2018年6月",
        "level": 2,
        "coursesTodo": [
            'cs230',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui038Angel": {
        "course": [
            {
                "CourseName": "Roblox I",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.youtube.com/watch?v=QMaZn86ITpU&t=355s",
                "ProjectTitle": "Legend",
                "feedback": "Angel is a very independent girl who always stays on track and follows teacher's instructions. During the whole time she makes her project, she rarely asks for help from any of the instructors. She is the most efficient and the most focused student in her class, therefore her project is rich in content and appears to be the most playable out of all of them. This semester she truly surprises me as she won the 2nd place at the CS Ignite Expo. I think she deserves the award more than anymore else with all the hours and efforts she put into her project.",
                "instructor": "Ms. Ariel Jiang",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Angel",
        "mark": "Neibor",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs230',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui039Lucas": {
        "course": [
            {
                "CourseName": "Roblox l",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.roblox.com/games/2956999908/Lucass-Coding-Minds-Project",
                "ProjectTitle": "Skateboard Obby",
                "feedback": "Lucas is one of my best students in all my classes. He joined the class after most of the students were already familiar with the tools of ROBLOX Studio. At first, he wasn\u2019t very familiar with coding, but he picked up the coding concepts relatively easily and caught up completely. The way he approaches problems are well-thought out and methodical. My favorite thing about Lucas is that he asks very good and insightful questions during class and that reflected well into the project that he created.",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Lucas",
        "mark": "Neibor",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs230',
        ],
        "compTodo" : [
            'cp100', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui040Michael": {
        "course": [
            {
                "CourseName": "Roblox l",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.roblox.com/games/2957043766/Michaels-Coding-Minds-Project",
                "ProjectTitle": "Car Racing",
                "feedback": "Michael is one of the more independent students in the classroom and although he doesn\u2019t ask many questions, he is constantly producing good results which are shown especially in his in-class exercises and in his car racing project. He picks up new concepts relatively quickly compared to the other students and he is usually the first one to finish assignments during class.",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Michael",
        "mark": "Jason Jonathan",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs230',
        ],
        "compTodo" : [
            'cp100', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui041Alex": {
        "course": [
            {
                "CourseName": "Roblox l",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.roblox.com/games/2858624179/Obby",
                "ProjectTitle": "The Impossible Obby",
                "feedback": "Alex is a pleasure to have in the classroom. He is always smiling and cracking jokes and he is quite popular and talkative among the other students. He brings a lot of fun and joy into the classroom and personally, he is a student I look forward to teaching every week. He is one of the more participative students in the classroom and he is often answering questions or asking insightful questions of his own. His project was impressive with Leo and he contributed a ton of great ideas.",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Alex",
        "mark": "Hus",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs230',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui042Leo": {
        "course": [
            {
                "CourseName": "Roblox l",
                "CourseTime": "Wed 3:40-5:10pm",
                "ProjectLink": "https://www.roblox.com/games/2858624179/Obby",
                "ProjectTitle": "The Impossible Obby",
                "feedback": "Leo was one of the students who already knew a little bit how to use ROBLOX Studios and has more programming background than the other students. Thus, instead of just finishing his own work, he was able to very often help the other students in answering the difficult questions and he was able to make an impressive obstacle course in ROBLOX as his project. He was able to implement harder coding concepts into his game with little help and I am very proud of the work that he has put in the class.",
                "instructor": "Mr. Ethan Liao",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Leo",
        "mark": "Hus",
        "since": "2017年10月",
        "level": 2,
        "coursesTodo": [
            'cs230'
        ],
        "compTodo" : [
            'cp100', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui043Kevin": {
        "course": [
            {
                "CourseName": "iPhone and Raspberry PI",
                "CourseTime": "Wed 5:20-6:50pm",
                "ProjectLink": "",
                "ProjectTitle": "Sensor-based IoT Game",
                "feedback": "\u5e26\u4e86Kevin\u5feb\u4e24\u5e74\u7684\u65f6\u95f4\uff0c\u5bf9Kevin\u7684\u4e86\u89e3\u4e5f\u8d8a\u6765\u8d8a\u6df1\u5165\u3002Kevin\u5bf9\u7f16\u7a0b\u7684\u5174\u8da3\u548c\u5929\u8d4b\u6beb\u65e0\u7591\u95ee\u5f88\u7a81\u51fa\uff0c\u800c\u4e14\u6700\u8fd1\u7684\u4e00\u5e74\u76f8\u5bf9\u4e0e\u7b2c\u4e00\u5e74\u6709\u5f88\u591a\u4e0d\u4e00\u6837\u7684\u53d8\u5316\uff1a1\uff09Kevin\u5bf9\u505a\u9879\u76ee\u66f4\u52a0\u6709\u4fe1\u5fc3\uff0c\u4ed6\u505a\u4e1c\u897f\u7684\u65f6\u5019\u4e3b\u52a8\u6027\u66f4\u5f3a\uff0c\u800c\u4e14\u4f1a\u5e38\u5e38\u4e3b\u52a8\u5e2e\u52a9\u5176\u4ed6\u7684\u540c\u5b66\uff1b2\uff09Kevin\u5bf9\u4e0e\u6280\u672f\u7684\u5185\u5bb9\u5f88\u6709\u81ea\u5df1\u7684\u89c1\u89e3\u548c\u60f3\u6cd5\uff0c\u4ed6\u4e5f\u4f1a\u6709\u81ea\u5df1\u7684idea\uff0c\u81ea\u5df1\u6e05\u695a\u60f3\u505a\u4ec0\u4e48\uff0c\u505a\u5230\u4ec0\u4e48\u6837\u7684\u4e00\u4e2a\u7a0b\u5ea6\u3002\u8fd9\u4e24\u70b9\u5728Irvine\u548cArcadia\u5927\u90e8\u5206\u7684\u540c\u5b66\u4e2d\u8fd8\u5f88\u96be\u770b\u5230\u3002\u4e0b\u9762\u8fdb\u5165\u9ad8\u5e74\u7ea7\u7684\u9636\u6bb5\u540e\uff0c\u6211\u4eec\u4f1a\u5bf9Kevin\u7684\u8981\u6c42\u518d\u63d0\u9ad8\u4e00\u4e9b\uff0c\u5bf9\u4ed6\u7684\u9879\u76ee\u4e5f\u518d\u591a\u4e00\u4e9b\u6df1\u5165\uff0c\u671f\u5f85\u770b\u5230\u4ed6\u7684\u66f4\u5927\u7684\u6210\u7ee9\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Kevin Ying",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui044Andy": {
        "course": [
            {
                "CourseName": "iPhone and Raspberry PI",
                "CourseTime": "Wed 5:20-6:50pm",
                "ProjectLink": "",
                "ProjectTitle": "Sensor-based IoT Game",
                "feedback": "\u5e26\u4e86Andy\u4e00\u5e74\u7684\u65f6\u95f4\uff0c\u80fd\u5f88\u6e05\u695a\u5730\u611f\u89c9\u5230Andy\u662f\u8fd9\u8fb9\u540c\u5b66\u91cc\u9762\u957f\u8fdb\u6700\u5feb\u7684\u3002\u4ece\u6700\u521d\u4e0d\u613f\u610f\u8bb2\u82f1\u6587\u548c\u542c\u4e0d\u592a\u61c2\u8001\u5e08\u7684\u5185\u5bb9\uff0c\u5230\u73b0\u5728\u4e3b\u52a8\u7684\u56de\u7b54\u8001\u5e08\u7684\u95ee\u9898\uff0c\u5e76\u4e14\u5e38\u5e38\u5f88\u6709\u81ea\u4fe1\u7684\u5e2e\u52a9\u5176\u4ed6\u4eba\u89e3\u51b3\u6280\u672f\u95ee\u9898\uff0c\u80fd\u770b\u5230Andy\u5728\u7f16\u7a0b\u65b9\u9762\u4e0d\u65ad\u7684\u8fdb\u6b65\u548c\u8d85\u8d8a\u3002\u8fd9\u5b66\u671f\u5728\u505a\u9879\u76ee\u65b9\u9762\uff0c\u5f88\u663e\u7136Andy\u5bf9\u6574\u4e2a\u7684\u60f3\u6cd5\u548c\u6d41\u7a0b\u66f4\u6709\u4fe1\u5fc3\u548c\u52a8\u529b\uff0c\u6700\u540e\u7684\u9879\u76ee\u4e0d\u8bba\u4ece\u521b\u610f\u8fd8\u662f\u590d\u6742\u5ea6\u90fd\u975e\u5e38\u7a81\u51fa\u3002\u53e6\u5916\uff0cAndy\u548c\u5176\u4ed6\u540c\u5b66\uff0c\u4ee5\u53ca\u540c\u5b66\u7684\u5bb6\u957f\u7684\u4ea4\u6d41\u65e2\u6210\u719f\uff0c\u53c8\u6709\u793c\u8c8c\uff0c\u8fd9\u70b9\u5728Irvine\u548cArcadia\u7684\u540c\u5b66\u91cc\u9762\u5f88\u96be\u770b\u5230\uff0c\u76f8\u4fe1Andy\u5c06\u6765\u53ef\u4ee5\u505a\u6210\u5927\u4e8b\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Andy Ma",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs300',
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui045Tingyu": {
        "course": [
            {
                "CourseName": "Roblox II",
                "CourseTime": "Thursday 3:30 - 5:00pm",
                "ProjectLink": "https://www.roblox.com/games/3087682550/Destructionator ",
                "ProjectTitle": "PUBG Roblox Clone",
                "feedback": "Tingyu has been working on 2 separate projects in our classes. His first project, which was individual is a large-scale battle-royale game. He focused intently on duplicating a game he enjoys in his personal time. One major issue with his game was the \"game-loop\" which stuctured how the different rounds of the game would work. I saw him work intently to understand how the loop work and ensure it was possibly to play. His second project, a group project, placed Tingyu in a more assistive role. He scripted some basic functionality for a \"shop\" in the game which used logic to check if players had enough money to purchase items.",
                "instructor": "Mr. Matt Haase",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Tingyu",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs300',
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui046Paris": {
        "course": [
            {
                "CourseName": "Roblox II",
                "CourseTime": "Thursday 3:30 - 5:00pm",
                "ProjectLink": "https://www.roblox.com/games/3061820524/PK-Lounge",
                "ProjectTitle": "Tech Store Adventure",
                "feedback": "Paris is a quick learner with a knack for creativity. She constantly displays the willingness to learn and will work for large periods of the class to make sure she understands a topic. She works with her fellow classmates on a game where she implemented scripts for surface text on objects. There were used for signs in the project. When we discuss topics in class I can tell she is listening and focused.",
                "instructor": "Mr. Matt Haase",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Paris",
        "since": "2018年6月",
        "level": 2,
        "coursesTodo": [
            'cs230',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp150', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui047Kevin": {
        "course": [
            {
                "CourseName": "Roblox II",
                "CourseTime": "Thursday 3:30 - 5:00pm",
                "ProjectLink": "https://www.roblox.com/games/3061820524/PK-Lounge",
                "ProjectTitle": "Tech Store Adventure",
                "feedback": "Kevin has been a huge creative influence for the class. On the first day he had an idea to make a project based around a pre-existing game, but with a twist. He worked diligently with the modeling tools in Roblox to create a hidden layer to what seems like a simple game. Kevin added scripts to coins for ease of collection and coded some of the objects in our world to be clickable for the \"shop\" aspect of our game. He passed his code on to a fellow classmate so that she could use it to make the rest of the shop. A great example of teamwork and reusable code.",
                "instructor": "Mr. Matt Haase",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Kevin",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs230',
            'cs300',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui048Regina": {
        "course": [
            {
                "CourseName": "MakeCode Minecraft & Javascript",
                "CourseTime": "Thursday 5:30pm - 7:00pm",
                "ProjectLink": "https://minecraft.makecode.com/95892-72463-57262-47244",
                "ProjectTitle": "The Blue Earth",
                "feedback": "Regina is always excited to create things within minecraft. She really enjoys creating structures with code, especially with the time when we created a maze. She displays a very good attitude towards learning and gets along with her classmates pretty well. She always listening whenever I lecture and answers the questions accurately. She seems to have a very good memory, so whenever I go over the previous homework or lessons, she always answers the questions correctly. ",
                "instructor": "Mr. Travis Yu",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Regina",
        "since": "2019年1月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs150',
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui049Eric": {
        "course": [
            {
                "CourseName": "MakeCode Minecraft & Javascript",
                "CourseTime": "Thursday 5:30pm - 7:00pm",
                "ProjectLink": "https://minecraft.makecode.com/46237-39086-84709-30869",
                "ProjectTitle": "Treehouse",
                "feedback": "Eric always seems interested in Minecraft MakeCode. He likes to play around with little things in Class. He is always paying attention and does not cause any trouble in the class. He gets along with the other students very well and understands most of the material very well. Eric specifically likes displaying his creativity with structures built using MakeCode Minecraft and is always determined to finish. ",
                "instructor": "Mr. Travis Yu",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Eric",
        "since": "2019年1月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs200',
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui050Jason": {
        "course": [
            {
                "CourseName": "MakeCode Minecraft & Javascript",
                "CourseTime": "Thursday 5:30pm - 7:00pm",
                "ProjectLink": "https://minecraft.makecode.com/04915-21337-23938-37602",
                "ProjectTitle": "Survival Arena",
                "feedback": "Jason is incredibly smart. Whenever he learns something new, he understands it almost immediately. Not only does he have a knack for coding, but he also loves experimenting with code. For example, the Survival Arena project, he immediately thought of building a structure with multiple fill in shape blocks. Jason is also never afraid to ask for help which is fantastic because it really shows that he is interested in the topics. ",
                "instructor": "Mr. Travis Yu",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jason",
        "since": "2019年1月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs200',
        ],
        "compTodo" : [
            'cp100', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui051Edward": {
        "course": [
            {
                "CourseName": "Unreal",
                "CourseTime": "Thursday 5:30pm - 7:00pm",
                "ProjectLink": "",
                "ProjectTitle": "",
                "feedback": "Edward was a fantastic learner. He likes challenges, and he worked hard with me at times to make sure he could understand the code. He took it upon himself to ensure that the project was clean and organized and not only that the game worked currently, but that the game could be easily updated whenever needed. Edward has a bright mind for coding and a gift for organization and keeping projects structured, a very rare trait in students. In addition, Edward is a very respectful student, and I really enjoy teaching him, and I am looking forward to seeing more accomplishments from Edward in the coming years.",
                "instructor": "Mr. Matt Haase",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Edward",
        "since": "2019年1月",
        "level": 3,
        "coursesTodo": [
            'cs300',
            'cs470',
            'cs490',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui050Tiger": {
        "course": [
            {
                "CourseName": "App Inventor",
                "CourseTime": "Friday 5:00pm - 6:30pm",
                "ProjectLink": "https://play.google.com/store/apps/details?id=appinventor.ai_renj0309.multiplayer_Quiz",
                "ProjectTitle": "Quiz App",
                "feedback": "Tiger is an energetic student and is always willing to try something once. Although he can be a tad distracted at times, it is truly a joy to have a student who tries so hard even when he is not sure how to reach his goal. As I started the session with a rather large class, I appreciate his patience when it comes to asking for help. Tiger has truly been a joy to teach and I would enjoy having him in my classroom again in the future.",
                "instructor": "Mr. Andrew Chen",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Tiger",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs230',
            'cs200',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui051Daniel": {
        "course": [
            {
                "CourseName": "App Inventor",
                "CourseTime": "Friday 5:00pm - 6:30pm",
                "ProjectLink": "https://play.google.com/store/apps/details?id=appinventor.ai_26chenzexing.Roblox_Stat_App_REDYoungthStartup",
                "ProjectTitle": "Roblox Parent App",
                "feedback": "Daniel is a student that really enjoys competition. He always attempt to raise his hand first for any question even if the answer he supplies is wrong. This is a very good quality to have. I do wish more students would do this more often. He also seems to be very open minded in the way that he is able to take criticism of his ideas and process them without bias. This is a skill that will serve him well.",
                "instructor": "Mr. Andrew Chen",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Daniel",        
        "mark": "Duplicated Daniel",
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui052Jenny": {
        "course": [
            {
                "CourseName": "Technovation B",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "TechCube",
                "feedback": "Jenny is definitely the best high school student I have seen in the past year. As a female student, Jenny shows strong and clear interests on coding. I am so glad to hear that she has already decided to pursue CS major in her 10th grade, which is very rare. Jenny is doing very well in all my classes, and can always get the work done with more than what we expect. For the Technovation project, Jenny led the small team to finish all the tasks without much help from me. I think she did probably over 80% of the whole work. In addition, I start to notice that Jenny is becoming more and more confident on finishing projects. She now has better ideas on what she wants to do, and she knows how to make the project stand out. Last but not least, Jenny works really well with her classmates even with the students that are younger than her. Jenny shows great kindness and communication skills to talk to the younger students and help them, which is not common to see among the group of students we have here in Irvine and Arcadia.",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jenny",
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui053Maggie": {
        "course": [
            {
                "CourseName": "Technovation B",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "TechCube",
                "feedback": "Maggie\u7ed9\u6211\u7684\u5370\u8c61\u4e00\u76f4\u662f\u8e0f\u5b9e\u3001\u8ba4\u771f\uff0c\u5c24\u5176\u662f\u505a\u9879\u76ee\u7684\u65f6\u5019\u975e\u5e38\u6709\u8d23\u4efb\u5fc3\uff0c\u4ea4\u7ed9\u5979\u7684\u4efb\u52a1\u5979\u603b\u662f\u53ef\u4ee5\u5f88\u9ad8\u6807\u51c6\u7684\u5b8c\u6210\uff0c\u800c\u4e14\u81ea\u5df1\u5bf9\u4e00\u4e9b\u7ec6\u8282\u7684\u8981\u6c42\u66f4\u9ad8\u3002\u6700\u540e\u63d0\u4ea4\u7684\u89c6\u9891\uff0cMaggie\u6539\u4e86\u597d\u591a\u904d\uff0c\u6700\u540e\u8fd8\u662f\u8981\u5f04\u7684\u518d\u5b8c\u7f8e\u4e00\u4e9b\u3002\u6b64\u5916\uff0cMaggie\u7684\u60f3\u6cd5\u548c\u601d\u8def\u5f88\u5f00\u9614\uff0c\u6211\u8ba4\u4e3a\u5979\u5f88\u9002\u5408\u505a\u4e00\u4e9b\u5b9e\u9645\u7684\u9879\u76ee\u3002Maggie\u5728\u4e0b\u9762\u768410\u5e74\u7ea7\uff0c\u6211\u4eec\u8981\u5c3d\u53ef\u80fd\u9ad8\u6807\u51c6\u7684\u6765\u8981\u6c42\u5979\uff0c\u518d\u591a\u51fa\u4e00\u4e9b\u6210\u7ee9\u4e3a\u672a\u6765\u7684\u7533\u8bf7\u505a\u80cc\u666f\u63d0\u5347\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Maggie",
        "since": "2018年10月",
        "level": 3,
        "coursesTodo": [
            'cs300',
            'cs430',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui054Cindy": {
        "course": [
            {
                "CourseName": "Technovation B",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "Mobile-based Kids Safety Solution",
                "feedback": "Cindy\u6beb\u65e0\u7591\u95ee\u662f\u4eca\u5e74\u89c1\u5230\u7684\u6700\u4f18\u79c0\u7684\u540c\u5b66\u3002\u5979\u806a\u660e\u3001\u8ba4\u771f\uff0c\u8e0f\u5b9e\u523b\u82e6\u3002\u6700\u540e\u7684\u9879\u76ee\u57fa\u672c\u4e0a\u662fCindy\u4e00\u4e2a\u4eba\u5b8c\u6210\u7684\u3002\u6211\u5e38\u5e38\u5f88\u96be\u60f3\u8c61Cindy\u53ef\u4ee5\u5728\u8fd9\u4e48\u591a\u7684\u4efb\u52a1\u4e2d\uff0c\u8fd8\u80fd\u591f\u72ec\u7acb\u7684\u9ad8\u6807\u51c6\u5b8c\u6210\u6240\u6709\u7684\u9879\u76ee\u5185\u5bb9\u3002\u5927\u90e8\u5206\u65f6\u95f4\uff0cCindy\u53ea\u9700\u8981\u6211\u7b80\u5355\u7684\u6307\u70b9\u548c\u8981\u6c42\uff0c\u4ece\u6765\u4e0d\u9700\u8981\u7ec6\u8282\u4e0a\u9762\u7684\u5e2e\u52a9\uff0c\u6bcf\u6b21\u4e0a\u8bfe\u524d\uff0c\u6211\u90fd\u80fd\u770b\u5230\u5979\u81ea\u5df1\u5728\u4e0b\u9762\u5b8c\u6210\u7684\u989d\u5916\u7684\u5de5\u4f5c\u3002\u8fd9\u6b21\u7684\u5973\u751f\u9879\u76ee\u6d89\u53ca\u6280\u672f\u3001\u7f16\u7a0b\u3001\u5546\u4e1a\u3001\u5c55\u793a\u7b49\u591a\u4e2a\u6280\u80fd\uff0cCindy\u7684\u80fd\u529b\u53d1\u6325\u5f97\u6dcb\u6f13\u5c3d\u81f4\u3002\u4f5c\u4e3a\u4e00\u4e2a6\u5e74\u7ea7\u7684\u540c\u5b66\uff0c\u6211\u975e\u5e38\u671f\u5f85\u770b\u5230Cindy\u5728\u672a\u6765\u7684\u51e0\u5e74\u80fd\u53d6\u5f97\u7684\u66f4\u5927\u7684\u6210\u7ee9\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Cindy",
        "since": "2018年10月",
        "level": 3,
        "coursesTodo": [
            'cs470',
            'cs571',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui055Jessica": {
        "course": [
            {
                "CourseName": "Technovation B",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "Mobile-based Kids Safety Solution",
                "feedback": "Jessica\u5728\u7f16\u7a0b\u4e0a\u8868\u73b0\u51fa\u4e86\u5f88\u9ad8\u7684\u70ed\u60c5\u548c\u5929\u8d4b\uff0c\u5979\u5e38\u5e38\u662f\u73ed\u4e0a\u505a\u4e1c\u897f\u505a\u5f97\u6700\u5feb\u7684\u540c\u5b66\u3002\u5c3d\u7ba1\u4e4b\u524d\u6ca1\u6709\u5b66\u8fc7\u7279\u522b\u591a\u7684\u7f16\u7a0b\u57fa\u7840\uff0c\u5979\u5728\u7406\u89e3\u4e00\u4e9b\u590d\u6742\u7684\u7b97\u6cd5\u4ee5\u53ca\u5904\u7406\u5b9e\u9645\u5e94\u7528\u7684\u65b9\u9762\u4e0a\u5f88\u6709\u601d\u8def\u548c\u60f3\u6cd5\u3002\u8fd9\u6b21\u7684\u9879\u76ee\uff0c\u5979\u548cCindy\u914d\u5408\u7684\u975e\u5e38\u7a81\u51fa\uff0c\u4f5c\u4e3a\u6700\u5c0f\u7684\u4e24\u4e2a\u540c\u5b66\uff0c\u9879\u76ee\u51c6\u5907\u7684\u65f6\u95f4\u4e5f\u5c11\uff0c\u4f46\u662f\u5979\u4eec\u7684\u9879\u76ee\u4e00\u70b9\u4e0d\u900a\u8272\u9ad8\u4e2d\u7ec4\u3002\u4e0b\u4e00\u6b65\u6211\u5efa\u8bae\u7ed9Jessica\u8bbe\u8ba1\u4e00\u4e2a\u548c\u9ad8\u5c14\u592b\u7403\u76f8\u5173\u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u628a\u79d1\u6280\u548c\u5979\u7684\u5174\u8da3\u7231\u597d\u5f88\u597d\u7684\u8054\u7cfb\u8d77\u6765\uff0c\u4e3a\u4e0b\u9762\u7684\u7533\u8bf7\u505a\u80cc\u666f\u63d0\u5347\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jessica",
        "since": "2018年10月",
        "level": 3,
        "coursesTodo": [
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui056Shirley": {
        "course": [
            {
                "CourseName": "Technovation A",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "SugarBear",
                "feedback": "Shirley\u7ed9\u6211\u7684\u5370\u8c61\u5f88\u6df1\uff0c\u7b2c\u4e00\u5929\u7684\u8bfe\u5802\u4e0a\uff0cShirley\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7684\u540c\u5b66\uff0c\u95ee\u4e86\u6211\u597d\u591a\u7684\u95ee\u9898\uff0c\u601d\u8def\u7279\u522b\u5f00\u9614\uff0c\u8868\u73b0\u51fa\u5f88\u591a\u6210\u719f\u7684\u60f3\u6cd5\u3002\u540e\u6765\u7684\u9879\u76ee\u4e2d\uff0cShirley\u6162\u6162\u7684\u5f00\u59cb\u53d1\u6325\u5979\u7684\u7ec4\u7ec7\u80fd\u529b\uff0c\u5e38\u5e38\u5728\u4e00\u4e9b\u91cd\u8981\u7684\u4efb\u52a1\u4e0a\u62c5\u5f53\u8d77\u9886\u5bfc\u5927\u5bb6\u3001\u5206\u914d\u5de5\u4f5c\u7684\u89d2\u8272\u3002\u5979\u5728\u8fd9\u65b9\u9762\u6240\u8868\u73b0\u51fa\u7684\u4e3b\u52a8\u548c\u81ea\u4fe1\uff0c\u662f\u6211\u4eec\u5f88\u5c11\u80fd\u5728\u4e2d\u56fd\u5b66\u751f\u4e2d\u770b\u5230\u7684\uff0c\u6240\u4ee5\u6211\u76f8\u4fe1Shirley\u5728\u4eca\u540e\u4e00\u5b9a\u4f1a\u53d6\u5f97\u5f88\u591a\u4e0d\u4e00\u6837\u7684\u6210\u7ee9\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Shirley",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui057Cinna": {
        "course": [
            {
                "CourseName": "Technovation A",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "SugarBear",
                "feedback": "\u4f5c\u4e3a\u505a\u5c0f\u7684\u540c\u5b66\uff0cCinna\u7684\u8868\u73b0\u4e00\u70b9\u4e0d\u662f\u6700\u5c0f\u3002\u6574\u4e2a\u7684\u9879\u76ee\u6d89\u53ca\u7f16\u7a0b\u3001\u6280\u672f\u3001\u5546\u4e1a\u3001\u5c55\u793a\uff0c\u6bcf\u6b21\u7ed9Cinna\u5206\u914d\u4efb\u52a1\uff0c\u90fd\u4e0d\u4f1a\u611f\u89c9\u5230\u5979\u6709\u4efb\u4f55\u7d27\u5f20\uff0c\u6bcf\u6b21\u90fd\u80fd\u81ea\u4fe1\u7684\u63a5\u53d7\u5e76\u5b8c\u6210\u3002\u5c24\u5176\u662f\u5728\u9879\u76ee\u7684\u529f\u80fd\u8bbe\u8ba1\u3001\u7528\u6237\u4f53\u9a8c\u65b9\u9762\uff0cCinna\u5e38\u5e38\u80fd\u63d0\u51fa\u8d85\u51fa\u5979\u5e74\u9f84\u7684\u5efa\u8bae\u548c\u60f3\u6cd5\u3002\u540e\u671f\u7684\u9879\u76ee\u89c6\u9891\u5f55\u5236\u3001\u5c55\u793a\uff0cCinna\u4e5f\u5e38\u5e38\u662f\u5c0f\u7ec4\u7684\u5c0f\u5c0f\u5e26\u5934\u4eba\uff0c\u5e38\u5e38\u53ef\u4ee5\u4e00\u6b21\u901a\u8fc7\uff0c\u9f13\u52b1\u5927\u5bb6\u3002\u4f5c\u4e3a\u4e00\u624d6\u5e74\u7ea7\u7684\u540c\u5b66\uff0c\u76f8\u4fe1Cinna\u4f1a\u5728\u4e0b\u9762\u7684\u4e00\u6bb5\u65f6\u95f4\u53d6\u5f97\u66f4\u591a\u66f4\u4f18\u79c0\u7684\u6210\u7ee9\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Cinna",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui058Lisa": {
        "course": [
            {
                "CourseName": "Technovation A",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "SugarBear",
                "feedback": "Lisa\u4f5c\u4e3a\u6211\u4eec\u7684\u65b0\u540c\u5b66\uff0c\u4ece\u5f00\u59cb\u7ed9\u6211\u7684\u5370\u8c61\u5c31\u5f88\u6df1\u3002Lisa\u5f00\u59cb\u5728\u8bfe\u5802\u4e0a\u6709\u4e9b\u5185\u5411\uff0c\u4f46\u662f\u4f60\u5374\u5f88\u660e\u663e\u7684\u611f\u89c9\u5230\u5979\u5bf9\u7f16\u7a0b\u5185\u5bb9\u7684\u90a3\u79cd\u81ea\u4fe1\uff0c\u5f00\u59cb\u7684\u4e00\u4e9b\u7f16\u7a0b\u5185\u5bb9\uff0cLisa\u5e38\u5e38\u662f\u8bfe\u5802\u4e0a\u6700\u5feb\u5b8c\u6210\u7684\u540c\u5b66\u3002\u540e\u6765\u6162\u6162\u7684\u4f60\u4f1a\u770b\u5230\uff0cLisa\u5b8c\u6210\u81ea\u5df1\u7684\u4e1c\u897f\u4e4b\u540e\u5c31\u5f00\u59cb\u9ed8\u9ed8\u7684\u5e2e\u52a9\u8eab\u8fb9\u7684\u540c\u5b66\u3002\u4e2d\u95f4\u7684\u9879\u76ee\u9636\u6bb5\uff0cLisa\u4e5f\u5f88\u8ba4\u771f\uff0c\u6709\u4e00\u6b21\u4e0b\u8bfe\u524d\u5927\u5bb6\u8ba8\u8bba\u4e00\u4e9b\u7ed9\u7cd6\u5c3f\u75c5\u4eba\u7684\u5efa\u8bae\u3002\u540e\u6765\u5230\u4e0b\u4e00\u5468\uff0cLisa\u81ea\u5df1\u505a\u4e86\u597d\u591a\u7684research\uff0c\u7136\u540e\u6574\u7406\u4e86\u4e00\u9875\u7684\u6587\u6863\uff0c\u5979\u662f\u552f\u4e00\u4e00\u4e2a\u53bb\u81ea\u89c9\u6574\u7406\u8fd9\u65b9\u9762\u5185\u5bb9\u7684\u540c\u5b66\uff0c\u8ba9\u6211\u5370\u8c61\u7279\u522b\u6df1\u3002\u540e\u671f\u7684\u9879\u76ee\uff0cLisa\u5728\u5c55\u793a\u4e0a\u9762\u5f00\u59cb\u6709\u4e9b\u7d27\u5f20\uff0c\u4f46\u662f\u5979\u4ece\u6765\u6ca1\u6709\u653e\u5f03\uff0c\u81ea\u5df1\u52aa\u529b\u7684\u51c6\u5907\uff0c\u4ece\u5f00\u59cb\u5e38\u5e38\u8981\u91cd\u5f55\u597d\u591a\u6b21\uff0c\u5230\u6700\u540e\u968f\u65f6\u53eb\u5979\u4e0a\u6765\u8bb2\uff0c\u90fd\u53ef\u4ee5\u4e0d\u7528\u51c6\u5907\u7684\u628a\u5185\u5bb9\u8bf4\u51fa\u6765\uff0c\u4f60\u80fd\u611f\u89c9\u5230Lisa\u4e5f\u89c9\u5f97\u81ea\u4fe1\u4e86\u4e0d\u5c11\u3002\u8fdb\u51658\u5e74\u7ea7\uff0c\u671f\u5f85Lisa\u80fd\u5728\u7f16\u7a0b\u4e0a\u6709\u4e00\u4e9b\u597d\u7684\u7a81\u7834\uff0c\u505a\u4e00\u4e9b\u66f4\u4e13\u4e1a\u7684\u9879\u76ee\uff0c\u7ed9\u7533\u8bf7\u4f5c\u51c6\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Lisa",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs220',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui059Shania": {
        "course": [
            {
                "CourseName": "Technovation A",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "SugarBear",
                "feedback": "\u901a\u8fc7\u5e26Shania\u8fd9\u4e00\u4e2a\u5973\u751f\u9879\u76ee\uff0c\u7ec8\u4e8e\u5bf9Shania\u6709\u4e86\u4e00\u4e2a\u6bd4\u8f83\u5168\u9762\u7684\u8ba4\u8bc6\uff1aShania\u806a\u660e\u3001\u8ba4\u771f\uff0c\u591a\u624d\u591a\u827a\uff0c\u66f4\u91cd\u8981\u7684\u662f\u523b\u82e6\uff0c\u6709\u8d23\u4efb\u5fc3\u3002\u5979\u72ec\u81ea\u4e00\u4eba\u5b8c\u6210\u4e8690%\u7684\u9879\u76ee\u5de5\u4f5c\uff0c\u4efb\u4f55\u7684\u4efb\u52a1\u4ea4\u7ed9Shania\u603b\u662f\u53ef\u4ee5\u9ad8\u6807\u51c6\u7684\u5b8c\u6210\u3002\u53e6\u5916\uff0c\u5728\u6574\u4e2a\u8fc7\u7a0b\u4e2dShania\u8868\u73b0\u51fa\u7684\u9886\u5bfc\u529b\uff0c\u4e5f\u662f\u8ba9\u6211\u5370\u8c61\u6df1\u523b\u3002\u6709\u4e86\u8fd9\u4e48\u591a\u7f16\u7a0b\u57fa\u7840\uff0c\u6211\u6709\u4fe1\u5fc3Shania\u53ef\u4ee5\u5728\u4e0b\u9762\u7684\u5b66\u4e60\u4e2d\u4f5c\u51fa\u66f4\u52a0\u4e13\u4e1a\u7684\u9879\u76ee\uff0c\u6211\u4e5f\u4f1a\u5bf9\u5979\u8981\u6c42\u7684\u66f4\u9ad8\u4e00\u4e9b\uff0c\u5728\u9ad8\u4e2d\u9636\u6bb5\u53d6\u5f97\u66f4\u591a\u542b\u91d1\u91cf\u66f4\u5927\u7684\u6210\u679c\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Shania",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs410',
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui060Joanne": {
        "course": [
            {
                "CourseName": "Technovation A",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "Reminiscence",
                "feedback": "Joanne\u5728\u8fd9\u4e2a\u9879\u76ee\u4e0a\u7684\u8868\u73b0\u5927\u5bb6\u90fd\u6709\u76ee\u5171\u7779\uff0c\u77ed\u77ed\u7684\u5c0f\u534a\u5e74\u65f6\u95f4\uff0c\u6211\u80fd\u770b\u5230Joanne\u5728\u5404\u4e2a\u65b9\u9762\u660e\u663e\u7684\u63d0\u5347\uff1a\u4ece\u5f00\u59cb\u5bf9\u7f16\u7a0b\u4e0d\u662f\u5f88\u6709\u4fe1\u5fc3\uff0c\u5230\u540e\u9762\u7684\u7f16\u7a0b\u903b\u8f91\u8bf4\u7684\u5934\u5934\u662f\u9053\uff1b\u4ece\u5f00\u59cb\u4e0d\u592a\u6562\u53bb\u9886\u5bfc\u81ea\u5df1\u7684\u5c0f\u56e2\u961f\uff0c\u5230\u540e\u9762\u81ea\u5df1\u8d8a\u6765\u8d8a\u79ef\u6781\u4e3b\u52a8\uff0c\u628a\u5c0f\u56e2\u961f\u7ec4\u7ec7\u7684\u4e95\u4e95\u6709\u6761\u3002\u6574\u4e2a\u9879\u76ee\u540e\u534a\u6bb5\u7684\u51c6\u5907\u548c\u5c55\u793a\u5de5\u4f5c\uff0cJoanne\u72ec\u81ea\u5b8c\u6210\u4e8680%\u7684\u5de5\u4f5c\u3002\u4e5f\u6b63\u662f\u8fd9\u6837\uff0c\u6211\u4e5f\u6162\u6162\u7684\u611f\u89c9\u7684Joanne\u53d8\u5f97\u66f4\u52a0\u6709\u4fe1\u5fc3\u3002\u4e0b\u9762\u65f6\u95f4\u867d\u7136\u4e0d\u591a\uff0c\u4f46\u662f\u6211\u76f8\u4fe1Joanne\u4e00\u5b9a\u53ef\u4ee5\u518d\u5b8c\u6210\u4e00\u4e9b\u6f02\u4eae\u7684\u5de5\u4f5c\u548c\u6210\u7ee9\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Joanne",
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui061Amanda": {
        "course": [
            {
                "CourseName": "Technovation A",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "Reminiscence",
                "feedback": "Amanda\u4e00\u5411\u5728\u8bfe\u5802\u4e0a\u6bd4\u8f83\u817c\u8146\uff0c\u4f46\u662f\u8fd9\u4e1d\u6beb\u4e0d\u5f71\u54cd\u5979\u8ba4\u771f\u5b66\u4e60\u7684\u6001\u5ea6\u3002\u57fa\u672c\u4e0a\u6bcf\u6b21\u7684\u4f5c\u4e1a\u6216\u8005\u4efb\u52a1\uff0cAmanda\u4ece\u5934\u5230\u5c3e\u90fd\u662f\u5b8c\u6210\u7684\u6700\u8ba4\u771f\u7684\u3002\u6bd4\u5982\u521d\u671f\u6211\u4eec\u8ba9\u5927\u5bb6\u601d\u8003\u9879\u76ee\u7684idea\uff0cAmanda\u662f\u552f\u4e00\u4e00\u4e2a\u4ed4\u7ec6\u7684\u505aresearch\u5e76\u4e14\u628a\u5404\u4e2aidea\u7ed9\u603b\u7ed3\u4e0b\u6765\u7684\u540c\u5b66\u3002\u540e\u9762\u7684\u4e00\u4e9b\u6709\u6311\u6218\u7684\u5de5\u4f5c\uff0cAmanda\u4e5f\u5e38\u5e38\u4e3b\u52a8\u4f1a\u53bb\u627f\u62c5\uff0c\u800c\u4e14\u4e00\u5b9a\u662f\u9ad8\u8d28\u91cf\u5730\u5b8c\u6210\u4efb\u52a1\u3002\u77ed\u77ed\u5c0f\u534a\u5e74\u4e0b\u6765\uff0c\u4e5f\u80fd\u5f88\u660e\u663e\u7684\u611f\u89c9Amanda\u5728\u6280\u672f\u548c\u7f16\u7a0b\u4e0a\u9762\u7684\u4fe1\u5fc3\u589e\u5f3a\u4e86\u3002\u671f\u5f85Amanda\u80fd\u901a\u8fc7AI\u7684\u590f\u4ee4\u8425\u5b66\u4e60\u6536\u83b7\u66f4\u591a\u7684\u77e5\u8bc6\uff0c\u4ece\u800c\u4e3a\u4e0b\u9762\u9ad8\u4e2d\u7684\u80cc\u666f\u63d0\u5347\u6253\u4e0b\u57fa\u7840\u3002\u6211\u4e5f\u4f1a\u7528\u66f4\u9ad8\u7684\u6807\u51c6\u6765\u8981\u6c42Amanda\u3002\u671f\u5f85\u5979\u4e0b\u9762\u66f4\u591a\u66f4\u597d\u7684\u6210\u7ee9\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Amanda",
        "since": "2018年6月",
        "level": 3,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui062Alina": {
        "course": [
            {
                "CourseName": "Technovation A",
                "CourseTime": "Friday 3:45-5:15pm",
                "ProjectLink": "",
                "ProjectTitle": "Reminiscence",
                "feedback": "Alina\u7684\u624d\u80fd\u5728\u8fd9\u6b21\u7684\u9879\u76ee\u91cc\u9762\u8868\u73b0\u7684\u6dcb\u6f13\u5c3d\u81f4\uff1a\u5979\u4e0d\u4f46\u6709\u7740\u5f88\u597d\u7684\u7f16\u7a0b\u57fa\u7840\uff0c\u800c\u4e14\u5979\u5728\u827a\u672f\u8bbe\u8ba1\u65b9\u9762\u7684\u624d\u80fd\u7ed9\u8fd9\u4e2a\u5c0f\u7ec4\u6ce8\u5165\u4e86\u5f88\u591a\u65b0\u9c9c\u548c\u4e13\u4e1a\u7684\u5143\u7d20\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0cAlina\u5728\u9879\u76ee\u5c55\u793a\u4e2d\u8868\u73b0\u51fa\u7684\u6210\u719f\uff0c\u8ba9\u6211\u76f8\u4fe1Alina\u5c06\u6765\u4e00\u5b9a\u53ef\u4ee5\u51fa\u66f4\u591a\u7684\u6210\u7ee9\u3002\u4e0b\u9762\u8fdb\u5165\u9ad8\u4e2d\u7684\u5173\u952e\u65f6\u671f\uff0c\u6211\u4e5f\u4f1a\u7528\u66f4\u9ad8\u7684\u6807\u51c6\u6765\u8981\u6c42Alina\uff0c\u4e3a\u5979\u7684\u5927\u5b66\u7533\u8bf7\u79ef\u7d2f\u4e13\u4e1a\u7684\u9879\u76ee\u548c\u8363\u8a89\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Alina",
        "since": "2018年6月",
        "level": 3,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui063Joshua": {
        "course": [
            {
                "CourseName": "Python II",
                "CourseTime": "Friday 5:20-6:50pm",
                "ProjectLink": "",
                "ProjectTitle": "",
                "feedback": "Joshua\u662f\u8fd9\u5b66\u671f\u53d1\u73b0\u7684\u662f\u4e00\u4e2a\u65b0\u661f\uff0c\u81ea\u4ece\u5f00\u59cb\u8ba9Joshua\u5f00\u59cb\u5c1d\u8bd5\u4fe1\u606f\u5b66\u7ade\u8d5b\u4ee5\u6765\uff0c\u4ed6\u59cb\u7ec8\u4fdd\u6301\u7684\u6781\u9ad8\u7684\u70ed\u60c5\u548c\u8868\u73b0\u3002\u5e38\u5e38\u4e00\u8282\u8bfe\u4ed6\u4e00\u5206\u949f\u4e5f\u4e0d\u4f1a\u8d70\u795e\uff0c\u59cb\u7ec8\u4e13\u6ce8\u5728\u505a\u9898\u4e0a\u9762\u3002\u800c\u4e14\u8d8a\u96be\u7684\u9898\u76ee\uff0c\u4ed6\u8d8a\u662f\u8981\u628a\u95ee\u9898\u641e\u660e\u767d\u3002\u8981\u77e5\u9053\u4fe1\u606f\u5b66\u7684\u5b66\u4e60\u5185\u5bb9\u5927\u6982\u53ea\u6709\u4e0d\u523010%\u7684\u540c\u5b66\u53ef\u4ee5\u63a5\u53d7\u30025\u6708\u4efd\u7684\u7ade\u8d5b\u662fJoshua\u7b2c\u4e00\u6b21\u5c1d\u8bd5\uff0c\u4ed6\u5728\u7ade\u8d5b\u7684\u7ecf\u9a8c\u548c\u505a\u9898\u91cf\u4e0a\u9762\u8fd8\u6709\u63d0\u9ad8\u7684\u4f59\u5730\uff0c\u4f46\u662f\u56e0\u4e3aJoshua\u8fd8\u5c0f\uff0c\u6211\u8ba4\u4e3a\u4ed6\u6709\u5f88\u5927\u7684\u6f5c\u529b\u548c\u4e0a\u5347\u7a7a\u95f4\u3002\u5b66\u4e60\u7f16\u7a0b\u7684\u5173\u952e\u662f\u627e\u5230\u540c\u5b66\u7684\u5174\u8da3\uff0c\u8fd9\u70b9\u6211\u8ba4\u4e3aJoshua\u5df2\u7ecf\u5177\u5907\u4e86\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Joshua",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs430',
            'cs470',
            'cs490',
            'cs500'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui064Damon": {
        "course": [
            {
                "CourseName": "Python II",
                "CourseTime": "Friday 5:20-6:50pm",
                "ProjectLink": "",
                "ProjectTitle": "",
                "feedback": "\u5e26\u4e86Damon\u5feb\u4e24\u5e74\u7684\u65f6\u95f4\uff0c\u5bf9Damon\u7684\u4e86\u89e3\u4e5f\u8d8a\u6765\u8d8a\u6df1\u5165\u3002\u4ed6\u806a\u660e\uff0c\u6d3b\u8dc3\uff0c\u6709\u60f3\u6cd5\uff0c\u613f\u610f\u4ed8\u51fa\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u4ed6\u4e00\u76f4\u5bf9\u81ea\u5df1\u6709\u5f88\u9ad8\u7684\u8981\u6c42\uff0c\u6709\u7684\u65f6\u5019\u4ed6\u5df2\u7ecf\u505a\u7684\u5f88\u597d\uff0c\u4f46\u662f\u8fd8\u603b\u662f\u8ba4\u4e3a\u7f3a\u5c11\u5f88\u591a\u4e1c\u897f\uff0c\u5e38\u5e38\u6211\u4f5c\u4e3a\u8001\u5e08\u8981\u7ed9\u4ed6\u4fe1\u5fc3\u548c\u9f13\u52b1\u8ba9\u4ed6\u5927\u80c6\u7684\u53bb\u5c55\u793a\u3002\u53e6\u5916\uff0c\u8fc7\u53bb\u4e00\u5e74Damon\u5bf9\u505a\u9879\u76ee\u6709\u4e86\u66f4\u6df1\u7684\u4e86\u89e3\u548c\u5174\u8da3\uff0c\u6211\u76f8\u4fe1\u4e0b\u9762\u7684\u4e00\u5e74\u4e00\u5b9a\u53ef\u4ee5\u4f5c\u51fa\u5f88\u597d\u5f88\u4e13\u4e1a\u7684\u9879\u76ee\uff0c\u4e3a\u4ed6\u7684\u7533\u8bf7\u50a8\u5907\uff0c\u6211\u4e5f\u4f1a\u4ee5\u66f4\u9ad8\u7684\u6807\u51c6\u8981\u6c42\u4ed6\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Damon",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs430',
            'cs470',
            'cs490',
            'cs571'            
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui065Jiajun": {
        "course": [
            {
                "CourseName": "Python II",
                "CourseTime": "Friday 5:20-6:50pm",
                "ProjectLink": "",
                "ProjectTitle": "",
                "feedback": "\u5e26\u4e86\u5bb6\u4fca\u5feb\u4e00\u5e74\u7684\u65f6\u95f4\uff0c\u6211\u5bf9\u5bb6\u4fca\u7684\u5370\u8c61\u7279\u522b\u6df1\uff0c\u4e3b\u8981\u96c6\u4e2d\u5728\u51e0\u70b9\uff1a1\uff09\u5bb6\u4fca\u5b66\u4e60\u5f88\u8ba4\u771f\u4ed4\u7ec6\uff0c\u5c3d\u7ba1\u5f00\u59cb\u7684\u65f6\u5019\u82f1\u8bed\u4e0d\u662f\u7279\u522b\u597d\uff0c\u4f46\u662f\u4ed6\u4ece\u672a\u53d7\u5230\u8fc7\u5f71\u54cd\uff0c\u4e0d\u65ad\u7684\u6478\u7d22\u548c\u63d0\u95ee\uff0c\u4ed6\u603b\u662f\u53ef\u4ee5\u628a\u4e3a\u9898\u81ea\u5df1\u89e3\u51b3\uff1b2\uff09\u5bb6\u4fca\u5728\u7f16\u7a0b\u4e0a\u7684\u521b\u65b0\u80fd\u529b\u5f88\u5f3a\uff0c\u8fd9\u6b21\u7684\u7ade\u8d5b\u4ed6\u7684\u9879\u76ee\u662f\u552f\u4e00\u4e00\u4e2a\u548c\u5176\u4ed6\u540c\u5b66\u4e0d\u540c\u9898\u6750\u7684\u4e00\u4e2a\uff0c\u800c\u4e14\u6574\u4e2a\u9879\u76ee\u7684\u51c6\u5907\u8fc7\u7a0b\u4ed6\u975e\u5e38\u4e0b\u52b2\uff0c\u4e00\u76f4\u5728\u548c\u6211\u4ea4\u6d41\u95ee\u6211\u63d0\u9ad8\u7684\u65b9\u6cd5\u548c\u601d\u8def\u3002\u6bd4\u8d5b\u7ed3\u675f\u540e\uff0c\u5bb6\u4fca\u7acb\u523b\u95ee\u6211\u4e0b\u6b21\u7684\u6bd4\u8d5b\u662f\u4ec0\u4e48\u65f6\u5019\uff0c\u4ed6\u8bf4\u4e00\u5b9a\u8981\u518d\u53c2\u52a0\u4e00\u6b21\u83b7\u5956\uff1b3\uff09\u5bb6\u4fca\u975e\u5e38\u72ec\u7acb\uff0c\u6709\u793c\u8c8c\uff0c\u5f88\u61c2\u4e8b\uff0c\u8fd9\u4e48\u5c0f\u7684\u5e74\u9f84\uff0c\u6211\u80fd\u770b\u51fa\u5bb6\u4fca\u5c06\u6765\u4e00\u5b9a\u80fd\u505a\u5927\u4e8b\uff01",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jiajun",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    
    "stui066Julie": {
        "course": [
            {
                "CourseName": "Roblox I",
                "CourseTime": "Saturday 11:00am-12:30pm",
                "ProjectLink": "https://www.youtube.com/watch?v=1WuJxaLuUn4",
                "ProjectTitle": "Farshot",
                "feedback": "Julie is no doubt one of the brightest student I've ever taught. She performs excellently in all areas. She learns new things extremely fast, has great patience, and thinks logically when programming. She has so much potential in the computer science field and such an interesting future ahead of her. I can't stop but hoping she would continue on her study in programming. Her attention to details and ability to manage large task are both very useful skills in computer science. No need to mention the focusing skill she has for her age. I would recommend her going for some more difficult programming courses in the future as anything easy would certainly become a waste of her talent.",
                "instructor": "Ms. Ariel Jiang",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Julie",
        "since": "2018年9月",
        "level": 2,
        "coursesTodo": [
            'cs230',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui067Wilson": {
        "course": [
            {
                "CourseName": "Lego Mindstorms I",
                "CourseTime": "Saturday 9:30am-11:00am",
                "ProjectLink": "https://photos.app.goo.gl/oRyD2aviL3GbKoDdA",
                "ProjectTitle": "Candy Fishing Game",
                "feedback": "Wilson works well with others and learns fairly quick. He is very eager to build new robots as well as programming for them. He can finish the job without making a fuss over it. His project, the Candy Fishing Game, showed a lot of creativity and critical thinking when there weren't enough parts to finish his original idea. Overall, Wilson was a good student that is always willing to learn.",
                "instructor": "Ms. Celine Mangahas",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Wilson",
        "since": "2018年9月",
        "level": 1,
        "coursesTodo": [
            'cs160',
            'cs150',
            'cs101'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui068Michael": {
        "course": [
            {
                "CourseName": "Lego Mindstorms II",
                "CourseTime": "Saturday 11:00am - 12:30pm",
                "ProjectLink": "https://photos.app.goo.gl/1cPnLsnqr6zo6Tg78",
                "ProjectTitle": "Laundry Folding Machine",
                "feedback": "Michael has always shown ingenuity and a willingness to learn since day 1. He works well with others and shows traits of creativity and leadership when he had other classmates. He understood each topic and concept and incorporated his own flair to each lesson and challenge presented to him. His project, the Laundry Folding Machine, was a difficult project he managed to build and test on his own with some help. Michael was a great student who always looked for solutions and the bright side of a problem.",
                "instructor": "Ms. Celine Mangahas",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Michael",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs300',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui069Ryan": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Saturday 11:00am - 12:30pm",
                "ProjectLink": "https://minecraft.makecode.com/57576-58709-27069-99449",
                "ProjectTitle": "Water House",
                "feedback": "Ryan is a very bright kid. He is a super quick learner and loves to participate in class. He not only focuses on the lesson but also tries to go ahead and beyond with the things he is learning. He likes trying new things on his own because he is very curious when it comes to new lessons. From what I can tell with the weeks I had with him, he has improved on his thinking skills and is never discouraged from answering questions. ",
                "instructor": "Mr.Travis Yu",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Ryan",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui070Alex": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Saturday 11:00am - 12:30pm",
                "ProjectLink": "https://minecraft.makecode.com/11351-94228-75031-64834",
                "ProjectTitle": "The Bedrock fortress",
                "feedback": "Alex is a very knowledgeable kid. He loves to answer questions in class and knows a lot about things that are related to the topic.  He has a curious mind and is definitely a good student. Whenever I have questions, he is the first one to answer me. He seems to love learning about coding and how it interacts with Minecraft. He does not waste time with building with his own hands and loves to rather make it with code. ",
                "instructor": "Mr.Travis Yu",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Alex",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui071Daniel": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Saturday 11:00am - 12:30pm",
                "ProjectLink": "https://minecraft.makecode.com/47708-82293-09953-20969",
                "ProjectTitle": "Aquarium",
                "feedback": "Daniel is very respectful in class. He likes expressing his creativity in Minecraft by learning how to construct things. He does not seem to have any trouble with understanding the lessons. He is a very good kid and always comes in with a good attitude. He is almost never discouraged when asked to do something in code. In fact, he usually finishes very quickly. He has a tendency to build upon things we create in class which shows the creativity has has such as the aquarium.",
                "instructor": "Mr.Travis Yu",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Daniel",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui072David": {
        "course": [
            {
                "CourseName": "MC Javascript",
                "CourseTime": "Saturday 11:00am - 12:30pm",
                "ProjectLink": "https://minecraft.makecode.com/63000-31808-15067-18397",
                "ProjectTitle": "Maze",
                "feedback": "David is very diligent. He does not let himself give up when he is stuck. He always asks and answers questions in class. David has helped his other classmates whenever they have questions. He is also usually one of the first students to grasp the concepts. Also like his fellow students, he loves creating things in Minecraft. David is definitely a student that listens and understands very quickly. ",
                "instructor": "Mr.Travis Yu",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "David",
        "since": "2019年1月",
        "level": 2,
        "coursesTodo": [
            'cs200',
            'cs220'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui073Ben": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Brawl Star  Brawler Star Regressor",
                "feedback": "Ben is obvisouly the best student in my class. He is intelligent and understands things quickly. He would sometimes dismiss a topic as being understood before understanding it entirely. Thus, I have to always come up with enough challenges for him. He is creative and really well mannered with lots of respect to the teacher and classmates. In addition, Ben handles assignments seriously and I am looking forward to seeing more accomplishment from Ben.",
                "instructor": "Mr. Carlos Olea",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Ben",
        "since": "2018年5月",
        "level": 4,
        "coursesTodo": [
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui074Andy": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "World of Tanks Win Rate Regressor",
                "feedback": "Andy\u5728\u8bfe\u5802\u4e0a\u7ed9\u6211\u7684\u5370\u8c61\u5f88\u6df1\uff0c\u4ed6\u4e00\u76f4\u662f\u6700\u8ba4\u771f\uff0c\u6700\u6d3b\u8dc3\u7684\u540c\u5b66\u3002\u6240\u6709\u7684\u95ee\u9898\u4ed6\u90fd\u4f1a\u53bb\u56de\u7b54\uff0c\u800c\u4e14\u5728\u505a\u8bfe\u5802\u7ec3\u4e60\u548c\u9879\u76ee\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4ed6\u5e38\u5e38\u4f1a\u53bb\u81ea\u5df1\u5c1d\u8bd5\u65b0\u7684\u529f\u80fd\u548c\u6280\u672f\uff0c\u53ef\u4ee5\u770b\u51fa\u6765Andy\u5bf9\u7f16\u7a0b\u548c\u521b\u65b0\u7684\u5174\u8da3\u548c\u70ed\u60c5\u3002\u4e0b\u9762\u5230\u4e86\u9ad8\u4e2d\u9636\u6bb5\uff0c\u6211\u5e0c\u671b\u80fd\u591f\u5bf9Andy\u6709\u66f4\u9ad8\u7684\u8981\u6c42\uff0c\u628a\u81ea\u5df1\u7684\u9879\u76ee\u505a\u7684\u66f4\u6df1\uff0c\u66f4\u4e13\u4e1a\uff0c\u4e3a\u5c06\u6765\u7684\u5927\u5b66\u7533\u8bf7\u50a8\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Andy",
        "since": "2018年5月",
        "level": 4,
        "coursesTodo": [
            'cs470',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui075Athena": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "PUBG weapon kdr predictor",
                "feedback": "Athena is a quite student in my class, but she is definitely a quick learner and often completes class assignments quickly. This is particularly special for a girl. You can tell her interests and passion on coding, because for the challenge topics, she will work for long periods of class time to properly understand the material and give a try. I am looking forward to seeing Athena work on more prefessional projects in the near future, in order to enrich her college applicaiton.",
                "instructor": "Mr. Carlos Olea",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Athena",
        "since": "2018年9月",
        "level": 4,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui076Michael": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Apex Legends Weapon Tier Predictor",
                "feedback": "Michael is the best student in my class. He does not talk too much, but I can tell that he thinks a lot and always challenge himself in coding. Over the past semester, Michael has shown an aptitude for topics in data analysis and computer science. He was able to find several data sources for his project on his own and format them for use in his machine learning algorithm, which is not easy to accomplish for even college students. Altogether he is a very strong student and quick learner. I am very looking forward to seeing more of his accomplishment in the coming years.",
                "instructor": "Mr. Carlos Olea",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Michael",
        "since": "2018年9月",
        "level": 4,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui077Ethan": {
        "course": [
            {
                "CourseName": "Python I",
                "CourseTime": "Saturday 1 PM - 2:30 PM",
                "ProjectLink": "",
                "ProjectTitle": "Tic-Tac-Toe",
                "feedback": "Ethan is an enthusiastic and fun student and it's been a pleasure to teach him. During lessons, he was always listening and focused, and put a lot of effort into doing in-class exercises. When working together to create his Tic-Tac-Toe project, I was impressed by the work that he did on his own time. He built a very cool stage for the Tic-Tac-Toe game by himself. When we were implementing the logic of the game, he was always able to solve coding problems and come up with creative solutions for building certain parts of the game.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Ethan Kim",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs320',
            'cs430',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui078Ethan": {
        "course": [
            {
                "CourseName": "Python I",
                "CourseTime": "Saturday 1 PM - 2:30 PM",
                "ProjectLink": "",
                "ProjectTitle": "Dodgeball",
                "feedback": "Ethan is a very motivated student who always showed great interest in anything we were doing. During lessons, he was always attentive and focused. His thoughtful questions often surprised me and displayed his motivation for truly understanding the material in-depth. When creating his Dodgeball project, Ethan always followed along while making sure he understood what we were doing. Despite being his first programming class, he was not afraid to try creating a rather difficult game, which he succeeded at.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Ethan",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs430',
            'cs470',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui079Thomas": {
        "course": [
            {
                "CourseName": "Python II",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Sky Wars",
                "feedback": "Thomas is a motivated and creative student who shines when he applies himself. He always made class fun for everyone by allowing us to play his game and give feedback on it. His final project was inventive and I was impressed with how much of the game he had done all by himself. Thomas also participated in class a lot - answering and asking questions, competitions, and small games.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Thomas",
        "since": "2018年8月",
        "level": 3,
        "coursesTodo": [
            'cs430',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui080Barry": {
        "course": [
            {
                "CourseName": "Python II",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "UHC (Ultra Hardcore)",
                "feedback": "Barry is a motivated student who was always extremely interested in anything happening in class. While making his project, every class, he made sure to share with me all the progress he made on his own, and asking for help with anything if he needed it. This always showed me his dedication to his project. He also always asked what he could improve in his game. Barry's motivation and interest in programming shows in his work.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Barry",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs430',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui081Derek": {
        "course": [
            {
                "CourseName": "Python II",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Parkour/PvP",
                "feedback": "Derek is a highly-motivated and hardworking student. Every class, Derek always came prepared with questions for his project. He would always try to implement something in his game first, then ask only if he needed the help. I was impressed with Derek's drive to complete his game, every week I saw that he added a lot of new things. He also always spent class time working hard on his project, making use of the limited time he had every week to get help for his project.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Derek",
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui082Peilin": {
        "course": [
            {
                "CourseName": "Python II",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Walls",
                "feedback": "Peilin is a bright and hardworking student who constantly impressed me. Every week, Peilin made lots of progress on his game both in class and outside of class. No surprise, he was the first student to complete finish his project! He allowed all of his classmates to try his game, which we all agreed was a lot of fun. When Peilin had problems with his game and asked for help, I only had to point him in the right direction and he was always able to figure out the rest on his own.",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Peilin",
        "since": "2019年1月",
        "level": 3,
        "coursesTodo": [
            'cs320',
            'cs410',
            'cs430',
            'cs470'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui083Jerry": {
        "course": [
            {
                "CourseName": "Python II",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Silent Knight",
                "feedback": "Jerry is a hardworking, motivated, and creative student. He was the only student to choose to create a game in Pygame, which is always a challenge. Jerry always showed a lot of enthusiasm for his project, creating a Discord server and website for his game! Every time we worked together, Jerry always had many ideas for new things to add into his game. While we only had time to implement a few of his many ideas, his project still turned out impressive. ",
                "instructor": "Mr. Alec Diaz",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jerry",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs430',
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui084Amy": {
        "course": [
            {
                "CourseName": "Python Programming with Minecraft",
                "CourseTime": "Saturday 1:00-2:30PM",
                "ProjectLink": "https://repl.it/@ZachWiesenthal/Math-Quiz",
                "ProjectTitle": "Randomly Generated Math Quiz",
                "feedback": "Amy was a great student with lots of energy. She picked up quickly on the python concepts that we learned. She was especially good at using input and if-statements and made a few projects using these concepts. She made rock-paper-scissors, a math quiz, a text adventure game, and several other projects. She had a positive attitude and I hope she continues with programming. ",
                "instructor": "Mr. Zachary Wiesenthal",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Amy",
        "since": "2019年1月",
        "level": 3,
        "coursesTodo": [
            'cs310',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui085Richard": {
        "course": [
            {
                "CourseName": "Python Programming with Minecraft",
                "CourseTime": "Saturday 1:00-2:30PM",
                "ProjectLink": "https://repl.it/@ZachWiesenthal/Parkour",
                "ProjectTitle": "Minecraft Parkour with Lava",
                "feedback": "Richard is an excellent student that continued to surpass my expectations. He was able to follow along with the concepts well. I gave him slightly harder problems than usual and he was often able to solve them. He wrote a sorting function, made a parkour game in Minecraft where lava chased the user, and made rock paper scissors.",
                "instructor": "Mr. Zachary Wiesenthal",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Richard",
        "since": "2019年1月",
        "level": 3,
        "coursesTodo": [
            'cs310',
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui086Nathan": {
        "course": [
            {
                "CourseName": "Unity3D II",
                "CourseTime": "Saturday 1:00 - 2:30pm",
                "ProjectLink": "There was not instruction to create a link",
                "ProjectTitle": "Snowman in Hell",
                "feedback": "Nathan is very creative and has shown great skill in create artwork for his games. For his latest game he create a very impressive set of pixel art that has blown everyone way that has seen it. The game he created was also interesting and, with some more work and polish, is a publishable game. I see nathan being very successful in the world of digital entertainment, whether it's video games, movies or advertising, he has shown a knack for visually stimulating work. ",
                "instructor": "Mr. John Morris",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Nathan",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui087Christopher": {
        "course": [
            {
                "CourseName": "Unity3D II",
                "CourseTime": "Saturday 1:00 - 2:30pm",
                "ProjectLink": "There were not instructions to create a link.",
                "ProjectTitle": "Escape Room",
                "feedback": "Christopher has grown greatly with his Unity skills and understanding. His last game was simple but clever, showing off the skills he has learned, and was also able to export it to his iPhone. He is very hard working and was able to create the assets for his game by cleverly manipulating Unity itself. Whether Christopher peruses a career in Game Development or another tech field, he should easily be successful.",
                "instructor": "Mr. John Morris",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Christopher",
        "since": "2018年1月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui088Lionel": {
        "course": [
            {
                "CourseName": "Unity3D ll",
                "CourseTime": "Saturday 1:00 - 2:30pm",
                "ProjectLink": "n.a. because the project is saved on Lionel's computer",
                "ProjectTitle": "Mountain Car Racing",
                "feedback": "Lionel is a great student to be around. He always brings a positive attitude and a ton of motivation into the work that he puts through. When he needs help, he doesn\u2019t hesitate to ask, and he is also an extremely quick learner. In his project, he was able to decipher the problems in his games and provide insight in finding quick solutions. He has a talent and a real passion for game design, and I can see him creating more awesome projects.",
                "instructor": "Mr. John Morris",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Lionel",
        "since": "2019年1月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs310'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui089Darren": {
        "course": [
            {
                "CourseName": "Unreal",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "https://drive.google.com/open?id=1ph9bj-JVKF7tfYdG3SkrvWh-isEbiK-M",
                "ProjectTitle": "Maze",
                "feedback": "Darren has a real passion for game design. In this Unreal class, he was able to learn the tools of the engine which he was able to follow along and apply quickly. For his project, he designed his very own maze in Unreal engine which required a ton of patience and careful level design. He even created a unique mechanic in his game which he thought of on his own. I can see Darren going far in the projects that he creates.",
                "instructor": "Mr. John Morris",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Darren",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui090Donald": {
        "course": [
            {
                "CourseName": "Unreal",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "https://drive.google.com/open?id=1FZupkCpgN3f6jK95TZxdy4CnRt2IE8XV",
                "ProjectTitle": "Endless Runner",
                "feedback": "Donald always brings a positive attitude into the classroom. During classroom lessons, he picks up concepts relatively quickly and rarely does he need help. He can work independently, and his project was impressive as he was able to create an infinite runner. He gets along well with both teachers and students alike. I can\u2019t wait to see the projects that he works on in the future!",
                "instructor": "Mr. John Morris",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Donald",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs300'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui091Karl": {
        "course": [
            {
                "CourseName": "Unreal",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "There was no instruction to create a link.",
                "ProjectTitle": "Karl's Fighter",
                "feedback": "Karl has shown the most interest and an ability to learn that exceeds all the other Unreal students. Developing a game in Unreal is very difficult and yet Karl has shown he can do it, and with only a bit of help from his teacher. For his current game he decided to create a fighting game, which is generally considered to be one of the most difficult games to develop. Despite this, Karl did rather well, but in the end, there was just not enough time to complete it during the class. He has expressed an interest to continue developing the game, which is the sign he will be very successful.",
                "instructor": "Mr. John Morris",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Karl",
        "since": "2018年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs430',
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui092Eiffel": {
        "course": [
            {
                "CourseName": "Unreal",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "There was not instruction to create a link",
                "ProjectTitle": "Eiffel's House Hunt",
                "feedback": "Eiffel worked very hard to follow along and learn Unreal, despite having a myriad of technical problems with his computer. Despite all the issue he kept having, he was still able to develop and implement his game. On several occasions, all his work was lost due to system crashes, but he never became deterred and redid all his lost work each time. Eiffel is very knowledgeable about video games and if he so chooses, he could have a very good career in game development or the tech industry.",
                "instructor": "Mr. John Morris",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Eiffel",
        "since": "2018年6月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui093Richard": {
        "course": [
            {
                "CourseName": "Unreal",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "There was never instruction to create a link",
                "ProjectTitle": "Zombie Wave",
                "feedback": "Richard showed a strong desire to learn Unreal and to produce his first game. The initial scope of his game turned out to be too big, as he quickly realized, and yet he was able to work towards implementing a portion of his intended vision with success. It was impressive how he worked to solve several of the issues he came across. He tried to do most of the game by himself but once he realized he couldn\u2019t, we worked together to solve his issues and create his first game in Unreal. Although the game needs more work, I am proud of what Richard was able to accomplish and expect him to only get better in the future. ",
                "instructor": "Mr. John Morris",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Richard",
        "since": "2017年9月",
        "level": 3,
        "coursesTodo": [
            'cs425',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui094Adrian": {
        "course": [
            {
                "CourseName": "Programming Competition",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "",
                "ProjectTitle": "Discord Chatbot Game",
                "feedback": "\u5e26\u4e86Adrian\u5feb\u4e24\u5e74\u7684\u65f6\u95f4\uff0c\u80fd\u770b\u51faAdrian\u975e\u5e38\u5927\u7684\u53d8\u5316\u548c\u63d0\u9ad8\u3002\u7b2c\u4e00\u5e74Adrian\u53ea\u662f\u6ee1\u8db3\u4e8e\u8bfe\u5802\u4e0a\u7684\u7ec3\u4e60\u548c\u4f5c\u4e1a\uff0c\u800c\u7b2c\u4e8c\u5e74\u4ed6\u5df2\u7ecf\u53ef\u4ee5\u81ea\u5df1\u4e3b\u52a8\u7684\u8fdb\u884c\u9879\u76ee\u89c4\u5212\u548c\u5b66\u4e60\u3002\u6700\u8fd1\u7684\u51e0\u6b21\u7ade\u8d5b\uff0cAdrian\u90fd\u8868\u73b0\u51fa\u4e86\u975e\u5e38\u9ad8\u7684\u4fe1\u5fc3\u548c\u6c34\u54c1\uff0c\u8fd9\u548c\u4ed6\u5e73\u65f6\u7684\u4e3b\u52a8\u601d\u8003\u548c\u5c1d\u8bd5\u662f\u5206\u4e0d\u5f00\u7684\u3002\u6b64\u5916\uff0cAdrian\u7684\u81ea\u5b66\u80fd\u529b\u975e\u5e38\u5f3a\uff0c\u4ed6\u5df2\u7ecf\u53ef\u4ee5\u5728\u6ca1\u6709\u8001\u5e08\u7684\u60c5\u51b5\u4e0b\u5b66\u4e60\u5f00\u53d1\u4e00\u4e9b\u65b0\u7684\u5e94\u7528\uff0c\u8fd9\u70b9\u6beb\u4e0d\u5938\u5f20\u7684\u8bf4\uff0c\u5df2\u7ecf\u8fbe\u5230\u4e86\u4e13\u4e1a\u7a0b\u5e8f\u5458\u7684\u6c34\u54c1\u3002\u4e0b\u9762\u7684\u9ad8\u4e2d\u9636\u6bb5\uff0c\u6211\u4f1a\u5bf9Adrian\u6709\u66f4\u9ad8\u7684\u8981\u6c42\uff0c\u8ba9\u4ed6\u5f00\u59cb\u7ed9\u81ea\u5df1\u672a\u6765\u7684\u5927\u5b66\u7533\u8bf7\u50a8\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Adrian",
        "since": "2017年9月",
        "level": 5,
        "coursesTodo": [
            'cs500',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510', 'cp350'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui095Allen": {
        "course": [
            {
                "CourseName": "Programming Competition",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "",
                "ProjectTitle": "War History Prediction using Data Mining and AI",
                "feedback": "Allen\u8fd9\u4e00\u5e74\u7684\u53d8\u5316\u5f88\u5927\uff0c\u4ed6\u5728\u505a\u9879\u76ee\u4e0a\u5df2\u7ecf\u975e\u5e38\u7684\u6709\u4fe1\u5fc3\uff0c\u4e5f\u5f88\u4e13\u4e1a\u3002\u6700\u91cd\u8981\u7684\u662f\uff0cAllen\u57fa\u672c\u4e0a\u53ef\u4ee5\u81ea\u5b66\u5927\u90e8\u5206\u7684\u5185\u5bb9\uff0c\u4e0d\u8bba\u662f\u770b\u89c6\u9891\uff0c\u8fd8\u662fGoogle\u7b54\u6848\uff0c\u8fd9\u70b9\u5c24\u5176\u91cd\u8981\u3002\u4e0b\u9762\u6211\u5bf9Allen\u6709\u4e24\u4e2a\u8981\u6c42\u548c\u671f\u5f85\uff1a1\uff09\u9879\u76ee\u4e0a\u8981\u505a\u7684\u66f4\u52a0\u4e13\u4e1a\uff0c\u6700\u597d\u548c\u81ea\u5df1\u7684\u5174\u8da3\u7231\u597d\u7ed3\u5408\u8d77\u6765\uff0c\u505a\u5b9e\u505a\u7cbe\uff1b2\uff09\u7b97\u6cd5\u548c\u4fe1\u606f\u5b66\u4e0a\u9762\uff0c\u6211\u8ba4\u4e3aAllen\u6709\u5f88\u5927\u7684\u6f5c\u529b\uff0c\u5e73\u65f6\u4e0a\u8bfe\u7684\u65f6\u5019\u4ed6\u5e38\u5e38\u662f\u6570\u4e00\u6570\u4e8c\u7684\uff0c\u4f46\u662f\u4ed6\u53ef\u80fd\u6700\u7ade\u8d5b\u7684\u73af\u5883\u548c\u8981\u6c42\u4e0d\u662f\u7279\u522b\u719f\u6089\uff0c\u6211\u8ba4\u4e3aAllen\u5e94\u8be5\u662f\u53ef\u4ee5\u505a\u7684\u66f4\u597d\uff0c\u8fd9\u70b9\u9700\u8981Allen\u4e0d\u65ad\u7684\u7ec3\u4e60\u548c\u79ef\u7d2f\u3002\u6211\u5bf9Allen\u5f88\u6709\u4fe1\u5fc3\uff0c\u76f8\u4fe1\u4ed6\u4f1a\u5728\u7f16\u7a0b\u548c\u521b\u65b0\u65b9\u9762\u51fa\u5f88\u591a\u7684\u6210\u7ee9\uff0c\u4ece\u800c\u4e3a\u5927\u5b66\u7533\u8bf7\u50a8\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Allen",
        "since": "2018年1月",
        "level": 5,
        "coursesTodo": [
            'cs470',
            'cs500',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510', 'cp350'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui096Alex": {
        "course": [
            {
                "CourseName": "Programming Competition",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "",
                "ProjectTitle": "Music Generation using AI",
                "feedback": "Alex\u662f\u4e00\u4e2a\u6781\u5177\u7f16\u7a0b\u5929\u8d4b\u7684\u540c\u5b66\uff0c\u4ed6\u5728\u6211\u4eec\u8fd9\u4e2a\u73ed\u662f\u6700\u65b0\u52a0\u5165\u7684\u4e00\u4e2a\u540c\u5b66\uff0c\u4f46\u662f\u4ed6\u5e38\u5e38\u662f\u505a\u7ade\u8d5b\u7ec3\u4e60\u6700\u5feb\u7684\u4e00\u4e2a\u3002\u800c\u4e14Alex\u7684\u7f16\u7a0b\u601d\u8def\u5e38\u5e38\u548c\u666e\u901a\u7684\u601d\u8def\u4e0d\u4e00\u6837\uff0c\u7ecf\u5e38\u53ef\u4ee5\u63d0\u51fa\u66f4\u52a0\u4f18\u5316\u7684\u7b97\u6cd5\u548c\u65b9\u6848\uff0c\u8ba9\u6211\u4eec\u8001\u5e08\u90fd\u8981\u53cd\u590d\u7422\u78e8\u548c\u9a8c\u8bc1\u3002\u4f5c\u4e3a11\u5e74\u7ea7\u7684\u540c\u5b66\uff0cAlex\u7684\u5b66\u4e1a\u7e41\u5fd9\uff0c\u4f46\u662f\u4ed6\u80fd\u5728\u6709\u9650\u7684\u65f6\u95f4\u5185\u9ad8\u6807\u51c6\u5b8c\u6210\u81ea\u5df1\u7684\u9879\u76ee\uff0c\u8fd9\u70b9\u975e\u5e38\u96be\u5f97\u3002\u4e0b\u9762\u6211\u4f1a\u5229\u7528\u4ed6\u505a\u8fc7\u7684\u4e1c\u897f\u518d\u51fa\u4e00\u4e9b\u6210\u679c\uff0c\u5e2e\u52a9Alex\u5728\u4e0b\u9762\u7684\u7533\u8bf7\u4e2d\u8131\u9896\u800c\u51fa\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Alex",
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui097Justin": {
        "course": [
            {
                "CourseName": "Programming Competition",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "",
                "ProjectTitle": "Recodez",
                "feedback": "Justin\u5728\u6211\u4eec\u8fd9\u4e2a\u73ed\u6beb\u65e0\u7591\u95ee\u662f\u6700\u4f18\u79c0\u7684\uff0c\u4ed6\u505a\u9898\u975e\u5e38\u7684\u5feb\uff0c\u800c\u4e14\u5e38\u5e38\u8ba9\u8eab\u8fb9\u7684\u540c\u5b66\u611f\u5230\u538b\u529b ;-) Justin\u7684\u81ea\u5b66\u80fd\u529b\u6781\u5f3a\uff0c\u4ed6\u57fa\u672c\u4e0a\u4e0d\u592a\u9700\u8981\u8001\u5e08\u4e00\u822c\u7684\u6307\u70b9\uff0c\u8fd9\u70b9\u6beb\u65e0\u7591\u95ee\u5df2\u7ecf\u8fbe\u5230\u4e86\u4e13\u4e1a\u7a0b\u5e8f\u5458\u7684\u6c34\u5e73\u3002\u968f\u7740Justin\u8fdb\u5165\u523011\u5e74\u7ea7\uff0c\u6211\u4eec\u9700\u8981\u8ba9Justin\u4e13\u6ce8\u5230\u9879\u76ee\u7684\u6df1\u5ea6\u548c\u6210\u7ee9\u4e0a\u9762\u3002\u5bf9\u4e8eJustin\uff0c\u6211\u4f1a\u5355\u72ec\u7684\u8ddf\u8fdb\uff0c\u7ed9\u4ed6\u5177\u4f53\u7684\u9879\u76ee\u8981\u6c42\u548c\u5b89\u6392\uff0c\u5728\u8fd9\u5173\u952e\u7684\u4e00\u5e74\u4e3a\u7533\u8bf7\u53d1\u529b\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Justin",
        "since": "2018年1月",
        "level": 5,
        "coursesTodo": [
            'cs500',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510', 'cp350'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui098William": {
        "course": [
            {
                "CourseName": "Programming Competition",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "",
                "ProjectTitle": "Text Mining and Book Recommendation",
                "feedback": "\u5e26\u4e86William\u5feb\u4e24\u5e74\u7684\u65f6\u95f4\uff0c\u53ef\u4ee5\u770b\u5230William\u4ece\u7b2c\u4e00\u5e74\u7684\u88ab\u52a8\u505a\u9898\u5b8c\u6210\u4f5c\u4e1a\uff0c\u5df2\u7ecf\u8f6c\u53d8\u6210\u53ef\u4ee5\u4e3b\u52a8\u7684\u601d\u8003\u95ee\u9898\uff0c\u5236\u5b9a\u5e76\u5b8c\u6210\u81ea\u5df1\u7684\u9879\u76ee\u3002William\u5728\u7f16\u7a0b\u4e0a\u7684\u80fd\u529b\u5f88\u7a81\u51fa\uff0c\u4ed6\u5c24\u5176\u559c\u6b22\u76f8\u5bf9\u590d\u6742\u7684\u4fe1\u606f\u5b66\u7ade\u8d5b\u7684\u95ee\u9898\u3002\u4e0b\u9762\u7684\u9ad8\u4e2d\u9636\u6bb5\uff0c\u6211\u4f1a\u66f4\u9ad8\u6807\u51c6\u7684\u8981\u6c42William\uff0c\u5728\u4fe1\u606f\u5b66\u548c\u9879\u76ee\u4e0a\u9762\u7a81\u7834\uff0c\u5f00\u59cb\u8ba9\u4ed6\u4e3a\u5927\u5b66\u7533\u8bf7\u50a8\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "William",
        "since": "2017年9月",
        "level": 5,
        "coursesTodo": [
            'cs410',
            'cs470',
            'cs500',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510', 'cp350'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui099Jacky": {
        "course": [
            {
                "CourseName": "Programming Competition",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "",
                "ProjectTitle": "N/A",
                "feedback": "\u901a\u8fc7\u534a\u5e74\u65f6\u95f4\u7684\u63a5\u89e6\uff0c\u6211\u7ec8\u4e8e\u660e\u767d\u4e3a\u4ec0\u4e48\u4e0a\u5b66\u671f\u7684John\u8001\u5e08\u8bc4\u4ef7Jacky\u6beb\u65e0\u7591\u95ee\u662f\u73ed\u4e0a\u6700\u4f18\u79c0\u7684\u540c\u5b66\uff0cJacky\u7ed9\u6211\u7684\u5370\u8c61\u5f88\u6df1\uff1a1\uff09Jacky\u7684\u5b66\u4e60\u6001\u5ea6\u975e\u5e38\u8ba4\u771f\uff0c\u6211\u53ef\u4ee5\u8bf4\u4ed6\u662fIrvine\u8fd9\u8fb9\u6700\u4e13\u5fc3\u7684\u540c\u5b66\uff0c\u8fd9\u70b9\u5bf9\u4e8e\u7537\u751f\u5c24\u5176\u91cd\u8981\uff0cJacky\u5f88\u6e05\u695a\u81ea\u5df1\u8981\u5b66\u4ec0\u4e48\uff0c\u9700\u8981\u600e\u4e48\u505a\uff0c\u4e0a\u8bfe\u4ed6\u6c38\u8fdc\u662f\u6700\u7528\u5fc3\u7684\uff1b2\uff09Jacky\u5b66\u4e60\u5f88\u523b\u82e6\uff0c\u6bcf\u6b21\u7684\u4f5c\u4e1a\u7ec3\u4e60\u4ed6\u90fd\u4f1a\u9ad8\u8d28\u91cf\u7684\u5b8c\u6210\u3002\u8fd9\u5b66\u671f\u7684\u7ade\u8d5b\u662fJacky\u7b2c\u4e00\u6b21\u53c2\u52a0\uff0c\u6709\u5f88\u591a\u7ecf\u9a8c\u548c\u51c6\u5907\u4e0a\u7684\u5de5\u4f5cJacky\u9700\u8981\u63d0\u9ad8\uff0c\u4e0d\u8fc7Jacky\u76ee\u6807\u660e\u786e\uff0c\u6211\u8ba4\u4e3a\u4ed6\u4e00\u5b9a\u4f1a\u5728\u4e0b\u9762\u7684\u6bd4\u8d5b\u4e2d\u6709\u6240\u5efa\u6811\u3002\u53e6\u5916\uff0c\u4f5c\u4e3a\u9ad8\u4e2d\u751f\uff0c\u6211\u4e5f\u4f1a\u5bf9Jacky\u7684\u9879\u76ee\u4e0a\u6709\u6240\u8981\u6c42\u548c\u6307\u5bfc\uff0c\u8ba9\u4ed6\u53ef\u4ee5\u5f00\u59cb\u4e3a\u5927\u5b66\u7533\u8bf7\u50a8\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Jacky",
        "since": "2018年1月",
        "level": 5,
        "coursesTodo": [
            'cs500',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510', 'cp350'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui100Andrew": {
        "course": [
            {
                "CourseName": "Programming Competition",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "",
                "ProjectTitle": "N/A",
                "feedback": "Andrew\u4f5c\u4e3a\u6211\u6700\u65e9\u7684\u5b66\u751f\uff0c\u6211\u5bf9Andrew\u6700\u4e3a\u4e86\u89e3\uff0c\u5bf9\u4ed6\u6211\u4e5f\u662f\u671f\u5f85\u6700\u9ad8\u3002\u770b\u7740Andrew\u57fa\u672c\u4e0a\u53ef\u4ee5\u81ea\u5b66\u5927\u90e8\u5206\u7684\u6280\u672f\u5185\u5bb9\uff0c\u6211\u4e0b\u4e00\u9636\u6bb5\u7684\u4e3b\u8981\u76ee\u6807\u8fd8\u662f\u4e24\u4e2a\uff1a1\uff09\u628aAndrew\u4ece\u6e38\u620f\u7684\u9879\u76ee\u4e0a\u8f6c\u5230\u5b9e\u9645\u5e94\u7528\u4e0a\uff0c\u53d1\u8bba\u6587\uff0c\u9ad8\u521b\u4e1a\uff1b2\uff09\u8ba9Andrew\u6301\u7eed\u6027\u548c\u7cfb\u7edf\u6027\u7684\u7ec3\u4e60\u4fe1\u606f\u5b66\u7684\u6bd4\u8d5b\u3002\u6839\u636e\u8fd9\u5b66\u671f\u7684\u7ecf\u9a8c\uff0cAndrew\u9700\u8981\u6211\u6765\u5b9a\u671f\u7684\u8003\u5bdf\u4ed6\u7684\u9879\u76ee\u8fdb\u5ea6\uff0c\u6691\u5047\u671f\u95f4\u6211\u4f1a\u5c3d\u529b\u8ddf\u8fdb\uff0c\u786e\u4fdd\u4ed6\u7684\u6210\u7ee9\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Andrew",
        "since": "2017年9月",
        "level": 5,
        "coursesTodo": [
            'cs500',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui101Peter": {
        "course": [
            {
                "CourseName": "Programming Competition",
                "CourseTime": "Saturday 4:30-6:00pm",
                "ProjectLink": "",
                "ProjectTitle": "Music Generation using AI",
                "feedback": "\u5e26\u4e86Peter\u5feb\u4e24\u5e74\u7684\u65f6\u95f4\uff0c\u5bf9Peter\u4e5f\u662f\u8d8a\u6765\u8d8a\u4e86\u89e3\uff0c\u770b\u7740\u4ed6\u4ece\u7b2c\u4e00\u5e74\u8ddf\u7740\u8001\u5e08\u5b8c\u6210\u4f5c\u4e1a\u7ec3\u4e60\uff0c\u5230\u8fd9\u4e00\u5e74\u53ef\u4ee5\u57fa\u672c\u4e0a\u81ea\u5b66\u6280\u672f\u5185\u5bb9\uff0c\u611f\u5230\u5f88\u6b23\u6170\u3002\u6b64\u5916\uff0cPeter\u8fd9\u4e00\u5e74\u5bf9\u505a\u9879\u76ee\u6709\u4e86\u66f4\u65b0\u7684\u8ba4\u8bc6\u548c\u4fe1\u5fc3\uff0c\u4ed6\u4e5f\u6e10\u6e10\u6709\u4e86\u611f\u89c9\u3002\u8fdb\u516511\u5e74\u7ea7\uff0cPeter\u4f1a\u5f88\u5fd9\uff0c\u800c\u8fd9\u4e00\u5e74\u5bf9\u5927\u5b66\u7684\u7533\u8bf7\u81f3\u5173\u91cd\u8981\uff0c\u6240\u4ee5\u6211\u4f1a\u9ad8\u6807\u51c6\u7684\u8981\u6c42\u4ed6\u7684\u9879\u76ee\uff0c\u5728\u8fd9\u4e00\u5e74\u91cc\u9762\u4e3a\u5927\u5b66\u7533\u8bf7\u53d1\u529b\u50a8\u5907\u5145\u8db3\u7684\u80cc\u666f\u63d0\u5347\u7d20\u6750\uff0c\u6211\u5bf9Peter\u5f88\u6709\u4fe1\u5fc3\uff01",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Peter",
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui102EricJin": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "https://www.sharemyworks.com/projects/5cd743f2660b8200158b2ba5",
                "ProjectTitle": "AI Sudoku Solver",
                "feedback": "Eric\u662f\u8fd9\u4e00\u5e74\u6211\u53d1\u73b0\u7684\u6700\u597d\u7684\u540c\u5b66\uff1a\u4ed6\u806a\u660e\u3001\u8ba4\u771f\uff0c\u66f4\u91cd\u8981\u7684\u662f\u8bfe\u540e\u81ea\u5df1\u4f1a\u53bb\u94bb\u7814\uff0c\u6bcf\u6b21\u7684\u4f5c\u4e1a\u548c\u9879\u76ee\u4e00\u5b9a\u662f\u8d85\u989d\u5b8c\u6210\u4efb\u52a1\u3002\u5f88\u65e9\u7684\u65f6\u5019\uff0cEric\u57fa\u672c\u4e0a\u4e0d\u9700\u8981\u6211\u592a\u591a\u5728\u7ec6\u8282\u4e0a\u7684\u6307\u70b9\uff0c\u4ed6\u81ea\u5df1\u5c31\u53ef\u4ee5\u5b8c\u5168\u7684\u5b8c\u6210\u81ea\u5df1\u60f3\u8981\u505a\u7684\u5185\u5bb9\u3002\u4e0b\u9762\u6211\u5bf9Eric\u7684\u8981\u6c42\u548c\u671f\u5f85\u4e5f\u4f1a\u9ad8\u4e00\u4e9b\uff0c\u5e0c\u671b\u4ed6\u80fd\u5728\u9ad8\u4e2d\u7684\u8fd9\u4e00\u5e74\u79ef\u7d2f\u51fa\u4e00\u4e9b\u4e13\u4e1a\u7684\u9879\u76ee\uff0c\u7136\u540e\u4e3a\u7533\u8bf7\u505a\u80cc\u666f\u63d0\u5347\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Eric Jin",
        "since": "2018年9月",
        "level": 5,
        "coursesTodo": [
            'cs500',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui103EricXia": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "https://www.sharemyworks.com/projects/5c719c649b0cc20014b89390",
                "ProjectTitle": "Video-Based Sentiment Analysis",
                "feedback": "Eric\u662f\u6211\u8fd9\u4e00\u5e74\u53d1\u73b0\u7684\u4e00\u4e2a\u5f88\u4f18\u79c0\u7684\u9ad8\u4e2d\u540c\u5b66\uff1a\u4ed6\u4e0a\u8bfe\u8bdd\u4e0d\u591a\uff0c\u4f46\u662f\u975e\u5e38\u6709\u81ea\u5df1\u7684\u4e3b\u610f\u548c\u60f3\u6cd5\uff0c\u6bcf\u6b21\u7684\u9879\u76ee\u4ed6\u7684\u521b\u610f\u90fd\u975e\u5e38\u72ec\u7279\uff0c\u800c\u4e14\u81ea\u5df1\u603b\u662f\u53ef\u4ee5\u72ec\u7acb\u8ba4\u771f\u7684\u5b8c\u6210\u3002\u968f\u7740Eric\u7684\u9ad8\u4e2d\u8fdb\u5165\u66f4\u7d27\u5f20\u7684\u65f6\u95f4\uff0c\u6211\u4f1a\u5bf9Eric\u7684\u8981\u6c42\u66f4\u9ad8\uff0c\u4e13\u6ce8\u5728\u4e13\u4e1a\u7684\u9879\u76ee\uff0c\u591a\u4ee5\u6210\u7ee9\u4e3a\u5bfc\u5411\uff0c\u4e3a\u5c06\u6765\u7684\u5927\u5b66\u7533\u8bf7\u50a8\u5907\u3002\u6211\u5bf9Eric\u975e\u5e38\u6709\u4fe1\u5fc3\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Eric Xia",
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui104Tommy": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "https://www.sharemyworks.com/projects/5cd74591660b8200158b2bb4",
                "ProjectTitle": "Sentiment Analysis using Chat History",
                "feedback": "Tommy\u662f\u4e00\u4e2a\u975e\u5e38\u8e0f\u5b9e\u3001\u8ba4\u771f\u7684\u540c\u5b66\u3002\u5e26\u4e86Tommy\u4e00\u5e74\u65f6\u95f4\uff0c\u80fd\u5f88\u660e\u663e\u7684\u611f\u89c9\u5230Tommy\u4ece\u5f00\u59cb\u7684\u65f6\u5019\u5bf9\u7f16\u7a0b\u4e0d\u662f\u5f88\u6709\u5e95\uff0c\u5230\u73b0\u5728\u505a\u9879\u76ee\u975e\u5e38\u6709\u4fe1\u5fc3\uff0c\u4e00\u8def\u9760\u7684\u662f\u4ed6\u81ea\u5df1\u7684\u52aa\u529b\u3002\u4e24\u4e2a\u9879\u76eeTommy\u9009\u62e9\u7684\u9898\u76ee\u90fd\u6bd4\u8f83\u96be\uff0c\u4f46\u662f\u4ed6\u90fd\u80fd\u81ea\u5df1\u72ec\u7acb\u9ad8\u8d28\u91cf\u7684\u5b8c\u6210\u3002\u4e0b\u9762\u7684\u5b66\u4e60\u6211\u4f1a\u4ee5\u76ee\u6807\u4e3a\u5bfc\u5411\uff0c\u4e89\u53d6\u5e26Tommy\u505a\u4e00\u4e9b\u4e13\u4e1a\u7684\u9879\u76ee\uff0c\u4e3a\u4ed6\u7684\u7533\u8bf7\u505a\u597d\u80cc\u666f\u63d0\u5347\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Tommy",
        "since": "2018年9月",
        "level": 5,
        "coursesTodo": [
            'cs410',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui105Harrison": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Netflix Availability Prediction",
                "feedback": "Harrison\u5b66\u4e60\u5f88\u6709\u76ee\u6807\u548c\u60f3\u6cd5\uff0c\u4ed6\u6709\u5f88\u660e\u786e\u7684\u5b66\u4e60\u5174\u8da3\u3002\u540e\u671f\u505a\u9879\u76ee\u7684\u65f6\u5019\uff0cHarrison\u53ef\u4ee5\u5f88\u5feb\u7684\u786e\u5b9a\u81ea\u5df1\u7684\u9898\u76ee\uff0c\u5e76\u4e14\u4f5c\u51fa\u539f\u578b\u3002\u5f00\u59cb\u4e0a\u8bfe\u7684\u65f6\u5019\uff0cHarrison\u6709\u65f6\u5019\u4f1a\u56e0\u4e3a\u81ea\u5df1\u7684\u7f16\u7a0b\u57fa\u7840\u4e0d\u591a\u800c\u7565\u611f\u5230\u4e0d\u81ea\u4fe1\uff0c\u4f46\u662f\u4e00\u4e2a\u5b66\u671f\u4e0b\u6765\uff0c\u53ef\u4ee5\u770b\u51fa\u4ed6\u5bf9\u57fa\u7840\u7684\u7f16\u7a0b\u77e5\u8bc6\u548cAI\u7b97\u6cd5\u6709\u4e86\u5f88\u597d\u7684\u638c\u63e1\u548c\u7406\u89e3\u3002\u4e0b\u9762\u6211\u8ba4\u4e3a\u5bf9Harrison\u6700\u91cd\u8981\u7684\u662f\u8981\u518d\u591a\u4e00\u4e9b\u7ec3\u4e60\uff0c\u628a\u7f16\u7a0b\u7684\u529f\u5e95\u505a\u624e\u5b9e\uff0c\u53e6\u5916\u5f00\u59cb\u63a8Harrison\u518d\u8fdb\u884c\u4e00\u4e9b\u66f4\u6709\u6311\u6218\u7684\u9879\u76ee\uff0c\u8ba9\u4ed6\u5728\u9879\u76ee\u4e2d\u627e\u5230\u6210\u5c31\u611f\uff0c\u540c\u65f6\u4e3a\u5927\u5b66\u7684\u7533\u8bf7\u51c6\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Harrison",
        "since": "2018年9月",
        "level": 4,
        "coursesTodo": [
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui106Tony": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "https://www.sharemyworks.com/projects/5cd744b7660b8200158b2ba8",
                "ProjectTitle": "Youtuber Popularity Growth Prediciton",
                "feedback": "Tony\u8fd9\u5b66\u671f\u8868\u73b0\u7684\u5f88\u624e\u5b9e\u548c\u7a33\u5b9a\uff0c\u4ed6\u4e0a\u8bfe\u8bf4\u8bdd\u4e0d\u591a\uff0c\u4f46\u662f\u5f88\u660e\u663e\u53ef\u4ee5\u770b\u51fa\u4ed6\u5bf9\u77e5\u8bc6\u7684\u7406\u89e3\u5f88\u5feb\uff0c\u8bfe\u5802\u7684\u7ec3\u4e60\u4e5f\u5e38\u5e38\u662f\u4ed6\u5148\u505a\u51fa\u6765\u3002\u540e\u671f\u505a\u9879\u76ee\u7684\u65f6\u5019\uff0cTony\u505a\u4e86\u4e00\u4e2a\u975e\u5e38\u6709\u65b0\u610f\u7684\u9879\u76ee\uff0c\u800c\u4e14\u4ed6\u5f88\u5feb\u7684\u628a\u9879\u76ee\u7684\u539f\u578b\u505a\u4e86\u51fa\u6765\u3002\u6211\u80fd\u770b\u51fa\u6765Tony\u5bf9\u7f16\u7a0b\u548c\u521b\u65b0\u65b9\u9762\u7684\u70ed\u60c5\u548c\u5929\u8d4b\uff0c\u4e0b\u9762\u6211\u5e0c\u671b\u5bf9Tony\u66f4\u52a0\u9ad8\u6807\u51c6\u7684\u8981\u6c42\uff0c\u4f5c\u51fa\u66f4\u591a\u7684\u4e13\u4e1a\u7684\u9879\u76ee\uff0c\u4e3a\u672a\u6765\u7684\u5927\u5b66\u7533\u8bf7\u50a8\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Tony",
        "since": "2018年9月",
        "level": 4,
        "coursesTodo": [
            'cs425',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui107Barnard": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Youtube Growth Prediction",
                "feedback": "\u5e26Barnard\u5feb\u4e24\u5e74\u7684\u65f6\u95f4\uff0c\u80fd\u611f\u89c9\u5230Barnard\u5bf9\u7f16\u7a0b\u8d8a\u6765\u8d8a\u6709\u4fe1\u5fc3\uff0c\u4e0a\u8bfe\u4e0d\u4f46\u4ed6\u5e38\u5e38\u56de\u7b54\u6211\u7684\u95ee\u9898\uff0c\u800c\u4e14\u4ed6\u8fd8\u4f1a\u4e3b\u52a8\u7684\u5e2e\u52a9\u5176\u4ed6\u540c\u5b66\u6765\u89e3\u51b3\u4ee3\u7801\u4e0a\u7684\u95ee\u9898\u3002\u7b2c\u4e00\u5e74Barnard\u4e3b\u8981\u662f\u88ab\u52a8\u7684\u5b8c\u6210\u4f5c\u4e1a\u548c\u9879\u76ee\uff0c\u8fd9\u4e00\u5e74\u4ed6\u6709\u4e86\u6bd4\u8f83\u6e05\u6670\u7684\u601d\u8def\u548c\u60f3\u6cd5\uff0c\u77e5\u9053\u81ea\u5df1\u60f3\u505a\u4ec0\u4e48\uff0c\u8981\u505a\u4ec0\u4e48\u6837\u7684\u5185\u5bb9\u3002\u4e0b\u9762\u8fdb\u5165\u9ad8\u4e2d\u7684\u9636\u6bb5\uff0c\u6211\u4eec\u9700\u8981\u5bf9Barnard\u5728\u9879\u76ee\u4e0a\u6709\u66f4\u9ad8\u7684\u8981\u6c42\uff0c\u5f00\u59cb\u4e3a\u4ed6\u7684\u5927\u5b66\u7533\u8bf7\u53d1\u529b\u50a8\u5907\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Barnard",
        "since": "2017年9月",
        "level": 4,
        "coursesTodo": [
            'cs425',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui108Zach": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "Game Winner Prediction using AI",
                "feedback": "Zach\u5728\u73ed\u4e0a\u662f\u6700\u5c0f\u7684\u540c\u5b66\uff0c\u5e73\u65f6\u8bdd\u4e0d\u591a\uff0c\u4f46\u662f\u5f88\u660e\u663e\u4f60\u80fd\u770b\u51faZach\u8111\u5b50\u8f6c\u5f97\u5f88\u5feb\uff0c\u5bf9\u7f16\u7a0b\u7684\u5185\u5bb9\u53cd\u5e94\u7684\u5f88\u7075\u654f\u3002\u8fd9\u5b66\u671f\u6559\u4e86\u5f88\u591a\u6d89\u53ca\u5230\u9ad8\u7b49\u6570\u5b66\u7684\u8ba1\u7b97\u673a\u7b97\u6cd5\uff0cZach\u5f00\u59cb\u4e0d\u662f\u5f88\u719f\u6089\uff0c\u4f46\u662f\u4e1d\u6beb\u6ca1\u6709\u5f71\u54cd\u5230\u4ed6\u7684\u9879\u76ee\u548c\u7f16\u7a0b\u3002\u6211\u5bf9Zach\u672a\u6765\u7684\u5b66\u4e60\u5145\u6ee1\u4fe1\u5fc3\uff0c\u76f8\u4fe1\u4ed6\u4e00\u5b9a\u53ef\u4ee5\u901a\u8fc7\u52aa\u529b\u5b8c\u6210\u4e00\u4e9b\u9ad8\u8d28\u91cf\u7684\u9879\u76ee\u548c\u4f5c\u54c1\uff0c\u4e3a\u5c06\u6765\u7684\u5927\u5b66\u7533\u8bf7\u53d1\u529b\u50a8\u5907\uff0c\u6211\u4e5f\u4f1a\u5bf9Zach\u6709\u66f4\u9ad8\u7684\u8981\u6c42\u3002",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Zach",
        "since": "2018年9月",
        "level": 4,
        "coursesTodo": [
            'cs425',
            'cs430',
            'cs470',
            'cs490'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui109Devin": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "3D Strategy Game using AI Engine",
                "feedback": "\u6beb\u65e0\u7591\u95ee\uff0cDevin\u662f\u4eca\u5e74\u5728Irvine\u548cArcadia\u53d1\u73b0\u7684\u6700\u4f18\u79c0\u7684\u540c\u5b66\uff0c\u539f\u56e0\u6709\u51e0\u4e2a\uff1a1\uff09Devin\u7684\u81ea\u5b66\u80fd\u529b\u6781\u5f3a\uff0c\u4ed6\u53ef\u4ee5\u770b\u89c6\u9891\uff0c\u53ef\u4ee5Google\u627e\u7b54\u6848\uff0c\u53ef\u4ee5\u8bfb\u8bba\u6587\uff0c\u4e5f\u53ef\u4ee5\u770b\u4e13\u4e1a\u7684\u5f00\u53d1\u4e66\u7c4d\uff1b\u6beb\u4e0d\u5938\u5f20\u7684\u8bf4\uff0c\u8fd9\u6837\u7684\u6c34\u54c1\u5df2\u7ecf\u8fbe\u5230\u4e86\u4e13\u4e1a\u7a0b\u5e8f\u5458\u7684\u80fd\u529b\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0cDevin\u73b0\u5728\u6709\u6ca1\u6709\u8001\u5e08\u6765\u811a\u5176\u5b9e\u5dee\u522b\u4e0d\u5927\uff0c\u8001\u5e08\u5bf9\u4ed6\u80fd\u8d77\u5230\u7684\u4f5c\u7528\u4e3b\u8981\u662f\u65b9\u5411\uff1b2\uff09Devin\u7684\u5b66\u4e60\u5f02\u5e38\u523b\u82e6\u548c\u4e3b\u52a8\u3002\u4e24\u4e2a\u9879\u76ee\uff0c\u6bcf\u4e2a\u9879\u76ee\u6211\u90fd\u80fd\u770b\u51fa\u4ed6\u6bcf\u4e00\u5929\u7684\u52aa\u529b\u548c\u5de5\u4f5c\u6210\u7ee9\uff0c\u6bcf\u4e2a\u9879\u76ee\u90fd\u662f\u4ece\u5934\u5230\u5c3e\u81ea\u5df1\u4e00\u70b9\u4e00\u70b9\u575a\u6301\u7684\u505a\u51fa\u6765\uff0c\u5e38\u5e38\u4ed6\u95ee\u6211\u4e00\u4e2a\u96be\u70b9\uff0c\u8fd8\u6ca1\u7b49\u6211\u4eec\u8ba8\u8bba\u51fa\u65b9\u6848\uff0c\u4ed6\u5c31\u5df2\u7ecf\u81ea\u5df1\u89e3\u51b3\u7136\u540e\u5f00\u59cb\u4e86\u4e0b\u4e00\u4e2a\u95ee\u9898\u3002\u8fd9\u6837\u523b\u82e6\u7684\u540c\u5b66\uff0c\u5373\u4f7f\u662f\u5728\u5973\u751f\u4e2d\u95f4\u4e5f\u662f\u4e0d\u591a\u89c1\u7684\uff1b3\uff09Devin\u7684\u7efc\u5408\u80fd\u529b\u5f88\u5f3a\uff0c\u5728\u8bfe\u5802\u4e0a\u5f88\u6d3b\u8dc3\uff0c\u53d1\u8a00\u5f88\u5927\u80c6\uff0c\u8bb2\u89e3\u4e5f\u662f\u5f88\u64c5\u957f\u3002\u6b64\u5916\uff0c\u4ed6\u548c\u540c\u5b66\u7684\u793e\u4ea4\u80fd\u529b\u5f88\u5f3a\uff0c\u6709\u5f88\u7a81\u51fa\u7684\u9886\u5bfc\u529b\uff0c\u8fd9\u70b9\u4f60\u80fd\u4ece\u4ed6\u7684\u5c0f\u56e2\u961f\u7684\u5de5\u4f5c\u4e2d\u53ef\u4ee5\u770b\u51fa\u6765\u3002\u8fdb\u5165\u9ad8\u4e2d\uff0c\u6211\u5bf9Devin\u7684\u671f\u5f85\u5f88\u9ad8\uff0c\u552f\u4e00\u4e00\u4e2a\u6211\u8ba4\u4e3aDevin\u9700\u8981\u5c1d\u8bd5\u7684\u5c31\u662f\u4ece\u7eaf\u6e38\u620f\u7684\u9879\u76ee\u4e2d\u8f6c\u5316\u5230\u975e\u6e38\u620f\u7684\u6709\u521b\u4e1a\u6f5c\u8d28\u7684\u9879\u76ee\u4e2d\u53bb\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u52a0\u5207\u5b9e\u7684\u5e2e\u52a9\u5230Devin\u7684\u5927\u5b66\u7533\u8bf7\u3002\u80fd\u6709Devin\u8fd9\u6837\u7684\u540c\u5b66\u4f5c\u4e3a\u8001\u5e08\u975e\u5e38\u6b23\u6170\uff0c\u6211\u5f88\u671f\u5f85Devin\u5728\u9ad8\u4e2d\u9636\u6bb5\u7684\u6210\u7ee9\u548c\u8868\u73b0\uff01",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Devin",
        "since": "2018年9月",
        "level": 4,
        "coursesTodo": [
            'cs500',
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510', 'cp350'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    },
    "stui110Thomas": {
        "course": [
            {
                "CourseName": "Python AI",
                "CourseTime": "Saturday 2:45 PM - 4:15 PM",
                "ProjectLink": "",
                "ProjectTitle": "3D Strategy Game using AI Engine",
                "feedback": "\u6beb\u65e0\u7591\u95ee\uff0cDevin\u662f\u4eca\u5e74\u5728Irvine\u548cArcadia\u53d1\u73b0\u7684\u6700\u4f18\u79c0\u7684\u540c\u5b66\uff0c\u539f\u56e0\u6709\u51e0\u4e2a\uff1a1\uff09Devin\u7684\u81ea\u5b66\u80fd\u529b\u6781\u5f3a\uff0c\u4ed6\u53ef\u4ee5\u770b\u89c6\u9891\uff0c\u53ef\u4ee5Google\u627e\u7b54\u6848\uff0c\u53ef\u4ee5\u8bfb\u8bba\u6587\uff0c\u4e5f\u53ef\u4ee5\u770b\u4e13\u4e1a\u7684\u5f00\u53d1\u4e66\u7c4d\uff1b\u6beb\u4e0d\u5938\u5f20\u7684\u8bf4\uff0c\u8fd9\u6837\u7684\u6c34\u54c1\u5df2\u7ecf\u8fbe\u5230\u4e86\u4e13\u4e1a\u7a0b\u5e8f\u5458\u7684\u80fd\u529b\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0cDevin\u73b0\u5728\u6709\u6ca1\u6709\u8001\u5e08\u6765\u811a\u5176\u5b9e\u5dee\u522b\u4e0d\u5927\uff0c\u8001\u5e08\u5bf9\u4ed6\u80fd\u8d77\u5230\u7684\u4f5c\u7528\u4e3b\u8981\u662f\u65b9\u5411\uff1b2\uff09Devin\u7684\u5b66\u4e60\u5f02\u5e38\u523b\u82e6\u548c\u4e3b\u52a8\u3002\u4e24\u4e2a\u9879\u76ee\uff0c\u6bcf\u4e2a\u9879\u76ee\u6211\u90fd\u80fd\u770b\u51fa\u4ed6\u6bcf\u4e00\u5929\u7684\u52aa\u529b\u548c\u5de5\u4f5c\u6210\u7ee9\uff0c\u6bcf\u4e2a\u9879\u76ee\u90fd\u662f\u4ece\u5934\u5230\u5c3e\u81ea\u5df1\u4e00\u70b9\u4e00\u70b9\u575a\u6301\u7684\u505a\u51fa\u6765\uff0c\u5e38\u5e38\u4ed6\u95ee\u6211\u4e00\u4e2a\u96be\u70b9\uff0c\u8fd8\u6ca1\u7b49\u6211\u4eec\u8ba8\u8bba\u51fa\u65b9\u6848\uff0c\u4ed6\u5c31\u5df2\u7ecf\u81ea\u5df1\u89e3\u51b3\u7136\u540e\u5f00\u59cb\u4e86\u4e0b\u4e00\u4e2a\u95ee\u9898\u3002\u8fd9\u6837\u523b\u82e6\u7684\u540c\u5b66\uff0c\u5373\u4f7f\u662f\u5728\u5973\u751f\u4e2d\u95f4\u4e5f\u662f\u4e0d\u591a\u89c1\u7684\uff1b3\uff09Devin\u7684\u7efc\u5408\u80fd\u529b\u5f88\u5f3a\uff0c\u5728\u8bfe\u5802\u4e0a\u5f88\u6d3b\u8dc3\uff0c\u53d1\u8a00\u5f88\u5927\u80c6\uff0c\u8bb2\u89e3\u4e5f\u662f\u5f88\u64c5\u957f\u3002\u6b64\u5916\uff0c\u4ed6\u548c\u540c\u5b66\u7684\u793e\u4ea4\u80fd\u529b\u5f88\u5f3a\uff0c\u6709\u5f88\u7a81\u51fa\u7684\u9886\u5bfc\u529b\uff0c\u8fd9\u70b9\u4f60\u80fd\u4ece\u4ed6\u7684\u5c0f\u56e2\u961f\u7684\u5de5\u4f5c\u4e2d\u53ef\u4ee5\u770b\u51fa\u6765\u3002\u8fdb\u5165\u9ad8\u4e2d\uff0c\u6211\u5bf9Devin\u7684\u671f\u5f85\u5f88\u9ad8\uff0c\u552f\u4e00\u4e00\u4e2a\u6211\u8ba4\u4e3aDevin\u9700\u8981\u5c1d\u8bd5\u7684\u5c31\u662f\u4ece\u7eaf\u6e38\u620f\u7684\u9879\u76ee\u4e2d\u8f6c\u5316\u5230\u975e\u6e38\u620f\u7684\u6709\u521b\u4e1a\u6f5c\u8d28\u7684\u9879\u76ee\u4e2d\u53bb\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u52a0\u5207\u5b9e\u7684\u5e2e\u52a9\u5230Devin\u7684\u5927\u5b66\u7533\u8bf7\u3002\u80fd\u6709Devin\u8fd9\u6837\u7684\u540c\u5b66\u4f5c\u4e3a\u8001\u5e08\u975e\u5e38\u6b23\u6170\uff0c\u6211\u5f88\u671f\u5f85Devin\u5728\u9ad8\u4e2d\u9636\u6bb5\u7684\u6210\u7ee9\u548c\u8868\u73b0\uff01",
                "instructor": "Dr. Yu Sun",
                "season": "2019\u5e74\u6625\u5b63"
            }
        ],
        "name": "Thomas",
        "since": "2018年6月",
        "level": 4,
        "coursesTodo": [
            'cs425',            
            'cs470',
            'cs490',
            'cs571'
        ],
        "compTodo" : [
            'cp100', 'cp200', 'cp300', 'cp400', 'cp510'
        ],
        "notifications": [
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5988\u5988"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u7238\u7238"
            },
            {
                "openId": "_UNIQUE_OPEN_ID",
                "suffix": "\u5bb6\u957f"
            }
        ]
    }

}