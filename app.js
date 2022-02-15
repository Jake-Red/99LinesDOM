document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button')
    let btnText = document.createTextNode('Sing!')
    document.body.appendChild(button)
    button.appendChild(btnText)
    button.addEventListener('click', function () {

        let friends = ['Billy', 'Bollie', 'Bippy', 'Bosco', 'Burt']
        for (let i = 0; i < friends.length; i++) {

            let div = document.createElement('div')
            div.className = 'friend'
            let header = document.createElement('h3')
            let headerText = document.createTextNode(friends[i])
            div.appendChild(header)
            header.appendChild(headerText)
            document.body.appendChild(div)




            for (let code = 99; code > 0; code--) {
                if (code === 1) {
                    let p = document.createElement("p");
                    p.innerHTML = code + " line of code in the file, " + code + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file"
                    div.appendChild(p);
                } else {
                    let p = document.createElement("p");
                    p.innerHTML = code + " lines of code in the file, " + code + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (code - 1) + " lines of code in the file"
                    div.appendChild(p);

                }
            }
        }

    })



})



