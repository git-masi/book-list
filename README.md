STORYBOOKS
******************************************************************************************************************
This is a book tracking application to demonstrate what I've learned about Object Oriented Programming (OOP).

The prototype (pun intended) build can be seen in the branch "initial-commit-global-vars"
This build can add books to the list but all variables are global

The next build in the "oop-refactor" branch uses constructor functions and the object prototype to implement
all the features I wanted to add. No more variables polluting the global scope.

The final version refactors everything to use classes in the "es6-class-refactor" branch, it also adds some data persistence in local storage with static methods. Classes are much easier to read and understand, though they are merely a syntactic sugar on top of the constructor functions and object prototype.

Credit Brad Traversey's JS course for the idea though this code has some notable differences:
  *Use of materialize and my own custom CSS for a unique UI (he uses Skeleton CSS)
  *More robust validation using HTML "pattern", "maxlength", "required", etc. In addition JS .checkValidity()
  *Differences in event handling, including how the error message is displayer, and the overall OOP scheme