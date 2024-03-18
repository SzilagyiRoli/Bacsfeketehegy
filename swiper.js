const balra = document.getElementById('balra');
const jobbra = document.getElementById('jobbra');

var oldalak_szama = document.getElementById('wrap').childElementCount;
var szam = 0;
var tolasmennyiseg = 0;

const tomb = [document.getElementById('elso'), document.getElementById('masodik')];


function checkDisplay(szam)
{
    if(szam+1 == oldalak_szama)
    {
        jobbra.style.display ='none';
    }
    else
    {
        jobbra.style.display ='block';
    }

    if(szam == 0)
    {
        balra.style.display ='none';
    }
    else
    {
        balra.style.display ='blcok';
    }
}

checkDisplay(szam);

jobbra.addEventListener('click', () =>
{
    if(szam < oldalak_szama-1)
    {
        balra.style.display = 'block';
        szam++;
        checkDisplay(szam);
        tolasmennyiseg = szam * 100;
        for(var i = 0 ; i<oldalak_szama ; i++)
        {
            tomb[i].style.transform = `TranslateX(-${tolasmennyiseg}%)`
        }
    }
    else
    {
        jobbra.style.display = 'none';

    }


})

balra.addEventListener('click', () =>
{

    if(szam != 0)
    {
        jobbra.style.display = 'block';
        szam--;
        checkDisplay(szam);
        tolasmennyiseg = tolasmennyiseg-100;
        for(var i = 0 ; i<oldalak_szama ; i++)
        {    
            tomb[i].style.transform = `TranslateX(-${tolasmennyiseg}%)`
        }
    }
    else
    {
        balra.style.display = 'none';
    }

})