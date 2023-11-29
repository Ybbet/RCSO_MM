Module.register("mmm-rcso", {
    getDom: function(){
        let wrapper = document.createElement("div");
        console.log(document);
        let module_calendar = document.getElementsByClassName('calendar');
        console.log(module_calendar); 
        let t = document.createElement('div');
        t.className = 'magic_mirror';
        dom.appendChild(t);
        return wrapper;
    },
    getScripts: function() {
        return [
            'https://code.jquery.com/jquery-3.7.1.min.js',  // this file will be loaded from the jquery servers.
            'magic-rcso.js',
        ]
    },
    loaded: function(callback) {
        this.finishLoading();
        Log.log(this.name + ' is loaded!');
        return true;
      },
    
});