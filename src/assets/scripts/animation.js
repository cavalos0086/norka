window.onload = function() {


    function textValue(value) {
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

        var options = Object.assign({}, commonOptions, textValue(0.93));
        var progressBar = new ProgressBar.Circle(id.toString(), options);

        return progressBar;
    }

    // var sketch = new ProgressBar.Circle('#sketch', Object.assign({}, commonOptions, textValue('0.93')));
    createProgressBar('#sketch', '0.93').animate(0.93);  // Number from 0.0 to 1.0


}
