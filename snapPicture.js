<script>

  //-- Imagenes --// 
  function snapPicture () { 
      clearCacheCamera(); 
       
      navigator.camera.getPicture (onSuccess, onFail,  
      {  
          quality: 60, 
          destinationType : navigator.camera.DestinationType.FILE_URI, 
          sourceType: navigator.camera.PictureSourceType.CAMERA, 
          mediaType: Camera.MediaType.Photo, 
          encodingType: navigator.camera.EncodingType.JPEG, 
          targetWidth: 600, 
          targetHeight: 600, 
          saveToPhotoAlbum: true        
      }); 
  
      function onSuccess (imageData) { 
          var idActFoto = document.querySelector("#idActividad").value; 
          addFotos(imageData,idActFoto); 
           
          $("#mensajeAlerta").css( "display", "none" ); 
          document.getElementById("mostrarImagenesActividad").innerHTML += 
          '<img width="40%" style=padding-right:3px;padding-top:3px; src="'+imageData+'">'; 
      } 
       
      function onFail (message) { 
          clearCacheCamera(); 
          //alert ('Info: ' + message); 
      } 
  } 
  
</script>
