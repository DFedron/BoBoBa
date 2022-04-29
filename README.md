# BoBoBa
<img align="right" width="159px" src="https://raw.githubusercontent.com/dan-trang/MyFiles/main/boboba_logo.jpg">
**BoBoBa** is a web application written in Go (Golang) and [front-end languages here]. If you love boba tea and want to find the best stuff near you, use **BoBoBa** right [NOW](http://localhost:8080/)!
**BOBOBA**

## Cloning this Repo

To get developing, you'll want to clone this repository first. You'll also want to create your own working branch so that your `git push` doesn't overwrite the main branch.

1. Go to your terminal and `cd` into a working folder you want /BoBoBa to be placed in. 

2. Now run `git clone https://github.com/dan-trang/BoBoBa.git`.

3. Next, make sure that you're linked to this remote repo by running these two commands:
```
git remote add origin https://github.com/dan-trang/BoBoBa.git
```
```
git remote set-url origin https://github.com/dan-trang/BoBoBa.git
```
4. Add a new working branch in your local and change to it: `git checkout -b <your-branch-name>`

Now, you should be all set up to start developing!

## Running the Server

To get the server up and running, first you'll need to `cd` into the "backend" folder. Then use:


```go
> go build -o server.exe
```
*Please delete .exe before pushing to remote repo!*

Now, you can run the executable file by simply doing `./server`. The default localhost port is set to `localhost:8080` so go ahead and head over there right [here](http://localhost:8080). 

Once there, open up the developer console to view requests and responses. For WINDOWS `Ctrl Shift J` or MAC `Ctrl Option J`. Select the <u>Network</u> table and see your requests by <u>Name</u> and <u>Status</u>.

If you want more detail on a specific event, click its <u>Name</u> to see a more detailed view.




