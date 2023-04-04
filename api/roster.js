export default async function handler(request, res) {
    console.log("TEST");
    const roster = [
        {
            "badgeName": "Amazon Cognito",
            "badgeIcon": "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg",
            "badgeDescription": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "hyperLinkText": "Amazon Cognito Info Link",
            "link": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "creatorName": "Joshua Hantman",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "StepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours"
        },
        {
            "badgeName": "Amazon IAM",
            "badgeIcon": "https://velog.velcdn.com/images/bae_mung/post/3aa618af-6625-40c2-9562-52757b849f8c/image.png",
            "badgeDescription": "Create an I AM account with MFA enabled and Admin permissions",
            "hyperLinkText": "Amazon IAM Info Link",
            "link": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "creatorName": "Joshua Hantman",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "StepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours"
        },
        {
            "badgeName": "Signing up for AWS Web Services",
            "badgeIcon": "https://www.nicepng.com/png/detail/27-278232_amazon-web-services-logo-png-transparent-amazon-web.png",
            "badgeDescription": "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
            "hyperLinkText": "AWS Info Link",
            "link": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "creatorName": "Joshua Hantman",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "StepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours"
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
            "StepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours"
        },
        {
            "badgeName": "Amazon S3 Phase 1",
            "badgeIcon": "https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1649770076/hevo-learn/Untitled-5-1.png?_i=AA",
            "badgeDescription": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
            "hyperLinkText": "Amazon S3 Info Link",
            "link": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "creatorName": "Joshua Hantman",
            "badgeCompletionTime": "4.0 hours",
            "stepOne": "Creating your first Lambda Function",
            "StepTwo": "Putting in your Hello Lamda Node.js code",
            "hoursCompletionStepOne": "2.0 hours",
            "hoursCompletionStepTwo": "2.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
}