!function(e){e.fn.hoverTimeout=function(n,i,a,t){return this.each(function(){var o=null,c=e(this);c.hover(function(){clearTimeout(o),o=setTimeout(function(){i.call(c)},n)},function(){clearTimeout(o),o=setTimeout(function(){t.call(c)},a)})})}}(jQuery),function(e){e.fn.iklanaccordion=function(n){return n=jQuery.extend({active:1,hovertimeout:300,sUpSpeed:500,sDownSpeed:500,sUpEasing:null,sDownEasing:null},n),this.each(function(){var i=e(this),a=i.children("div[data-header]"),t=n.active-1;a.each(function(){e(this).hide().before('<h2 class="iklan-header">'+e(this).data("header")+"</h2>")}),i.children("div:eq("+t+")").show().prev().css("margin-top","-47px").addClass("active"),i.find(".iklan-header").hoverTimeout(n.hovertimeout,function(){i.children("h2").removeClass("active").animate({marginTop:0}),a.slideUp(n.sUpSpeed,n.sUpEasing).animate({marginTop:-47}),e(this).addClass("active").next().slideDown(n.sDownSpeed,n.sDownEasing)})})}}(jQuery),$(function(){$(".arlina-iklan-sidebar").iklanaccordion(),$(".arlina-iklan-post-footer").iklanaccordion()});
