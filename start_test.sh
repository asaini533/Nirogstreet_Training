cd functions
NODE_ENV=test npx sequelize-cli db:drop --env=test
NODE_ENV=test npx sequelize-cli db:create --env=test
NODE_ENV=test npx sequelize-cli db:migrate --env=test
NODE_ENV=test ./node_modules/.bin/mocha --recursive --exit