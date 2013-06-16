var direct = 'DIRECT';
var httpProxy = "SOCKS 127.0.0.1:1080;SOCKS5 127.0.0.1:1080;DIRECT";

var directList = [
"",
"127.0.0.1",
"localhost",
"img.feitian001.com",
"res.yyets.com",
"tp.m-team.cc",
"bdimg.com",
"sogou.com",
"easylist-downloads.adblockplus.org",
"tile.is.autonavi.com",
"wallstreetcn.com",
"service.sony.com.cn",
"ocsp.geotrust.com",
"bankcomm.com",
"img.funshion.com",
"www.ictruth.net",
"z.cn",
"ku6.cn",
"pic4.qiyipic.com",
"clash.zuuga.com",
"xiaonei.com",
"www.xzhfjq.com",
"css.tv.itc.cn",
"bbs.hamanw.com",
"ra.gg",
"cc.cocimg.com",
"i3.itc.cn",
"static.gtimg.com",
"www.panabit.com",
"ecpm.tanx.com",
"t.cn",
"mb.hd.sohu.com.cn",
"client.10010.com",
"i1.w.hjfile.cn",
"qq.com",
"www.ctrip.com",
"bbs.360safe.com",
"tmall.com",
"www.sonystyle.com.cn",
"myarticle.enet.com.cn",
"app.yinxiang.com",
"ddimg.cn",
"alicdn.com",
"my.ctrip.com",
"yihaodian.com",
"www.qiyipic.com",
"163.com",
"www.illuma.cn",
"kaixin001.com",
"apk.veryhd.net",
"cc1.midasplayer.com",
"www.pxm-tuts.com",
"georiot.co",
"yihaodianimg.com",
"www.dfdaily.com",
"www.mikrotik.com.cn",
"renren.com",
"js.tv.itc.cn",
"ucimg.vcimg.com",
"arashi-forever.com",
"hotmail.com",
"icbc.com.cn",
"i2.hjfile.cn",
"www.alltrip.cn",
"ttg.im",
"live.com",
"ufile.qushimeiti.com",
"bbs.5imx.com",
"www.tumblr.com",
"bankofchina.com",
"upaiyun.com",
"images.pchome.net",
"www.jiankongbao.com",
"12306.cn",
"mmcdn.cn",
"cdn31.mukkyu.com",
"a1.itc.cn",
"ctc.qzonestyle.gtimg.cn",
"360buyimg.com",
"cdn.tanx.com",
"github.com",
"youdao.com",
"panabit.hr",
"org.cn",
"www.iostoy.com",
"www.spp54.com",
"swf.yk.ss3w.com",
"sinaapp.com",
"js.kk3g.net",
"bbs.hd-tv.cn",
"abduzeedo.com",
"ros.hr",
"95599.cn",
"cache.soso.com",
"ifanr.cn",
"sinaimg.cn",
"tudou.com",
"rrimg.com",
"v4.vcimg.com",
"pass.17173.com",
"www.assoc-amazon.cn",
"ku6img.com",
"static.wumii.cn",
"www12.53kf.com",
"images.shazam.com",
"www9.enet.com.cn",
"www.atpanel.com",
"dpfile.com",
"201.img.pp.sohu.com.cn",
"paipai.com",
"i-7.vcimg.com",
"images2.dzsofts.net",
"www.ciac.sh.cn",
"img.club.pchome.net",
"instashareapp.com",
"static.bshare.cn",
"hk.ozcosmetics.com",
"evernote.com",
"i0.itc.cn",
"upyun.com",
"kankan.com",
"alimama.com",
"www.zealer.com",
"www.flusherlink.com",
"www.instructables.com",
"51buy.com",
"pic.ctrip.com",
"apple.com",
"widget.wumii.cn",
"service.supercell.net",
"bbsimages.weiphone.com",
"douban.com",
"appshopper.com",
"95559.com.cn",
"macromedia.com",
"icloud.com",
"ocsp.entrust.net",
"bing.com",
"update.evernote.com",
"sohu.com",
"www.zgjzy.org",
"www.zdic.net",
"ku6.com",
"sourceforge.net",
"icson.com",
"nas.hr",
"common.hjfile.cn",
"ocsp.thawte.com",
"www.ip.cn",
"wwwimages.adobe.com",
"file.qianqian.com",
"hexun.com",
"chinahongrun.com",
"img.pchome.net",
"tudouui.com",
"sch.yk.ss3w.com",
"sinajs.cn",
"s94.cnzz.com",
"www.playmemoriescameraapps.com",
"spdb.com.cn",
"asp.cctv.ccgslb.net",
"mobileimg.gewara.com",
"e.apsalar.com",
"w.cnzz.com",
"assets.tumblr.com",
"ax.phobos.apple.com.edgesuite.net",
"zhihu.com",
"mat1.gtimg.com",
"alimama.cn",
"www.news365.com.cn",
"soku.com",
"p4.zhimg.com",
"pic3.qiyipic.com",
"s14.cnzz.com",
"tdimg.com",
"xnimg.cn",
"officeimg.vo.msecnd.net",
"b.bshare.cn",
"etao.com",
"img1.gtimg.com",
"webresource.ctrip.com",
"p.3.cn",
"outlook.com",
"vemedio.com",
"ku6cdn.com",
"youku.com",
"q1.cnzz.com",
"aoodoo.weiphone.com",
"toruk.tanx.com",
"c67.orca.io",
"tw.appstore.com",
"kanimg.com",
"www.96dx.com",
"acookie.tanx.com",
"v.iask.com",
"boc.cn",
"tm.hr",
"fuckgfw.hr",
"ccb.com",
"www.kuaizip.com",
"i1.itc.cn",
"www.sonomawireworks.com",
"bing.com.cn",
"www.ifixit.com",
"jscss.kdslife.com",
"220.img.pp.sohu.com.cn",
"count.cpm.cm.sandai.net",
"www.write.org.cn",
"weibo.com",
"www.verycd.com",
"discuz.gtimg.cn",
"ocsp.godaddy.com",
"biz5.sandai.net",
"microsoft.com",
"ifanr.com",
"paipaiimg.com",
"solidot.org",
"newsletter.runkeeper.com",
"www.news-japan.cn",
"360buy.com",
"pic1.bengou.com",
"c-pic3.weikan.cn",
"www.uyunad.com",
"bling1.midasplayer.com",
"xbeta.info",
"cmbchina.com",
"passport.shipin.cn",
"p3.zhimg.com",
"p.tanx.com",
"xnpic.com",
"amazon.cn",
"1.url.cn",
"t.wallstreetcn.com",
"baidu.com",
"ykimg.com",
"st.3.cn",
"taobaocdn.com",
"net.cn",
"huaban.com",
"api.gewara.com",
"2013.img.pp.sohu.com.cn",
"www.aptchina.com",
"i0.article.fd.pchome.net",
"www.yyets.com",
"alipay.com",
"www.evernote.com",
"v2ex.com",
"dianping.com",
"images.enet.com.cn",
"translate.google.cn",
"i2.itc.cn",
"2014.img.pp.sohu.com.cn",
"sina.com.cn",
"xunlei.com",
"c.cnzz.com",
"dangdang.com",
"resource.weiphone.com",
"www.msftncsi.com",
"taobao.com",
"alipayobjects.com",
"www.interoperabilitybridges.com",
"api.travis-ci.org",
"bdstatic.com",
"ic.internet.sony.tv",
"www.speedtest.net",
"tbcdn.cn",
"qzonestyle.gtimg.cn",
"aicdn.com",
"www.smmail.cn",
"iface.iqiyi.com",
"shaonas.local",
"apple.com.cn",
"www.adobe.com",
"rel.discuz.soso.com",
"s20.cnzz.com",
"www.ticket2010.com",
"abchina.com",
"hdwing.com",
"yupoo.com",
"com.cn",
"ac.atpanel.com"
];

var directAcc = {};
for (var i = 0; i < directList.length; i += 1) {
	directAcc[directList[i]] = true;
}

var topLevel = {
	"ac": true,
	"co": true,
	"org": true,
	"com": true,
	"net": true,
	"edu": true
};

// only handles IPv4 address now
function hostIsIP(host) {
	var parts = host.split('.');
	if (parts.length != 4) {
		return false;
	}
	for (var i = 3; i >= 0; i--) {
		if (parts[i].length === 0 || parts[i].length > 3) {
			return false;
		}
		var n = Number(parts[i]);
		if (isNaN(n) || n < 0 || n > 255) {
			return false;
		}
	}
	return true;
}

function host2Domain(host) {
	if (hostIsIP(host)) {
		return ""; // IP address has no domain
	}
	var lastDot = host.lastIndexOf('.');
	if (lastDot === -1) {
		return ""; // simple host name has no domain
	}
	// Find the second last dot
	dot2ndLast = host.lastIndexOf(".", lastDot-1);
	if (dot2ndLast === -1)
		return host;

	var part = host.substring(dot2ndLast+1, lastDot);
	if (topLevel[part]) {
		var dot3rdLast = host.lastIndexOf(".", dot2ndLast-1);
		if (dot3rdLast === -1) {
			return host;
		}
		return host.substring(dot3rdLast+1);
	}
	return host.substring(dot2ndLast+1);
}

function FindProxyForURL(url, host) {
	return (directAcc[host] || directAcc[host2Domain(host)]) ? direct : httpProxy;
}