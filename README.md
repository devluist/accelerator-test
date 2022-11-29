
## Stack and versions:

- node 18.12.1
- pnpm 7.17.0
- typescript 4.8
- nx 15.2

- react

## How to run:

in the root of the project run:

- pnpm use --global 18.12.1

- pnpm dlx install
- pnpm nx build directory-handler-api
- pnpm nx serve directory-handler-api

// in other terminal run
- pnpm nx serve client

There is an example folder for testing purposes at:
    `apps/directory-handler-api/src/example-folder`


## Endpoint (to check the REST API):

- POST localhost:3333/api/fetch-folder
    - append the JSON body:
    ```
        {
            "dirPath": "YOUR-PATH-FOR-THIS-PROJECT/accelerator-app/apps/directory-handler-api/src/example-folder/"
        }
    ```


> Also I wish to point to another project, older but with more time to solve a bigger problem and developed with good practices in mind

https://github.com/devluist/softour


> video is not tech oriented, as it only shows the use cases/functionalities added to the project

https://www.youtube.com/watch?v=cBGeJUG1bu8&t=1s
