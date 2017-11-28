---
layout: project
title: Charon
slug: charon
permalink: /charon/
order: 1

excerpt: |
    Integrating Moodle LMS with an automated tester for testing students' 
    solutions to programming tasks. User interface for grading students. 
    Automated build process.

    Actively used in Tallinn University of Technology since January 2017.

tags:
    - back-end
    - front-end
    - php
    - laravel
    - javascript
    - vuejs
    - continuous-integration
---

## TL;DR

* Back-end: PHP, Laravel
* Front-end: JavaScript, Vue.js, SCSS, SPA grading interface
* Continuous Integration: Jenkins, Docker
* UML, Diagrams: Enterprise Architect, Sketch
* Mockups: Sketch
* Thesis (in Estonian): [https://digi.lib.ttu.ee/i/?8104](https://digi.lib.ttu.ee/i/?8104)


## Background

The created module integrates an automated tester with the Moodle learning 
management system so that students' programming tasks can be automatically 
tested. This module also includes a convenient user interface for checking 
students' submissions and grading them. Also, the module supports setting 
multiple deadlines for different groups.

This plugin was created for use in Tallinn University of Technology. I 
coordinated with teachers, teacher's assistants and students who use this 
module daily, in order to create a system that is useful and usable. This 
project was created for my Bachelor's thesis and is still being maintained 
by me.


## Back-end

The back-end is built on the Laravel framework which is integrated to be
used alongside Moodle. The back-end modifies Charon task instances, 
communicates with the tester and provides an API to be used by the 
teacher's grading environment SPA.


## Front-end

There are a number of pages in this plugin. The views include modifying 
course settings, creating and editing tasks, students' task view and
a single-page application grading environment for teachers. All of these
are styled using SCSS and made interactive using Vue.js.


## Screenshots

<div class="columns">
<div class="column">

![Instance form minimal](/assets/img/charon-instance-form-minimal.png)

![Popup grading view](/assets/img/charon-popup-grading-view.png)

</div>
<div class="column">

![Instance form advanced](/assets/img/charon-instance-form-advanced.png)

![Popup submission view](/assets/img/charon-popup-submission-view.png)

</div>
</div>
