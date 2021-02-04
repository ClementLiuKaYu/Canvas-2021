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
$('input[id="line-size"]').on('mousemove',(e) => {
    $('.ind-box').css('height',$('input[id="line-size"]').val())
    $('.ind-box').css('width',$('input[id="line-size"]').val())
    $('.cursor').css('height',$('input[id="line-size"]').val())
    $('.cursor').css('width',$('input[id="line-size"]').val())
})

$('canvas').on('mouseenter',(e) => {
    if(currentDropDown != "text")
    $('.cursor').css('display','block')
})

$('canvas').on('mouseleave',(e) => {
    $('.cursor').css('display','none')
    $(".canvas").css("cursor","none");
})

$('canvas').on('mousemove',(e) => {
    if(currentDropDown == "text"){
        $(".canvas").css("cursor","text");
    }else{
        $('.cursor').css('left', e.clientX - $('input[id="line-size"]').val()/2 +'px')
        $('.cursor').css('top', e.clientY - $('input[id="line-size"]').val()/2 + 'px')
    }
})