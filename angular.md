##Angular

###Angular Expressions

https://docs.angularjs.org/guide/expression

Angular expressions are JavaScript-like code snippets that are mainly placed in interpolation bindings such as `<span title="{{ attrBinding }}">{{ textBinding }}</span>`, but also used directly in directive attributes such as `ng-click="functionExpression()"`.


###What is a Module?

https://docs.angularjs.org/guide/module

You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.



###Why?

Most applications have a main method that instantiates and wires together the different parts of the application.

Angular apps don't have a main method. Instead modules declaratively specify how an application should be bootstrapped. There are several advantages to this approach:

The declarative process is easier to understand.
You can package code as reusable modules.
The modules can be loaded in any order (or even in parallel) because modules delay execution.
Unit tests only have to load relevant modules, which keeps them fast.
End-to-end tests can use modules to override configuration.



###What are Directives?

https://docs.angularjs.org/guide/directive

At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's **HTML compiler** (`$compile`) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

Angular comes with a set of these directives built-in, like `ngBind`, `ngModel`, and `ngClass`. Much like you create controllers and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.

What does it mean to "compile" an HTML template? For AngularJS, "compilation" means attaching directives to the HTML to make it interactive. The reason we use the term "compile" is that the recursive process of attaching directives mirrors the process of compiling source code in compiled programming languages.


####directive

We made a new directive. We used app.directive to create a new directive named 'appInfo'. It returns an object with three options:

    app.directive('appInfo', function() { 
      return { 
        restrict: 'E', 
        scope: { 
          info: '=' 
        }, 
        templateUrl: 'js/directives/appInfo.html' 
      }; 
    });


1.  `restrict` specifies how the directive will be used in the view. The `'E'` means it will be used as a new HTML element.

2.   `scope` specifies that we will pass information into this directive through an attribute named `info`. The `=` tells the directive to look for an attribute named `info` in the `<app-info>` element, like this:

    <app-info info="shutterbugg"></app-info>

3.   `templateUrl` specifies the HTML to use in order to display the data in `scope.info`. Here we use the HTML in js/directives/appInfo.html.


#####The restrict option is typically set to:

- 'A' - only matches attribute name
- 'E' - only matches element name
- 'C' - only matches class name
- 'M' - only matches comment

#####These restrictions can all be combined as needed:

- 'AEC' - matches either attribute or element or class name



###Understanding Controllers

https://docs.angularjs.org/guide/controller

In Angular, a Controller is defined by a JavaScript **constructor function** that is used to augment the Angular Scope.

When a Controller is attached to the DOM via the `ng-controller` directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new **child scope** will be created and made available as an injectable parameter to the Controller's constructor function as `$scope`.



###Angular basic

app.js

    var app = angular.module("myApp", []);


index.html

    <body ng-app="myApp">


js/controllers/MainController.js

    app.controller('MainController', ['$scope', function($scope) { 
      $scope.title = 'Top Sellers in Books'; 
    }]);

`ng-controller`

    <div class="main" ng-controller="MainController">


    <h1>{{ title }}</h1>


`ng-repeat`

    <div class="appetizers row" ng-repeat="appetizer in appetizers">
