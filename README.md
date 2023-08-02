<!-- TO START THE PROJECT -->
  prequisites:
    - nodejs installed
    - pgsql running on localhost

  cmd:
    - yarn add 
    - yarn start

<!-- STEPS TO CREATE SIMILAR PROJECT -->
1. Create new nest project
 - nest new <projectname>

2. Install DB dependecies for pgsql
 - yarn add @nestjs/typeorm typeorm pg --save


3. Install to read env variables from .env file
 - yarn add dotenv --save

4. Create .env files and put all vars

5. Setup index.ts file in src/config folder

6. Create ormconfig.ts file and import typeorm config from src/config folder