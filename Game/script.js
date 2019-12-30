var score, activeplayer, roundsc, gameplay;

init();

document.querySelector('.btn1').addEventListener('click', function () {

    if (gameplay) {
        // random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // display result
        var dis = document.querySelector('.imgage');
        dis.style.display = 'block';
        dis.src = './Game/Dice-' + dice + '.png';

        //update score
        if (dice !== 1) {
            roundsc += dice;
            document.querySelector('.c-' + activeplayer).textContent = roundsc;
        }
        else {
            nextplayer();
        }
    }

});

document.querySelector('.btn2').addEventListener('click', function () {

    if (gameplay) {
        //hold button
        score[activeplayer] += roundsc;

        document.querySelector('#ot-' + activeplayer).textContent = score[activeplayer];

        if (score[activeplayer] >= 100) {
            document.querySelector('#levi-' + activeplayer).textContent = 'Winner !!!';
            document.querySelector('.imgage').style.display = 'none';

            document.querySelector('.fir-' + activeplayer).classList.add('Winner');
            document.querySelector('.fir-' + activeplayer).classList.remove('active');

            gameplay = false;

        } else { //next player
            nextplayer();
        }
    }


});

function nextplayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundsc = 0;

    document.querySelector('.fir-0').classList.toggle('active');
    document.querySelector('.fir-1').classList.toggle('active');

    // document.querySelector('.fir').classList.remove('active');
    // document.querySelector('.sec').classList.add('active');

    document.querySelector('.imgage').style.display = 'none';
}

document.querySelector('.btn').addEventListener('click', init);

function init() {
    score = [0, 0];
    roundsc = 0;
    activeplayer = 0;
    gameplay = true;
    //document.querySelector('.c-'+activeplayer).textContent=dice;
    document.querySelector('.imgage').style.display = 'none';

    document.getElementById('ot-0').textContent = '0';
    document.getElementById('ot-1').textContent = '0';
    document.getElementById('to').textContent = '0';
    document.getElementById('too').textContent = '0';
    document.getElementById('levi-0').textContent = 'Player-1';
    document.getElementById('levi-1').textContent = 'Player-2';

    document.querySelector('.fir-0').classList.remove('Winner');
    document.querySelector('.fir-1').classList.remove('Winner');

    document.querySelector('.fir-0').classList.remove('active');
    document.querySelector('.fir-1').classList.remove('active');

    document.querySelector('.fir-0').classList.add('active');

}