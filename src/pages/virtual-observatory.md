---
title: Virtual Observatory
order: 2

excerpt: |
    <p>
        A user interface for viewing and comparing measurements made by satellites,
        radiosondes etc. Request and visualize data.
    </p>

    <p>Created for the GAIA-CLIM project.</p>

tags:
    - front-end
    - javascript
    - vuejs
---

## TL;DR

* JavaScript
* Vue.js, Vuex
* [Plotly.js](https://plot.ly/javascript/)
* SCSS

## Background

Used to display measurements from radiosondes, satellites and simulations. These
measurements can be viewed as a time series, filtered, displayed and compared
on graphs. I took part in this project as a front-end developer.

This project is created for the GAIA-CLIM project.

## Front-end

The front-end is built using Vue.js and Vuex. Visualizing data was done using
Plotly.js which was integrated with Vue.js.

This application is very data-intensive since its main purpose is to fetch and display
information about all sorts of different measurements. Vuex is used to manipulate and
store all this data. There is a lot of information required to be displayed on plots
and different information is required at different times.

## Screenshots

<div class="columns">
<div class="column">

![Virtual observatory](/assets/img/virtual-observatory.png)

![Tutorials page](/assets/img/virtual-observatory-tutorials.png)

</div>
<div class="column">

![Closed sidebar and large plots](/assets/img/virtual-observatory-large.png)

</div>
</div>
