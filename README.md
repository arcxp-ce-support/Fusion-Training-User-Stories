# Welcome to Fusion!

This repository contains all of the code necessary to complete each of the steps in the Arc PageBuilder Fusion training curriculum.

## How to use
This repo contains one branch for each of the labs in the Fusion training curriculum. Each branch builds off of the previous completed lab so you can check your solutions as you go. For example, to see the solution to lab 4, you can switch to `lab-05` branch since thats where lab 5 starts off.

It's important to note that the code in this repo may differ from the code written on-the-spot in your training session. However, the files will contain the same information and represent a complete version of each concept.

## Lab 00
As a user, I would like to be able to render content via a default output type, which allows me to customize the head of my page.

1. Clone this repo
```
git clone git@github.com:wapopartners/Fusion-Training-User-Stories.git
```

2. Change directory into Fusion-Training-User-Stories
```
cd Fusion-Training-User-Stories
```

3. Checkout the `lab-00` branch
```
git checkout lab-00
```

4. Checkout to your own branch from here
```
git checkout -b USERNAME-fusion-training
```

5. Install all packages/dependencies
```
npm install
```

6. To ensure you are using the latest fusion-cli, run:
```
npm install @arc-fusion/cli@canary
```

7. Start fusion
```
npx fusion start
```

8. Load the following link once fusion has finished loading (it might take a few minutes)
```
http://localhost/pagebuilder/pages
```

## Next up: Lab 01
