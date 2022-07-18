if [ -z "$1"]
    then
        echo "Model with name $1 already exists."
        exit 1
fi

if [ ${#2[@]} -eq 0 ]
    then
        echo "Attributes must not be empty."
        exit 1
fi

if [ ! ${#2[@]} ]
    then
        echo "Error! Attribute should not contain spaces."
        exit 1
fi

echo 'Creating model' "$1" 'with attributes' "$2" '...'
npx sequelize-cli model:generate --name=$1 --attributes=$2