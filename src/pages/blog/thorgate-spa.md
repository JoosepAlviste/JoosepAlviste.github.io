---
title: Charon
---

# SPA blog post - Getting started with ThorGate's SPA project template (???) 
(using Django, React, Redux, Redux Saga, Razzle, Docker)


Intro here - we at ThorGate have recently released a new version of our SPA 
template with Django, React, Redux and Redux Saga.

Even if you don't start using our template, it's a good source of inspiration 
for your own project set up.

Here is the template: 
https://gitlab.com/thorgate-public/django-project-template/tree/spa. This also 
includes a more standard Django application template on the `master` branch.


## Quick overview (??)

The template is a `cookiecutter` template, meaning that it can easily be used 
to generate your own project. The following technologies are set up by default: 
[Django][django], React, Redux, Razzle for server-side rendering, Docker, 
`docker-compose` for super simple container management, `fabric` for automating 
deploys.

* Django - we are a Python shop/agency
* React
* Redux
* Razzle - server-side rendering by default
* PostgreSQL
* SCSS
* Docker
* Docker-compose
* Fabric - used for deploys

There is more information in the [readme][].

[django]: https://www.djangoproject.com
[readme]: https://gitlab.com


## Getting up and running

There are a couple of pre-requisites for generating the project and running it. 
We use Pipenv for managing Python dependencies and generating projects. If you 
haven't used Pipenv before, then it is a really nice package manager for 
Python.

Firstly, make sure that you have `pipenv` available, it can easily be installed 
following the [installation instructions][pipenv-install] on their website. In 
order to run the project, we also need Docker and `docker-compose`. Follow 
instructions on how to install those in [Docker's 
documentation](https://docs.docker.com/engine/installation/) and [Docker 
Compose's documentation](https://docs.docker.com/compose/install/).

For reference, here are the versions of the packages I'm using:

    $ pipenv --version
    pipenv, version 2018.11.26

    $ docker --version
    Docker version 18.09.0-ce, build 4d60db472b

    $ docker-compose --version
    docker-compose version 1.23.2, build unknown

Now that everything is set up, we can generate our project! Clone the project 
template anywhere on your file system and make sure to clone the `spa` branch:

    git clone https://gitlab.com/thorgate-public/django-project-template.git -b spa
    cd django-project-template

Next, install the dependencies needed to build a new project. This includes 
`cookiecutter` and a few other packages specified in the template's `Pipfile`.

    pipenv install

This installs the packages into a `django-project-template-XXXXXXXX` virtualenv 
that you don't even have to think about -- Pipenv manages all your 
dependencies. Finally, we can generate a new project!

Let's activate the virtual environment Pipenv has created for us and navigate 
to any folder you want the project to be in:

    # Still in the django-project-template directory
    pipenv shell
    cd ~/devel/awesome-projects

Now all that's left is to run `cookiecutter` to generate the project and answer 
some questions about it:

    cookiecutter path/to/django-project-template


![generating the project](generate-project.png)

I named my project Parrot-mania as it can be used to save notable parrots.

Now that the project has been generated, we can deactivate the 
`django-project-template` Pipenv environment since it only contains 
`cookiecutter` and a few other packages. You can do this by just running 
`exit`.

A `Makefile` is included in the new project with helpers for running common 
commands. You don't need to know anything about `make` or `c`, they're just 
`bash` commands. The `Makefile` also includes a set up script that should be 
the first thing to run when setting up a new project:

    make setup

You can find additional useful `make` scripts in the readme, or by checking out 
the `Makefile`.

This will create a new Pipenv environment for you, install packages, build the 
necessary Docker images, and run initial migrations. In addition, it will ask 
you to edit your local Django settings file, just save and close that. If the 
settings file opens in `vi`, then you can save and exit by typing 
`<Esc>:wq<Enter>`.

Now that the project is set up, we can run it through Docker and opening 
`127.0.0.1:8000` in the browser:

    docker-compose up
    # or
    make docker

![landing page](landing-page.png)

Just like that we have set up a new project with a Django API, a React 
front-end app with Redux and Redux Saga, server-side rendering using Razzle, 
and a PostgreSQL database. Since all of these services are running in Docker 
containers, we didn't need to install much locally.


[pipenv-install]: 
https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv


## Overview of the structure

Let's quickly go through the most important files and directories in our new 
project. First, the top level files and directories look like this:

```
.
├── app/  - front-end web app
├── parrot_mania/  - back-end Django API
├── docker-compose.production.yml
├── docker-compose.yml
├── Dockerfile-django
├── Dockerfile-django.production
├── Dockerfile-node
├── Dockerfile-node.production
├── Makefile
└── Pipfile
```

`docker-compose` and `Dockerfile` files are used to configure Docker, check 
them out if you'd like to know more. `Makefile` includes useful utilities like 
`make setup`, `make makemigrations`, and `make quality`. A more in-depth list 
can be found in the `README.md` and, of course, you can just go through the 
`Makefile` if you'd like a detailed overview of what's there.

The `app` directory includes these important files/directories:

```
.
├── package.json
├── razzle.config.js  - Razzle's configuration file
├── SPA.md  - more info about the client app's structure
├── public/
└── src
    ├── components/  - standard React components
    ├── configuration/ - Redux & routes config
    ├── decorators/  - useful higher order components, e.g., loginRequired
    ├── ducks/  - Redux ducks
    ├── forms/  - Formik forms
    ├── sagas/  - Redux Saga sagas
    ├── settings/
    ├── styles
    │   ├── config/  - global variables & Bootstrap config
    │   └── main.scss  - all SCSS files are imported here
    ├── utils/  - useful utilities like translations and PropTypes
    └── views/  - pages
```

Since the project is based on [Razzle][razzle], we include `razzle.config.js` 
so that it can easily be configured.

We generally use `ducks` as a way to bundle together Redux actions, reducers, 
and action types. Read more about `ducks` here: [Ducks: Redux Reducer 
Bundles][ducks].

[Formik][formik] is a nice package for building forms in React without the 
tears. These forms are located in `src/forms`.


The backend structure is quite similar to a default Django app.

```
.
├── accounts/
├── manage.py
├── parrot_mania/
└── settings
    ├── base.py
    ├── local.py
    ├── local.py.example
    ├── local_test.py
    ├── local_test.py.example
    ├── production.py
    ├── staging.py
    └── test.py
```

The main difference from a default installation are that JWT authentication is 
already set up, and that Django settings are divided into environment-based 
configuration files. This means that one can easily use different settings for 
production, development, and testing.

Don't worry if this seems a bit overwhelming right now, we'll go through some 
simple examples together.


[razzle]: https://github.com/jaredpalmer/razzle
[ducks]: https://github.com/erikras/ducks-modular-redux
[formik]: https://github.com/jaredpalmer/formik


## Our example app

Now that you have a general overview of what the project structure is like, we 
can start building our small application!

I would like to create a simple Parrot reference web app that can be used to 
keep track of interesting parrots.


### Showing parrots

Let's start with showing the user their saved parrots. Since we already have 
users and authentication set up, then we don't need to spend too much effort on 
getting the current user's personal parrots.

Firstly, it's a good idea to create a superuser account for development. We 
would normally call `python manage.py createsuperuser` to create a superuser in 
Django, but since we're running everything inside Docker, then it would be a 
bit trickier. Something like this: `docker-compose run --rm django python 
manage.py createsuperuser`. But who can remember that? In order to make it 
easier for everyone, the `Makefile` includes a useful alias for running 
management commands: `make docker-manage cmd="createsuperuser"`. Now we can 
either click on "Admin panel" in the navbar or go to 
`http://127.0.0.1:8000/adminpanel/` to see the Django admin page.

Let's create a new app `parrots`!

    make docker-manage cmd="startapp parrots"

Since the folder is created inside the Docker container, it is possible that 
its permissions are incorrect. We can easily fix that by running.

    sudo chown -R "$(id -un):$(id -gn)" parrot_mania

We will also need to add our newly generated app to our `INSTALLED_APPS` in 
`settings/base.py`:

```
INSTALLED_APPS = [
    # Local apps
    'accounts',
    'parrot_mania',
    'parrots',
    ...
]
```

Now we can add our `Parrot` model in `parrots/models.py`:

```
from django.db import models

from accounts.models import User


class Parrot(models.Model):
    name = models.CharField(max_length=255)
    link = models.TextField()
    user = models.ForeignKey(User)
```

And let's register the `Parrot` model to our admin site in `parrots/admin.py` 
as well:

```
from django.contrib import admin

from parrots.models import Parrot


admin.site.register(Parrot)
```

And let's migrate our database using aliases from the `Makefile`:

    make makemigrations
    make migrate

Now we can add parrots through the Django admin!

![creating a parrot](creating-a-parrot.png)

The next step is to create a page on the front-end where we will show the 
parrots. At first, let's use some dummy data so that we can focus on just 
React. Create a file at `app/src/views/ParrotsList.js`:

```
import React from 'react';

import withView from 'decorators/withView';

const exampleParrots = [
    { id: 1, name: 'Alex', link: 'https://www.youtube.com/user/doorbell26' },
    { id: 2, name: 'Benjamin', link: 'https://www.youtube.com/user/parrotpost' },
];

const ParrotsList = () => (
    <div>
        <h1>Here are your parrots!</h1>
        <ul>
            {exampleParrots.map((parrot) => (
                <li key={parrot.id}>
                    <a href={parrot.link}>{parrot.name}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default withView()(ParrotsList);
```

But how do we say that this is an actual page? Well, we need to specify this in 
the `src/configuration.routes.js` file.

Add the following object towards the end of the existing routes, just above the 
last `NotFoundRoute`:

```
...
{
    path: '/parrots',
    exact: true,
    name: 'parrots-list',
    component: ParrotsList,
},
NotFoundRoute,
```

We also need to import the component though, so let's add this to the top of 
the file:

```
const ParrotsList = loadable(() => import('views/ParrotsList'));
```

This funny import handles code-splitting and dynamically loading only necessary 
JavaScript for the page that the user is currently on.

Now we can navigate to `http://127.0.0.1:8000/parrots` and see our example 
parrots!

![example parrots list](example-parrots-list.png)

This is a good time to make sure that our server-side rendering works, we can 
`curl` the `/parrots` page:

```
curl http://127.0.0.1:8000/parrots

...
<h1>Here are your parrots!</h1>
...
```

Even though the HTML is minified, we can see that includes our example parrots 
and their links.

So far it has been a pretty standard Django and React application, but now that 
we need to show dynamic data to the user, we need communication between the 
server and the client. Let's first do this by just standard HTTP requests and 
then bring in Redux Saga later.

Firstly, we need an API endpoint to fetch parrots. Using Django Rest Framework, 
it is possible to set up API endpoints very quickly. Let's create our DRF 
serializer in `parrot_mania/parrots/serializers.py`:

```
from rest_framework import serializers

from parrots.models import Parrot


class ParrotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parrot
        fields = ('id', 'name', 'link')
```

And our viewset in `parrot_mania/parrots/views.py`:

```
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from parrots.models import Parrot
from parrots.serializers import ParrotSerializer


class ParrotViewSet(viewsets.ModelViewSet):
    queryset = Parrot.objects.all()
    serializer_class = ParrotSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)
```

And register the viewset's URLs using Django Rest Framework's router in 
`parrot_mania/parrots/urls.py`:

```
from rest_framework import routers

from parrots.views import ParrotViewSet


router = routers.SimpleRouter()
router.register(r'parrots', ParrotViewSet, base_name='parrots')
urlpatterns = router.urls
```

And finally include these URLs in `parrot_mania/parrot_mania/rest/urls.py`

```
urlpatterns = [
    ...
    url(r'^', include('parrots.urls')),
]
```

We can test it out with `curl` if we remove the authentication check and 
current user filtering:

```
http://127.0.0.1:8000/api/parrots/

[
    {"id":1,"name":"Alex","link":"https://www.youtube.com/user/doorbell26"},
    {"id":2,"name":"Benjamin","link":"https://www.youtube.com/user/parrotpost"}
]
```

We need to get this data to our front-end though. At first, let's try to do 
this with a simple `fetch` request:

```
import React, { Component } from 'react';

import withView from 'decorators/withView';

class ParrotsList extends Component {
    state = {
        parrots: [],
    };

    componentDidMount() {
        fetch('/api/parrots')
            .then((res) => res.json())
            .then((parrots) => {
                this.setState({ parrots });
            });
    }

    render() {
        return (
            <div>
                <h1>Here are your parrots!</h1>
                <ul>
                    {this.state.parrots.map((parrot) => (
                        <li key={parrot.id}>
                            <a href={parrot.link}>{parrot.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default withView()(ParrotsList);
```

The problem here though, is that the parrots do not get server-rendered anymore 
since they are fetched in `componentDidMount` -- when the component has been 
rendered on the client side. In order to fix this, we can write our first Saga. 
A saga listens to any dispatched Redux actions and can react to them -- for 
example, dispatching more actions or making API requests. In our SPA projects, 
all communication with the API goes through Sagas.

* Set up `initial` saga with a hello world example

We have a helper library for API requests called `tg-resources` (which uses 
`fetch` or `superagent` under the hood). Using `tg-resources`, we can configure 
a "resource" that can be used to easily make API calls.

* Modify saga for fetching parrots
* Create duck for hodling parrots
* Pass parrots to ParrotList
* Make sure to check the source for SSR




### Creating a parrot

* Simple Formik view
* Dispatch action and react to it with Saga, save new parrot to store & 
    redirect to `/parrots`


### Full source of Parrot-mania

TODO: Full source here



## Future improvements to the template

* Kubernetes
* Out-of-the-box testing set up with `react-testing-library`
* GraphQL (???)

