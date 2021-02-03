let fillColor = '#42445a'
let lineColor = '#42445a'
contextDraft.lineJoin ="round"
contextReal.lineJoin ="round"
contextDraft.lineCap ="round"
contextReal.lineCap ="round"
// pickr setup

const pickr1 = new Pickr({
    el: '.color-picker1',
    theme: 'nano',

    components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
            hex: false,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        },
    }
});
const pickr2 = new Pickr({
    el: '.color-picker2',
    theme: 'nano',
    components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
            hex: false,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        },
    }
});

pickr1.on('save',(...args) => {
    fillColor = args[0].toRGBA().toString(3)
})

pickr2.on('save',(...args) => {
    lineColor = args[0].toRGBA().toString(3)
})

// indicator box
$('input[id="line-size"]').on('change',(e) => {
    console.log($('input[id="line-size"]').val())
    $('.ind-box').css('height',$('input[id="line-size"]').val())
    $('.ind-box').css('width',$('input[id="line-size"]').val())
})