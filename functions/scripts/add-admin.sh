if [ -z "$1" ]
  then
    echo "No argument supplied"
  else
  echo "please provide superadmin email"
  read email
    cd ..
    NODE_ENV=$1 node scripts/add-admin.js addAdmin $email
    exit N
fi

