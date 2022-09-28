// {
//     "name": "posts_service",
//     "protocol": "http",
//     "port": "<%- new URL(process.env.POSTS_API_BASE_URL).port %>",
//     "useCORS": true,
//     "defaultResponse": {
//       "statusCode": 600,
//       "body": "Default response: something in this imposter might not be configured correctly"
//     },
//     "stubs": [
//       {
//         "predicates": [
//           {
//             "and": [
//               {
//                 "equals": {
//                   "method": "POST",
//                   "path": "/api/posts"
//                 }
//               },
//               {
//                 "contains": {
//                   "body": {
//                     "name": "arun"
//                   }
//                 }
//               }
//             ]
//           }
//         ],
//         "responses": [
//           {
//             "is": {
//               "statusCode": 400,
//               "headers": {
//                 "Content-Type": "application/json; charset=utf-8"
//               },
//               "body": <%include ./data/user_validation_error.json%>
//             }
//           }
//         ]
//       },
      
//       {
//         "predicates": [
//           {
//             "and": [
//               {
//                 "equals": {
//                   "method": "GET",
//                   "path": "/api/users"
//                 }
//               }
//             ]
//           }
//         ],
//         "responses": [
//           {
//             "is": {
//               "statusCode": 200,
//               "headers": {
//                 "Content-Type": "application/json; charset=utf-8"
//               },
//               "body": "sccess"
//             }
//           }
//         ]
//       },
//       {
//         "predicates": [
//           {
//             "and": [
//               {
//                 "equals": {
//                   "method": "POST",
//                   "path": "/api/posts"
//                 }
//               }
//             ]
//           }
//         ],
//         "responses": [
//           {
//             "is": {
//               "statusCode": 200,
//               "headers": {
//                 "Content-Type": "application/json; charset=utf-8"
//               },
//               "body": "successfully creatd new post"
//             }
//           }
//         ]
//       }
//     ]
//   }