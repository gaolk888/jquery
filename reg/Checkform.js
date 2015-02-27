// JavaScript Document
var CheckForm=CheckForm || {};
    CheckForm.check={
		           RtClass:"Check_Rtrue",//检测成功返回的CLASS
				   RfClass:"Check_Rfalse",//检测失败返回的CLASS
                   email:/^\w{3,}@\w+(\.\w+)+$/,//邮箱
				   num:/^[0-9]*$/,//数字
				   www:/^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,//网址
				   phone:/^(\+\d{2,3}\-)?\d{11}$/,//手机
				   text:/^[\u4e00-\u9fa5]+$/,//中文
				   numeng:/^([a-zA-Z0-9]+)$/,//字母和数字
				   eng: /^([a-zA-Z]+)$/,//字母
				   qq:/^[1-9]\d{4,9}$/,//QQ
				   reg:function(addobj,obj,Str,minlen,maxlen,callback){   //(增加CLASS的元素，获取值得元素，匹配正则的编号，最小长度，最大长度，回调函数)
					       var Cstr=eval("CheckForm.check."+Str);
						   var Clen=false;
						   if(maxlen==0&&minlen==0){Clen=true}
						   else{
							    var Clength = $.trim(obj.val()).length;
								for (var i = 0; i < $.trim(obj.val()).length; i++) {
									if ($.trim(obj.val()).charCodeAt(i) > 127) {
									Clength++;
									}//判断是否为中文
								}
							    if(Clength>minlen&&Clength<maxlen){Clen=true}else{Clen=false}
						   }//判断值长度是否在规定的范围
						   if($.trim(obj.val())==''||!Cstr.test($.trim(obj.val())) || Clen==false){
							    addobj.addClass(CheckForm.check.RfClass).removeClass(CheckForm.check.RtClass);
						   }else{
							    addobj.addClass(CheckForm.check.RtClass).removeClass(CheckForm.check.RfClass); 
						   }      
					      					   
					      if( typeof callback =="function") {callback(callback);}
						  
				   } 		
}