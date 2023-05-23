# **Quiz-Whiz**

Quiz Whiz is an online quiz platform that allows users to create, take, and share quizzes on various topics. Whether you are a student looking to study for an exam, a teacher wanting to assess your students' knowledge, or simply someone who enjoys challenging quizzes, Quiz Whiz provides an engaging and interactive experience.


## **Features**
---
### **Landing Page (Guest User)**

- The landing page welcomes users and provides an overview of the platform's purpose.
- Guests can explore a selection of pre-made "free" quizzes without the need to register.

Web version: \
![](https://recordit.co/XDtODdIHa7.gif)

Mobile version: \
![](https://recordit.co/TQ6mo3giQY.gif)

### **Home Page (Registered User)**

- Registered users have access to all quizzes available on the platform.
- Quizzes are categorized, and users can filter quizzes based on category or search by keywords.
- The home page allows users to easily navigate through the available quizzes.

Web version: \
![](https://recordit.co/m2siNKC9Td.gif)

Mobile version: \
![](https://recordit.co/c3QUHa7mLQ.gif)

### **Log In + Register Page**

- Users can log in to their accounts or register for a new account.
- The registration process is quick and straightforward.
- User credentials are securely authenticated.
- Upon successful login, users are redirected to their user dashboard.

![](https://recordit.co/z3D1QHRZje.gif)

### **User Settings Page**

- Users can access their profile settings and update their information.
- The page displays the user's profile image, bio, username, and password.
- Users can change their profile picture, edit their bio, and update their username and password.

Web version: \
![](https://recordit.co/U8Eet3dwNl.gif)

Mobile version: \
![](https://recordit.co/8HoYAVFmXU.gif)

### **User Dashboard**

- The user dashboard provides an overview of the user's activities, history, and favorite quizzes.
- Users can view their username, profile image, and other relevant information.
- The dashboard includes tabs for the overview, quizzes created by the user, quizzes taken, and favorite quizzes.
- Users can filter and sort quizzes based on various criteria.
- Users can click on a quiz to modify or retake it.

Web version: \
![](https://recordit.co/AKEj614jB3.gif)

Mobile version: \
![](https://recordit.co/XYSNRyRoVw.gif)

### **Begin Quiz Page**

- Users can start taking a quiz by selecting it from the available quizzes.
The page displays each question of the quiz one at a time.
- Users can submit their answers for each question.

Web version: \
![](https://recordit.co/56KvJWXElh.gif)

Mobile version: \
![](https://recordit.co/mCRpysB7V7.gif)

### **Take Quiz Page (View Question/Submit an Answer)**

- This page allows users to view individual questions and submit their answers.
- Users can see question details, answer options (multiple-choice or true/false), and select their answers.
- Users can navigate through the questions and submit their responses.

Check Begin Quiz Page section for demo.

### **Quiz Summary Page**

- At the end of the quiz, users are presented with a summary page.
- The summary displays the quiz results, including the score achieved.
- Users can see which answers they got wrong and the correct answers.
- The page provides an option to retake the quiz.

Check Begin Quiz Page section for demo.

### **Create Quiz / Create Questions**

- Registered users can create their own quizzes.
- Users can choose a category for the quiz.
- Users can select questions and answers from available APIs or add custom questions.
- The feature allows users to contribute their quizzes to the platform.

Demo: \
![Demo](https://recordit.co/l3wwy7j73C.gif)

## **Installation**
---
To run Quiz Whiz locally on your machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to project directory.
3. Install the necessary dependencies. Make sure you have Node.js and npm installed. Then, run the following command:
```
npm run install-all
```
4. Set up the database. Quiz Whiz uses PostgreSQL as the database. Make sure you have PostgreSQL installed and running on your machine. Create a new database for Quiz Whiz and update the database configuration in the _.env_ file with your database credentials. (see env.example files)
5. Build and start the client. Run the following command:
```
npm run build
npm run client
```
- The application should now be running on: http://localhost:3000. \
6. Start the server
```
npm run server
```
7. Open your web browser and navigate to http://localhost:8080 to access Quiz Whiz.

That's it! You have successfully installed and set up Quiz Whiz on your local machine. You can now explore the platform, create quizzes, and start taking quizzes.

## **Technology**
---
Quiz Whiz is built using the following technologies:

### **Front-end:**

* HTML
* CSS
* JavaScript
* React.js
* Material UI

### **Back-end:**

* Node.js
* Express.js
* PostgreSQL (database)

## **Testing**
---
Quiz Whiz has been tested to ensure its stability and functionality. We used the following tools and methodologies for testing:

### **Frontend Testing with Jest**

We have employed Jest, a popular JavaScript testing framework, to write and run tests for the frontend components of Quiz Whiz. Jest provides a comprehensive suite of testing utilities, including assertions, mocking, and snapshot testing, to verify the behavior of React components and ensure that they work as intended.

To run the frontend tests, follow these steps:

1. Ensure you have all the project dependencies installed by running `npm install`.
2. Execute the command `npm test` in the root directory.
3. Jest will automatically run all the test cases and display the results in the console.

We have written unit tests and integration tests to cover critical functionalities and edge cases. These tests help us identify and fix issues early in the development process, ensuring a more robust and reliable application.

### **Continuous Integration and Delivery**

We implemented continuous integration and delivery (CI/CD) pipelines to automate the build, test, and deployment processes. This allowed us to frequently integrate code changes, run tests, and deploy new features to a staging environment. It facilitated early bug detection and ensured a stable application.

## **Team**
---
Quiz Whiz is developed by _**Potato Fixers**_, a dedicated team of software engineers. The team members and their respective roles are as follows:

**[Tiger Hong](https://github.com/tigerkh3):** Product Manager / Software Engineer \
**[Benny Van](https://github.com/bennyv8):** Architecture Owner / Software Engineer \
**[Gabriela Taylor](https://github.com/gbmyt):** UI Owner / Software Engineer \
**[Patty Long](https://github.com/pattylong):** Software Engineers \
**[Thanh Ly](https://github.com/thanhgly):** Software Engineers \
**[San Chui](https://github.com/Allen3021):** Software Engineers