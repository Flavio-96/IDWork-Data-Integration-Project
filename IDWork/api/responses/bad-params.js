/**
 * bad-params.js
 *
 * A custom response that content-negotiates the current request to either:
 *  • Error Page
 *  • Reminder for user to not modify javascript
 * 
 */

module.exports = function badParams() {

    var req = this.req;
    var res = this.res;
  
    sails.log.verbose('Ran custom response: res.badParams()');
    
    return res.view('bad-params');
  
  };