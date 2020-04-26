# **_The Fellowship of the tretton37**

[View page here](https://sandraols.github.io/the-fellowship-of-tretton37/)

## ***Product***

_The Fellowship of the tretton37 is a simple, responsive webpage that displays all the employees at tretton37. 

First, the page visitors will see a nice landing page and as soon as they scroll down (or press the arrow icon) the employees section shows up. Each employee is displayed in a container containing their name, office, links to their socials and with a button that eventually will lead to more information about them. Note that this button will not lead to any more information in this version, but the thought is to add this later on.

## ***Design***

When it comes to the design I wanted to keep some branding from tretton37, such as colors and the underscore before headings. This is simply because it’s already well implemented and I don’t see any reasons to change it too much. The font I used is called [Space Mono](https://fonts.google.com/specimen/Space+Mono). This is one of my favourite fonts and I really think it's well suited for tech related stuff. 

For the landing page I chose a photo that I think goes well with the company branding and spirit. I wanted to keep the information here simple, so that it is clear what the page is for. Displaying consultants. 

Once the user have scrolled down to the next section a header will fade in with the text _The Fellowship of the tretton37. This header will stay at the top of the page as long as the user is in this section. 

About the employee containers I wanted the information to be in focus rather than having a lot of things going on. That’s why everything is displayed in white and dark blue. To not make it too boring though I added some nice hover effects to pump up the user experience. The employees are displayed sorted alphabetically. 

## ***For developers***

To run this webpage simply open index.html in a browser.

The style in this webpage is written in [Sass](https://sass-lang.com/). To compile and watch for changes during development run `sass assets/styles/style.scss assets/styles/style.css --watch` from the project home directory.

[Normalize.css](https://necolas.github.io/normalize.css/) is used for more consistent browser rendering.

For the consultant section [handlebars](https://handlebarsjs.com/) is used. There is one template for all the consultants which can be found in index.html with the id `consultant-template`.

[jQuery](https://jquery.com/) is used for DOM event listeners, calling the API and DOM manipulation.

The icons are from [Font Awesome](https://fontawesome.com/).

The arrow in the bottom of the landing page is animated using [Animate.css](https://daneden.github.io/animate.css/).



## ***The features***

Since this was a time limited assignment I decided to go for the features that I felt most confident with.

These are the ones I chose:

***_design/accessibility:***

Fancy animations

A modern design

No UI framework used (such as Bootstrap, Ant)

Responsive design, works on mobile and tablets

***_functionality:***

No framework used (such as React, Angular, Vue)

Available on a free public url (such as Azure, Heroku) 

***_testing/QA:***

Works in Chrome, Firefox, Edge

Works in IE11