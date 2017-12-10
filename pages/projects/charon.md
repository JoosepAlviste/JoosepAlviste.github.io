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

The created module (Charon) integrates an automated tester with the Moodle 
learning management system so that students' programming tasks can be 
automatically tested. This module also includes a convenient user interface 
for checking students' submissions and grading them. Also, the module 
supports setting multiple deadlines for different groups.

This plugin was created for use in Tallinn University of Technology. I 
coordinated with teachers, teacher's assistants and students who use this 
module daily, in order to create a system that is useful and usable. This 
project was created for my Bachelor's thesis and is still being maintained 
by me.


## Back-end

The back-end is built on the Laravel framework integrated with Moodle. 
The back-end modifies Charon task instances, communicates with the tester 
and provides an API to be used by the teacher's grading environment SPA.

Whenever a student commits something to their Git repository the submission
process begins. First, a Git hook sends a request to the module which saves
some information about the submission and forwards everything to the tester.
The tester then tests the code and sends the results back to the module. 
The module then calculates the final grade for the student and saves the 
submission and the grades.


## Front-end

There are a number of pages in this plugin. The views include modifying 
course settings, creating and editing tasks, students' task view and
a single-page application grading environment for teachers. All of these
are styled using SCSS and made interactive using Vue.js.

The grading interface allows the teacher to check students'
submissions, comment on them, see the attached files and change the
amount of points gained for submissions. This interface is much
more user friendly and faster than the default Moodle gradebook. The 
default Moodle gradebook loads all submissions for all students, which 
can take a while and the resulting table is difficult to read. This 
grading interface, however uses AJAX to load only the needed submissions. 


## Continuous integration

We use Jenkins and Docker to deploy new versions of the Moodle environment
as well as the created plugin. Whenever a new version is ready to be deployed
it is first deployed to the test server to make sure everything works. If 
everything is okay, it is deployed to production. The deployment process is 
triggered by pressing a button in Jenkins and choosing the deployment 
environment. The whole Moodle installation is set up inside a Docker container
and the same container configuration is used on the test and production 
servers. In conclusion, every deployment only takes minimal effort and the
process is automated.


## Screenshots

<div class="columns">
<div class="column">

![Charon instance creation form minimal](/assets/img/charon-instance-form-minimal.png)

![Grading view for teachers](/assets/img/charon-popup-grading-view.png)

</div>
<div class="column">

![Charon instance creation form advanced](/assets/img/charon-instance-form-advanced.png)

![One submission view for teachers](/assets/img/charon-popup-submission-view.png)

</div>
</div>
