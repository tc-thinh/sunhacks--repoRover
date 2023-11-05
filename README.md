# sunhacks--RapidRepoRover: Repository Roadmap

## Inspiration
RapidRepoRover sprang from a heartfelt ambition to untangle the intricate web of GitHub for fellow developers. We've all been there, haven't we? Staring at a screen, trying to make sense of a new repository, feeling like we're decoding an ancient script. That shared frustration knit our team together, fueling a drive to build something more than a tool—a companion for the coding journey. We envisioned a beacon to illuminate the path through GitHub's dense forest of files and commits. So, with a dash of AI magic and a sprinkle of cloud prowess, we crafted RapidRepoRover: a friendly guide to help you navigate the GitHub maze with ease and a touch of joy.
![Two Deadlines Runner :(](https://github.com/trancongthinh6304/sunhacks--repoRover/blob/7b31c09674bf4768a164285878d51970f6e4accf/image1.jpg)

## What it does
- Introducing ***RapidRepoRover: Repository Roadmap***, a novel innovation in the realm of GitHub navigation. Our platform, a fusion of cutting-edge AI and robust **AWS technology**, is a breakthrough in understanding complex **GitHub** repository structures.
- ***RapidRepoRover*** is not just an application, it’s an innovation that allows you to effortlessly explore and comprehend intricate repositories. It’s not just a tool, it’s an innovation that unravels the complexities of GitHub repositories. Our intelligent system innovatively dissects the repository’s roadmap and presents it in an intuitive, user-friendly format.

## How we built it
The backend solution for ***RapidRepoRover: Repository Roadmap***  is built with:
* Express
* FastAPI
* Powered by AWS Deep Learning

The front-end solution for  ***RapidRepoRover: Repository Roadmap**8 is built with:
* Javascript
* Handlebars
* HTML/CSS

## Challenges we ran into
We faced the challenge of navigating GitHub's complex folders while keeping the look and feel users are familiar with. By using API, we managed to tap into repository structures and display them accurately on our platform. It wasn't easy—understanding GitHub's setup and translating that into our service required precise API calls and diligent processing of the data received.  Through perseverance and careful coding, we've crafted a navigation experience that feels intuitive for users, allowing them to explore GitHub directories effortlessly through RapidRepoRover.

## Accomplishments that we're proud of
* AI-Driven Analysis: At its core, RapidRepoRover uses sophisticated machine learning models to parse and understand the structure and contents of GitHub repositories. This analysis allows it to extract and present the most pertinent information, making sense of the myriad files and commits that can often overwhelm developers.
* Navigational Clarity: Gone are the days of aimlessly clicking through folders and files to understand a project's architecture. RapidRepoRover neatly maps out the repository, offering a clear and concise roadmap of its structure. This streamlined view is invaluable for new contributors looking to understand the project quickly or for seasoned developers trying to pinpoint specific components.
* User-Friendly Interface: The platform isn't just about powerful technology; it's also about providing a seamless user experience. RapidRepoRover boasts a frontend that is intuitive and easy to navigate, ensuring that users of all technical backgrounds can benefit from the service.

## How to run
- `git clone https://github.com/trancongthinh6304/sunhacks--repoRover`
- `cd ./path/to/sunhacks-repoRover`
- `pip install requirements.txt`
- `npm i`

*Run simultaneously*
- `npm start`
- `python ./backend/run.py`

![Our Project in Production](https://github.com/trancongthinh6304/sunhacks--repoRover/blob/7b31c09674bf4768a164285878d51970f6e4accf/image2.png)

## What we learned
* As we kicked off the RapidRepoRover program, our team traversed the territory of machine learning, AWS, and JavaScript. It was a practical education: a crash course on a real-world basis. We are well trained in managing clouds, handling algorithms, and scripting solutions for dynamic responses.
* We've emerged from this experience with more than just a product; we've gained invaluable insights and an unshakeable belief in the power of a unified team driven by a shared vision. Teamwork was our compass. Collaboration helped us develop strength as a team, finding that together, we could overcome any hurdle.
* Most of all, we have to be passionate about what we do.

## What's next for RapidRepoRover: Repository Roadmap
* Our current prototype right now is over-dependent to prompt-engineers and the LLM. In the future, we want to reinforce the functionality of the LLM by splitting prompts into smaller chunks and provide it with more background information.
* Another next step is to migrate entirely to ReactJS or AngularJS to scale our product to work with a more versatile production.
* A breakthrough in visualization: We want to combine with the graph QL database and LM with similarities/relevant score in order to connect the files together and present as graphs!
