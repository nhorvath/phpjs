// Main source we want to test
load('/home/kevin/workspace/plutonia-phpjs/functions/array/array_fill.js');

window.location = '/home/kevin/workspace/plutonia-phpjs/_helpers/tester.htm';
window.onload = function(){
    print('## SETS ##');
    // Execute Example Code
    returns = array_fill(5, 6, 'banana');;    
    
    // Compare call return value
    success = tester_comparer(returns, { 5: 'banana', 6: 'banana', 7: 'banana', 8: 'banana', 9: 'banana', 10: 'banana' });
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
}