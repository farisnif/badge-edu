export default async function handler(req, res) {
    const search = req.query.search || '';
    var badgeList = [
        {
            "badgeName": "Amazon Cognito",
            "badgeIcon": "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg",
            "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "hyperLinkText": "Amazon Cognito Info Link",
            "link": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "creatorName": "Joshua Hantman",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "stepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours",
            "pfpImg": "https://drupal.psu.edu/sites/default/files/styles/square-profile-portrait/public/headshot_0.jpg?itok=XWuUSEEP"
        },
        {
            "badgeName": "Amazon IAM",
            "badgeIcon": "https://velog.velcdn.com/images/bae_mung/post/3aa618af-6625-40c2-9562-52757b849f8c/image.png",
            "badgeDescription": "Create an I AM account with MFA enabled and Admin permissions",
            "hyperLinkText": "Amazon IAM Info Link",
            "link": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "creatorName": "Btopro",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "stepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours",
            "pfpImg": "https://drupal.psu.edu/sites/default/files/styles/square-profile-portrait/public/headshot_0.jpg?itok=XWuUSEEP"
        },
        {
            "badgeName": "Signing up for AWS Web Services",
            "badgeIcon": "https://i.pcmag.com/imagery/reviews/0179dSC1AqaTy8DbcTJMDYE-7..v1569472044.jpg",
            "badgeDescription": "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
            "hyperLinkText": "AWS Info Link",
            "link": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "creatorName": "Joel Embiid",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "stepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours",
            "pfpImg": "https://hoopshype.com/wp-content/uploads/sites/92/2021/09/i_31_5e_02_joel-embiid.png?w=1000&h=600&crop=1"
        },
        {
            "badgeName": "AWS-LAMBDA Phase 1",
            "badgeIcon": "https://khalilstemmler.com/img/blog/serverless/aws-lambda.png",
            "badgeDescription": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
            "hyperLinkText": "AWS-LAMDA Info Link",
            "link": "https://aws.amazon.com/lambda",
            "creatorName": "Joshua Hantman",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "stepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours",
            "pfpImg": "https://drupal.psu.edu/sites/default/files/styles/square-profile-portrait/public/headshot_0.jpg?itok=XWuUSEEP"

        },
        {
            "badgeName": "Amazon S3 Phase 1",
            "badgeIcon": "https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1649770076/hevo-learn/Untitled-5-1.png?_i=AA",
            "badgeDescription": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
            "hyperLinkText": "Amazon S3 Info Link",
            "link": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "creatorName": "Btopro",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "stepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours",
            "pfpImg": "https://drupal.psu.edu/sites/default/files/styles/square-profile-portrait/public/headshot_0.jpg?itok=XWuUSEEP"

        },
        {
            "badgeName": "How to Spit Fire",
            "badgeIcon": "https://i1.sndcdn.com/avatars-000062524911-k1a5hn-t500x500.jpg",
            "badgeDescription": "First of all, he's not a rapper - so stop rappin at him",
            "hyperLinkText": "Too hot - don't touch",
            "link": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9UAC2qkcrDY&psig=AOvVaw2La31sHXmbUsPJN01uyqjs&ust=1681171566964000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjG66KCnv4CFQAAAAAdAAAAABAI",
            "creatorName": "Suppa Hot Fire",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Drip Out",
            "stepTwo": "Obtaining Bars",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours",
            "pfpImg": "https://i1.sndcdn.com/avatars-000062524911-k1a5hn-t500x500.jpg"

        },
        {
            "badgeName": "How to be ready",
            "badgeIcon": "https://i.ytimg.com/vi/Qv49SzzsZu8/maxresdefault.jpg",
            "badgeDescription": "She wasn't ready.",
            "hyperLinkText": "Go Sixers",
            "link": "https://youtu.be/8Y5_Kuw1tXM",
            "creatorName": "Kevin Hart",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Be from Philly",
            "stepTwo": "Be Kevin Hart",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours",
            "pfpImg": "https://s1.ticketm.net/dam/a/199/2a4b8226-72c1-4571-9293-28e1192f0199_SOURCE"
        },
        {
            "badgeName": "How to be like Ben",
            "badgeIcon": "https://larrybrownsports.com/wp-content/uploads/2022/11/ben-simmons.jpg",
            "badgeDescription": "Trae Young sent him to retirement.",
            "hyperLinkText": "Possibly a malicious link",
            "link": "https://www.youtube.com/watch?v=-EHA4UhYuQY",
            "creatorName": "Ben Brickons",
            "badgeCompletionTime": "0.0 hours",
            "stepOne": "Forget how to play basketball",
            "stepTwo": "Miss your free throws",
            "hoursCompletionStepOne": "0.2 hours",
            "hoursCompletionStepTwo": "0.0 hours",
            "pfpImg": "https://hoopshype.com/wp-content/uploads/sites/92/2021/09/i_06_75_7c_ben-simmons_98.png"
        },
        {
            "badgeName": "How to Ascent",
            "badgeIcon": "https://i1.sndcdn.com/artworks-000598289873-kk71ft-t500x500.jpg",
            "badgeDescription": "It's all about the form.",
            "hyperLinkText": "Anything's possible...anything's possible!",
            "link": "https://www.youtube.com/watch?v=Wcz_kDCBTBk",
            "creatorName": "Spongebob Garnett",
            "badgeCompletionTime": "1.0 hours",
            "stepOne": "Don't give up",
            "stepTwo": "Be in IST256",
            "hoursCompletionStepOne": "0.2 hours",
            "hoursCompletionStepTwo": "2.0 hours",
            "pfpImg": "https://a.espncdn.com/media/motion/2014/0415/dm_140415_nba_adam_silver_facetoface/dm_140415_nba_adam_silver_facetoface.jpg?w=1600"
        },

    ];
    badgeList.map((badges) => {
        badges.index = badges.badgeName.toLowerCase() + " " + badges.badgeIcon.toLowerCase() + " " + badges.badgeDescription.toLowerCase() + " " + badges.creatorName.toLowerCase();
    });
    badgeList = badgeList.filter((badges) => {
        return badges.index.indexOf(search.toLowerCase()) > -1;
    });

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgeList);
}