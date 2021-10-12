if [$1 -eq ""];
then
	echo "Script -- you need to type in a message please"
	exit
fi

git add --all
echo "Script -- commiting changes"
git commit -m "$1"
echo "Script -- pushing changes"
git push -u origin master
echo "Script -- finished"