const sinais = [
    {
        id: 1,
        nome: "Sinal de Igual (=)",
        preco: 0.00,
        descricao: "Nunca utilizado em uma P3 de cálculo.",
        imagem: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAM1BMVEX///8AAACVlZWLi4s8PDy9vb38/PwzMzOPj4/4+Pi5ubn5+fmBgYHT09OZmZnPz8+Hh4di4xtkAAABSElEQVR4nO3cSVLDQBBEUWGbNkZM9z8teAPKNYssiPcu4IqvIULulrYNAAAAAAAAAOB/WO0BZtlv7QmOVvvo7NvTaY5t37tB9u1hjuuAa7fd4OAy4F7WbnBw6deQQw455JBDDjnkkEMOOY7kCHIEOYIcQY4gR5AjyBHkCHIEOYIcQY4gR5Aj9HOsSTmu9TXatV7OT0OcT+0a/Q0maZXn+fr5OUW+YrQ3I619To76yQEAAMBfMushsj3MGvVQXR+lPsBRfZi1Xue8/fXWv3LXc/v/8x/Xfo7tsR3hR3+dRQ455JBDDjnkkEMOOeQIcgQ5ghxBjiBHkCPIEeQIcgQ5ghxBjiBHkCPIEfo51jZojfZy/2Bo2aCzo/+90rW9f5ynONVX8NuHI/V3It3f/iqP8O02ZxQAAAAAAAAAAAAAAAAAAAAAAIBf+AS/qi2E+G0idgAAAABJRU5ErkJggg==" 
    },
    {
        id: 2,
        nome: "Sinal de Mais (+)",
        preco: 15.50,
        descricao: "Bom para encher linguiça na prova.",
        imagem: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEX///8AAACGhoaXl5f09PTAwMCgoKB3d3c+Pj4lJSUTExPh4eFERETJyclVVVXS0tIeHh58fHyMjIzq6upQUFC2traKioqwsLCRJdLHAAADyUlEQVR4nO2d23biMAxFYxIShxCg3Pr/f9pFmQ6XOsQWBR8pZ78P1V4DSHGt06J4F9W8bny7cIvWN/W8etvPfRNduXS3LMsud1F/SL9yIVZ97sL+iLUP+p3w69zF/QFVM+h3olH/gew3DwWd2yh/q5YjfifK3EU+wyxC0LlZ7jLlfEQJOveRu1Ap20hB57a5S5XxGS3o3GfuYiV0CYLOaRxwhvt8CJ+73HTqJEHn6twFp7JLFHRul7vkRB7PaiGa3CWnUSULOqdrQo1vhRd0NcVWYNjmLjqFXiDonKanjLiJ+x5NE/heZLjPXXY86c3wjJ6WmDaSXtAznB6EhofchUcTc3YRQs95hqTfn9DT849Cw2PuwqORtUNNDZGGNMSHhjTEh4Y0xIeGNMSHhjTEh4Y0xIeGNMSHhjTEh4Y0xIeGNMSHhjTEh4Y0xIeGNMSHhjTEh4Y0xIeGNMSHhjTEh4Y0xEfDvsWuO5Tb40zG8T4xKZal+Cduy0OXsPnWz2T7g7nZz6K2UKutZIcXhXY7thG+S9+jR6N5+G5NjXrAZDiAoksL68DFDyyjpuTJoBPMu5GuRWISWNaMzXTSwq/sKemghcvdCCjdTUbmZm9almOBztWEU41F/+lkc5lv9A8yYf7HFq1zV/IyfsJDrYwyv/GWv2bOnL9swhG4Nlh9z9u5q3gpndFmf+HU9qWHKjpYyrLjNFEV89wlvJi5kYOLYWqzE9sPjeGB5owXJRxqoi0WuUt4MYsidwUvZwL/h/Y/h/a/S+33Q/szjf251P6zhf3nwwk849s/p7F/1jaB81LDY42fzO8tzE5ulz+ZYf/3h0a/bG5uuVls+3f55+bvYkzgPs0E7kRN4F7bBO4mFvbvlxYTuCNc2L/n/Y3xu/r/3q229y2eRsPOzHPY33uiIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGxv28hXdYMrkVCIt2bLsdfGoSD0PCQu/BopIEww6ufaOyEhu/cPnsS2f7iPnfZCcgaop52KM3ZSNgAzY9kl7jNXXQSkp6vp9+fkOTcRW1h45C+19+MvygU6S1RUTM8kxpA8TDqAZO0GBE//oJwpA2nekbSK1LybgbyZNCJb4q6WuEVsdlTgUwnLcRN4Jom7l/EnGfoObsI0o8FFm5UPVGEqB7Pb42yaTTIerj3+/X4P1dBHw7yXal/g17RlffJSstS5RjziGpeN75duEXrm3r+vo/fFy2qYX5k/RkGAAAAAElFTkSuQmCC"
    },
    {
        id: 3,
        nome: "Sinal de Menos (-)",
        preco: 12.00,
        descricao: "Útil para chutar os mesmos valores só que com sinal trocado.",
        imagem: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8AAABYWFi+vr6np6fW1tb6+vp9fX3ExMRLS0vj4+MlJSWxsbEiIiImJia/v7/qB6xvAAAArElEQVR4nO3XSw7CMAwFwEL6p6X3vy0skVg5GyvpzAneU5TEHgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgH9zWZ6tWMocL7i+Hi0512jBMTty2BgrOGXnrTCFGm7ZcStskYJ7dtoqe6BhyQ5bpQQaHtlhqxzO8Ef/97D/t/QG/2H/M813Lj2zI4e8w3NpY7vFVbFbAAAAAAAAAAAAAAAAAAAAAAA"
    },
    {
        id: 4,
        nome: "Sinal de Divisão (/)",
        preco: 42.00,
        descricao: "Faz você sentir que está perto da resposta certa.",
        imagem: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD8/PyioqL6+vorKyvg4OD29va+vr7b29t6enrt7e26urrR0dHp6enl5eWXl5chISExMTGysrJ0dHSLi4tBQUHKyspra2tmZmaqqqpGRkZZWVmPj485OTkLCwtRUVEdHR14eHiDg4MWFhZMTExXV1cDKFsrAAAEoElEQVR4nO2dCVJiQRBEaRZxQwF3RBa3+x/RYYZQUX5nR9SfKF/ZeYLMCILOzsqu3+lAcDS+my6fB/PekTeT/4PZIL1jcdr1ptM6RtdpB4sDb0Yt4yJ9w4U3p1Yx/i4wpZ43qxZxuE9gSofevFrD2X6BKQ29mbWFVZPCS29mLeG0SWBKMQ7G4XOzwitvcq3gqVlgWkQ4+EcZgSmde9NrAddZhTfe9OyYZQUGOPWHeYFp7E3QjDuhcOZN0IoGu/YBunHrTpVC+n/pgxJIPw8PlMD05E3RiBepEH7R33Ov/4Jbb4o2nCylwhNvjjYcS4Hw4z7vuDeYwv9IB1Ih3HXvTdd2AI8wGsOnD8BjKOW48Z5bOu50703Rhv5EKoSnbFdSIDxk04573ffmaMO9VAi/+Irw6Q/m3hRtKHDcZ94cbbiVAuERonbc194UjdCOe+RN0YbwjvtcCkzwo3AuBcIrGNpxr7wpGqF/o/D8UIdPD94UbTiSAtfeFI3QGTc8fNKOm55xS4F0x63DJ7jjvpECF94Ubehqxw0Pn7TjPvamaIMOn5bwjLuxYPmOU2+KNmQKllvAw6ehDp/gtZLwjluHTxNvikbkC5YbwB13TwqEh0+qYJnwrZI67qVn3P3wjruOe9ME7rj1uBfuuHXBEu64C8In+FH4KAWGL1jSm+q1YJkevSnaUAuWv8Bxv3hTtKG/lgrhjjv3uvcf4jtueKskfPhUC5Z4xx2+YKnHvfDwqRYs8Y5bH4UJfivUBUt4+KTHva/eFG3o6t9oLVj+bMQf9+qMG+649bg3fsES7rjDh0/hC5YFr3vhR6Hcp0NfN6Md9zM849ZvDeCOO/y4t6D5FL5gGX7cS3fcC6kQHj6FL1jGd9z1dS894y4oWMIddy1YpkH4cS98n054xx3/KLyUAuHj3oKCpTdFI3T4BHfc4V/3FuzTgYdP4R23HvfCC5a5z6dsAXfcumAJH/fGL1jq8Ak+7tUFyztvijbEd9y1YElf5hzfcetxL9xxxy9YvkqB8HFv+H068QuW9XVvGnhTNCL8k6ZasExLuOPW4VP4giV93Bu+YKnHvfCCZcEyZ3j4pAuW8HFv+PCpoGAJX+Yc3nHroxDuuLvhC5bhX/dWx/0Lxr3wjHtYHTe9YKkddy1Y/nCEd9wF41548yl8wTJ8+FTHvfhxry5Y0j+fUvfppJU3RRsKPp8Cd9zhX/cWOG54qyR8wVKPe+GOu2CZMzx80gXL8ONe+FuDzloqhC9zDu+4CwqW3hSN0B8shIdP4V/39vVvFL5PR4dPcMddC5b48Cl8wVI77vjjXrjj1vt04OPegs+nwMOnOu7Fv+7Vy5zhjjv8uDd+wTK8445fsJxKhXDHHX6fTvyCpc644QVLnR/SM249DYU7bt1Uh+/T0bWSKXzcqy++cMetPTfccXf0cQ9vPnVkhAgPnzbIu256wXKD/H8p3HH/RfY8hL/u3SITstE/n7JFJmWDFyzf0RhhrLyZtYXGGAoePn1Cg3GD3wp3sPfUh6drX7CnggF/LfINB1/itmmEo34X3dmnr1VMevApTANG4/lkuVy/jkeUO+8btrQ9/pCEhsoAAAAASUVORK5CYII="
    }
];

let contagemCarrinho = 0;
const elementoContador = document.getElementById('cart-count');

function alterarCarrinho(valor) {
    contagemCarrinho += valor;
    if (contagemCarrinho < 0) contagemCarrinho = 0;
    elementoContador.innerText = contagemCarrinho;
}

const container = document.getElementById('product-container');

function renderizar() {
    sinais.forEach(sinal => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${sinal.imagem}" alt="${sinal.nome}">
            <h3>${sinal.nome}</h3>
            <p>${sinal.descricao}</p>
            <p class="price">R$ ${sinal.preco.toFixed(2)}</p>
            <button onclick="alterarCarrinho(1)">Adicionar</button>
            <button onclick="alterarCarrinho(-1)">Remover</button>
        `;
        container.appendChild(card);
    });
}

renderizar();