message=$1
if [$message -eq ""];
then
	echo "please write a commit message"
# 	read message
	exit 1
fi

echo $message

# git add --all
# echo "commiting changes"
# git commit -m "$1"
# echo "pushing changes"
# git push -u origin master



# ((e = $1 / $2))
# echo $e