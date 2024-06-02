const chart = document.querySelector("#chart").getContext('2d')
// nova instância chart

new Chart(chart,{

    type:'line',
    data:{
        labels:['Jan','Fev','Mar', 'Abr','Maio','Junho','Ago','Set','Out','Nov'],
        datasets:[
            {
            label:'BTC',
            data:[29374,33537,49631,59095,57828,36684,35572,39974,48847,48116,61004],
            borderColor:'red',
            borderWidht:2
            },
            {
                label:'ETH',
                data:[31500,41000,88800,26000,46000,32698,5000,3000,18656,24832,36844],
                borderColor:'blue',
                borderWidht:2
                },
        ]
    },
    options:{
        responsive:true
    }


})