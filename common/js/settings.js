var Masunaka;
(function (Masunaka) {
    var SiteSettings = (function () {
        function SiteSettings() {
        }
        return SiteSettings;
    }());
    SiteSettings.PLAYFAB_TITLE_ID = "C45E";
    SiteSettings.AWS_ROOT = "https://s3-ap-northeast-1.amazonaws.com/playingcards-jp/";
    SiteSettings.PHOTON_APP_ID = "eef25d10-3acc-468a-bd89-ba0efed67990";
//    SiteSettings.PHOTON_APP_ID = "5de2bc10-9ac2-47c0-9b35-8f4879b85189";  // 緊急用（PlayingCardsAppに接続）
	SiteSettings.ALLOW_MOBILE_GAME_AD = false;
    Masunaka.SiteSettings = SiteSettings;
})(Masunaka || (Masunaka = {}));

window.fbAsyncInit = function () {
	FB.init({
		appId: '418009554894913',   // playingcards.jp用
		xfbml: true,
		version: 'v17.0',
		status: true,
		cookie: true
	});
};

(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) { return; }
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.2&appId=418009554894913";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
