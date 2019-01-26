# Beep Boop!

#### Third Independent Project from Epicodus, January 25, 2019

#### By Chris Breaux

## Description

This website will take in a number from the user and display all the numbers (starting from 0) up to the users inputted number. Some numbers will be replaced with "Beep","Boop", or "I'm sorry Dave, I can't do that" according to certain specifications. You can find a list of these specifications in this README.

You can view the page by following this link:
https://cjbreaux.github.io/beep-boop

## Specifications
1. Program returns a range of numbers from 0 to the user input.
    * Input: 4
    * Output: 0,1,2,3,4

2. For numbers containing 1, ALL digits will be replaced with "Beep!"
    * Input: 4
    * Output: 0,"Beep!",2,3,4

3. For numbers containing 2, ALL digits will be replaced with "Boop!"
    * Input: 4
      * Output: 0,"Beep!","Boop!",3,4

4. For numbers containing 3, ALL digits will be replaced with "I'm sorry Dave, I can't do that right now"
    * Input: 4
    * Output: 0,"Beep!","Boop!","I'm sorry Dave, I can't do that right now.",4

5. For numbers containing both 1 & 2, ALL digits will be replaced with "Boop!"
    * Input: 12
    * Output: ..9,"Beep!","Beep!","Boop!"

6. For numbers containing both 2 & 3, ALL digits will be replaced with "I'm sorry Dave, I can't do that right now"
    * Input: 23
    * Output: (20), "Boop!","Boop!","I'm sorry Dave, I can't do that right now"




## Setup/Installation Requirements

* Open Terminal
* Change the current working directory to the location where you want the cloned directory to be made.
* Paste the following into the Terminal:
* git clone https://github.com/cjbreaux/beep-boop.git
* Press Enter to make a local clone.
* Navigate to the new cloned directory.
* Click on index.html to view the site locally.

For best results, please use a Chrome browser.
Please note, this project relies upon a CDN to load some resources. You will need to be connected to the internet for the site to display properly.

## Known Bugs

* Will continue to add text after upon repeated submissions. (workaround by hiding submit button from user!)
* Displays form even if user inputs NaN (workaround by returning output for if isNaN check)
* Ignores non-alphabetical characters as long as some numbers are inputted. (feature or bug?)

## Support and contact details

If you have any questions or concerns about the content of this README or the website, please contact the author at:  

christopherjbreaux@gmail.com

You can find additional projects by the author at:

https://github.com/cjbreaux/


## Technologies Used

This site utilizes JavaScript, jQuery v3.3.1, Bootstrap v4.2.1, and a custom CSS stylesheet.

### License

*GPL*

Copyright (c) 2019 **Chris Breaux**
