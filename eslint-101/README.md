# JS ESLINT CONFIG (On WebStorm)

## steps
1. ```npm install --eslint --save-dev```
2. ```npx eslint --init```

## WebStorm settings
1. Find the ESLint settings
Settings ->  
Languages and Frameworks ->  
JavaScript ->  
Code Quality Tools ->  
ESLint 

2. Use Automatic or Manual ESLint configuration
3. check `Run eslint --fix on save`

## Issues
- Fix on save on older versions (We need to add a File Watchers Plugin to use this feature, described here )