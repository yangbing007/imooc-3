(function () {
    'use strict';

    let obj = require('./导出');

    setTimeout(() =>
    {
        console.log(obj, '模块外...1');
        obj += 10;
    }, 60000);

    setTimeout(() =>
    {
        console.log(obj, '模块外...2');
    }, 70000);

})();
