//Paste the following into the console, or get an extension that executes Javascript after load, e.g. Chrome has Custom Javascript for Websites

if(window.location.pathname.length>0){
$("body").replaceWith($("#content > div.main > div.section.sent > div.layout.sort > ol").height("auto"));
$("html > ol > li").each(function(){var ar = $(this).html().split(/<br>/); $(this).html("<div>"+ar[0]+"<p class=\"answer\" style=\"color:white\">"+ar[1]+"<br><br></p>")});
}