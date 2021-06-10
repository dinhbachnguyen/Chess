currentPlayer = 1;
n = 0;
score1 = 0;
score2 = 0;


function reloadGame() {
    clearGame();
    setGame();
}

function clearGame() {
    for (var i = 1; i < 9; i++) {
        for (var j = 1; j < 9; j++) {
            var num = 0;
            num = 10 * i + j;
            var id = num.toString();
            document.getElementById(id).classList.remove('tour-blanc', 'cavalier-blanc', 'fou-blanc', 'roi-blanc', 'reine-blanc', 'pion-blanc', 'tour-noir', 'cavalier-noir', 'fou-noir', 'roi-noir', 'reine-noir', 'pion-noir');
        }
    }
}

function setGame() {

    document.getElementById(11).classList.add('tour-blanc');
    document.getElementById(12).classList.add('cavalier-blanc');
    document.getElementById(13).classList.add('fou-blanc');
    document.getElementById(14).classList.add('roi-blanc');
    document.getElementById(15).classList.add('reine-blanc');
    document.getElementById(16).classList.add('fou-blanc');
    document.getElementById(17).classList.add('cavalier-blanc');
    document.getElementById(18).classList.add('tour-blanc');

    document.getElementById(21).classList.add('pion-blanc');
    document.getElementById(22).classList.add('pion-blanc');
    document.getElementById(23).classList.add('pion-blanc');
    document.getElementById(24).classList.add('pion-blanc');
    document.getElementById(25).classList.add('pion-blanc');
    document.getElementById(26).classList.add('pion-blanc');
    document.getElementById(27).classList.add('pion-blanc');
    document.getElementById(28).classList.add('pion-blanc');

    document.getElementById(81).classList.add('tour-noir');
    document.getElementById(82).classList.add('cavalier-noir');
    document.getElementById(83).classList.add('fou-noir');
    document.getElementById(84).classList.add('roi-noir');
    document.getElementById(85).classList.add('reine-noir');
    document.getElementById(86).classList.add('fou-noir');
    document.getElementById(87).classList.add('cavalier-noir');
    document.getElementById(88).classList.add('tour-noir');

    document.getElementById(71).classList.add('pion-noir');
    document.getElementById(72).classList.add('pion-noir');
    document.getElementById(73).classList.add('pion-noir');
    document.getElementById(74).classList.add('pion-noir');
    document.getElementById(75).classList.add('pion-noir');
    document.getElementById(76).classList.add('pion-noir');
    document.getElementById(77).classList.add('pion-noir');
    document.getElementById(78).classList.add('pion-noir');

}

function clearcolor() {
    for (var i = 1; i < 9; i++) {
        for (var j = 1; j < 9; j++) {
            var num = 0;
            num = 10 * i + j;
            var id = num.toString();
            document.getElementById(id).classList.remove('bleu', 'rouge');
            document.getElementById(id).classList.add('case');

        }
    }
}

function selectionne(thisCase) {
    clearcolor();
    if (document.getElementById(thisCase.id).classList.contains('tour-blanc') ||
        document.getElementById(thisCase.id).classList.contains('cavalier-blanc') ||
        document.getElementById(thisCase.id).classList.contains('fou-blanc') ||
        document.getElementById(thisCase.id).classList.contains('reine-blanc') ||
        document.getElementById(thisCase.id).classList.contains('roi-blanc') ||
        document.getElementById(thisCase.id).classList.contains('pion-blanc')) {
        document.getElementById(thisCase.id).classList.remove("case");
        document.getElementById(thisCase.id).classList.add("bleu");
        currentPlayer = 2;
    } else

    if (document.getElementById(thisCase.id).classList.contains('tour-noir') ||
        document.getElementById(thisCase.id).classList.contains('cavalier-noir') ||
        document.getElementById(thisCase.id).classList.contains('fou-noir') ||
        document.getElementById(thisCase.id).classList.contains('reine-noir') ||
        document.getElementById(thisCase.id).classList.contains('roi-noir') ||
        document.getElementById(thisCase.id).classList.contains('pion-noir')) {
        document.getElementById(thisCase.id).classList.remove("case");
        document.getElementById(thisCase.id).classList.add("rouge");
        currentPlayer = 1;

    }
}

function removenoir(thisCaseid) {
    document.getElementById(thisCaseid).classList.remove('pion-noir');
    document.getElementById(thisCaseid).classList.remove('tour-noir');
    document.getElementById(thisCaseid).classList.remove('cavalier-noir');
    document.getElementById(thisCaseid).classList.remove('fou-noir');
    document.getElementById(thisCaseid).classList.remove('reine-noir');
    document.getElementById(thisCaseid).classList.remove('roi-noir')
}

function removeblanc(thisCaseid) {
    document.getElementById(thisCaseid).classList.remove('pion-blanc');
    document.getElementById(thisCaseid).classList.remove('tour-blanc');
    document.getElementById(thisCaseid).classList.remove('cavalier-blanc');
    document.getElementById(thisCaseid).classList.remove('fou-blanc');
    document.getElementById(thisCaseid).classList.remove('reine-blanc');
    document.getElementById(thisCaseid).classList.remove('roi-blanc');

}


function mouvement(thisCase) {

    if (document.getElementById(thisCase.id).classList.contains('pion-blanc')) {

        addpionblanc();

        n = thisCase.id;

    } else

    if (document.getElementById(thisCase.id).classList.contains('pionblancadd')) {
        document.getElementById(n).classList.remove('pion-blanc');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movepionblanc();
        removenoir(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('pion-blanc');
        document.getElementById("turn").innerHTML = 1;
    } else

    if (document.getElementById(thisCase.id).classList.contains('tour-blanc')) {

        addtourblanc();
        n = thisCase.id;

    } else

    if (document.getElementById(thisCase.id).classList.contains('tourblancadd')) {
        document.getElementById(n).classList.remove('tour-blanc');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movetourblanc();
        removenoir(thisCase.id);
        document.getElementById(thisCase.id).classList.add('tour-blanc');
        document.getElementById("turn").innerHTML = 1;
    } else

    if (document.getElementById(thisCase.id).classList.contains('cavalier-blanc')) {
        addcavalierblanc();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('cavalierblancadd')) {
        document.getElementById(n).classList.remove('cavalier-blanc');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movecavalierblanc();
        removenoir(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('cavalier-blanc');
        document.getElementById("turn").innerHTML = 1;
    } else

    if (document.getElementById(thisCase.id).classList.contains('fou-blanc')) {
        addfoublanc();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('foublancadd')) {
        document.getElementById(n).classList.remove('fou-blanc');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movefoublanc();
        removenoir(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('fou-blanc');
        document.getElementById("turn").innerHTML = 1;
    } else

    if (document.getElementById(thisCase.id).classList.contains('reine-blanc')) {
        addreineblanc();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('reineblancadd')) {
        document.getElementById(n).classList.remove('reine-blanc');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movereineblanc();
        removenoir(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('reine-blanc');
        document.getElementById("turn").innerHTML = 1;
    } else

    if (document.getElementById(thisCase.id).classList.contains('roi-blanc')) {
        addroiblanc();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('roiblancadd')) {
        document.getElementById(n).classList.remove('roi-blanc');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        moveroiblanc();
        removenoir(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('roi-blanc');
        document.getElementById("turn").innerHTML = 1;
    } else

    if (document.getElementById(thisCase.id).classList.contains('pion-noir')) {
        addpionnoir();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('pionnoiradd')) {
        document.getElementById(n).classList.remove('pion-noir');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movepionnoir();
        removeblanc(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('pion-noir');
        document.getElementById("turn").innerHTML = 2;
    } else

    if (document.getElementById(thisCase.id).classList.contains('tour-noir')) {
        addtournoir();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('tournoiradd')) {
        document.getElementById(n).classList.remove('tour-noir');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movetournoir();
        removeblanc(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('tour-noir');
        document.getElementById("turn").innerHTML = 2;
    } else

    if (document.getElementById(thisCase.id).classList.contains('cavalier-noir')) {
        addcavaliernoir();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('cavaliernoiradd')) {
        document.getElementById(n).classList.remove('cavalier-noir');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movecavaliernoir();
        removeblanc(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('cavalier-noir');
        document.getElementById("turn").innerHTML = 2;
    } else

    if (document.getElementById(thisCase.id).classList.contains('fou-noir')) {
        addfounoir();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('founoiradd')) {
        document.getElementById(n).classList.remove('fou-noir');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movefounoir();
        removeblanc(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('fou-noir');
        document.getElementById("turn").innerHTML = 2;
    } else

    if (document.getElementById(thisCase.id).classList.contains('reine-noir')) {
        addreinenoir();
        n = thisCase.id;

    } else

    if (document.getElementById(thisCase.id).classList.contains('reinenoiradd')) {
        document.getElementById(n).classList.remove('reine-noir');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        movereinenoir();
        removeblanc(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('reine-noir');
        document.getElementById("turn").innerHTML = 2;
    } else

    if (document.getElementById(thisCase.id).classList.contains('roi-noir')) {
        addroinoir();
        n = thisCase.id;
    } else

    if (document.getElementById(thisCase.id).classList.contains('roinoiradd')) {
        document.getElementById(n).classList.remove('roi-noir');
        document.getElementById(n).classList.remove('bleu');
        document.getElementById(n).classList.add('case');
        moveroinoir();
        removeblanc(thisCase.id);
        document.getElementById(thisCase.id).classList.add('case');
        document.getElementById(thisCase.id).classList.add('roi-noir');
        document.getElementById("turn").innerHTML = 2;

    }


    if (conditionvictoire1() === 0) {
        alert("Player 1 Wins");
        score1++;
        document.getElementById("score1").innerHTML = score1;
    }
    if (conditionvictoire2() === 0) {
        alert("Player 2 Wins");
        score2++;
        document.getElementById("score2").innerHTML = score2;
    }
}

function conditionvictoire1() {
    var n = 0;
    for (var i = 1; i < 9; i++) {
        for (var j = 1; j < 9; j++) {
            var num = 0;
            num = 10 * i + j;
            var id = num.toString();
            if (document.getElementById(id).classList.contains('roi-noir')) {
                n = n + 1;
            }
        }
    }
    return n;

}

function conditionvictoire2() {
    var n = 0;
    for (var i = 1; i < 9; i++) {
        for (var j = 1; j < 9; j++) {
            var num = 0;
            num = 10 * i + j;
            var id = num.toString();
            if (document.getElementById(id).classList.contains('roi-blanc')) {
                n = n + 1;
            }
        }
    }
    return n;

}