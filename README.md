# [Quiz Bowl Practice Simulator](https://github.com/DelarioNance/qb-practice-simulator)

> A full-stack application to facilitate high school Quiz Bowl practice sessions

## Contact Info.

- Name: **Delario Nance, Jr.**
- Email: [**denance@davidson.edu**](mailto:denance@davidson.edu)
- LinkedIn: [**delario-nance-jr**](https://www.linkedin.com/in/delario-nance-jr/)

## Table of Contents

- [Quiz Bowl Practice Simulator](#quiz-bowl-practice-simulator)
  - [Contact Info.](#contact-info)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
    - [Registering a new player and team](#registering-a-new-player-and-team)
    - [Generating a question during a match to read to teams](#generating-a-question-during-a-match-to-read-to-teams)
    - [Viewing player statistics](#viewing-player-statistics)
  - [*What is Quiz Bowl?*](#what-is-quiz-bowl)
  - [*How did this Project Start?*](#how-did-this-project-start)
  - [*What Technologies were Used?*](#what-technologies-were-used)
  - [Acknowledgments](#acknowledgments)


## Screenshots

### Registering a new player and team

![registration](/README_images/registration.png)

### Generating a question during a match to read to teams

![match](/README_images/example-tossup.png)

### Viewing player statistics

![stats](/README_images/stats.png)




## *What is Quiz Bowl?*

Quiz Bowl is an academic trivia game played many students across middle schools, high schools, and colleges in the USA. During a typical Quiz Bowl match, two teams of 4-5 players listen to a sequence of trivia questions called "tossups." While listening to a particular question, all players can "buzz in" to answer the question but cannot speak to their teammates. If the player answers incorrectly (called a "neg"), then their team loses 5 points and its players cannot buzz in until the next tossup starts. On the other hand, if the player answers correctly, then his/her team will receive 10 points or even 15 points (called a "power"), if the player answered correctly early in the question. Once a player answers correctly, their team is given a "bonus" - a set of three questions, each worth 10 points, which all members of the team can work together on to answer.

To visualize the rules of a standard Quiz Bowl match, please refer to the following YouTube videos produced by the Quiz Bowl companies NAQT and PACE:

- [NAQT - "How to Play Quiz Bowl"](https://www.youtube.com/watch?v=Z1_AfFYGORQ&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=Mjg2NjY&feature=emb_logo)
- [PACE - "What is Quizbowl?"](https://www.youtube.com/watch?v=spCgHocfBi0)

## *How did this Project Start?*

This project started during the Fall 2023 iteration of Davidson College's CSC 353 (Database Systems) course. For each student's final project, they had to build a software in pairs/groups to apply the knowledge of databases which they gained in the course.

Due to the large enjoyment which he had when playing Quiz Bowl in high school, [Delario Nance, Jr.](#contact-info) wanted to build a Quiz Bowl-related software for his CSC 353 project. To gain more ideas, Nance reached out to [DuBose Tuller](#acknowledgments), who Nance knew had also played Quiz Bowl in high school. Tuller responded by stating that he had already found a partner [Shahin Ahmadi](#acknowledgments) but would be happy to explore Nance's idea. Eventually, Nance, Tuller, and Ahmadi decided to work together to build a Quiz Bowl-related software for their final project. After brainstorming over an software to build, the team ultimately decided to build a full-stack application in which high school Quiz Bowl coaches could: (1) register their players, (2) generate random tossups to read to their players, and (3) record each players' results from matches.

## *What Technologies were Used?*

- Client Technologies
    - HTML
    - CSS
    - JavaScript
- Server Technologies
    - Node.js
    - Express.js
    - Embedded JavaScript (EJS)
- Database Technologies
    - MySQL
- Additional Technologies
    - QB Reader API
    - ChatGPT
    - Microsoft Copilot

## Acknowledgments

- **DuBose Tuller** and **Shahin Ahmadi**, for co-working on the QB Practice Simulator
- **Dr. Hammurabi Mendes**, for teaching Davidson College's Fall 2023 iteration of CSC 353 (Database Systems), for giving advice on how to design the project's database schema, and for providing a template on creating full-stack web apps with JavaScript
- **ChatGPT** and **Microsoft Copilot**, for providing CSS snippets for styling and for answering questions about JavaScript syntax
- **Geoffrey Wu**, for creating the QBReader website whose API was used in this project to generate random tossups during matches