"use strict"
let mat;

window.onload=function () {
    mat=new Array(26);
    for(let i=0; i<mat.length;i++)
        mat[i]=new Array(2)

    for(let i=0;i<mat.length;i++)
    {
        let c = String.fromCharCode(i+65);
        mat[i][0]=c;
        mat[i][1]="";
    }

    for(let i=0;i<mat.length;i++)
    {
        let pos;
        let c;
        do {
            pos = Math.floor(26*Math.random());
        }while (mat[pos][1] != "")
        c=String.fromCharCode(i+65);
        mat[pos][1]=c;
    }

    for(let i=0;i<mat.length;i++)
        console.log(mat[i][0] + "-" + mat[i][1]);
}

function Scramler() {
    let _nome = document.getElementById("txtNome");
    let _scramler = document.getElementById("txtScramler");
    _scramler.value="";
    let nome=_nome.value;
    for(let i=0;i<nome.length;i++)
    {
        let x=nome[i].toUpperCase();
        let pos = ricercaSentinella(mat, x);
        _scramler.value+=mat[pos][1];
    }
}

function DeScramler() {
    let _nome = document.getElementById("txtNome");
    let _scramler = document.getElementById("txtScramler");


    _scramler.value="";
    let nome=_nome.value;
    for(let i=0;i<nome.length;i++)
    {
        let x=nome[i].toUpperCase();
        let pos = ricercaSentinella(mat, x);
        _scramler.value+=mat[pos][0];
    }
}

function ricercaSentinella(mat, x) {
    let i=0;
    let pos = -1;
    do {
        if(x==mat[i][0])
        {
            pos=i;
        }
        else
        {
            i++;
        }
    }while (i<mat.length && pos==-1);
    console.log(pos);
    return pos;
}