# Tech Blog

## Description 

This full stack application is a mini blog website. A user can sign up, create and edit posts, and comment on posts by other users. It uses Sequelize for ORM, Handlebars as the templating language, and Express as the back end framework.

Visit the website at: [Heroku](https://damp-escarpment-99267.herokuapp.com/)

## Table of Contents

* [Techonologies Used](#technologies-used)
* [Usage](#usage)
* [Code Snippet](#code-snippet)
* [Questions](#questions)
* [Author Links](#author-links)

## Technologies Used

- JavaScript - programming language used for this app
- Node.js - runtime environment
- Express.js - back end web application framework
- MySQL - relational database management system
- Sequelize - ORM
- Handlebars - templating language
- dotenv - loads environment variables from a .env file into process.env
- Insomnia - API client for testing REST endpoints
- Bootstrap - CSS Framework
- Git - version control
- Github - where the repository is hosted
- Heroku - where the project is deployed
- Visual Studio Code - text editor
- Google Fonts - free fonts

## Usage

Visit the site at [Heroku](https://damp-escarpment-99267.herokuapp.com/) to sign up and start reading, posting, and commenting on others' posts.

## Code Snippet

Handlebars code that displays user posts on the website
```
{{#each posts as |post|}}
<div class="card mt-3" style="width: 100%;">
    <a href="/post/{{post.id}}" style="text-decoration: none;"><h3 class="card-title px-2 py-1">{{post.title}}</h3></a>
    <div class="card-body">
        <p class="card-text">{{post.text}}</p>
    </div>
    <div class="card-footer text-muted">
        Posted by {{post.user.username}} on {{format_date post.date_created}}
    </div>
</div>
{{/each}}
```

## Questions

Have any questions? My Github and email:

[My Github Link](https://github.com/mushymane)  
Email: mushymanee@gmail.com

## Author Links
[LinkedIn](https://www.linkedin.com/in/luigilantin/)