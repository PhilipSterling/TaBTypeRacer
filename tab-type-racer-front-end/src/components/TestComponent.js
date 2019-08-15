import React from 'react';

export default class TestComponent extends React.Component {
    state={data: null}
    componentDidMount(){
        
        fetch('Dracula.txt')
        .then(response => response.text())
        .then(text => {
            //text = text.replace(/\n/ig, '');
            let coolArray = text.split(/\n\n/ig)
            for(let i = 0;i < coolArray.length; i++){
                coolArray[i] = coolArray[i].replace(/\n/ig, ' ');
            }
            coolArray = coolArray.filter(coolParagraph => {
                if(coolParagraph.length > 100 && coolParagraph.length < 350){
                    return coolParagraph
                }
            })
            for(let i = 0;i < coolArray.length; i++){
                coolArray[i] = coolArray[i].replace(/_/ig, '');
                if(coolArray[i].charAt(0) === " "){
                    coolArray[i] = coolArray[i].substr(1)
                }
            }
            console.log(coolArray)
            for(let i = 0;i < coolArray.length; i++){
                fetch("http://localhost:7777/challenges",{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        paragraph: coolArray[i],
                        category: "Dracula"
                    })
                })
            }
        })


        // fetch('http://localhost:7777/profile', {
        //     method: 'GET',
        //     headers: {
        //       Authorization: `Bearer hao`
        //     }
        //   })
        //   .then(res => res.json())
        //   .then(data => console.log(data))

    }

    render(){
        console.log(this.state.data)
        return   <h1>HI</h1>;
    }
}