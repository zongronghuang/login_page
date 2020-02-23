# Login Page
---
Login Page web app project for Alpha Camp Semester 3

![Demo](/Demo.png)

## Getting Started
---
This mini web project is a single-page web app that implements the basic account login functionality.[<sup>1</sup>](#1)

This project is established on the following packages:

+ **[Node.js](https://nodejs.org/en/)**: For creating a local server and a script designing server actions
+ **[Express](https://expressjs.com/)**: For setting up routing rules for directing users to specific webpages
+ **[Handlebars](https://www.npmjs.com/package/express-handlebars)**: For creating reusable webpage templates
+ **[body-parser](https://www.npmjs.com/package/body-parser)**: For analyzing data contained in request packets
+ **[nodemon](https://www.npmjs.com/package/nodemon)**: For auto-launching the local server when its server scripts are updated.

## Installing
---
To run this project, take the steps using the console:

1. Download this project from GitHub:
```
git clone https://github.com/zongronghuang/login_page.git
``` 
You can also download it as a .zip file:
**[https://github.com/zongronghuang/login_page](https://github.com/zongronghuang/login_page)**

2. Go to the **login_page** folder.

3. Install Express using the console:
```
npm install express
```

4. Install Handlebars
```
npm -i express-handlebars
```

5. Install body-parser
```
npm -i body-parser
```

6. Install nodemon
```
npm -i nodemon
```

7. Launch the local server:
```
nodemon app.js
```

8. Open a web browser and enter the URL:
```
localhost:3000
```

9. Now the web app is ready for use.

## How to Use
---
1. Enter a set of email and password to log in.

2. When the email or the password is not correct, a warning message pops up.

3. To log in successfully, you may try the following email/password combinations:

+ `nick@shield.com`/`password`
+ `peter@parker.com`/`enajyram`

4. After you log in, you are then redirected to the success page.


---
<a class="anchor" id="1">1</a>: The project and the used material are only for educational purpose, with no intention of copyright infringement.