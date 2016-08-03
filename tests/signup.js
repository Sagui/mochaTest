
var assert = require('assert');

var Chance = require('chance'); 

var chance = new Chance();

//Prepare user data

var data = {
	email : chance.email(),
	name : chance.first(),
	lastname: chance.last()
};





describe('splitscnd signup', function() {
    it('should SignUp', function () {


    	this.timeout(60000);//set timeout to be a minute

        browser.url('http://roadrunner-dashboard-dev.s3-website-us-east-1.amazonaws.com/#!/');
    
	    browser.waitForExist('input[name="email"]');

	    browser.setValue('input[name="email"]',data.email);
	    
	    browser.waitForExist('#password');
	    
	    browser.setValue('#password','Test123');
	    
	    browser.setValue('input[name="confirm-password"]','Test123');
	    
	    browser.setValue('input[name="first-name"]',data.name);
	    
	    browser.setValue('input[name="last-name"]', data.lastname);
	    
	    browser.click('input[type="checkbox"]');
	    
	    browser.waitForExist('.sign-up-button');
	    
	    browser.click('.sign-up-button');

	    browser.pause(3000);


    });
});
 




/*describe('splitscnd signup', function() {
    it('shouldnt SignUp existing email', function () {
    	this.timeout(60000);//set timeout to be a minute

    	browser.reload();

        browser.url('http://roadrunner-dashboard-dev.s3-website-us-east-1.amazonaws.com/#!/');
    
	    browser.waitForExist('input[name="email"]');

	    browser.setValue('input[name="email"]',data.email);
	    
	    browser.waitForExist('#password');
	    
	    browser.setValue('#password','Test123');
	    
	    browser.setValue('input[name="confirm-password"]','Test123');
	    
	    browser.setValue('input[name="first-name"]',data.name);
	    
	    browser.setValue('input[name="last-name"]', 'Test5');
	    
	    browser.click('input[type="checkbox"]');
	    
	    browser.waitForExist('.sign-up-button');
	    
	    browser.click('.sign-up-button');

	    browser.pause(3000);

	    //wait for the confirmation message
	    //with this message we know that the user
	    //was successfully registered.
	    browser.waitForVisible('.ui.negative.message');

	    var errorText = browser.getText('.ui.negative.message p');

	    assert.equal(errorText,"Unexpected server error: User already exists. Please try again.");

    });
});

*/


	

		
