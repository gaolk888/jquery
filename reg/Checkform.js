// JavaScript Document
var CheckForm=CheckForm || {};
    CheckForm.check={
		           RtClass:"Check_Rtrue",//���ɹ����ص�CLASS
				   RfClass:"Check_Rfalse",//���ʧ�ܷ��ص�CLASS
                   email:/^\w{3,}@\w+(\.\w+)+$/,//����
				   num:/^[0-9]*$/,//����
				   www:/^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,//��ַ
				   phone:/^(\+\d{2,3}\-)?\d{11}$/,//�ֻ�
				   text:/^[\u4e00-\u9fa5]+$/,//����
				   numeng:/^([a-zA-Z0-9]+)$/,//��ĸ������
				   eng: /^([a-zA-Z]+)$/,//��ĸ
				   qq:/^[1-9]\d{4,9}$/,//QQ
				   reg:function(addobj,obj,Str,minlen,maxlen,callback){   //(����CLASS��Ԫ�أ���ȡֵ��Ԫ�أ�ƥ������ı�ţ���С���ȣ���󳤶ȣ��ص�����)
					       var Cstr=eval("CheckForm.check."+Str);
						   var Clen=false;
						   if(maxlen==0&&minlen==0){Clen=true}
						   else{
							    var Clength = $.trim(obj.val()).length;
								for (var i = 0; i < $.trim(obj.val()).length; i++) {
									if ($.trim(obj.val()).charCodeAt(i) > 127) {
									Clength++;
									}//�ж��Ƿ�Ϊ����
								}
							    if(Clength>minlen&&Clength<maxlen){Clen=true}else{Clen=false}
						   }//�ж�ֵ�����Ƿ��ڹ涨�ķ�Χ
						   if($.trim(obj.val())==''||!Cstr.test($.trim(obj.val())) || Clen==false){
							    addobj.addClass(CheckForm.check.RfClass).removeClass(CheckForm.check.RtClass);
						   }else{
							    addobj.addClass(CheckForm.check.RtClass).removeClass(CheckForm.check.RfClass); 
						   }      
					      					   
					      if( typeof callback =="function") {callback(callback);}
						  
				   } 		
}