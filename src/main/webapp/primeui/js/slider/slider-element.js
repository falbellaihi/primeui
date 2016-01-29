if(!xtag.tags['p-slider']) {
 
    xtag.register('p-slider', {

        accessors: {
            animate:{
                attribute:{
                    boolean:true
                }
            },
            distance:{
                attribute:{}
            },
            max:{
                attribute:{}
            },
            min:{
                attribute:{}
            },
            orientation:{
                attribute:{}
            },
            range:{
                attribute:{
                    booelan:true
                }
            },
            step:{
                attribute:{}
            },
            value:{
                attribute:{}
            },
            values:{
                attribute:{}
            },
            onchange:{
                attribute:{}
            },
            onslide:{
                attribute:{}
            },
            onstart:{
                attribute:{}
            },
            onstop:{
                attribute:{}
            }
        },

        lifecycle: {
            created: function() {
                var $this = this;
                this.xtag.container = $(this).append('<div></div>').children('div');

                var myValues = [],
                isRange = $(this).attr('range') !== undefined;

                if(isRange) {
                    var values = this.values.split(',');
                    for (var i = 0; i <=1; i++) {
                        myValues[i] = parseInt(values[i]);
                    };
                }

                this.xtag.container.slider({
                    animate: this.animate,
                    distance: this.distance ? parseInt(this.distance) : 0,
                    max: this.max ? parseInt(this.max) : 100,
                    min: this.min ? parseInt(this.min) : 0,
                    orientation: this.orientation || 'horizontal',
                    range: this.range,
                    step: this.step ? parseInt(this.step) : 1,
                    value: this.value ? parseInt(this.value) : 0,
                    values: myValues,
                    change: this.onchange ? function(event, value){;PUI.executeFunctionByName($this.onchange, event, value);} : null,
                    slide: this.onslide ? function(event, value){PUI.executeFunctionByName($this.onslide, event, value);} : null,
                    start: this.onstart ? function(event, value){PUI.executeFunctionByName($this.onstart, event, value);} : null,
                    stop: this.onstop ? function(event, value){PUI.executeFunctionByName($this.onstop, event, value);} : null
                });
            }
        },

        methods: {
            disable: function() {
                this.xtag.container.slider('disable');
            },
            enable: function() {
                this.xtag.container.slider('enable');
            },
            destroy: function() {
                this.xtag.container.slider('destroy');
            }
        }
        
    });
    
}