Created a React App using Vite.
Added Tailwind css in my React App.
Added Head and Body Component.
App
    Head
    Body
        SideBar
        MainContainer
            ButtonsList
            VideosContainer


Installed React-Redux Toolkit
Create Utils Folder in Src
Utils
    Store.jsx

Create a appSlice inside utils
Add <Provider store={store}> inside App.jsx

Used useDispatch to dispatch an action inside Head Component.


Higher Order Component
A Function which takes a Component and returns a new component  
Ek Component ko Modify karke bhejege 
   

Debouncing

typing Slow = 200ms
typing Fast = 30ms

Performance
-iphone pro max = 14 letter
If 1000 people are searching the same then its making 14 * 1000 api calls = 14000

with debouncing we made just 3 api calls  = 3 * 1000 = 3000 api calls

Debouncing with 200 ms
-if the difference  between 2 key strokes is < 200ms then decline the api call.
-if >200ms then make an api call and show the suggestions 
(Example Flipkart and youtube search).
 #   Y o u t u b e - 2  
 