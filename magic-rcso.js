jQuery(document).ready(function ($){
    $(".module.calendar").find('tr').each(function(){
        var line = $(this);
        console.log(line);
        $(line).find('td').each(function(){
           if ($(this).text() *= 'Entrainement') {
            line.addClass('entrainement');
           } else if ($(this).text() *= 'Match') {
            line.addClass('match');
           } else if ($(this).text() *= 'Relache') {
            line.addClass('relache');
           }

        });
    });
});