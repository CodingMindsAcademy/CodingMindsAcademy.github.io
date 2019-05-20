/*
    1. Attribute的命名使用Java规则，第一个字母小写
    2. 这个JSON我们给它保持到最精简的版本，因为下面要推倒重建
    3. 这个JSON应该可以从CSV文件生成，所以我drop了courseId，等于所有内容就直接包括在这一个文件里面
    4. Notifications OpenID，我们可以再建一个CSV管理，然后在生成的时候把这两个merge到一起
*/

var stuFbDb = {
    "stua500" : {
        "name" : "Arthur",
        "course" : [
            {
                "courseId" : "cs310",
                "courseTime" : "星期二下午",
                "instructor" : "Dr. Yu Sun",
                "projectTitle" : "AI Game",
                "projectLink" : "www.google.com",
                "feedback" : "Arthur对Python的编程题目非常有兴趣，而且动手能力很强，所以整个课程他不但听讲认真，而且一直在不断自己主动尝试一些新的东西，甚至是没有讲到的东西。可以看出将来在做具体项目阶段Arthur会很有很多好的想法和表现。"
            }
        ]
    },

    "stuar901" : {
        "name" : "Aaron",
        "course" : [
            {
                "courseName" : "Python编程进阶",
                "season" : "2019年春季",
                "courseTime" : "周六班",
                "instructor" : "Dr. Yu Sun",
                "projectTitle" : "AI Game",
                "projectLink" : "http://www.google.com",
                "feedback" : "Arthur对Python的编程题目非常有兴趣，而且动手能力很强，所以整个课程他不但听讲认真，而且一直在不断自己主动尝试一些新的东西，甚至是没有讲到的东西。可以看出将来在做具体项目阶段Arthur会很有很多好的想法和表现。"
            }
        ],
        "notifications" : [
            {
                "suffix" : "妈妈",
                "openId" : "_UNIQUE_OPEN_ID"
            },
            {
                "suffix" : "爸爸",
                "openId" : "_UNIQUE_OPEN_ID"
            },
            {
                "suffix" : "家长",
                "openId" : "_UNIQUE_OPEN_ID"
            }
        ]
    }
}