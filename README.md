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

