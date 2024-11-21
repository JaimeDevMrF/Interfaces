document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');  
    const classesToToggle = ['body', 'header', 'footer', '.nombre_usuario_header', '.menu_perfil', '.nombre_usuario_menu', '.estado_usuario', '.buscador_menu', '.menu', 'a', '.inicio', '.inicio:hover', '.tutorias_inicio', '.eventoss', '.cursos', '.redes','.menu-button', '.menu-content', '.menu-button2', '.menu-content2', '.contenedor-email', 'p', '.email_mensaje', 'h1','.email_mensaje2','.logo', '.ayuda'];

    button.addEventListener('click', function() {
      
        classesToToggle.forEach(className => {
            const elements = document.querySelectorAll(className); 
            elements.forEach(element => {
                if (element) { 
                    element.classList.toggle('dark-mode');
                }
            });
        });



    });
});