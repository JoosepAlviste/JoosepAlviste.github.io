---
layout: project
title: Virtual Observatory
permalink: /virtual-observatory/
slug: virtual-observatory
order: 2

excerpt: |
    A user interface for viewing and comparing measurements made by satellites, 
    radiosondes etc. Request and visualize data.
    
    Created for the GAIA-CLIM project.

tags:
    - front-end
    - javascript
    - vuejs
---

## TL;DR

* JavaScript
* Vue.js, Vuex
* SCSS


## Background

Used to display measurements from radiosondes, satellites and simulations. These
measurements can be viewed as a time series, filtered and displayed and compared 
on graphs. I took part in this project as a front-end developer.

This project is created for the GAIA-CLIM project.


## Front-end

The front-end is built on Vue.js and Vuex. A very important part in this application
is requesting, storing and displaying information about all sorts of different 
measurements. Vuex is used to manipulate and store all this data. The structure of
the data is quite complex, so the hardest part of this project was filtering and
requesting this data.


```
// TODO: Content
```


## Screenshots


<div class="columns">
<div class="column">

![Virtual observatory](/assets/img/virtual-observatory.png)

![Tutorials](/assets/img/virtual-observatory-tutorials.png)

</div>
<div class="column">

![Closed sidebar](/assets/img/virtual-observatory-large.png)

</div>
</div>
