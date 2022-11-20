      //Inicio menu
      let arrow = document.querySelectorAll(".arrow");

      for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
      });
      }

      let sidebar = document.querySelector(".sidebar");
      let sidebarBtn = document.querySelector(".bx-menu");
      console.log(sidebarBtn);
      sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
      });

      //Fim menu

      //Inputs
      function onlynumber(evt) {
      var theEvent = evt || window.event;
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode( key );
      var regex = /^[0-9.]+$/;
      if( !regex.test(key) ) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
      }
      }
      //Fim inputs
      
      $(function () {
          //custom helper
      Handlebars.registerHelper("emailLink", function (mail, fn) {
          var str = "";
          if ($.trim(mail)) {
              str = '<a href="mailto:'+mail + '">'+mail+'</a>';
          }
          else if (mail = " "){
          str= "Not available";
          }
          return new Handlebars.SafeString(str);
      });
  
  $('#table tbody').html(template(alunos));
  $('#table tbody').html(template(professores));
  $('#table tbody').html(template(cursos));
  });

  window.Handlebars.registerHelper('select', function( value, options ){
   var $el = $('<select />').html( options.fn(this) );
  $el.find('[value="' + value + '"]').attr({'selected':'selected'});
  return $el.html();
  });
