(function(win, $){
	const CircleGeneratorSingleton = (function () {
		let instance;

		function _init() {

			function _setPosition(circle, left, right) {
					circle.css('left', left);
					circle.css('top', right)
			}

			function create(left, right) {
				const circle = $('<div class="circle"></div>');
				_setPosition(circle, left, right);
				return circle;
			}

			function add(circle) {
				$('.advert').append(circle);
			}

			return {
				create,
				add,
			}
		}

		function getInstance() {
			if (!instance) {
				instance = _init();
			}
			return instance;
		}

		return {
			getInstance,
		}
	})();
	$(function(){
		$('.advert').on('click', function(e){
			const cg = CircleGeneratorSingleton.getInstance();
			const circle = cg.create(e.clientX, e.clientY);
			cg.add(circle);
		});

		document.addEventListener('keypress', function (e) {
			if (e.key === 'a') {
				const cg = CircleGeneratorSingleton.getInstance();
				const circle = cg.create(
					Math.random() * 600,
					Math.random() * 600,
				);
				cg.add(circle);
			}
		});
	});

})(window, jQuery);