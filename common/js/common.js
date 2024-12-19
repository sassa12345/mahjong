// JavaScript Document
(function($){
	$(function() {
		
		/* もどる矢印
		----------------------------------------------- */

		$(function(){
		// 「ページトップへ」の要素を隠す
		$('#pagetop').hide();

	 	// スクロールした場合のアクションが記されています
    	$(window).scroll(function(){
        	// スクロール位置が500pxを超えた場合に「ページトップへ戻るボタン」をフェードインで出現させる
        	if ($(this).scrollTop() > 500) {
            	$('#pagetop').fadeIn();
        	}
        	// スクロール位置が200px以下の場合は「ページトップへ戻るボタン」を消しておく（フェードアウトで消える）
        	else {
            	$('#pagetop').fadeOut();
        	}
    	});
    		// 「ページトップへ戻るボタン」をクリックした場合のページトップへ戻るスピードの速さが記されています
    			$('#pagetop').click(function(){
        		$('html,body').animate({
            		scrollTop: 0 }, 500);
        			return false;
    			});
		});		
				
		
		/* 下層コンテンツ、サムネイル内のホバーキャプション
		----------------------------------------------- */
		$(".hover").mouseleave(
			function () {
      			$(this).removeClass("hover");
    		}
		);
		
		
		
		/* ゲームコンテンツページ、リストページのゲームサムネイルのランダム表示
		----------------------------------------------- */
		var rBox = [];
		$('.child_rmdg').each(function() {
			rBox.push($(this).html());
		});
		rBox.sort(function() {
			return Math.random() - Math.random();
		});
		$('.child_rmdg').empty();	
		
		i = 0;
		$('.child_rmdg').each(function() {
			$(this).append(rBox[i]);
			i++;
		});
		
		
		/* ゲームコンテンツページ、リストページ下部のゲームサムネイルのランダム表示
		----------------------------------------------- */
		var rBox = [];
		$('.child_mgrmd_pickup').each(function() {
			rBox.push($(this).html());
		});
		rBox.sort(function() {
			return Math.random() - Math.random();
		});
		$('.child_mgrmd_pickup').empty();	
		
		i = 0;
		$('.child_mgrmd_pickup').each(function() {
			$(this).append(rBox[i]);
			i++;
		});
		
		
		/* ゲームコンテンツページ、リストページ下部のゲームサムネイルのランダム表示
		----------------------------------------------- */
		var rBox = [];
		$('.random_element').each(function() {
			rBox.push($(this).html());
		});
		rBox.sort(function() {
			return Math.random() - Math.random();
		});
		$('.random_element').empty();	
		
		i = 0;
		$('.random_element').each(function() {
			$(this).append(rBox[i]);
			i++;
		});
		
	});
	
})(jQuery);