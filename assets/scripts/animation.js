window.onload = function() {
    function setTextValue(value) {
        return {
            text: {value: value.toString()}
        }
    }

    function createProgressBar(id, textvalue) {
        var commonOptions = {
            color: '#FFEA82',
            trailColor: '#f4f4f4',
            trailWidth: 1,
            duration: 1400,
            easing: 'bounce',
            strokeWidth: 0.5,
            from: {color: '#FFEA82', a:0},
            to: {color: '#ED6A5A', a:1},
            // Set default step function for all animate calls
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
            }
        }

        var options = Object.assign({}, commonOptions, setTextValue(textvalue));
        var progressBar = new ProgressBar.Circle(id.toString(), options);

        return progressBar;
    }

    var sketch = createProgressBar('#sketch', '0.93')
    sketch.animate(0.93);

    var omnigraffle = createProgressBar('#omnigraffle', '0.74')
    omnigraffle.animate(0.74);

    var invision = createProgressBar('#invision', '0.85');
    invision.animate(0.85);

    var principle = createProgressBar('#principle', '0.69');
    principle.animate(0.69);

}
