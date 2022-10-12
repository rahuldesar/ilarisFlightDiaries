# ILARI'S FLIGHT DIARY

NOTE change "tsconfigRootDir". If you install this app.

## PROJECT STEPS.

1) `npm init` --> `npm install typescript --save-dev` 

2) add script : `"tsc": "tsc"`

3) Initialize tsconfig.json with `npm run tsc -- --init`

<b>Note</b> the extra -- before the actual argument! Arguments before -- are interpreted as being for the npm command, while the ones after that are meant for the command that is run through the script (i.e. tsc in this case).

4) `npm install express`

5) `npm install --save-dev eslint @types/express @typescript-eslint/eslint-plugin @typescript-eslint/parser`

6) `npm install --save-dev ts-node-dev`

7) making index.ts inside src folder and adjusting script likewise.

8) creating router under `src/routes` which are responsible for handling a set of specific resources such as diaries (`diaries.ts`) .

9) We will create a `service` which takes care of the data manipulation. [`src/services`]

The name service originates from <a href="https://en.wikipedia.org/wiki/Domain-driven_design">`Domain-driven design`</a> and was made popular by the `Spring` framework.

10) `types.ts`, where we'll define all our types for this project

11) Changing `diaries.json` to `diaries.ts`

12) Utility type `Pick` and `Omit`
