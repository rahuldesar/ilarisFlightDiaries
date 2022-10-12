# PROJECT STEPS.

1) `npm init` --> `npm install typescript --save-dev` 

2) add script : `"tsc": "tsc"`

3) Initialize tsconfig.json with `npm run tsc -- --init`

<b>Note</b> the extra -- before the actual argument! Arguments before -- are interpreted as being for the npm command, while the ones after that are meant for the command that is run through the script (i.e. tsc in this case).