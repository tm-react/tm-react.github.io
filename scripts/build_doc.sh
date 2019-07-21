echo "Started Build Documentation";
echo "-------------------------------------------------------------"
echo "-------------------------------------------------------------"

cd ..

yarn build-doc
git add docs
git commit -m "Updated at `date '+%H:%M:%S %A %d-%B, %Y'`"
git push --all
