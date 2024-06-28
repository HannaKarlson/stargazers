# Stargazers

## Description

A simple app for viewing the list of stargazers for github repositories.

## Getting started

### Step 1: Clone application
```bash
git clone https://github.com/HannaKarlson/stargazers.git
```

### Step 2: Install dependencies

```bash
cd Stargazers
npm install
```

### Step 3: Install Pods

This step is needed to run the application on ios devices

```bash
cd ios && pod install
```

### Step 4: Run project

Back in the root of the project

#### For Android

```bash
npx react-native run-android
```

#### For IOS

```bash
npx react-native run-ios
```

### Usage

Type the owner name and the name of the github repository in the respective input fields and press the search button (indicated with a magnfying glass icon). A search will initially display 30 stargazers. If a repository has more then 30 stargazers simply scroll the list to load more items.

### Validate code 

To check linting and run unit tests

```bash
npm run validate
```


