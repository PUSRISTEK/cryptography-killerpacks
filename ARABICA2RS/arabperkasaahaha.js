function _rand()
	{
	return Math.floor(Math.random()*3)
}
function _encode(a)
	{
	if(a=='')
		{
		return a
	}
	u=a.match(/ش/);
	if(u)
		{
		return a
	}
	var r='';
	a=RX(encodeURIComponent(a));
	for(i=0;
	i<a.length;
	i++)
		{
		d=SR(a.charCodeAt(i));
		r+=d
	}
	r=_arabica(r,1);
	r=r.split('|').join('');
	r=r.split('0').join('');
	r=r.split('1').join('');
	r=r.split('2').join(' ');
	r=r.split('3').join(' ');
	r=RX(r);
	return r+'ش'
}
function _decode(a)
	{
	if(a=='')
		{
		return''
	}
	var r='';
	a=RX(a);
	a=a.split('ش').join('');
	a=a.replace(/\s+/ig,' ');
	a=a.split(' ').join('');
	a=_arabica(a,0);
	for(i=0;
	i<a.length;
	i+=5)
		{
		r+=String.fromCharCode(parseInt(a.substr(i,5),3))
	}
	r=decodeURIComponent(RX(r));
	return r
}
function SR(a)
	{
	g=_rand();
	var r="00000"+a.toString(3);
	r=r.substr(r.length-5,5);
	return r+'|'+g+'|'
}
function RX(c)
	{
	r='';
	for(i=0;
	i<c.length;
	i++)
		{
		r=c.substring(i,i+1)+r
	}
	return r
}
var aa=new Array();
aa[0]=['10121','غ'];
aa[1]=['10122','ظ'];
aa[2]=['10200','ذ'];
aa[3]=['10201','خ'];
aa[4]=['10202','ب'];
aa[5]=['10210','ت'];
aa[6]=['10211','س'];
aa[7]=['10212','ر'];
aa[8]=['10220','ق'];
aa[9]=['10221','ض'];
aa[10]=['10222','ف'];
aa[11]=['11000','ع'];
aa[12]=['11001','ص'];
aa[13]=['11002','ن'];
aa[14]=['11010','م'];
aa[15]=['11011','ل'];
aa[16]=['11012','ك'];
aa[17]=['11020','ي'];
aa[18]=['11021','ط'];
aa[19]=['11022','ح'];
aa[20]=['11100','ز'];
aa[21]=['11101','و'];
aa[22]=['11102','ه'];
aa[23]=['11110','د'];
aa[24]=['11111','ج'];
aa[25]=['11112','ﺵ'];
aa[26]=['01210','ﺹ'];
aa[27]=['01211','ﻃ'];
aa[28]=['01212','أ'];
aa[29]=['01220','ا'];
aa[30]=['01221','ـ'];
aa[31]=['01222','‎ݣ‎'];
aa[32]=['02000','چ'];
aa[33]=['02001','گ'];
aa[34]=['02002','آ'];
aa[35]=['02010','ة'];
aa[36]=['02102','ى'];
aa[37]=['02110','ک'];
aa[38]=['02111','ی'];
aa[39]=['02112','پ'];
aa[40]=['02120','۴'];
aa[41]=['02121','۸'];
aa[42]=['02122','۶'];
aa[43]=['02200','۱'];
aa[44]=['02201','ﭻ'];
aa[45]=['02202','ئ'];
aa[46]=['02210','ە'];
aa[47]=['02211','ﻼ'];
aa[48]=['02212','ﻻ'];
aa[49]=['02220','ّ'];
aa[50]=['02221','ِ'];
aa[51]=['02222','ژ'];
aa[52]=['10000','ڨ'];
aa[53]=['10001','ڜ'];
aa[54]=['10002','ﷲ'];
aa[55]=['10010','ﺑ'];
aa[56]=['10011','ﭘ'];
aa[57]=['10012','ﺗ'];
aa[58]=['10020','ﺛ'];
aa[59]=['10021','ﺟ'];
aa[60]=['10022','ﺣ'];
aa[61]=['10100','ﺡ'];
aa[62]=['01101','ﺿ'];
aa[63]=['01111','ﻏ'];
aa[64]=['01112','ﻓ'];
aa[65]=['01200','ﻑ'];
aa[66]=['01120','ﻕ'];
aa[67]=['01020','ﮐ'];
aa[68]=['10112','ﻝ'];
aa[69]=['01201','ﻡ'];
aa[70]=['01110','ﻥ'];
aa[71]=['11200','ﻳ'];
function _arabica(c,s)
	{
	if(s==1)
		{
		for(i=0;
		i<aa.length;
		i++)
			{
			c=c.split(aa[i][0]).join(aa[i][1])
		}
	}
	else
		{
		for(i=0;
		i<aa.length;
		i++)
			{
			c=c.split(aa[i][1]).join(aa[i][0])
		}
	}
	return c
}