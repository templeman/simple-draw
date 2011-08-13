function WebApp(element) {
   $('input#lineColor').keyup(function() {

      var newBg = $('input#lineColor').val();
      var regEx = /^([0-9a-f]{1,2}){3}$/i;

      if (regEx.test(newBg)) {
	 newBg = '#' + newBg;
	 context.strokeStyle = newBg;
	 // currentColor = newBg;
	 console.log(context.strokeStyle);
      }
   });

   // return currentColor;
}

