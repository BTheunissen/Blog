---
title: Recompose, the Higher Order Component Utility Belt
date: "2018-05-28T09:55:00.000"
layout: post
draft: false
path: "/posts/recompose/"
category: "Programming"
tags:
  - "React"
  - "Front End"
description: "A dive into the Recompose library for React.js"
---

For the past few months I have returned to doing more front-end development within my role at REA Group, and have developed a strong appreciation for how 'functional' React aspires to be. The project I have been working on leverages the Serverless framework, with all of our back-end compute being performed using AWS Lambda, and our data storage being shared across the DynamoDB and S3 services, however this blog post will not discuss this aspect of the project (as interesting as it is).

The aspect of this project I wish to discuss is the [Recompose library](https://github.com/acdlite/recompose) which we are heavily leveraging, authored by Ivan Clark of the core React.js team at Facebook, and Ivan Starkov. This library attempts to break down much of the tedious boilerplate you may write when creating a sufficiently complex React.js app, such as components requiring functionality based on lifecycle hook, or conditional branches in React component mounts (such as a loading screen).

Managing complex component behaviour and app state is not an easy problem within React to solve and has a plethora of solutions, we chose Recompose as we found our project is not complex enough to yet warrant Redux, but vanilla React would lead us to writing a large amount of tedious boilerplate.

Recompose is based on the concept of _higher-order components (HOCs)_, which in the vain of higher-order functions, are simple a component which takes in one component and returns another with 'enhanced' behaviour. Browsing the type signatures of the Recompose docs makes this immediately apparently, almost every function within the library API is some variation of taking some arguments, and then returning a _HOC_.

The simplest example, `setDisplayName` has the following signature,

```javascript
setDisplayName(displayName: string): HigherOrderComponent
```

Given a string, the function will return a HOC which will take a component and return a component with the display name set to the initial function input. A very simple example but this is immensely useful for debugging components!

The 'secret sauce' which Recompose gives the user is the `compose` method,

```javascript
compose(...functions: Array<Function>): Function
```

Given an array of functions, in this case higher-order components which are functions that take a single component and return another, the compose function will flatten the entire array together into a single higher-order component. This allows us to define individual higher-order components to encapsulate behaviours and then merge all of the functions together to form one component which represents the 'container' for the component.

We use this in combination with our UI library to maintain a strong seperation between component functionality/behaviour and the display/view of the component itself!
