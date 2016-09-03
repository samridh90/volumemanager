# Volume Manager

## Setup
1. Run `npm install`
2. Get an API key from your vm. Replace `ARRAY_NAME` and `API_TOKEN` in env.py
3. Run `./dev` to run the flask server in debug mode
4. In another terminal, run `npm run tsc:w` to watch and transpile typescript as you modify files

## Part 1
- Display Volume data using string interpolation
- Inline templating
- Two way data binding using ngModel from FormsModule on input tag

## Part 2
- Display list of selectable volumes
- Select a volume and show it's details
- Structural directives (ngFor, ngIf), event bindings (click), and property bindings (class.<name>)