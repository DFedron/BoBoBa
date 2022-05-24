# BoBoBa
BoBoBa is a web application written in Go (Golang) and React. If you love bubble tea and want to find the best stuff near you, use BoBoBa right [NOW](http://localhost:8080)!

<img align="right" width="159px" src="https://raw.githubusercontent.com/dan-trang/MyFiles/main/boboba_logo_transparent.jpg">
**Meeting Notes:** https://docs.google.com/document/d/10_KVwOhhedKZA5a1pXN6IjK0ZJ64tvVi5Ip7ZWMY8LU/edit?usp=sharing

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
**TIP:** *When developing via the browser, use Incognito mode to avoid those nasty cookies!*

## Running the Server

We'll be using Docker Containers. The frontend will be in React app.

To get the backend server up and running, first you'll need to `cd` into the "backend" folder. 
Then run the following:

```
> docker build -t boboba .

> docker run -p 8080:8080 boboba
```

The default localhost port is set to `localhost:8080` so go ahead and head over there right [here](http://localhost:8080). 

Once there, open up the developer console to view requests and responses. For WINDOWS `Ctrl Shift J` or MAC `Ctrl Option J`. Select the <u>Network</u> table and see your requests by <u>Name</u> and <u>Status</u>.

If you want more detail on a specific event, click its <u>Name</u> to see a more detailed view.




