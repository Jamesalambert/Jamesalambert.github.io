
if [$1 -eq ""]
then
	echo "please write a commit message"
	exit 1
fi


git add --all
echo "commiting changes"
git commit -m "$1"
echo "pushing changes"
git push -u origin master