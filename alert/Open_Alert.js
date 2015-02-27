// JavaScript Document
var Open_Alert=Open_Alert || {};
    Open_Alert.show={
		         Add_html:"",//载入容器
				 Call:"no",
		         box:function(s_width,s_title,s_content,s_time,callback){
					    var _time;
					    var _left=($(window).width()-s_width)/2;
				 Open_Alert.show.Add_html='<div id="hy_full_window" style="height:'+$(document).height()+'px;width:'+$(window).width()+'px;"></div>'+
						          '<div id="hy_Opendiv" style="width:'+s_width+'px;left:'+_left+'px;"><h3>'+s_title+'<span id="hy_Opendiv_close"></span></h3>'+
								  '<div class="hy_Opendiv_content">'+s_content+'</div></div>';		           
						$('body').append(Open_Alert.show.Add_html);
						
						$('#hy_Opendiv').css('top',$(document).scrollTop()+(($(window).height()-$('#hy_Opendiv').height())/2)+'px')
						
						 if(s_time>0){
						   _time=setTimeout(function(){$('#hy_Opendiv_close').click()},s_time);
						}
						$('#hy_Opendiv_close').click(function(){
										 Open_Alert.show.Call="yes";
										  if( typeof callback =="function") {callback(callback);}else{
										   
									      $('#hy_full_window,#hy_Opendiv').remove();
										  }
										  clearTimeout(_time);
									})
						
							      
							
			    },//载入内容弹窗
				Confirm:function(s_width,s_title,s_content,s_time,callback){
					    var _time;
					    var _left=($(window).width()-s_width)/2;
				 Open_Alert.show.Add_html='<div id="hy_full_window" style="height:'+$(document).height()+'px;width:'+$(window).width()+'px;"></div>'+
						          '<div id="hy_Opendiv" style="width:'+s_width+'px;left:'+_left+'px;"><h3>'+s_title+'<span id="hy_Opendiv_close"></span></h3>'+
		'<div class="hy_Opendiv_content">'+s_content+'</div><div class="hy_confirm_wrap">'+
		'<a href="javascript:void(0);" id="Open_confirm_no">取消</a><a href="javascript:void(0);" id="Open_confirm_ok">确定</a></div></div>';		           
						$('body').append(Open_Alert.show.Add_html);
						
						$('#hy_Opendiv').css('top',$(document).scrollTop()+(($(window).height()-$('#hy_Opendiv').height())/2)+'px')
						
						 if(s_time>0){
						   _time=setTimeout(function(){$('#hy_Opendiv_close').click()},s_time);
						}
						$('#hy_Opendiv_close,#Open_confirm_no').click(function(){
										
									      $('#hy_full_window,#hy_Opendiv').remove();										  
										  clearTimeout(_time);
						})
						$('#Open_confirm_ok').click(function(){
										 
										 Open_Alert.show.Call="yes";
										   if( typeof callback =="function"){
											   callback(callback);
											  }else{
									      $('#hy_full_window,#hy_Opendiv').remove();
											  }
										  clearTimeout(_time);
										  
						})
						
				}, //确定取消弹窗
				Message:function(s_width,s_content,s_time,s_state,callback){
					    var _state=s_state;// 0调成功样式 1调失败样式 2调加载中样式
				        var _time;
					    var _left=($(window).width()-s_width)/2;
						if(_state==0){
							 Open_Alert.show.Add_html='<div id="hy_full_window" style="height:'+$(document).height()+'px;width:'+$(window).width()+'px;"></div>'+
						          '<div id="hy_Opendiv" style="width:'+s_width+'px;left:'+_left+'px;"><h3><span id="hy_Opendiv_close"></span></h3>'+
		                          '<div class="hy_Opendiv_content"><div class="Open_state_success"><span></span><p>'+s_content+'</p></div></div>'+
		                                  '</div>';		           
						}else if(_state==1){
							 Open_Alert.show.Add_html='<div id="hy_full_window" style="height:'+$(document).height()+'px;width:'+$(window).width()+'px;"></div>'+
						          '<div id="hy_Opendiv" style="width:'+s_width+'px;left:'+_left+'px;"><h3><span id="hy_Opendiv_close"></span></h3>'+
		                          '<div class="hy_Opendiv_content"><div class="Open_state_error"><span></span><p>'+s_content+'</p></div></div>'+
		                                  '</div>';		           
						}else{
							 Open_Alert.show.Add_html='<div id="hy_full_window" style="height:'+$(document).height()+'px;width:'+$(window).width()+'px;"></div>'+
						          '<div id="hy_Opendiv" style="width:'+s_width+'px;left:'+_left+'px;"><h3 style="display:none"><span id="hy_Opendiv_close"></span></h3>'+
		                          '<div class="hy_Opendiv_content hy_Opendiv_loading"><div class="Open_state_load"><p><span></span>'+s_content+'</p></div></div>'+
		                                  '</div>';		           
							
						}
				
						$('body').append(Open_Alert.show.Add_html);
						
						$('#hy_Opendiv').css('top',$(document).scrollTop()+(($(window).height()-$('#hy_Opendiv').height())/2)+'px')
						
						 if(s_time>0){
						   _time=setTimeout(function(){$('#hy_Opendiv_close').click()},s_time);
						}
							$('#hy_Opendiv_close').click(function(){
										 Open_Alert.show.Call="yes";
										 $('#hy_full_window,#hy_Opendiv').remove();
										  if( typeof callback =="function") {callback(callback);}
										   
										  clearTimeout(_time);
							})
						
				}//成功失败弹窗
				
}