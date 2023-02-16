(function () {
	'use strict';

	//NOTE: 错误写法
	// const num = 99;
	// export num;

	//NOTE: 正确写法一
	let num = 99;
	//NOTE: 正确写法二
	let num1 = 88;

	var user1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		get num () { return num; },
		num1: num1
	});

	// NOTE: 没有默认导出，这样写打包报错，[!] RollupError: "default" is not exported by "命名导出.js", imported by "main.js".


	console.log(user1, num, num1);
	num++;
	console.log(user1, num, num1);

})();
