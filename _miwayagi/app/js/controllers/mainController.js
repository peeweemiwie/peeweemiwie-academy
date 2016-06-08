app.controller('mainController', ['$scope', function($scope) {
  $scope.nav = ['experience', 'portfolio', 'bio', 'contact'];
  $scope.frontend = ['HTML5', 'CSS animation', 'SASS', 'Javascript', 'harp.js', 'angular.js', 'd3.js', 'node.js', 'highcharts', 'greenSock', 'jQuery', 'wordpress', 'A/B testing', 'Google Analytics', 'Omniture', 'git', 'agile'];
    $scope.design = ['Sketch', 'Edge Animation', 'Photoshop', 'Illustrator', 'Flash'];
    $scope.interest = ['accessibility', 'animation', 'data visualization', 'inclusive design', 'user-centered design'];
    $scope.works = [
    {
        'title': 'Design Technologist',
        'time': {
            'start': '6/2015',
            'end': '4/2016'
        },
        'company': 'E*TRADE',
        'detail': [
          'Creating high fidelity prototype as well as production ready responsive website from sketch wireframe using HTML5, CSS3, Javascript in Harp and Angular environment',
          'Testing cross­browser compatibility in Chrome, Firefox, Safari, and IE 8,9,10 and 11',
          'Prototyping data visualization in Highcharts',
          'Redesign styleguide'
        ]
    }, {
        'title': 'Design Technologist',
        'time': {
            'start': '4/2012',
            'end': '6/2015'
        },
        'company': 'New York Magazine',
        
        'detail': [
          'Brands: ​New York Magazine, Vulture, The Cut, Bedford + Bowery, Science of Us',
          'Creating components from Photoshop wireframes using HTML, CSS and JavaScript in a Node.js environment',
          'Testing cross­browser compatibility in Chrome, Firefox, Safari, and IE 9,10 and 11',
          'Working in an agile environment, communicating closely with designers and product managers',
          'Working both independently on small projects, as well as in a team of large­scale projects, such as the:',
        ],
        'more': [
          'original release for The Cut in 2012, creating numerous responsive design components and prototypes, which drew attention as an early adopter of mobile­-first strategy.',
          'prototype and page layout for a pop­up page which displayed Oscar real time results.',
          'utilization of Optimizely as an A/B testing tool, creating randomized experiments with multiple variants.',
          'creation of a child theme in WordPress for an NYU collaboration blog, Bedford + Bowery.'
        ]
    }, {
        'title': 'HTML Developer',
        'company': 'Freelance',
        'time': {
            'start': '3/2011',
            'end': '4/2012'
        },
        'detail': [
          'Clients: Standard & Poors, AKA NYC, Manhattan Marketing Ensemble, Tag Worldwide, Exposure New York, Mundocom - Publicis',
          'Email campaigns and microsites for newly released electric appliances.',
          'Flash ad banners.',
          'Email campaigns and landing pages for an American global hospitality company to track promotions responses.',
          'Internal site for a global leader in the beverage industry to provide their corporate guidelines.',
          'Business-­to-­business newsletter templates for Microsoft Outlook, which are easily altered depending on users’ preference in subscription.'
        ]
    }, {
        'title': 'HTML Developer',
        'time': {
            'start': '2/2009',
            'end': '2/2011'
        },
        'company': 'Evolution Store',
        
        'detail': [
          'HTML/CSS web­page development.',
          'Developed splash web pages in HTML and CSS for e­-commerce site.',
          'Coded, sent and tracked email campaigns using StreamSend.'
        ]
    }];

    $scope.education = [{
        'course': 'Certificate in Web Development',
        'school': 'New York University',
        'subjects': 'JavaScript, Information Architecture, HTML5'
    }, {
        'course': 'Certificate in Web Digital Design',
        'school': 'Baruch College',
        'subjects': 'Illustrator, Photoshop, InDesign, Dreamweaver, Flash Animation, ActionScript 2, Fireworks,HTML, CSS, JavaScript'
    }];

    $scope.portfolio = [
      {'url': 'p-lg_ill2.jpg', 'text': 'Illustrator'},
      {'url': 'p-lg_ill3.jpg', 'text': 'Illustrator'},
      {'url': 'p-lg_flash2.jpg', 'text': 'Flash animation start button - Flash'},
      {'url': 'p-lg_flash1.jpg', 'text': 'Flash animation start button - Flash'},
      {'url': 'p-lg_web2.jpg', 'text': 'Mockup for my client\'s website - Photoshop'},
      {'url': 'p-lg_email2.jpg', 'text': 'Mockup for an email campaign for my client - Photoshop'},
      {'url': 'p-lg_email1.jpg', 'text': 'Mockup for an email campaign for my client - Photoshop'}, 
      {'url': 'p-lg_web1.jpg', 'text': 'Mockup for my client\'s website - Photoshop'}, 
      {'url': 'p-lg_web4.jpg', 'text': 'Mockup for my client\'s website - Photoshop'},
      {'url': 'p-lg_ill1.jpg', 'text': 'Illustrator'},
      {'url': 'p-fortune.jpg', 'text': 'Fortune cookie says... - Photoshop'},
      {'url': 'p-fortune2.jpg', 'text': 'Fortune cookie says... - Photoshop'},
      {'url': 'p-icons.svg', 'text': 'Icons from my previous portfolio site - Sketch'}
    ];


    $scope.portfolioLinks = [{
      'site': 'github',
      'url': 'github.com/peeweemiwie',
      'imgSrc': 'p-octocat.png',
      'title': 'Repositories and code snippets'
    },{
      'site': 'codepen',
      'url': 'codepen.io/peeweemiwie/pens/public/',
      'imgSrc': 'logo-codepen.svg',
      'title': 'CSS drawing and animation'
    }];

    $scope.codepen = [{
      'height': 369,
      'slugHash': 'OyEXGj',
      'preview': false,
      'title': 'Canvas drawing'
    },{
      'height': 445,
      'slugHash': 'YyvWmG',
      'preview': true,
      'title': 'CSS-animation dice'
    },{
      'height': 235,
      'slugHash': 'JXWrdR',
      'preview': false,
      'title': 'SASS drawing'
    }];

    $scope.photoGallery = [
      {
        'imgSrc': 'choco-cake',
        'alt': 'Chocolate cake',
        'title': 'My friend\'s birthday cake! 🎂 Nom nom nom...'
      },
      {
        'imgSrc': 'bread',
        'alt': 'Cinnamon raisins walnuts bread',
        'title': 'Cinnamon raisins walnut bread. It was so tasty!'
      },
      {
        'imgSrc': 'pomeg',
        'alt': 'Carving fruit',
        'title': 'I love creating imaginary friends. Here is Mr. Pomeg.'
      },
      {
        'imgSrc': 'clem',
        'alt': 'Carving fruit',
        'title': 'This is Miss Clemie. She is my avatar on github.'
      },
      {
        'imgSrc': 'love',
        'alt': 'My cat',
        'title': 'Love lounging in his truck.'
      },
      {
        'imgSrc': 'love-bag',
        'alt': 'My cat',
        'title': 'Shopaholic!'
      }];



    $scope.bio = [
      'In my personal life, 👹 I have many things that I am passionate about.😀',
      'First of all, I have been practicing yoga for over a decade. In 2008, I earned a 200 hours Hatha yoga teacher certification 💮 from Sivananda Yoga Institute. I currently practice at Integral Yoga Institute.🙏',
      'I also love cooking 🍳 and baking.🍰 I have immense love of sharing food I make with my friends and coworkers. *My Oatmeal cookies 🍪 are irresistible!',
      'When the weather is nice out, 🌞 I enjoy hiking,🚶 camping ⛺ and swimming. 🏊 There is nothing like being surrounded by nature.🍃',
      'Giving back to our community 👪 is another passion of mine. 👍 I have contributed to numerous organizations for people with cancer 💐 and underprivileged children.🚸',
      'I reside in Roosevelt Island NYC 🚠 where I find it a very relaxing environment to live.🏡',
      'I adopted a cat 😺 recently. His name is Love who brightens my life.🐾',
      '*I bring my delicious baked goods 🍩 to work 2-3 times a month.✨'
    ];

    // $scope.bio.snippet = $sce.trustAsHtml($scope.bio.snippet);
    $scope.escapeHTML = function() {
      return $sce.trustAsHtml($scope.bio);
    };

}]);


app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});