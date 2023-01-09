let data = {
    b1: null,
    b2: null,
    b4: null
}

function onClick(event) {
    console.log(data)
    console.log(`clicked ${event.target.id}`)
    id_ = event.target.id
    bpm = document.getElementById('bpm').value;
    switch (id_) {
        case 'b1':            
            toggleButton(id_, (60/bpm) * 1000)
            break;
        case 'b2':            
            toggleButton(id_, (60/bpm) * 2000)
            break;
        case 'b4':            
            toggleButton(id_, (60/bpm) * 4000)
            break;    
        default:
            break;
    }
}

function toggleButton(id, x) {
    console.log(`toggling ${id}`)
    const state = data[id];
    if (state) {  // active
        console.log(`clearing ${id}`)
        clearInterval(data[id])
        data[id] = NaN
    } else {
        data[id] = setInterval(changeBG, x, id)
    }
}

function changeBG(id) {

    col_id1 = id + "_1"
    col_id2 = id + "_2"

    color1 = document.getElementById(col_id1).value
    color2 = document.getElementById(col_id2).value    
    // console.log(color1)

    elem = document.getElementById(id);
    console.log(`changing ${id}`)
    if (elem.name == color1) {
        elem.style.backgroundColor = color2;
        elem.name = color2;
    } else {
        elem.style.backgroundColor = color1
        elem.name = color1;
    }
}