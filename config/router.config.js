export default [
  // user
  {
    path: "/user",
    component: "../layouts/UserLayout",
    routes: [
      { path: "/user", redirect: "/user/login" },
      { path: "/user/login", component: "./User/Login" },
      { path: "/user/register", component: "./User/Register" },
      { path: "/user/register-result", component: "./User/RegisterResult" }
    ]
  },

  //blank layout configuration for developing screens with zero components

  {
    path: "/",
    component: "../layouts/BlankLayout",
    Routes: ["src/pages/Authorized"],
    authority: ["admin", "user"],
    routes: [
      //landingpage
      { path: "/", redirect: "/landingpage/landingpage" },
      {
        path: "/landingpage",
        name: "landingpage",
        icon: "landingpage",
        routes: [
          {
            path: "/landingpage/landingpage",
            name: "landingpage",
            component: "./AppLandingPage/landingpage"
          }
        ]
      }
    ]
  }
  // app

  // {
  //   path: '/',
  //   component: '../layouts/BasicLayout',
  //   Routes: ['src/pages/Authorized'],
  //   authority: ['admin', 'user'],
  //   routes: [
  //    // dashboard
  //     { path: '/', redirect: '/dashboard/analysis' },
  //     {
  //       path: '/dashboard',
  //       name: 'dashboard',
  //       icon: 'dashboard',
  //       routes: [
  //         {
  //           path: '/dashboard/analysis',
  //           name: 'analysis',
  //           component: './Dashboard/Analysis',
  //         },

  //       ],
  //     },

  //       {
  //        component: '404',
  //      },
  //   ],
  // },
];
