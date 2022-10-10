# Living Document

* Author: Cui, Richard Chikun
* Last Updated: 07/18/2022
* Version: 0.1

---

* [JSDoc](https://jsdoc.app/)
* [diagrams.net (draw.io)](https://www.diagrams.net/)
* [GoJS](https://gojs.net/)
* [diagrams - Github](https://github.com/mingrammer/diagrams) - Diagram as Code
* [PlantUML](https://plantuml.com/) - UML diagrams
* [Swagger](https://swagger.io/tools/swagger-ui/) - REST API Documentation Tool
* [SpecFlow + LivingDoc](https://docs.specflow.org/projects/specflow-livingdoc)
* [Serenity-JS](https://serenity-js.org/) - Next generation acceptance testing
* [Pickles](https://www.picklesdoc.com/) - Living Documentation Generator
* [Rover](https://github.com/im2nguyen/rover) - Terraform Visualizer
* [compodoc](https://compodoc.app/) - Generate your Angular project documentation
* [Mermaid Live Editor](https://mermaid.live/)

---

|Category|Tools|Features|Live Demo|
|-|-|-|-|
|Frontend - Angular|compodoc|Documentation with:<ul><li>Modules</li><li>Components</li><li>Classes</li><li>Injectables</li><li>Interceptors</li><li>Guards</li><li>Interfaces</li><li>Miscellaneous</li><li>Routes</li></ul>|[Live Demo](https://compodoc.github.io/compodoc-demo-todomvc-angular/)|
|REST API - OpenAPI|Swagger|Documentation with:<ul><li>HTTP Method</li><li>HTTP Endpoint</li><li>HTTP Parameters</li><li>HTTP Body</li><li>HTTP Response</li></ul>|[Live Demo](https://petstore.swagger.io/)|
|Backend - .NET Core||
|Backend - Node.js|JSDoc||
|BDD - .NET Core|Spec + LivingDoc||
|BDD - Cucumber|Pickles||
|IaC - Terraform|Rover||
|Diagrams - Architecture|diagrams - Github||
|Diagrams - UML|PlantUML, Mermaid Live Editor||

---

## Angular Static Document

Refer [compodoc installation manual](https://compodoc.app/guides/installation.html).


1. Install compodoc
    ```
    npm install -g @compodoc/compodoc
    ```
2. Create a file named `tsconfig.doc.json`, containing a key include pointing to src folder, you can also use exclude key:
    ```
    {
        "include": ["src/**/*.ts"],
        "exclude": ["src/test.ts", "src/**/*.spec.ts", "src/app/file-to-exclude.ts"]
    }
    ```
3. Define a script task for it in your package.json (with npm 6.x):
    ```
    "scripts": {
        "compodoc": "npx compodoc -p tsconfig.doc.json"
    }
    ```
4. and run it like a normal npm script:
    ```
    npm run compodoc
    ```

All documents will be generated to `documentation` folder under the Angular project root folder.

## REST API Living Document

1. Download latest release of Swagger UI
2. 
    ```
    npm install
    npm run build
    npm run start
    ```

---

## Revision History

|Date|Version|Description|Author|
|-|-|-|-|
|07/18/2022|v0.1|Initial Draft|Cui, Richard Chikun|