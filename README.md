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

## Part 3
- Create a reusable component
- Pass inputs to component
- Declare dependencies in NgModule
- Bind data from parent component to child component

## Part 4
- Create a reusable service to fetch data
- Use `ngOnInit` lifecycle hook to get data on component init
- Use `providers` array to specify service as a provider for component
- Mock out volumes data and expose to component as an `Observable`

## Part 5
- Add _Component Router_ for navigation
- `routerLink`s and `routerOutlet`s
- Shared services
- `templateUrl` and `styleUrls` properties of components
- `uppercase` pipe

## Part 6
- Add `HttpModule` as dependency
- Refactor `VolumeService` to load data from web server
- Add support for POST, PUT, and DELETE to `VolumeService`
- Update components to allow CRUD operations