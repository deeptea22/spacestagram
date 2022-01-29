# Spacestagram (A Part of Shopify Intern Application)

## Deployed Link
https://deeptea22.github.io/spacestagram/

## Problem Statement
- A webpage that can pull images, and allow the user to “like” and “unlike” their favourite images. 
- A simple to use interface that makes it easy to: 
	- Fetch data from one of NASA’s APIs and display the resulting images 
	-  Display descriptive data for each image (for example: title, date, description, etc.)
	- Like an image 
	-  Unlike an image

## Solution
### Step 1 : User Interface
The first step that I took was to come up with a simple and easy UI as well as a logo that fit the theme.
- **Logo** 
	- The logo consists of the two main elements of the website `Spacestagram`, i.e. pictures and space. Therefore, I decided to include the `shutter of a camera` to represent the picture element and `rings and stars` to represent the planets/space.
	- The colour used is a linear gradient between purple and black 
- **User Interface**
	- The website's UI was inspired by the `Projects` page in my portfolio. I felt it was relevant to the information we had to display.

### Step 2: Choosing Tech Stack
I decided to use Angular for building this website as it is one of the frameworks that is easy for me to build with and since it is statically typed, it was an additional advantage.

### Step 3: Choosing the API
I chose the APOD (Astronomy Picture of the Day), from NASA as we are provided with a new and interesting image each day and the information provided with it is engaging and just enough for us to build a website with.

### Step 4: Building the Website
- I first worked on displaying the images and the information related to it. I used the same layout as used in my Portfolio
- The SafeResourceURL interface is used for a value that's safe to use as a URL to load executable code from. This is commonly used for fetching from public API's
- I then decided to implement the like feature. Using *ngIf directive to decide which icon to display (the outline heart or the filled heart)

### Step 5: Deploying the Website
- Once the website is done, I have hosted it with the help of Github Pages.
- [Click here to view it](https://deeptea22.github.io/spacestagram/)

# Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
